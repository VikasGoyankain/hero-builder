import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown, Phone, Play, Trophy, Users, Building2, UserCheck, Monitor,
  ChevronRight, MessageCircle, Search, MapPin, Star, Calendar, BookOpen,
  Sparkles, Target, GraduationCap, ClipboardList, Radio, ArrowUpRight,
  Plus, Minus, Mail, Instagram, Youtube, Twitter, Linkedin, Quote,
} from "lucide-react";
import heroImage from "@/assets/hero-courtroom.png";
import topperPortrait from "@/assets/topper-portrait.jpg";
import libraryImg from "@/assets/student-library.jpg";
import debateImg from "@/assets/student-debate.jpg";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Court Room — Where Future Lawyers Are Built" },
      { name: "description", content: "India's modern law school preparation institute. NLU alumni mentors, personalised guidance, and proven results for CLAT, AILET & NLU aspirants." },
      { property: "og:title", content: "The Court Room — Where Future Lawyers Are Built" },
      { property: "og:description", content: "NLU Alumni Mentors. Personalised Guidance. Proven Results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------- shared ---------------- */

const navItems = [
  { label: "Courses", hasDropdown: true },
  { label: "Results" },
  { label: "Faculty" },
  { label: "Branches" },
  { label: "Resources" },
  { label: "About" },
  { label: "Contact" },
];

function Section({
  eyebrow, title, accent, kicker, id, children, className = "",
}: {
  eyebrow?: string; title?: React.ReactNode; accent?: string; kicker?: string;
  id?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-[1440px] px-6 md:px-8 py-24 md:py-32 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-14 md:mb-20 max-w-3xl">
          {eyebrow && (
            <p className="text-[12px] font-semibold tracking-[0.22em] text-primary uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              {title}{accent && <span className="text-primary">{accent}</span>}
            </h2>
          )}
          {kicker && (
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">{kicker}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function PrimaryBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-3 rounded-md bg-primary px-7 py-4 text-[15px] font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
      {children}
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}
function GhostBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-3 rounded-md border border-foreground/25 bg-transparent px-7 py-4 text-[15px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
      {children}
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

/* ---------------- nav ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-foreground/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-6 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl font-bold text-primary">TCR</span>
            <span className="mt-0.5 font-serif text-[9px] tracking-[0.22em] text-foreground">
              THE COURT ROOM
            </span>
          </div>
          <span className="ml-1 text-primary text-xl">⚖</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-[14px] font-medium text-foreground/85 transition-colors hover:text-primary"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 text-[13px] font-medium md:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 text-primary">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <span className="hidden xl:inline">+91 92207 61399</span>
          </div>
          <button className="rounded-md bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            Book Counselling
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- hero ---------------- */

const stats = [
  { icon: Trophy, title: "AIR 1", sub: "AILET 2026" },
  { icon: Users, title: "100%", sub: "NLU Alumni Faculty" },
  { icon: Building2, title: "3", sub: "Campuses" },
  { icon: UserCheck, title: "Personalised", sub: "Mentorship" },
  { icon: Monitor, title: "Offline + Online", sub: "Classes" },
];

function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 md:px-8 pt-32 md:pt-36 pb-40">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-semibold tracking-[0.15em] text-primary">
            INDIA'S MODERN LAW SCHOOL PREPARATION INSTITUTE
          </p>
          <h1 className="mt-6 font-serif text-[52px] md:text-[76px] font-bold leading-[1.05] tracking-tight text-foreground">
            Where Future <span className="text-primary">Lawyers</span> Are Built
            <span className="text-primary">.</span>
          </h1>
          <div className="mt-6 h-[3px] w-24 bg-primary" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            NLU Alumni Mentors. Personalised Guidance.<br />Proven Results.
          </p>

          <div className="mt-10 flex items-end gap-6">
            <div>
              <p className="font-serif text-sm font-semibold tracking-widest text-primary">AIR</p>
              <p className="font-serif text-[72px] font-bold leading-none text-primary">1</p>
            </div>
            <div className="pb-2">
              <p className="font-serif text-2xl font-bold">AILET 2026</p>
              <p className="text-muted-foreground">In Our Very First Year</p>
              <p className="mt-3 text-sm font-semibold tracking-wider text-primary">AARYAN SINGH</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryBtn>Take Free Mock Test</PrimaryBtn>
            <GhostBtn>Book Free Counselling</GhostBtn>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Stack of law books with courthouse and scales of justice"
            width={1024} height={1024}
            className="w-full h-auto"
          />
          <span className="pointer-events-none absolute top-[8%] right-[12%] text-xs font-semibold tracking-wider text-primary">NLU</span>
          <span className="pointer-events-none absolute top-[28%] left-[18%] text-xs font-semibold tracking-wider text-primary">AILET</span>
          <span className="pointer-events-none absolute bottom-[32%] left-[4%] text-xs font-semibold tracking-wider text-primary">CLAT</span>
          <span className="pointer-events-none absolute top-[32%] right-[2%] text-xs font-semibold tracking-wider text-primary leading-tight text-right">YOUR<br />DREAM</span>

          <button className="absolute bottom-6 right-6 flex items-center gap-3 rounded-full bg-white/70 backdrop-blur px-2 py-2 pr-5 shadow-md transition hover:bg-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="h-4 w-4 fill-current" />
            </span>
            <span className="text-sm font-medium">Watch Our Story</span>
          </button>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="mx-auto grid grid-cols-2 gap-6 rounded-2xl bg-white px-8 md:px-10 py-7 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.title} className="flex items-center gap-4">
              <s.icon className="h-9 w-9 text-foreground/80" strokeWidth={1.5} />
              <div>
                <p className="font-serif text-lg font-bold leading-tight">{s.title}</p>
                <p className="text-sm text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- trust strip ---------------- */

function useCounter(target: number, start: boolean, duration = 1500) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const a = useCounter(1, visible);
  const b = useCounter(100, visible);
  const c = useCounter(3, visible);
  const d = useCounter(5000, visible);

  const items = [
    { k: `AIR ${a}`, v: "AILET 2026" },
    { k: `${b}%`, v: "NLU Alumni Faculty" },
    { k: `${c}`, v: "Premium Campuses" },
    { k: "Offline + Online", v: "Hybrid Learning" },
    { k: `${d.toLocaleString()}+`, v: "Aspirants Mentored" },
  ];
  return (
    <div ref={ref} className="mx-auto max-w-[1440px] px-6 md:px-8">
      <div className="rounded-2xl border border-foreground/10 bg-white/60 backdrop-blur-xl px-6 md:px-10 py-6 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {items.map((it) => (
            <div key={it.v} className="text-center md:text-left border-l-0 md:border-l md:first:border-l-0 border-foreground/10 md:pl-6 first:pl-0">
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">{it.k}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- AIR 1 Story ---------------- */

function Air1Story() {
  const timeline = [
    { y: "APR 2025", t: "Joined TCR Foundation Batch" },
    { y: "JUL 2025", t: "First Diagnostic — 82 percentile" },
    { y: "DEC 2025", t: "Cracked 200+ marks in Mocks" },
    { y: "MAY 2026", t: "AILET 2026 — All India Rank 1" },
  ];
  return (
    <Section
      id="air-1"
      eyebrow="AIR 1 · AILET 2026"
      title={<>A story that started<br />in a small classroom.</>}
      kicker="In our very first year, an ordinary boy from Lucknow topped one of India's toughest law entrance exams. This is how it happened."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-lg bg-secondary">
            <img
              src={topperPortrait}
              alt="Aaryan Singh, AILET 2026 All India Rank 1"
              width={1024} height={1280}
              loading="lazy"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 rounded-md bg-background/90 backdrop-blur px-4 py-3">
              <p className="font-serif text-primary text-xs font-semibold tracking-widest">AIR 01</p>
              <p className="font-serif text-xl font-bold leading-tight">Aaryan Singh</p>
              <p className="text-xs text-muted-foreground">NLSIU Bangalore · Batch of 2031</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <Quote className="h-10 w-10 text-primary/40" />
          <blockquote className="mt-4 font-serif text-2xl md:text-3xl leading-snug text-foreground">
            "TCR didn't teach me to pass an exam. They taught me to think like a lawyer.
            The mentors made a rank feel inevitable, not lucky."
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">— Aaryan Singh, AILET 2026</p>

          <div className="mt-12 space-y-6">
            {timeline.map((step, i) => (
              <div key={step.y} className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-primary" />
                  {i < timeline.length - 1 && <span className="w-px flex-1 min-h-[40px] bg-foreground/15 mt-1" />}
                </div>
                <div className="pb-2">
                  <p className="text-xs font-semibold tracking-widest text-primary">{step.y}</p>
                  <p className="mt-1 font-serif text-lg font-semibold">{step.t}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <PrimaryBtn>Read Full Story</PrimaryBtn>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Why TCR ---------------- */

function WhyTCR() {
  const items = [
    { n: "01", t: "Entire Faculty from NLUs", d: "Every mentor has walked the same corridors your dream college has. No exceptions." },
    { n: "02", t: "Personal Mentorship", d: "One mentor per 15 students. Weekly 1:1 strategy calls, not group broadcasts." },
    { n: "03", t: "Reading-first Pedagogy", d: "We build lawyers, not test-takers. Editorials, case law, and long-form comprehension from day one." },
    { n: "04", t: "Small Batches", d: "Capped at 40 per section. Everyone gets asked, everyone gets seen." },
  ];
  return (
    <Section
      eyebrow="Why TCR"
      title={<>Four things we refuse<br />to compromise on</>}
      className="bg-secondary/40 max-w-none"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10">
          {items.map((it) => (
            <div key={it.n} className="group bg-background p-10 md:p-14 transition-colors hover:bg-primary/5">
              <p className="font-serif text-6xl md:text-7xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {it.n}
              </p>
              <h3 className="mt-6 font-serif text-2xl md:text-3xl font-bold">{it.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Faculty ---------------- */

function Faculty() {
  const f = [
    { n: "Adv. Ishaan Mehra", s: "Legal Reasoning · Constitution", nlu: "NLSIU Bangalore", rank: "AIR 12 · CLAT 2017" },
    { n: "Prof. Riya Kapoor", s: "English · Comprehension", nlu: "NALSAR Hyderabad", rank: "AIR 34 · CLAT 2016" },
    { n: "Adv. Kabir Sood", s: "Logical Reasoning", nlu: "NLU Delhi", rank: "AIR 8 · AILET 2015" },
    { n: "Ms. Anaya Rao", s: "Current Affairs · GK", nlu: "NLU Jodhpur", rank: "AIR 21 · CLAT 2018" },
  ];
  return (
    <Section
      eyebrow="Faculty"
      title={<>Taught by the people<br />you want to <span className="text-primary">become</span>.</>}
      kicker="Every mentor at TCR studied at the same NLUs you're aiming for. They've cracked the exam, they've studied at the top, and now they're building you."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {f.map((p) => (
          <article key={p.n} className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-primary/15 via-secondary to-primary/25 overflow-hidden relative">
              <div className="absolute inset-0 flex items-end p-6">
                <GraduationCap className="h-16 w-16 text-primary/40 transition-transform duration-500 group-hover:-translate-y-1" />
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold tracking-widest text-primary">
                {p.rank.split(" · ")[0]}
              </div>
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold tracking-widest text-primary">{p.nlu.toUpperCase()}</p>
              <h3 className="mt-2 font-serif text-xl font-bold">{p.n}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.s}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12"><GhostBtn>Meet All Faculty</GhostBtn></div>
    </Section>
  );
}

/* ---------------- Methodology ---------------- */

function Methodology() {
  const steps = [
    { i: Target, t: "Diagnostic", d: "We measure exactly where you stand today — subject, section, and speed." },
    { i: ClipboardList, t: "Personal Strategy", d: "A mentor builds a plan around your calendar, target NLU, and weak areas." },
    { i: BookOpen, t: "Concepts", d: "First-principles teaching from NLU alumni. No rote, no shortcuts." },
    { i: Sparkles, t: "Practice", d: "Daily sectional drills with instant analytics on accuracy and pace." },
    { i: Trophy, t: "Mocks", d: "AI-graded full-length mocks that mirror actual paper difficulty." },
    { i: Radio, t: "Revision", d: "Structured spaced-repetition of every mistake you've ever made." },
    { i: GraduationCap, t: "Selection", d: "Final counselling — form filling, college choice, seat allocation." },
  ];
  return (
    <Section
      eyebrow="Methodology"
      title={<>The seven steps between<br />you and <span className="text-primary">an NLU seat</span>.</>}
    >
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-foreground/15 md:-translate-x-px" />
        <div className="space-y-12">
          {steps.map((s, i) => (
            <div key={s.t} className={`relative grid grid-cols-[48px_1fr] md:grid-cols-2 md:gap-16 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className={`md:${i % 2 ? "text-left md:pl-16" : "text-right md:pr-16"} col-start-2 md:col-auto`}>
                <p className="font-serif text-5xl font-bold text-primary/25">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold">{s.t}</h3>
                <p className={`mt-2 text-muted-foreground max-w-md ${i % 2 ? "" : "md:ml-auto"}`}>{s.d}</p>
              </div>
              <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                <s.i className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Courses ---------------- */

function Courses() {
  const c = [
    { t: "CLAT", tag: "FLAGSHIP", d: "Two-year and one-year programs for CLAT-UG. Built around the reading-heavy new pattern.", price: "₹1,20,000", dur: "2 years", featured: true },
    { t: "AILET", tag: "NLU DELHI", d: "Focused prep for AILET's speed-first format. Includes weekly full-length mocks.", price: "₹95,000", dur: "1 year" },
    { t: "CUET Law", tag: "BA LLB", d: "Comprehensive prep for CUET-UG law integrated with domain-specific coaching.", price: "₹75,000", dur: "1 year" },
    { t: "Foundation", tag: "CLASS 9–11", d: "Early-start program that builds reading, reasoning, and vocabulary long before Class 12.", price: "₹60,000/yr", dur: "3 years" },
  ];
  return (
    <Section
      eyebrow="Courses"
      title={<>Four programs. One<br />very serious promise.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {c.map((it) => (
          <div key={it.t} className={`group flex flex-col rounded-2xl border p-8 transition-all ${it.featured ? "bg-foreground text-background border-foreground" : "border-foreground/15 bg-background hover:border-primary/40"}`}>
            <p className={`text-[11px] font-semibold tracking-widest ${it.featured ? "text-primary-foreground/70" : "text-primary"}`}>{it.tag}</p>
            <h3 className="mt-3 font-serif text-3xl font-bold">{it.t}</h3>
            <p className={`mt-4 text-sm leading-relaxed ${it.featured ? "text-background/70" : "text-muted-foreground"}`}>{it.d}</p>
            <div className={`mt-8 pt-6 border-t ${it.featured ? "border-background/15" : "border-foreground/10"} flex items-end justify-between`}>
              <div>
                <p className="font-serif text-2xl font-bold">{it.price}</p>
                <p className={`text-xs mt-1 ${it.featured ? "text-background/60" : "text-muted-foreground"}`}>{it.dur}</p>
              </div>
              <button className={`inline-flex items-center gap-1 text-sm font-semibold ${it.featured ? "text-primary-foreground" : "text-primary"} group-hover:gap-2 transition-all`}>
                Explore <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Results ---------------- */

function Results() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "CLAT", "AILET", "2026", "2025"];
  const r = [
    { rank: "AIR 1", exam: "AILET 2026", name: "Aaryan Singh", college: "NLSIU Bangalore" },
    { rank: "AIR 7", exam: "CLAT 2026", name: "Meera Iyer", college: "NALSAR Hyderabad" },
    { rank: "AIR 14", exam: "AILET 2026", name: "Devansh Rao", college: "NLU Delhi" },
    { rank: "AIR 22", exam: "CLAT 2026", name: "Ananya Bose", college: "NLU Jodhpur" },
    { rank: "AIR 31", exam: "CLAT 2025", name: "Kabir Nanda", college: "WBNUJS Kolkata" },
    { rank: "AIR 45", exam: "AILET 2025", name: "Isha Kulkarni", college: "GNLU Gandhinagar" },
  ];
  return (
    <Section
      eyebrow="Results"
      title={<>Ranks that opened<br />NLU gates.</>}
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f ? "bg-primary text-primary-foreground border-primary" : "border-foreground/20 hover:border-foreground/50"
            }`}
          >{f}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {r.map((s) => (
          <div key={s.name} className="group rounded-xl border border-foreground/10 bg-background p-6 transition-all hover:border-primary/40 hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center font-serif text-lg font-bold text-primary">
                {s.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <p className="font-serif text-3xl font-bold text-primary">{s.rank}</p>
            </div>
            <h3 className="mt-6 font-serif text-xl font-bold">{s.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{s.college}</p>
            <p className="mt-4 text-xs font-semibold tracking-widest text-primary">{s.exam.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Student Experience ---------------- */

function StudentLife() {
  const imgs = [
    { src: libraryImg, t: "Reading Room", d: "6am to midnight. Every day." },
    { src: debateImg, t: "Weekly Debates", d: "Constitution vs Contemporary." },
    { src: libraryImg, t: "Mock Analysis", d: "One-to-one paper walkthrough." },
    { src: debateImg, t: "Counselling", d: "Parents included, always." },
  ];
  return (
    <Section
      eyebrow="Student Experience"
      title={<>A campus that feels<br />like a chapter of your life.</>}
      kicker="Not a coaching centre. A community of aspirants, mentors, and stories that show up before 6 am and stay past midnight."
    >
      <div className="-mx-6 md:-mx-8 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-6 md:px-8 pb-4">
          {imgs.map((im, i) => (
            <article key={i} className="w-[300px] md:w-[420px] flex-shrink-0">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-secondary">
                <img src={im.src} alt={im.t} loading="lazy" width={1280} height={896}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold">{im.t}</h3>
              <p className="text-sm text-muted-foreground">{im.d}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const t = [
    { n: "Meera Iyer", r: "AIR 7 · CLAT 2026", q: "The mentors here saw me before I saw myself. My rank is theirs as much as mine." },
    { n: "Devansh Rao", r: "AIR 14 · AILET 2026", q: "I came in scoring 60. I left scoring 148. This place changes what you think is possible." },
    { n: "Ananya Bose", r: "AIR 22 · CLAT 2026", q: "Small batches meant I asked every question I ever had. That's the whole difference." },
  ];
  return (
    <Section eyebrow="In their words" title={<>Told by the people<br />who lived it.</>} className="bg-foreground text-background max-w-none">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.map((it) => (
          <div key={it.n} className="rounded-2xl border border-background/15 p-8 flex flex-col">
            <Play className="h-10 w-10 text-primary fill-primary/40" />
            <p className="mt-6 font-serif text-xl leading-snug flex-1">"{it.q}"</p>
            <div className="mt-8 pt-6 border-t border-background/15">
              <p className="font-serif font-bold text-lg">{it.n}</p>
              <p className="text-xs text-primary font-semibold tracking-widest mt-1">{it.r.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Campuses ---------------- */

function Campuses() {
  const c = [
    { city: "Lucknow", addr: "Hazratganj · Gomti Nagar", metro: "Hazratganj Metro · 2 min", rating: "4.9" },
    { city: "Delhi", addr: "Karol Bagh · Central Delhi", metro: "Karol Bagh Metro · 4 min", rating: "4.8" },
    { city: "Bangalore", addr: "Indiranagar · 100ft Road", metro: "Indiranagar Metro · 5 min", rating: "4.9" },
  ];
  return (
    <Section eyebrow="Campuses" title={<>Three cities.<br />Same standard.</>}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {c.map((it) => (
          <article key={it.city} className="group rounded-2xl overflow-hidden border border-foreground/10 bg-background">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={campusImg} alt={`TCR ${it.city} campus`} loading="lazy" width={1024} height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold">{it.city}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" /> <span className="font-semibold">{it.rating}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4" />{it.addr}</p>
              <p className="mt-1 text-sm text-muted-foreground pl-6">{it.metro}</p>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-md bg-primary text-primary-foreground text-sm font-medium py-2.5 hover:bg-primary/90">Visit Campus</button>
                <button className="rounded-md border border-foreground/20 px-4 text-sm font-medium hover:border-foreground/50">Directions</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Free Mock ---------------- */

function FreeMock() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 md:px-8 py-16">
      <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 40%)"
        }} />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-primary-foreground/70">Free · No credit card</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl font-bold leading-[1.05]">
              Take a Free Mock.<br />See your AIR today.
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-lg">
              A full-length CLAT-pattern paper, AI-graded within minutes. You'll get an expected NLU, section-wise weaknesses, and a study plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-md bg-background text-foreground px-7 py-4 text-[15px] font-semibold hover:bg-background/90">
                Take Free Mock Test
              </button>
              <button className="rounded-md border border-primary-foreground/40 px-7 py-4 text-[15px] font-medium hover:bg-primary-foreground/10">
                Get AIR Prediction
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {["Real CLAT-pattern paper", "AI-graded weakness report", "Expected AIR & NLU prediction", "Personalised 30-day plan"].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-lg bg-background/10 backdrop-blur px-5 py-4 border border-background/10">
                <div className="h-2 w-2 rounded-full bg-background" />
                <p className="text-sm font-medium">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Resources ---------------- */

function Resources() {
  const cats = ["Blogs", "Current Affairs", "Vocabulary", "PYQs", "Books", "Guides"];
  return (
    <Section eyebrow="Resources" title={<>Start learning<br />before you enrol.</>}>
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-3 rounded-full border border-foreground/20 bg-background px-6 py-4 shadow-sm">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            placeholder="Search articles, current affairs, PYQs…"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
          />
          <button className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium">Search</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-10">
        {cats.map((c) => (
          <button key={c} className="rounded-full border border-foreground/15 px-5 py-2 text-sm hover:border-primary hover:text-primary">
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { t: "How to read the newspaper for CLAT 2027", c: "Guides", d: "12 min read" },
          { t: "This week in Current Affairs — 100 highlights", c: "Current Affairs", d: "Updated today" },
          { t: "AILET 2026 paper analysis — section-wise", c: "PYQs", d: "8 min read" },
        ].map((b) => (
          <article key={b.t} className="group rounded-xl border border-foreground/10 overflow-hidden hover:border-primary/40 transition-colors">
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary to-primary/20" />
            <div className="p-6">
              <p className="text-xs font-semibold tracking-widest text-primary">{b.c.toUpperCase()}</p>
              <h3 className="mt-3 font-serif text-lg font-bold group-hover:text-primary transition-colors">{b.t}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{b.d}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Live at TCR ---------------- */

function LiveAtTCR() {
  const items = [
    { icon: Radio, tag: "LIVE NOW", t: "Constitutional Law · Article 21 deep-dive", sub: "with Adv. Ishaan Mehra" },
    { icon: Calendar, tag: "TOMORROW · 7PM", t: "Full-length Mock #24", sub: "Open for all TCR students" },
    { icon: Trophy, tag: "TODAY", t: "Devansh scored 148 in Mock #23", sub: "New personal best" },
    { icon: BookOpen, tag: "TODAY", t: "Current Affairs · 12 stories that matter", sub: "Published 2 hours ago" },
    { icon: MessageCircle, tag: "STARTING", t: "New CLAT 2027 batch — Aug 5", sub: "Only 8 seats remaining" },
  ];
  return (
    <Section eyebrow="Live at TCR" title={<>Not a brochure.<br />A living campus.</>}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((it, i) => (
          <div key={i} className={`rounded-xl border border-foreground/10 p-6 flex flex-col justify-between ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-background"}`}>
            <div>
              <div className="flex items-center gap-2">
                {i === 0 && <span className="h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />}
                <it.icon className="h-5 w-5" />
                <p className="text-[11px] font-semibold tracking-widest">{it.tag}</p>
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold leading-snug">{it.t}</h3>
            </div>
            <p className={`mt-4 text-sm ${i === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{it.sub}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: "Who is TCR for?", a: "TCR is for serious CLAT, AILET, and CUET-Law aspirants — from Class 9 Foundation students to droppers taking a focused final year." },
    { q: "Are classes offline or online?", a: "Both. Every batch runs simultaneously on campus (Lucknow, Delhi, Bangalore) and live online with full recording access." },
    { q: "What is the fee structure?", a: "Programs range from ₹60,000/year (Foundation) to ₹1,20,000 (2-year CLAT). Full transparency in your counselling call — no hidden charges, ever." },
    { q: "How is TCR different from Allen or Law Prep?", a: "Every mentor is an NLU alumnus. Batches are capped at 40. Every student has a personal mentor for weekly 1:1s. That's the standard here, not the premium." },
    { q: "Do you offer scholarships?", a: "Yes. We run a merit-based scholarship test twice a year offering up to 100% waiver for top scorers." },
  ];
  return (
    <Section eyebrow="FAQ" title={<>Still have doubts?<br /><span className="text-primary">Good.</span></>}>
      <div className="max-w-3xl divide-y divide-foreground/10 border-y border-foreground/10">
        {items.map((it, i) => (
          <div key={i}>
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-6 text-left">
              <span className="font-serif text-lg md:text-xl font-semibold pr-6">{it.q}</span>
              {open === i ? <Minus className="h-5 w-5 text-primary flex-shrink-0" /> : <Plus className="h-5 w-5 text-primary flex-shrink-0" />}
            </button>
            <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <p className="overflow-hidden text-muted-foreground leading-relaxed">{it.a}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 md:px-8 py-24 md:py-40 text-center">
      <p className="text-[13px] font-semibold tracking-[0.22em] text-primary uppercase">Ready?</p>
      <h2 className="mt-6 font-serif text-5xl md:text-8xl font-bold leading-[1] tracking-tight">
        Your NLU is closer<br />than <span className="text-primary italic">you think</span>.
      </h2>
      <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
        Book a free 30-minute counselling call. A senior mentor will map your path — no sales pitch.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <PrimaryBtn>Book Counselling</PrimaryBtn>
        <GhostBtn>Call +91 92207 61399</GhostBtn>
        <button className="inline-flex items-center gap-3 rounded-md bg-[#25D366] px-7 py-4 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-[#22bf5b]">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </button>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  const cols = [
    { h: "Courses", l: ["CLAT", "AILET", "CUET Law", "Foundation", "Crash Course"] },
    { h: "Company", l: ["About", "Faculty", "Careers", "Press", "Contact"] },
    { h: "Resources", l: ["Blog", "Current Affairs", "PYQs", "Vocabulary", "Free Mock"] },
    { h: "Campuses", l: ["Lucknow", "Delhi", "Bangalore"] },
  ];
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-4xl font-bold text-primary">TCR</span>
              <span className="text-primary text-2xl">⚖</span>
            </div>
            <p className="mt-3 font-serif text-sm tracking-[0.22em]">THE COURT ROOM</p>
            <p className="mt-6 text-background/60 max-w-xs text-sm leading-relaxed">
              India's modern law school preparation institute. Where future lawyers are built.
            </p>
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-widest text-primary">NEWSLETTER</p>
              <form className="mt-3 flex gap-2 max-w-sm">
                <input placeholder="you@email.com" className="flex-1 rounded-md bg-background/10 border border-background/20 px-4 py-2.5 text-sm outline-none focus:border-primary" />
                <button className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium">Join</button>
              </form>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-xs font-semibold tracking-widest text-primary">{c.h.toUpperCase()}</p>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((li) => (
                  <li key={li}><a className="text-sm text-background/70 hover:text-background transition-colors" href="#">{li}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-background/50">© {new Date().getFullYear()} The Court Room. All rights reserved. · Privacy · Terms</p>
          <div className="flex items-center gap-3">
            {[Instagram, Youtube, Twitter, Linkedin, Mail].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- mobile bottom bar ---------------- */

function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-background/90 backdrop-blur-xl border-t border-foreground/10 grid grid-cols-3 h-16">
      <a href="tel:+919220761399" className="flex flex-col items-center justify-center gap-1 text-xs font-medium">
        <Phone className="h-4 w-4 text-primary" /> Call
      </a>
      <a href="#" className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-white bg-[#25D366]">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <a href="#" className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-primary-foreground bg-primary">
        <Sparkles className="h-4 w-4" /> Free Mock
      </a>
    </div>
  );
}

/* ---------------- page ---------------- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <TrustStrip />
        <Air1Story />
        <WhyTCR />
        <Faculty />
        <Methodology />
        <Courses />
        <Results />
        <StudentLife />
        <Testimonials />
        <Campuses />
        <FreeMock />
        <Resources />
        <LiveAtTCR />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
