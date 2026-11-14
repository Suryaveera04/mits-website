import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, ChevronRight, ExternalLink, MapPin, Award, ArrowLeft, Globe, Landmark, Languages, Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn, slugify } from "@/lib/utils";
import {
  partners, aboutGallery, internshipGallery, globalGallery,
} from "@/data/internationalRelations";
import {
  ImageCarousel, localLogos, FallbackCrest, regionColors,
} from "@/pages/InternationalRelations";

/**
 * Curated, confidently-matched MoU/delegation photos for specific partners,
 * built entirely from image URLs that already exist in the IR data file.
 * Partners not listed here fall back to the general IRO engagement archive
 * below rather than being paired with another university's photos.
 */
const partnerSpecificGallery: Record<string, string[]> = {
  "Bowling Green State University (BGSU)": [
    "https://mits.ac.in/public/uploads/internationalrelation/bowling.JPG",
    "https://mits.ac.in/public/uploads/internationalrelation/us-mou.JPG",
    "https://mits.ac.in/public/uploads/internationalrelation/mou1.jpg",
    "https://mits.ac.in/public/uploads/internationalrelation/mou2.jpg",
  ],
  "Asia University (AU)": [...globalGallery.filter((g) => g.toLowerCase().includes("asia") || g.toLowerCase().includes("taiwan"))],
  "Providence University": globalGallery.filter((g) => g.toLowerCase().includes("providence")),
  "Ichinoseki College (National Institute of Technology - KOSEN)": internshipGallery.filter((g) =>
    g.toLowerCase().includes("sakura")
  ),
};

/** Generic IRO documentation photos — used when no partner-specific match exists. Never mislabeled as campus-specific. */
const fallbackGallery = aboutGallery;

/**
 * Native-language rendering of each partner's own description & highlight, so
 * a prospective student or partner in that country can read it in their own
 * language. This is a translation of MITS' own existing text — not a generic
 * whole-site translator. US partners are omitted since English is already native.
 */
