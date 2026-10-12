import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Calendar, MapPin, Clock, Link2, Mail, Phone,
  Users, BookOpen, Building2, Star, ExternalLink,
  ChevronLeft, ChevronRight, ImageOff, Loader2, AlertCircle,
} from "lucide-react";
import { fetchEventDetail, type CMSEvent } from "@/hooks/useDeptCMSData";

interface Props {
  eventId: number;
  onClose: () => void;
}

function fmt(dateStr?: string | null): string | null {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function fmtTime(t?: string | null): string | null {
  if (!t) return null;
  try {
    const parts = t.split(":");
    const h = Number(parts[0]);
    const m = Number(parts[1]);
    const ampm = h >= 12 ? "PM" : "AM";
    return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${ampm}`;
  } catch {
    return t;
  }
}

const typeColors: Record<string, string> = {
  Conference: "bg-blue-100 text-blue-700",
  Workshop:   "bg-emerald-100 text-emerald-700",
  Seminar:    "bg-violet-100 text-violet-700",
  FDP:        "bg-orange-100 text-orange-700",
  Hackathon:  "bg-pink-100 text-pink-700",
  Symposium:  "bg-cyan-100 text-cyan-700",
  Webinar:    "bg-indigo-100 text-indigo-700",
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
    <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm font-medium text-secondary mt-0.5 break-words">{value}</p>
      </div>
    </div>
  );
}

function EventBanner({ src, alt }: { src?: string | null; alt: string }) {
  const [imgState, setImgState] = useState<"loading" | "loaded" | "error">("loading");

  if (!src) {
    return (
      <div className="w-full h-56 md:h-72 bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col items-center justify-center gap-2">
        <ImageOff className="w-10 h-10 text-muted-foreground opacity-20" />
        <span className="text-sm text-muted-foreground opacity-40">No image available</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-56 md:h-72 bg-slate-100 overflow-hidden">
      {imgState === "loading" && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setImgState("loaded")}
        onError={() => setImgState("error")}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          imgState === "loaded" ? "opacity-100" : "opacity-0"
        }`}
      />
      {imgState === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-100">
          <ImageOff className="w-8 h-8 text-muted-foreground opacity-30" />
          <span className="text-sm text-muted-foreground opacity-40">Image unavailable</span>
        </div>
      )}
    </div>
  );
}

