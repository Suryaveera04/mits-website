import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Calendar, MapPin, Clock, Link2, Mail, Phone,
  Users, BookOpen, Building2, Star, ExternalLink,
  ChevronLeft, ChevronRight, Loader2, AlertCircle,
  Download, Award, Briefcase, CheckCircle2,
  Maximize2
} from "lucide-react";
import { fetchEventDetail, parseEventConductedTime, type CMSEvent } from "@/hooks/useDeptCMSData";

interface Props {
  eventId: number;
  onClose: () => void;
}

function isValidValue(val: unknown): boolean {
  if (val == null) return false;
  if (typeof val === "string") {
    const s = val.trim();
    return s !== "" && s !== "0000-00-00" && s.toLowerCase() !== "null" && s.toLowerCase() !== "n/a" && s.toLowerCase() !== "undefined";
  }
  if (typeof val === "number") return !isNaN(val) && val > 0;
  return true;
}

function fmt(dateStr?: string | null): string | null {
  if (!isValidValue(dateStr)) return null;
  const s = String(dateStr).trim();
  const t = parseEventConductedTime(s);
  if (!t || isNaN(t)) return null;
  try {
    return new Date(t).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return null;
  }
}

function fmtTime(t?: string | null): string | null {
  if (!isValidValue(t)) return null;
  try {
    const parts = String(t).split(":");
    const h = Number(parts[0]);
    const m = Number(parts[1]);
    if (isNaN(h) || isNaN(m)) return String(t);
    const ampm = h >= 12 ? "PM" : "AM";
    return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${ampm}`;
  } catch {
    return String(t);
  }
}

const typeStyles: Record<string, { bg: string; border: string }> = {
  Conference: { bg: "bg-blue-50 text-blue-700", border: "border-blue-200" },
  Workshop:   { bg: "bg-emerald-50 text-emerald-700", border: "border-emerald-200" },
  Seminar:    { bg: "bg-violet-50 text-violet-700", border: "border-violet-200" },
  FDP:        { bg: "bg-orange-50 text-orange-700", border: "border-orange-200" },
  Hackathon:  { bg: "bg-pink-50 text-pink-700", border: "border-pink-200" },
  Symposium:  { bg: "bg-cyan-50 text-cyan-700", border: "border-cyan-200" },
  Webinar:    { bg: "bg-indigo-50 text-indigo-700", border: "border-indigo-200" },
  "Guest Lecture": { bg: "bg-amber-50 text-amber-700", border: "border-amber-200" },
  "Tech Talk": { bg: "bg-purple-50 text-purple-700", border: "border-purple-200" },
};

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5 bg-slate-50/90 rounded-xl p-3 border border-slate-200/70 hover:border-slate-300 transition-colors">
      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-3.5 h-3.5 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-xs font-semibold text-slate-800 mt-0.5 break-words leading-tight">{value}</p>
      </div>
    </div>
  );
}

function ModalContent({ eventId, onClose }: Props) {
  const [event, setEvent] = useState<CMSEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setHasError(false);
    setEvent(null);
    fetchEventDetail(eventId).then((ev) => {
      if (!cancelled) {
        if (ev) {
          setEvent(ev);
        } else {
          setHasError(true);
        }
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [eventId]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImg) {
          setLightboxImg(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [lightboxImg, onClose]);

  const typeKey = event?.event_type || event?.type || "";
  const typeStyle = typeStyles[typeKey] ?? { bg: "bg-slate-100 text-slate-700", border: "border-slate-200" };

  const dateRange = (() => {
    if (!event) return null;
    const evt = event as Record<string, unknown>;
    const from = fmt((evt?.fromDate ?? evt?.from_date ?? evt?.date) as string);
    const to = fmt((evt?.toDate ?? evt?.to_date) as string);
    if (!from && !to) return null;
    if (from && to && to !== from) return `${from} – ${to}`;
    return from || to;
  })();

  const timeRange = (() => {
    if (!event) return null;
    const evt = event as Record<string, unknown>;
    const from = fmtTime((evt?.fromTime ?? evt?.from_time) as string);
    const to = fmtTime((evt?.toTime ?? evt?.to_time) as string);
    if (!from && !to) return null;
    if (from && to && to !== from) return `${from} – ${to}`;
    return from || to;
  })();

  const posterUrl = event?.posterDataUrl || event?.poster;
  const gallery = event?.gallery ?? [];
  const coordinators = event?.coordinators ?? [];
  const facCoords = coordinators.filter(
    (c) => (c.type ?? "").toLowerCase() !== "student"
  );
  const stuCoords = coordinators.filter(
    (c) => (c.type ?? "").toLowerCase() === "student"
  );
  const resourcePersons = event?.resourcePersons ?? [];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
      {/* Backdrop covering everything including fixed website headers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999]"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative z-[10000] w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/80 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-40 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-md backdrop-blur-sm cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Loading state */}
        {loading && (
          <div className="p-12 flex flex-col items-center justify-center min-h-[360px] text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </div>
            <div>
              <p className="font-semibold text-slate-800">Loading Event Details…</p>
              <p className="text-xs text-muted-foreground mt-1">Fetching program schedule, speakers & coordinators</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {!loading && hasError && (
          <div className="p-12 flex flex-col items-center justify-center min-h-[360px] text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg">Unable to load event details</p>
              <p className="text-sm text-slate-500 mt-1">The event information could not be retrieved from the CMS server.</p>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* Loaded Content */}
        {!loading && event && (
          <div className="overflow-y-auto flex-1">
            <div className={`grid grid-cols-1 ${posterUrl ? "lg:grid-cols-12" : "grid-cols-1"}`}>
              {/* Left Column: Poster Flyer (if present) */}
              {posterUrl && (
                <div className="lg:col-span-5 bg-slate-50/90 p-4 sm:p-5 flex flex-col items-center justify-start border-b lg:border-b-0 lg:border-r border-slate-200/80">
                  <div className="w-full relative group">
                    <div
                      onClick={() => setLightboxImg(posterUrl)}
                      className="block relative rounded-xl overflow-hidden bg-white shadow-md border border-slate-200/80 cursor-zoom-in group/flyer"
                      title="Click to open flyer popup"
                    >
                      <img
                        src={posterUrl}
                        alt={event.title}
                        onLoad={() => setPosterLoaded(true)}
                        className={`w-full max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover/flyer:scale-[1.02] ${
                          posterLoaded ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {!posterLoaded && (
                        <div className="h-64 flex items-center justify-center text-slate-400">
                          <Loader2 className="w-8 h-8 animate-spin" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover/flyer:bg-slate-900/15 flex items-center justify-center transition-colors">
                        <span className="opacity-0 group-hover/flyer:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-slate-900/80 text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Click to Enlarge
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setLightboxImg(posterUrl)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-primary text-xs font-semibold shadow-xs border border-slate-200 transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-primary" />
                        Open Full Flyer
                      </button>
                    </div>
                  </div>

                  {/* Gallery Thumbnails inside the Left Column if available */}
                  {gallery.length > 0 && (
                    <div className="w-full mt-5 pt-4 border-t border-slate-200/70">
                      <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Event Photos ({gallery.length})
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {gallery.map((img, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setLightboxImg(img)}
                            className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200/80 hover:border-primary transition-all shadow-xs group/thumb relative block cursor-zoom-in bg-slate-100 text-left p-0"
                            title="Click to enlarge photo"
                          >
                            <img src={img} alt={`Event photo ${i + 1}`} className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform" />
                            <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 flex items-center justify-center transition-colors">
                              <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity drop-shadow" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Right Column (or Full Width): Event Details */}
              <div className={`${posterUrl ? "lg:col-span-7" : "col-span-12"} p-5 sm:p-7 space-y-5 overflow-y-auto`}>
                {/* Header Row: Badges & Title */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    {typeKey && (
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${typeStyle.bg} ${typeStyle.border}`}>
                        {typeKey}
                      </span>
                    )}
                    {isValidValue(event.status) && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {event.status}
                      </span>
                    )}
                    {isValidValue(event.collaborationDept) && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        In Collab with: {event.collaborationDept}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {event.title}
                  </h2>
                </div>

                {/* Quick Info Grid - ONLY Render Non-Empty Fields! */}
                {(() => {
                  const cards: Array<{ icon: React.ElementType; label: string; value: string }> = [];
                  if (dateRange) cards.push({ icon: Calendar, label: "Date", value: dateRange });
                  if (timeRange) cards.push({ icon: Clock, label: "Time", value: timeRange });
                  if (isValidValue(event.venue)) cards.push({ icon: MapPin, label: "Venue", value: String(event.venue) });
                  if (isValidValue(event.registrationDeadline)) {
                    const dl = fmt(event.registrationDeadline) || event.registrationDeadline;
                    if (dl) cards.push({ icon: Calendar, label: "Reg. Deadline", value: String(dl) });
                  }
                  if (isValidValue(event.sponsorOrg)) {
                    const sp = event.sponsorAmount ? `${event.sponsorOrg} (${event.sponsorAmount})` : event.sponsorOrg;
                    cards.push({ icon: Star, label: "Sponsored By", value: String(sp) });
                  }
                  if (event.totalRegistered != null && Number(event.totalRegistered) > 0) {
                    cards.push({ icon: Users, label: "Registered", value: String(event.totalRegistered) });
                  }
                  if (event.totalAttended != null && Number(event.totalAttended) > 0) {
                    cards.push({ icon: Users, label: "Attended", value: String(event.totalAttended) });
                  }
                  if (isValidValue(event.approvedBudget)) {
                    cards.push({ icon: Award, label: "Approved Budget", value: String(event.approvedBudget) });
                  }

                  if (cards.length === 0) return null;
                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cards.map((c, i) => (
                        <InfoCard key={i} icon={c.icon} label={c.label} value={c.value} />
                      ))}
                    </div>
                  );
                })()}

                {/* CTAs / Registration Action Buttons */}
                {(isValidValue(event.registrationLink) || isValidValue((event as any).file) || isValidValue(event.feedbackLink)) && (
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    {isValidValue(event.registrationLink) && (
                      <a
                        href={event.registrationLink!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-bold text-xs shadow-xs hover:bg-primary/90 active:scale-95 transition-all"
                      >
                        <Link2 className="w-4 h-4" />
                        Register for Event
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                      </a>
                    )}
                    {isValidValue((event as any).file) && (
                      <a
                        href={(event as any).file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-white font-bold text-xs shadow-xs hover:bg-secondary/90 active:scale-95 transition-all"
                      >
                        <Download className="w-4 h-4" />
                        Download Brochure / Report
                      </a>
                    )}
                    {isValidValue(event.feedbackLink) && (
                      <a
                        href={event.feedbackLink!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:border-primary hover:text-primary transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Feedback Form
                      </a>
                    )}
                  </div>
                )}

                {/* Description / Summary */}
                {isValidValue(event.description) && (
                  <div className="pt-2 border-t border-slate-100">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-primary" />
                      About the Event / Summary
                    </h3>
                    <div
                      className="text-slate-700 text-sm leading-relaxed prose prose-sm max-w-none prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0.5"
                      dangerouslySetInnerHTML={{ __html: event.description! }}
                    />
                  </div>
                )}

                {/* Resource Persons & Speakers */}
                {resourcePersons.length > 0 && (
                  <div className="pt-2 border-t border-slate-100">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-primary" />
                      Resource Persons & Speakers ({resourcePersons.length})
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {resourcePersons.map((p, idx) => {
                        const org = p.institute || p.organization;
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3 flex flex-col justify-between hover:border-slate-300 transition-colors"
                          >
                            <div>
                              <div className="flex items-start justify-between gap-1.5">
                                <h4 className="font-bold text-slate-900 text-sm leading-snug">
                                  {p.name}
                                </h4>
                                {isValidValue(p.qualification) && (
                                  <span className="shrink-0 text-[10px] font-semibold bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                                    {p.qualification}
                                  </span>
                                )}
                              </div>
                              {isValidValue(p.designation) && (
                                <p className="text-xs font-semibold text-primary mt-0.5 flex items-center gap-1">
                                  <Briefcase className="w-3 h-3 shrink-0" />
                                  {p.designation}
                                </p>
                              )}
                              {isValidValue(org) && (
                                <p className="text-xs text-slate-600 mt-0.5 flex items-center gap-1">
                                  <Building2 className="w-3 h-3 shrink-0 text-slate-400" />
                                  {org}
                                </p>
                              )}
                              {isValidValue(p.department) && (
                                <p className="text-[11px] text-slate-500 pl-4 mt-0.5">
                                  {p.department}
                                </p>
                              )}
                            </div>

                            {isValidValue(p.experience) && (
                              <div className="mt-2 pt-2 border-t border-slate-200/70 flex items-center gap-1 text-[11px] text-slate-600 font-medium">
                                <Award className="w-3 h-3 text-amber-500" />
                                <span>{p.experience!.toLowerCase().includes("year") ? p.experience : `${p.experience} Years Experience`}</span>
                              </div>
                            )}

                            {isValidValue(p.topic) && (
                              <div className="mt-1.5 p-2 bg-white rounded-lg border border-slate-200/60 text-xs italic text-slate-700">
                                <span className="font-semibold text-slate-900 not-italic">Topic: </span>
                                {p.topic}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Coordinators */}
                {(facCoords.length > 0 || stuCoords.length > 0) && (
                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-primary" />
                      Event Coordinators
                    </h3>

                    {facCoords.length > 0 && (
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Faculty
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {facCoords.map((c, i) => {
                            const phone = c.contact || c.phone;
                            return (
                              <div
                                key={i}
                                className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-2.5"
                              >
                                <h4 className="font-bold text-slate-900 text-xs">{c.name}</h4>
                                {isValidValue(c.role) && (
                                  <p className="text-[11px] font-semibold text-primary">{c.role}</p>
                                )}
                                <div className="mt-1.5 space-y-0.5">
                                  {isValidValue(phone) && (
                                    <a
                                      href={`tel:${phone}`}
                                      className="flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-primary transition-colors"
                                    >
                                      <Phone className="w-3 h-3 text-slate-400" />
                                      <span>{phone}</span>
                                    </a>
                                  )}
                                  {isValidValue(c.email) && (
                                    <a
                                      href={`mailto:${c.email}`}
                                      className="flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-primary transition-colors truncate"
                                    >
                                      <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                                      <span className="truncate">{c.email}</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {stuCoords.length > 0 && (
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                          Students
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {stuCoords.map((c, i) => {
                            const phone = c.contact || c.phone;
                            return (
                              <div
                                key={i}
                                className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-2.5"
                              >
                                <h4 className="font-bold text-slate-900 text-xs">{c.name}</h4>
                                {isValidValue(c.role) && (
                                  <p className="text-[11px] font-semibold text-emerald-600">{c.role}</p>
                                )}
                                <div className="mt-1.5 space-y-0.5">
                                  {isValidValue(phone) && (
                                    <a
                                      href={`tel:${phone}`}
                                      className="flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-primary transition-colors"
                                    >
                                      <Phone className="w-3 h-3 text-slate-400" />
                                      <span>{phone}</span>
                                    </a>
                                  )}
                                  {isValidValue(c.email) && (
                                    <a
                                      href={`mailto:${c.email}`}
                                      className="flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-primary transition-colors truncate"
                                    >
                                      <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                                      <span className="truncate">{c.email}</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Point of Contact (if distinct) */}
                {(isValidValue(event.contactName) || isValidValue(event.contactPhone) || isValidValue(event.contactEmail)) && (
                  <div className="pt-2 border-t border-slate-100">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-primary" />
                      Point of Contact
                    </h3>
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        {isValidValue(event.contactName) && (
                          <p className="font-bold text-slate-900 text-xs">{event.contactName}</p>
                        )}
                        <p className="text-[11px] text-slate-500">Event Secretariat</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {isValidValue(event.contactPhone) && (
                          <a
                            href={`tel:${event.contactPhone}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:text-primary transition-colors"
                          >
                            <Phone className="w-3 h-3 text-primary" />
                            {event.contactPhone}
                          </a>
                        )}
                        {isValidValue(event.contactEmail) && (
                          <a
                            href={`mailto:${event.contactEmail}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:text-primary transition-colors"
                          >
                            <Mail className="w-3 h-3 text-primary" />
                            {event.contactEmail}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Fullscreen Image Lightbox Popup */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[11000] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
            onClick={() => setLightboxImg(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-[11010] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
              aria-label="Close image popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Clickable Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg}
                alt="Enlarged view"
                className="max-h-[86vh] max-w-[92vw] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={lightboxImg}
                  download="mits-event-flyer.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-colors border border-white/15"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EventDetailModal({ eventId, onClose }: Props) {
  return createPortal(
    <AnimatePresence>
      <ModalContent key={eventId} eventId={eventId} onClose={onClose} />
    </AnimatePresence>,
    document.body
  );
}