const nativeTranslations: Record<string, { langLabel: string; description: string; highlight: string }> = {
  "University of Applied Sciences Upper Austria (Hagenberg Campus)": {
    langLabel: "Deutsch",
    description:
      "Die Fachhochschule Oberösterreich hat das Ziel, die führende Fachhochschule Österreichs zu sein – mit einem starken studierendenzentrierten Ansatz, herausragender angewandter Forschung, modernen Serviceleistungen sowie starken regionalen und internationalen Verbindungen. Der Campus Hagenberg genießt internationale Anerkennung für seine Exzellenz in den Bereichen Informationstechnologie, Software Engineering, Künstliche Intelligenz, Cybersicherheit, Data Science, Medientechnik und Kommunikationstechnik. Er vermittelt Studierenden praxisnahe Fähigkeiten und Karrieremöglichkeiten in der digitalen und technischen Branche.",
    highlight: "Führende österreichische Fachhochschule für KI, IT und Software Engineering.",
  },
  "Brno University of Technology (BUT)": {
    langLabel: "Čeština",
    description:
      "Vysoké učení technické v Brně (VUT), založené v roce 1899, patří mezi největší a nejprestižnější technické univerzity v České republice. Sídlí v Brně, předním centru technologií a inovací, a je uznávána za vynikající úroveň ve strojírenství, informačních technologiích, architektuře, ekonomii a aplikovaných vědách. Nabízí moderní výzkumná zařízení a rozsáhlou spolupráci s globálními společnostmi, jako jsou IBM, Siemens, Bosch a Honeywell, spolu s možnostmi výměnných pobytů v rámci programu Erasmus+.",
    highlight: "Umístění #=588 v žebříčku QS World University Rankings 2027.",
  },
  "The University of South Bohemia in České Budějovice (USB)": {
    langLabel: "Čeština",
    description:
      "Jihočeská univerzita v Českých Budějovicích (USB), založená v roce 1991, je přední veřejná univerzita v České republice, proslulá vynikající úrovní v oblasti biologických věd, zemědělství, rybářství, environmentálních věd, biologie, zdravotnických věd a pedagogiky. Univerzita udržuje rozsáhlá mezinárodní partnerství a aktivně se zapojuje do programu Erasmus+ a dalších globálních výměnných programů, přičemž nabízí podpůrné akademické prostředí zaměřené na udržitelnost, inovace a aplikovaný výzkum.",
    highlight: "Umístění #1201–1400 v žebříčku QS World University Rankings 2027.",
  },
  "Maharishi Vedic University": {
    langLabel: "Nederlands",
    description:
      "De Maharishi Vedische Universiteit, gevestigd in Nederland, is een gespecialiseerde instelling die zich richt op bewustzijnsgerichte educatie en de integratie van Vedische kennis met modern onderwijs, persoonlijke ontwikkeling en wetenschappelijk onderzoek. Geïnspireerd door Maharishi Mahesh Yogi legt de universiteit de nadruk op holistisch leren via Transcendente Meditatie, Yoga, Vedische Wetenschappen en Leiderschapsontwikkeling, en trekt zij internationale studenten aan die academische kennis willen combineren met mentaal welzijn.",
    highlight: "Uniek holistisch onderwijsnetwerk dat Vedische wetenschap combineert met modern onderzoek.",
  },
  "University of Aizu (UoA)": {
    langLabel: "日本語",
    description:
      "1993年に福島県に設立された会津大学(UoA)は、コンピュータサイエンスと工学に特化した日本初の大学です。革新的な教育と研究で知られ、コンピュータサイエンス、人工知能、ソフトウェア工学、サイバーセキュリティ、データサイエンス、情報システムなどのプログラムを提供しています。英語による授業と最先端のコンピューティング設備を備えた、国際色豊かな環境が特徴です。",
    highlight: "日本を代表するコンピュータサイエンスの大学であり、長年にわたり研究インターンシップおよび大学院進学の提携校です。",
  },
  "Ichinoseki College (National Institute of Technology - KOSEN)": {
    langLabel: "日本語",
    description:
      "1964年に岩手県に設立された一関工業高等専門学校(一関高専)は、実践的な教育を通じて高度な技術者を育成する、日本を代表する高等専門学校(KOSEN)の一つです。機械工学、電気電子工学、制御情報システム、化学・生物工学、土木工学などの専門課程を提供し、産業界と連携した実践的な実習を重視しています。",
    highlight: "日本における「さくらサイエンスプログラム」のホスト機関です。",
  },
  "Iwate Prefectural University (Faculty of Software & Information Science)": {
    langLabel: "日本語",
    description:
      "1998年に岩手県に設立された岩手県立大学ソフトウェア情報学部は、ソフトウェア工学、人工知能、データサイエンス、サイバーセキュリティ、ネットワーク、情報システムの分野において高い評価を得ています。理論的知識と実践的応用のバランスを重視し、産業界、行政、海外の大学との連携を積極的に行っています。",
    highlight: "先進的なソフトウェア工学と人工知能研究における連携パートナーです。",
  },
  "Asia University (AU)": {
    langLabel: "繁體中文",
    description:
      "亞洲大學(AU)成立於2001年,位於台灣台中市,是一所知名私立大學,在人工智慧、資訊科技、健康科學、管理學、設計與創意創新等領域享有卓越聲譽。在2027年QS世界大學排名中位列第649名,亞洲大學以現代化校園、跨領域教育、人工智慧與智慧醫療研究,以及緊密的產業合作而聞名。",
    highlight: "在2027年QS世界大學排名中位列第649名;自2017–18學年起即為學期交換合作夥伴。",
  },
  "Providence University": {
    langLabel: "繁體中文",
    description:
      "靜宜大學成立於1956年,位於台灣台中市,是一所備受敬重的私立大學,在商業與管理、外國語文、人文學科、社會科學、資訊科技及應用科學等領域表現卓越。在2026年QS亞洲大學排名中位列第951–1000名,提供以學生為中心的學習模式、交換學生、雙聯學位及實習機會。",
    highlight: "在2026年QS亞洲大學排名中位列第951–1000名;為「全球沉浸計畫」(Global Immersion Program)的贊助機構。",
  },
  "Pusan National University (PNU)": {
    langLabel: "한국어",
    description:
      "1946년에 설립된 부산대학교(PNU)는 부산에 위치한 대한민국의 대표적인 국립 연구 중심 대학교입니다. 2027년 QS 세계대학순위에서 공동 449위에 올랐으며, 공학, 자연과학, 의학, 경영학, 정보기술, 환경과학 분야에서 우수한 연구 성과와 높은 졸업생 취업률로 잘 알려져 있습니다.",
    highlight: "2027년 QS 세계대학순위 공동 449위; 대한민국을 대표하는 국립 연구 중심 대학교입니다.",
  },
  "Kookmin University": {
    langLabel: "한국어",
    description:
      "1946년 서울에 설립된 국민대학교는 2027년 QS 세계대학순위에서 1001–1200위에 올랐습니다. 공학, 컴퓨터공학, 인공지능, 자동차공학, 경영학, 디자인, 건축학 분야에서 강점을 보이며, 혁신 중심의 교육과 모빌리티, 스마트 기술, 디지털 전환 분야에서 산업계와의 긴밀한 협력으로 잘 알려져 있습니다.",
    highlight: "2027년 QS 세계대학순위 1001–1200위; 모빌리티와 인공지능 분야를 선도하는 한국의 대학입니다.",
  },
};

