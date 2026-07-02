import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Play,
  Plus,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-courtroom.webp";
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
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Faculty", href: "/faculties" },
  { label: "Branches", href: "/branches" },
  { label: "Results", href: "/results" },
];

function Section({
  eyebrow, title, accent, kicker, id, children, className = "",
}: {
  eyebrow?: string; title?: React.ReactNode; accent?: string; kicker?: string;
  id?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:px-8 md:py-24 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 max-w-3xl md:mb-14">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary" data-testid={`${id || "section"}-eyebrow`}>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-4 font-serif text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl" data-testid={`${id || "section"}-heading`}>
              {title}{accent && <span className="text-primary">{accent}</span>}
            </h2>
          )}
          {kicker && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid={`${id || "section"}-kicker`}>{kicker}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function PrimaryBtn({ children, href = "#", testId }: { children: React.ReactNode; href?: string; testId: string }) {
  return (
    <a href={href} data-testid={testId} className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/95 active:scale-95 sm:text-[15px]">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}
function GhostBtn({ children, href = "#", testId }: { children: React.ReactNode; href?: string; testId: string }) {
  return (
    <a href={href} data-testid={testId} className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md border-2 border-foreground/15 bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary active:scale-95 sm:text-[15px]">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------------- nav ---------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky inset-x-0 top-0 z-50 border-b border-border bg-background/95"
      data-testid="site-header"
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 md:h-20 md:px-8">
        <a href="#top" className="flex min-h-12 items-center gap-3" data-testid="header-logo-link" aria-label="The Court Room home">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl font-black text-primary">TCR</span>
            <span className="mt-0.5 text-[9px] font-bold tracking-[0.22em] text-foreground">
              THE COURT ROOM
            </span>
          </div>
          <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-testid={`header-nav-${item.label.toLowerCase()}-link`}
              className="flex min-h-12 items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+919220761399" data-testid="header-phone-link" className="hidden min-h-12 items-center gap-2 text-sm font-semibold md:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 text-primary">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <span className="hidden xl:inline">+91 92207 61399</span>
          </a>
          <a href="#final-cta" data-testid="header-counselling-button" className="hidden min-h-12 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 sm:inline-flex">
            Book Counselling
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            data-testid="mobile-menu-toggle-button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md border border-border bg-card text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden" data-testid="mobile-menu-panel">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${item.label.toLowerCase()}-link`}
                className="flex min-h-12 items-center rounded-md border border-border px-4 text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

/* ---------------- hero ---------------- */

const stats = [
  { icon: Trophy, title: "AIR 1", sub: "AILET 2026" },
  { icon: Users, title: "100%", sub: "NLU Alumni Faculty" },
  { icon: Building2, title: "3", sub: "Campuses" },
  { icon: CheckCircle2, title: "1:15", sub: "Mentor Ratio" },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-[linear-gradient(135deg,#fafafa_0%,#f3f0e8_55%,#ffffff_100%)]">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:px-8 md:py-20 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary" data-testid="hero-eyebrow">
            INDIA&apos;S MODERN LAW SCHOOL PREPARATION INSTITUTE
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-black leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl" data-testid="hero-heading">
            Where Future <span className="text-primary">Lawyers</span> Are Built
            <span className="text-primary">.</span>
          </h1>
          <div className="mt-6 h-[3px] w-24 bg-primary" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="hero-subtitle">
            NLU alumni mentors, small batches, and a clear weekly plan for CLAT, AILET and NLU aspirants.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-[96px_1fr] items-end gap-5 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5" data-testid="hero-rank-card">
            <div className="rounded-xl bg-primary px-4 py-4 text-primary-foreground">
              <p className="text-xs font-bold tracking-widest">AIR</p>
              <p className="font-serif text-6xl font-black leading-none">1</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-black">AILET 2026</p>
              <p className="text-muted-foreground">In Our Very First Year</p>
              <p className="mt-2 text-xs font-bold tracking-[0.18em] text-primary">AARYAN SINGH</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryBtn href="#free-mock" testId="hero-free-mock-button">Take Free Mock Test</PrimaryBtn>
            <GhostBtn href="#final-cta" testId="hero-counselling-button">Book Free Counselling</GhostBtn>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none" data-testid="hero-image-card">
          <div className="absolute -left-4 top-8 hidden rounded-full bg-card px-4 py-2 text-xs font-bold tracking-[0.18em] text-primary shadow-sm sm:block">CLAT</div>
          <div className="absolute -right-2 top-24 hidden rounded-full bg-card px-4 py-2 text-xs font-bold tracking-[0.18em] text-primary shadow-sm sm:block">AILET</div>
          <img
            src={heroImage}
            alt="Stack of law books with courthouse and scales of justice"
            width={1024} height={1024}
            fetchPriority="high"
            className="h-auto w-full rounded-[2rem] object-contain"
          />
          <button data-testid="hero-story-video-button" className="absolute bottom-4 right-4 flex min-h-12 items-center gap-3 rounded-full bg-card px-2 py-2 pr-4 shadow-md transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 sm:bottom-6 sm:right-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="h-4 w-4 fill-current" />
            </span>
            <span className="text-sm font-semibold">Watch Story</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pb-12 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm md:grid-cols-4 md:p-4" data-testid="hero-stats-grid">
          {stats.map((s) => (
            <div key={s.title} className="flex items-center gap-3 rounded-xl bg-secondary/60 p-4">
              <s.icon className="h-7 w-7 shrink-0 text-primary" strokeWidth={1.8} />
              <div>
                <p className="font-serif text-lg font-black leading-tight" data-testid={`hero-stat-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{s.title}</p>
                <p className="text-sm text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- polished sections ---------------- */

function ProofStrip() {
  const items = [
    { value: "AIR 1", label: "AILET 2026 result" },
    { value: "100%", label: "NLU alumni mentors" },
    { value: "1:15", label: "personal mentor ratio" },
    { value: "5,000+", label: "aspirants mentored" },
  ];
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 md:px-8" data-testid="proof-strip-section">
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl bg-secondary/70 p-5" data-testid={`proof-${item.value.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}>
            <p className="font-serif text-3xl font-black text-primary">{item.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Air1Story() {
  const timeline = ["Joined foundation batch", "Built a weekly reading habit", "Corrected every mock mistake", "Reached AILET AIR 1"];
  return (
    <Section
      id="air-1"
      eyebrow="Student story"
      title={<>From first mock nerves to <span className="text-primary">AIR 1</span>.</>}
      kicker="A focused journey shown simply — so parents and students understand what happens after joining."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm" data-testid="air-one-story-card">
          <div className="relative aspect-[4/5] bg-secondary">
            <img src={topperPortrait} alt="Aaryan Singh, AILET 2026 All India Rank 1" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover object-center" />
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-background/95 p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">AIR 01</p>
              <p className="font-serif text-2xl font-black">Aaryan Singh</p>
              <p className="text-sm text-muted-foreground">AILET 2026 · First year result</p>
            </div>
          </div>
        </article>
        <div>
          <Quote className="h-10 w-10 text-primary/35" />
          <blockquote className="mt-4 font-serif text-2xl font-bold leading-snug text-foreground md:text-3xl" data-testid="air-one-quote">
            “TCR made law prep feel clear. I knew what to read, what to revise, and who to ask.”
          </blockquote>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {timeline.map((step, index) => (
              <div key={step} className="rounded-xl border border-border bg-card p-5" data-testid={`air-one-step-${index + 1}`}>
                <p className="font-serif text-3xl font-black text-primary">0{index + 1}</p>
                <p className="mt-2 font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyTCR() {
  const items = [
    { icon: GraduationCap, title: "NLU alumni faculty", text: "Students learn from mentors who have already cleared the same path." },
    { icon: Users, title: "Small batch attention", text: "Every learner gets room to ask, repeat, and improve without fear." },
    { icon: BookOpen, title: "Reading-first method", text: "Daily editorials, legal passages, and reasoning drills build real confidence." },
    { icon: Target, title: "Weekly personal plan", text: "Mocks, weak areas, and revision are organised into one simple checklist." },
  ];
  return (
    <section className="bg-secondary/60">
      <Section id="why-tcr" eyebrow="Why TCR" title={<>Serious prep, explained in a way students can follow.</>} className="max-w-[1200px]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1" data-testid={`why-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}>
              <item.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 font-serif text-2xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </section>
  );
}

function Faculty() {
  const mentors = [
    { name: "Adv. Ishaan Mehra", subject: "Legal Reasoning", school: "NLSIU Bangalore" },
    { name: "Prof. Riya Kapoor", subject: "English & Reading", school: "NALSAR Hyderabad" },
    { name: "Adv. Kabir Sood", subject: "Logic & Mocks", school: "NLU Delhi" },
  ];
  return (
    <Section id="mentors" eyebrow="Mentors" title={<>Taught by people students can look up to.</>} kicker="A clean mentor section builds trust quickly without making the page heavy.">
      <div className="grid gap-4 md:grid-cols-3">
        {mentors.map((mentor) => (
          <article key={mentor.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm" data-testid={`mentor-${mentor.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GraduationCap className="h-8 w-8" />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">{mentor.school}</p>
            <h3 className="mt-2 font-serif text-2xl font-black">{mentor.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{mentor.subject}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Courses() {
  const courses = [
    { title: "CLAT", tag: "Flagship", text: "One and two-year classroom programs with weekly mocks.", featured: true },
    { title: "AILET", tag: "NLU Delhi", text: "Speed-first preparation for the AILET pattern." },
    { title: "Foundation", tag: "Class 9–11", text: "Reading and reasoning habits before exam pressure starts." },
  ];
  return (
    <Section id="courses" eyebrow="Courses" title={<>Choose the program that fits your class and exam.</>}>
      <div className="grid gap-4 md:grid-cols-3">
        {courses.map((course) => (
          <article key={course.title} className={`rounded-2xl border p-6 shadow-sm ${course.featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`} data-testid={`course-${course.title.toLowerCase()}-card`}>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${course.featured ? "text-primary-foreground/70" : "text-primary"}`}>{course.tag}</p>
            <h3 className="mt-3 font-serif text-3xl font-black">{course.title}</h3>
            <p className={`mt-4 text-sm leading-relaxed ${course.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{course.text}</p>
            <a href="#final-cta" data-testid={`course-${course.title.toLowerCase()}-explore-link`} className={`mt-6 inline-flex min-h-12 items-center gap-2 rounded-md px-4 text-sm font-bold ${course.featured ? "bg-background text-foreground" : "bg-secondary text-foreground"}`}>
              Explore program <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Results() {
  const results = [
    { rank: "AIR 1", exam: "AILET 2026", name: "Aaryan Singh" },
    { rank: "AIR 7", exam: "CLAT 2026", name: "Meera Iyer" },
    { rank: "AIR 14", exam: "AILET 2026", name: "Devansh Rao" },
  ];
  return (
    <Section id="results" eyebrow="Results" title={<>Ranks that make confidence visible.</>}>
      <div className="grid gap-4 md:grid-cols-3">
        {results.map((student) => (
          <article key={student.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm" data-testid={`result-${student.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}>
            <p className="font-serif text-5xl font-black text-primary">{student.rank}</p>
            <h3 className="mt-5 font-serif text-2xl font-black">{student.name}</h3>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">{student.exam}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function StudentLife() {
  const items = [
    { src: libraryImg, title: "Reading room", text: "Quiet study blocks that build stamina." },
    { src: debateImg, title: "Debate practice", text: "Students learn to speak and reason clearly." },
    { src: campusImg, title: "Campus support", text: "Parents and students get counselling together." },
  ];
  return (
    <Section id="student-life" eyebrow="Student experience" title={<>A campus that feels organised, warm, and serious.</>}>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm" data-testid={`student-life-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}>
            <div className="aspect-[4/3] bg-secondary">
              <img src={item.src} alt={item.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover object-center" />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-2xl font-black">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FreeMock() {
  const benefits = ["CLAT-pattern paper", "Section-wise score view", "Expected AIR direction", "30-day improvement plan"];
  return (
    <section id="free-mock" className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 md:px-8" data-testid="free-mock-section">
      <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-sm md:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70">Free · beginner friendly</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl" data-testid="free-mock-heading">Take a free mock. Know where you stand.</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">A simple first step for any student browsing on mobile: test, understand, and book guidance.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#" data-testid="free-mock-start-button" className="inline-flex min-h-12 items-center justify-center rounded-md bg-background px-6 text-sm font-bold text-foreground">Start free mock</a>
              <a href="#final-cta" data-testid="free-mock-counselling-button" className="inline-flex min-h-12 items-center justify-center rounded-md border border-primary-foreground/40 px-6 text-sm font-bold text-primary-foreground">Talk to mentor</a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-4" data-testid={`free-mock-benefit-${benefit.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <p className="text-sm font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Campuses() {
  const campuses = ["Lucknow", "Delhi", "Bangalore"];
  return (
    <Section id="campuses" eyebrow="Campuses" title={<>Three cities. Same student-first standard.</>}>
      <div className="grid gap-4 md:grid-cols-3">
        {campuses.map((city) => (
          <article key={city} className="rounded-2xl border border-border bg-card p-6 shadow-sm" data-testid={`campus-${city.toLowerCase()}-card`}>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-3xl font-black">{city}</h3>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-primary"><Star className="h-4 w-4 fill-current" />4.9</span>
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Central location with classroom and counselling support.</p>
            <a href="#final-cta" data-testid={`campus-${city.toLowerCase()}-visit-link`} className="mt-6 inline-flex min-h-12 items-center rounded-md bg-secondary px-4 text-sm font-bold">Visit campus</a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: "Who is TCR for?", a: "Students preparing for CLAT, AILET, CUET-Law, or early foundation batches from Class 9 onward." },
    { q: "Can a beginner join?", a: "Yes. The first few weeks focus on reading habits, basics, and a clear personal routine." },
    { q: "Are classes online or offline?", a: "Both options are shown clearly during counselling, based on the student's city and schedule." },
    { q: "How do parents track progress?", a: "Mock results, weak areas, and mentor feedback are explained in simple review conversations." },
  ];
  return (
    <Section id="faq" eyebrow="FAQ" title={<>Simple answers before you call.</>}>
      <div className="max-w-3xl divide-y divide-border border-y border-border" data-testid="faq-list">
        {items.map((item, index) => (
          <div key={item.q}>
            <button type="button" onClick={() => setOpen(open === index ? null : index)} data-testid={`faq-question-${index + 1}-button`} className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left">
              <span className="font-serif text-lg font-black md:text-xl">{item.q}</span>
              {open === index ? <Minus className="h-5 w-5 shrink-0 text-primary" /> : <Plus className="h-5 w-5 shrink-0 text-primary" />}
            </button>
            {open === index && <p className="pb-5 text-base leading-relaxed text-muted-foreground" data-testid={`faq-answer-${index + 1}`}>{item.a}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section id="final-cta" className="mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6 md:px-8 md:py-24" data-testid="final-cta-section">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Ready?</p>
      <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl" data-testid="final-cta-heading">
        Your NLU plan can start with one honest conversation.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Book a free 30-minute counselling call and get a practical path for your current class, speed, and target exam.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <PrimaryBtn href="#" testId="final-counselling-button">Book Counselling</PrimaryBtn>
        <GhostBtn href="tel:+919220761399" testId="final-call-button">Call +91 92207 61399</GhostBtn>
        <a href="#" data-testid="final-whatsapp-button" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-95">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: "Courses", href: "/courses" },
    { label: "Blog", href: "/blog" },
    { label: "Faculty", href: "/faculties" },
    { label: "Branches", href: "/branches" },
    { label: "FAQs", href: "/faqs" },
  ];
  return (
    <footer className="bg-foreground pb-20 text-background lg:pb-0" data-testid="site-footer">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl font-black text-primary">TCR</span>
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-3 text-sm font-bold tracking-[0.22em]">THE COURT ROOM</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-background/65">India&apos;s modern law school preparation institute. Fast to read, easy to use, and built for students on any phone.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Quick links</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a key={link.label} href={link.href} data-testid={`footer-${link.label.toLowerCase()}-link`} className="flex min-h-12 items-center rounded-md border border-background/15 px-4 text-sm font-semibold text-background/75 transition-colors hover:text-background">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-background/15 pt-6 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p data-testid="footer-copyright">© {new Date().getFullYear()} The Court Room. All rights reserved.</p>
          <a href="mailto:hello@thecourtroom.in" data-testid="footer-email-link" className="inline-flex min-h-10 items-center gap-2"><Mail className="h-4 w-4" /> hello@thecourtroom.in</a>
        </div>
      </div>
    </footer>
  );
}

function MobileBottomBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-3 border-t border-border bg-card lg:hidden" data-testid="mobile-bottom-bar">
      <a href="tel:+919220761399" data-testid="mobile-bottom-call-link" className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-bold">
        <Phone className="h-4 w-4 text-primary" /> Call
      </a>
      <a href="#final-cta" data-testid="mobile-bottom-counselling-link" className="flex min-h-16 flex-col items-center justify-center gap-1 bg-secondary text-xs font-bold">
        <Calendar className="h-4 w-4 text-primary" /> Counselling
      </a>
      <a href="#free-mock" data-testid="mobile-bottom-free-mock-link" className="flex min-h-16 flex-col items-center justify-center gap-1 bg-primary text-xs font-bold text-primary-foreground">
        <Sparkles className="h-4 w-4" /> Free Mock
      </a>
    </nav>
  );
}

/* ---------------- page ---------------- */

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <Nav />
      <main className="pb-8 lg:pb-0" data-testid="homepage-main-content">
        <Hero />
        <ProofStrip />
        <Air1Story />
        <WhyTCR />
        <Faculty />
        <Courses />
        <Results />
        <StudentLife />
        <FreeMock />
        <Campuses />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