function ModalContent({
  eventId,
  onClose,
}: Props) {
  const [event, setEvent] = useState<CMSEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);

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
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose]);

  const typeKey = event?.event_type || event?.type || "";
  const typeColor = typeColors[typeKey] ?? "bg-slate-100 text-slate-600";

  const dateRange = (() => {
    const evt = event as Record<string, unknown>;
    const from = fmt((evt?.fromDate ?? evt?.from_date) as string);
    const to = fmt((evt?.toDate ?? evt?.to_date) as string);
    if (!from) return null;
    return to && to !== from ? `${from} – ${to}` : from;
  })();

  const timeRange = (() => {
    const evt = event as Record<string, unknown>;
    const from = fmtTime((evt?.fromTime ?? evt?.from_time) as string);
    const to = fmtTime((evt?.toTime ?? evt?.to_time) as string);
    if (!from) return null;
    return to ? `${from} – ${to}` : from;
  })();

  const gallery = event?.gallery ?? [];
  const facCoords = (event?.coordinators ?? []).filter(
    (c) => (c.type ?? "").toLowerCase() !== "student"
  );
  const stuCoords = (event?.coordinators ?? []).filter(
    (c) => (c.type ?? "").toLowerCase() === "student"
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="relative z-10 w-full sm:max-w-3xl max-h-[96vh] sm:max-h-[90vh] flex flex-col bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Loading skeleton */}
        {loading && (
          <div className="flex-1 overflow-y-auto">
            <div className="w-full h-56 bg-slate-200 animate-pulse" />
            <div className="p-5 space-y-4">
              <div className="h-6 bg-slate-100 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-slate-100 rounded animate-pulse w-1/2" />
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="h-14 bg-slate-100 rounded-xl animate-pulse" />
                ))}
              </div>
              <div className="space-y-2 mt-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-3 bg-slate-100 rounded animate-pulse" />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 py-4 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading event details…
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && hasError && (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 py-20 px-6 text-center">
            <AlertCircle className="w-12 h-12 text-red-300" />
            <p className="font-semibold text-secondary">Could not load event details</p>
            <p className="text-sm text-muted-foreground">
              Please check your connection and try again.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-5 py-2.5 text-sm bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        )}

        {/* Content */}
        {!loading && event && (
          <div className="overflow-y-auto flex-1">
            {/* Hero */}
            <div className="relative">
              <EventBanner
                src={event.posterDataUrl ?? event.poster}
                alt={event.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {typeKey ? (
                    <span className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${typeColor}`}>
                      {typeKey}
                    </span>
                  ) : null}
                  {event.department ? (
                    <span className="text-sm font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      {event.department}
                    </span>
                  ) : null}
                </div>
                <h2 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg leading-snug">
                  {event.title}
                </h2>
              </div>
            </div>

            <div className="p-5 space-y-6">

              {/* Quick info */}
              <div className="grid grid-cols-2 gap-3">
                {dateRange ? <InfoCard icon={Calendar} label="Date" value={dateRange} /> : null}
                {timeRange ? <InfoCard icon={Clock} label="Time" value={timeRange} /> : null}
                {event.venue ? <InfoCard icon={MapPin} label="Venue" value={event.venue} /> : null}
                {event.registrationDeadline ? (
                  <InfoCard
                    icon={Calendar}
                    label="Reg. Deadline"
                    value={fmt(event.registrationDeadline) ?? event.registrationDeadline}
                  />
                ) : null}
                {event.collaborationDept ? (
                  <InfoCard icon={Building2} label="In Association With" value={event.collaborationDept} />
                ) : null}
                {event.sponsorOrg ? (
                  <InfoCard
                    icon={Star}
                    label="Sponsored By"
                    value={event.sponsorAmount ? `${event.sponsorOrg} (${event.sponsorAmount})` : event.sponsorOrg}
                  />
                ) : null}
                {event.totalRegistered != null ? (
                  <InfoCard icon={Users} label="Registered" value={String(event.totalRegistered)} />
                ) : null}
                {event.totalAttended != null ? (
                  <InfoCard icon={Users} label="Attended" value={String(event.totalAttended)} />
                ) : null}
              </div>

              {/* Description */}
              {event.description ? (
                <div>
                  <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-primary" />
                    About this Event
                  </h3>
                  <div
                    className="text-sm text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </div>
              ) : null}

              {/* Resource Persons */}
              {event.resourcePersons && event.resourcePersons.length > 0 ? (
                <div>
                  <h3 className="font-bold text-secondary mb-3 flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-primary" />
                    Resource Persons
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {event.resourcePersons.map((p, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                        <p className="font-semibold text-sm text-secondary">{p.name}</p>
                        {p.designation ? (
                          <p className="text-sm text-primary mt-0.5">{p.designation}</p>
                        ) : null}
                        {p.organization ? (
                          <p className="text-sm text-muted-foreground">{p.organization}</p>
                        ) : null}
                        {p.topic ? (
                          <p className="text-sm italic text-muted-foreground mt-1">
                            Topic: {p.topic}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Coordinators */}
              {(facCoords.length > 0 || stuCoords.length > 0) ? (
                <div>
                  <h3 className="font-bold text-secondary mb-3 flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    Coordinators
                  </h3>
                  <div className="space-y-3">
                    {facCoords.length > 0 ? (
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                          Faculty
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {facCoords.map((c, i) => (
                            <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                              <p className="font-semibold text-sm text-secondary">{c.name}</p>
                              {c.role ? (
                                <p className="text-sm text-primary mt-0.5">{c.role}</p>
                              ) : null}
                              {c.phone ? (
                                <a
                                  href={`tel:${c.phone}`}
                                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mt-1"
                                >
                                  <Phone className="w-3 h-3" />
                                  {c.phone}
                                </a>
                              ) : null}
                              {c.email ? (
                                <a
                                  href={`mailto:${c.email}`}
                                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  <Mail className="w-3 h-3" />
                                  {c.email}
                                </a>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {stuCoords.length > 0 ? (
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
                          Students
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {stuCoords.map((c, i) => (
                            <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-3">
                              <p className="font-semibold text-sm text-secondary">{c.name}</p>
                              {c.role ? (
                                <p className="text-sm text-primary mt-0.5">{c.role}</p>
                              ) : null}
                              {c.phone ? (
                                <a
                                  href={`tel:${c.phone}`}
                                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mt-1"
                                >
                                  <Phone className="w-3 h-3" />
                                  {c.phone}
                                </a>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {/* Contact */}
              {(event.contactName || event.contactEmail || event.contactPhone) ? (
                <div>
                  <h3 className="font-bold text-secondary mb-2 flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    Contact
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-1.5">
                    {event.contactName ? (
                      <p className="font-semibold text-sm text-secondary">{event.contactName}</p>
                    ) : null}
                    {event.contactPhone ? (
                      <a
                        href={`tel:${event.contactPhone}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                        {event.contactPhone}
                      </a>
                    ) : null}
                    {event.contactEmail ? (
                      <a
                        href={`mailto:${event.contactEmail}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                        {event.contactEmail}
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {/* Gallery */}
              {gallery.length > 0 ? (
                <div>
                  <h3 className="font-bold text-secondary mb-3 text-sm">Gallery</h3>
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <EventBanner src={gallery[galleryIdx]} alt={`Photo ${galleryIdx + 1}`} />
                    {gallery.length > 1 ? (
                      <>
                        <button
                          onClick={() =>
                            setGalleryIdx((idx) => (idx - 1 + gallery.length) % gallery.length)
                          }
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            setGalleryIdx((idx) => (idx + 1) % gallery.length)
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                          {gallery.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setGalleryIdx(i)}
                              className={`h-1.5 rounded-full transition-all ${
                                i === galleryIdx ? "bg-white w-4" : "bg-white/50 w-1.5"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {/* CTAs */}
              {(event.registrationLink || event.feedbackLink) ? (
                <div className="flex flex-wrap gap-3 pb-2">
                  {event.registrationLink ? (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 active:scale-95 transition-all shadow-sm"
                    >
                      <Link2 className="w-4 h-4" />
                      Register Now
                    </a>
                  ) : null}
                  {event.feedbackLink ? (
                    <a
                      href={event.feedbackLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary/30 text-primary font-semibold text-sm rounded-xl hover:bg-primary/5 active:scale-95 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Feedback Form
                    </a>
                  ) : null}
                </div>
              ) : null}

            </div>
          </div>
        )}
      </motion.div>
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