const cnBadge = (colorClass: string | undefined) =>
  `px-3.5 py-1 rounded-full text-sm font-bold shadow-sm ${colorClass || "bg-slate-100 text-slate-700"}`;

const InternationalRelationsPartner = () => {
  const { slug } = useParams<{ slug: string }>();
  const partner = partners.find((p) => slugify(p.name) === slug);
  const [showNative, setShowNative] = useState(false);

  if (!partner) {
    return <Navigate to="/international-relations#mou" replace />;
  }

  const specificGallery = partnerSpecificGallery[partner.name];
  const gallery = specificGallery && specificGallery.length > 0 ? specificGallery : fallbackGallery;
  const isSpecific = Boolean(specificGallery && specificGallery.length > 0);

  const BASE = import.meta.env.BASE_URL;
  const localLogo = localLogos[partner.name];
  const logoUrl = localLogo ? `${BASE}${localLogo}` : null;

  const regionLabel =
    partner.region === "US" ? "United States" : partner.region === "Europe" ? "Europe" : partner.region;

  const translation = nativeTranslations[partner.name];
  const native = showNative && translation;
  const bodyDescription = native ? translation.description : partner.description;
  const bodyHighlight = native ? translation.highlight : partner.highlight;

  return (
    <div className="ir-canvas min-h-screen">
      <Header />
      <div className="h-16 md:h-[100px] xl:h-[116px] shrink-0" />

      {/* Hero */}
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#143557] to-[#0a1f33] text-white py-14 md:py-20 flex items-center">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #caa74d 0%, transparent 40%), radial-gradient(circle at 85% 80%, #b31317 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1900px] px-3 sm:px-6 lg:px-10 xl:px-16">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/70 mb-6 font-body">
            <Link to="/" className="hover:text-[#caa74d] transition-colors inline-flex items-center gap-1">
              <Home className="w-3 h-3" />Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/international-relations" className="hover:text-[#caa74d] transition-colors">
              International Relations
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/international-relations#mou" className="hover:text-[#caa74d] transition-colors">
              MoUs
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#caa74d] line-clamp-1">{partner.name}</span>
          </nav>

          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, rotateY: 5, rotateX: -3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-28 h-28 md:w-40 md:h-40 rounded-[1.75rem] bg-white flex items-center justify-center p-5 shadow-2xl shrink-0 border border-white/70"
            >
              {logoUrl ? (
                <img src={logoUrl} alt={`${partner.name} logo`} className="max-w-full max-h-full object-contain" />
              ) : (
                <FallbackCrest name={partner.name} />
              )}
            </motion.div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={cnBadge(regionColors[partner.region])}>{regionLabel}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-white/10 border border-white/15 text-white/90">
                  <MapPin className="w-3 h-3" />{partner.country}
                </span>
                {partner.ranking && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold bg-[#caa74d]/15 border border-[#caa74d]/40 text-[#caa74d]">
                    <Award className="w-3 h-3" />{partner.ranking}
                  </span>
                )}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold leading-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {partner.name}
              </motion.h1>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href={partner.website} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#caa74d] text-[#0f2a44] hover:bg-[#caa74d]/90 font-bold gap-2">
                    Visit Official Website <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
                <Link to="/international-relations#mou">
                  <Button variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white gap-2">
                    <ArrowLeft className="w-4 h-4" /> All MoU Partners
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto w-full max-w-[1900px] px-3 sm:px-6 lg:px-10 xl:px-16 py-12 md:py-16 space-y-14">
        {/* Gallery */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-primary" />
            <h2 className="font-bold text-secondary text-lg" style={{ fontFamily: "var(--font-display)" }}>
              {isSpecific ? "MoU & Delegation Photos" : "IRO Global Engagement Archive"}
            </h2>
          </div>
          {!isSpecific && (
            <p className="text-sm text-muted-foreground -mt-3 mb-4">
              Dedicated photos for this specific delegation haven't been catalogued yet — showing MITS IRO's general
              MoU &amp; global engagement photo archive in the meantime.
            </p>
          )}
          <ImageCarousel images={gallery} />
        </div>

        {/* Profile — centered, justified, with an English ⇄ native-language toggle */}
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-primary" />
              <h2 className="font-bold text-secondary text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Institutional Profile
              </h2>
            </div>
            {translation && (
              <button
                onClick={() => setShowNative((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all",
                  showNative
                    ? "bg-[#0f2a44] text-white border-[#0f2a44]"
                    : "bg-white text-secondary border-border hover:border-[#0f2a44]"
                )}
              >
                <Languages className="w-3.5 h-3.5" />
                {showNative ? "English" : translation.langLabel}
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={showNative ? "native" : "en"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="ir-lift-card rounded-[1.8rem] border border-white/80 bg-white/85 p-6 md:p-10 shadow-sm text-center backdrop-blur-xl"
            >
              {bodyDescription && (
                <p className="text-[15px] md:text-base leading-relaxed text-secondary/90 text-justify [text-align-last:center] whitespace-pre-line">
                  {bodyDescription}
                </p>
              )}

              {partner.strengths && partner.strengths.length > 0 && (
                <ul className="mt-6 text-left space-y-2">
                  {partner.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-secondary/90">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#caa74d] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              {bodyHighlight && (
                <div className="mt-7 inline-flex items-start gap-2 max-w-xl mx-auto rounded-xl bg-[#caa74d]/10 border border-[#caa74d]/30 px-4 py-3 text-left">
                  <Sparkles className="w-4 h-4 text-[#caa74d] mt-0.5 shrink-0" />
                  <p className="text-sm text-secondary/90 leading-relaxed">{bodyHighlight}</p>
                </div>
              )}

              {native && (
                <p className="text-[11px] text-muted-foreground mt-5">
                  Programme names and rankings are kept in their original form; the description above is shown in{" "}
                  {translation.langLabel}.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Official University Website — bottom CTA */}
        <div className="max-w-[1400px] mx-auto">
          <div className="ir-media-deck rounded-[1.8rem] border border-[#caa74d]/40 bg-gradient-to-br from-[#0f2a44] to-[#143557] text-white p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-[#caa74d]" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#caa74d] mb-0.5">Official Website</p>
                <p className="font-bold text-white text-base leading-snug">{partner.name}</p>
                <p className="text-sm text-white/60 mt-0.5 break-all">{partner.website}</p>
              </div>
            </div>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#caa74d] text-[#0f2a44] font-bold text-sm hover:bg-[#caa74d]/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Visit Official Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternationalRelationsPartner;
