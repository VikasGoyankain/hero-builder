import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
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
  PlayCircle,
  Plus,
  Quote,
  Sparkles,
  Star,
  Target,
  Users,
  X,
} from "lucide-react";
import heroImage from "@/assets/hero-courtroom.webp";
import topperPortrait from "@/assets/topper-portrait.jpg";
import libraryImg from "@/assets/student-library.jpg";
import debateImg from "@/assets/student-debate.jpg";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TCR — Future Lawyers Begin Here" },
      {
        name: "description",
        content:
          "A brand by NLU alumnus. Thoughtful, reading-first preparation and personal mentorship for CLAT, AILET and NLU aspirants.",
      },
      { property: "og:title", content: "TCR — Future Lawyers Begin Here" },
      {
        property: "og:description",
        content: "Built by NLU alumni. Personal mentorship. Modern legal education.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------- brand primitives ---------------- */

const navItems = [
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculties" },
  { label: "Results", href: "/results" },
  { label: "Blog", href: "/blog" },
  { label: "Branches", href: "/branches" },
];

function TcrLogo({ variant = "badge" }: { variant?: "badge" | "inverted" }) {
  if (variant === "inverted") {
    return (
      <span
        className="inline-flex flex-col leading-none"
        data-testid="footer-logo"
        aria-label="TCR — A Brand by NLU Alumnus"
      >
        <span className="pl-[0.28em] font-serif text-3xl font-bold tracking-[0.28em] text-gold">
          TCR
        </span>
        <span className="mt-3 h-px w-12 bg-gold/50" />
        <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/70">
          A Brand by NLU Alumnus
        </span>
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-3"
      data-testid="header-logo"
      aria-label="TCR — A Brand by NLU Alumnus"
    >
      <span className="flex items-center justify-center rounded-xl bg-primary px-3.5 py-2 shadow-soft">
        <span className="pl-[0.24em] font-serif text-xl font-bold leading-none tracking-[0.24em] text-gold">
          TCR
        </span>
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="h-px w-10 bg-gold" />
        <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          A Brand by NLU Alumnus
        </span>
      </span>
    </span>
  );
}

type BtnProps = { children: React.ReactNode; href?: string; testId: string; className?: string };

function PrimaryBtn({ children, href = "#", testId, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      data-testid={testId}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-premium active:translate-y-0 sm:text-[15px] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function PremiumBtn({ children, href = "#", testId, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      data-testid={testId}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-gold bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary hover:bg-primary hover:text-primary-foreground active:translate-y-0 sm:text-[15px] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function SecondaryBtn({ children, href = "#", testId, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      data-testid={testId}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-primary/20 bg-card px-6 py-3 text-sm font-semibold text-primary transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary hover:shadow-soft active:translate-y-0 sm:text-[15px] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ children, testId }: { children: React.ReactNode; testId?: string }) {
  return (
    <p
      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold"
      data-testid={testId}
    >
      <span className="h-px w-6 bg-gold" />
      {children}
    </p>
  );
}

function Section({
  eyebrow,
  title,
  accent,
  kicker,
  id,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  accent?: string;
  kicker?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:px-8 md:py-24 ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-10 max-w-3xl md:mb-14">
          {eyebrow && <Eyebrow testId={`${id || "section"}-eyebrow`}>{eyebrow}</Eyebrow>}
          {title && (
            <h2
              className="mt-4 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              data-testid={`${id || "section"}-heading`}
            >
              {title}
              {accent && <span className="text-gold">{accent}</span>}
            </h2>
          )}
          {kicker && (
            <p
              className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
              data-testid={`${id || "section"}-kicker`}
            >
              {kicker}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

/* Animated counter that runs once when scrolled into view. */
function useCountUp(target: number, durationMs = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}

function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const { ref, value } = useCountUp(to);
  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ---------------- nav ---------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl"
      data-testid="site-header"
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <a href="#top" className="flex min-h-12 items-center" data-testid="header-logo-link" aria-label="TCR home">
          <TcrLogo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-testid={`header-nav-${item.label.toLowerCase()}-link`}
              className="relative flex min-h-12 items-center text-sm font-medium text-foreground/75 transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-200 hover:text-foreground hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919220761399"
            data-testid="header-phone-link"
            className="hidden min-h-12 items-center gap-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground xl:flex"
          >
            <Phone className="h-4 w-4 text-gold" strokeWidth={1.75} />
            +91 92207 61399
          </a>
          <a
            href="#final-cta"
            data-testid="header-counselling-button"
            className="hidden min-h-12 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-1.5 hover:shadow-premium sm:inline-flex"
          >
            Book a Mentor Call
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            data-testid="mobile-menu-toggle-button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-4 py-4 lg:hidden" data-testid="mobile-menu-panel">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${item.label.toLowerCase()}-link`}
                className="flex min-h-12 items-center rounded-lg border border-border px-4 text-sm font-semibold transition-colors hover:border-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#final-cta"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-12 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground"
          >
            Book a Mentor Call
          </a>
        </nav>
      )}
    </header>
  );
}

/* ---------------- hero ---------------- */

type HeroStat = { display?: string; to?: number; suffix?: string; sub: string };

const heroStats: HeroStat[] = [
  { display: "AIR 1", sub: "AILET 2026" },
  { to: 100, suffix: "%", sub: "NLU alumni mentors" },
  { display: "1:15", sub: "Personal mentor ratio" },
  { to: 3, sub: "City campuses" },
];

function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTilt({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section
      id="top"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative overflow-hidden border-b border-border bg-[linear-gradient(180deg,#FAF8F4_0%,#F3EFE8_100%)]"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]"
        style={{ transform: `translate(${tilt.x * -20}px, ${tilt.y * -20}px)` }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        style={{ transform: `translate(${tilt.x * 20}px, ${tilt.y * 20}px)` }}
      />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <Eyebrow testId="hero-eyebrow">Built by NLU Alumni</Eyebrow>
          <h1
            className="mt-6 max-w-2xl font-serif text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            data-testid="hero-heading"
          >
            Future <span className="text-gold">lawyers</span> begin here.
          </h1>
          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            data-testid="hero-subtitle"
          >
            Thoughtful, reading-first preparation and personal mentorship for CLAT, AILET and NLU
            aspirants — designed by the people who have already walked the path.
          </p>

          <div
            className="mt-9 grid max-w-md grid-cols-[auto_1fr] items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-premium"
            data-testid="hero-rank-card"
          >
            <div className="flex flex-col items-center rounded-xl bg-primary px-5 py-4 text-primary-foreground">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                AIR
              </span>
              <span className="font-numeric text-5xl font-extrabold leading-none">1</span>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold leading-tight">AILET 2026</p>
              <p className="text-sm text-muted-foreground">In our very first year</p>
              <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-success">
                <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={1.75} /> Verified result
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryBtn href="#final-cta" testId="hero-counselling-button">
              Book a Mentor Call
            </PrimaryBtn>
            <PremiumBtn href="#diagnostic" testId="hero-free-mock-button">
              Take a Diagnostic Test
            </PremiumBtn>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none" data-testid="hero-image-card">
          <div
            className="absolute -left-3 top-10 z-10 hidden rounded-full border border-gold/40 bg-card px-4 py-2 text-xs font-semibold tracking-[0.18em] text-primary shadow-soft sm:block"
            style={{ transform: `translate(${tilt.x * 24}px, ${tilt.y * 24}px)` }}
          >
            CLAT
          </div>
          <div
            className="absolute -right-2 top-28 z-10 hidden rounded-full border border-gold/40 bg-card px-4 py-2 text-xs font-semibold tracking-[0.18em] text-primary shadow-soft sm:block"
            style={{ transform: `translate(${tilt.x * 36}px, ${tilt.y * 36}px)` }}
          >
            AILET
          </div>
          <div
            className="overflow-hidden rounded-[28px] border border-border bg-card p-3 shadow-premium-lg"
            style={{ transform: `translate(${tilt.x * 12}px, ${tilt.y * 12}px)` }}
          >
            <img
              src={heroImage}
              alt="Stack of law books with courthouse and scales of justice"
              width={1024}
              height={1024}
              fetchPriority="high"
              className="h-auto w-full rounded-[20px] object-contain"
            />
          </div>
          <button
            data-testid="hero-story-video-button"
            className="absolute bottom-6 right-6 flex min-h-12 items-center gap-3 rounded-full bg-card px-3 py-2 pr-5 shadow-premium transition-all duration-200 hover:-translate-y-1.5"
          >
            <PlayCircle className="h-8 w-8 text-primary" strokeWidth={1.5} />
            <span className="text-sm font-semibold">Watch the story</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 md:px-8">
        <div
          className="grid grid-cols-2 divide-border rounded-2xl border border-border bg-card p-2 shadow-premium sm:divide-x md:grid-cols-4"
          data-testid="hero-stats-grid"
        >
          {heroStats.map((stat) => (
            <div key={stat.sub} className="px-5 py-5 sm:px-6">
              <p
                className="font-numeric text-3xl font-extrabold tracking-tight text-primary"
                data-testid={`hero-stat-${stat.sub.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                {stat.display ?? <CountUp to={stat.to as number} suffix={stat.suffix} />}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- sections ---------------- */

function Air1Story() {
  const timeline = [
    "Joined the foundation batch",
    "Built a daily reading habit",
    "Corrected every mock mistake",
    "Reached AILET AIR 1",
  ];
  return (
    <Section
      id="air-1"
      eyebrow="A student journey"
      title={
        <>
          From first-mock nerves to <span className="text-gold">AIR 1</span>.
        </>
      }
      kicker="A focused path, shown simply — so students and parents understand exactly what happens after joining."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <article
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-premium"
          data-testid="air-one-story-card"
        >
          <div className="relative aspect-[4/5] bg-secondary">
            <img
              src={topperPortrait}
              alt="Aaryan Singh, AILET 2026 All India Rank 1"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-background/95 p-4 shadow-soft backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                AIR 01
              </p>
              <p className="font-serif text-2xl font-bold">Aaryan Singh</p>
              <p className="text-sm text-muted-foreground">AILET 2026 · First-year result</p>
            </div>
          </div>
        </article>
        <div>
          <Quote className="h-10 w-10 text-gold/40" strokeWidth={1.5} />
          <blockquote
            className="mt-5 font-serif text-3xl font-medium italic leading-snug text-foreground md:text-4xl"
            data-testid="air-one-quote"
          >
            &ldquo;TCR made law prep feel clear. I always knew what to read, what to revise, and who
            to ask.&rdquo;
          </blockquote>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {timeline.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-soft"
                data-testid={`air-one-step-${index + 1}`}
              >
                <p className="font-numeric text-3xl font-extrabold text-gold">0{index + 1}</p>
                <p className="mt-2 font-semibold text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Approach() {
  const items = [
    {
      icon: GraduationCap,
      title: "NLU alumni mentors",
      text: "Learn from people who have already cleared the same exams and studied at the top law schools.",
    },
    {
      icon: Users,
      title: "Small, personal batches",
      text: "Room to ask, repeat, and improve — every student is known by name, not by roll number.",
    },
    {
      icon: BookOpen,
      title: "Reading-first learning",
      text: "Daily editorials, legal passages, and reasoning drills that build genuine comprehension.",
    },
    {
      icon: Target,
      title: "Preparation with purpose",
      text: "Mocks, weak areas, and revision organised into one clear, weekly personal plan.",
    },
  ];
  return (
    <section className="bg-secondary/50">
      <Section
        id="approach"
        eyebrow="Our approach"
        title={<>Serious preparation, made calm and clear.</>}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-premium"
              data-testid={`approach-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-200 group-hover:bg-gold/10 group-hover:text-gold">
                <item.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-serif text-2xl font-bold">{item.title}</h3>
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
    <Section
      id="mentors"
      eyebrow="Personal mentorship"
      title={<>People worth learning from.</>}
      kicker="Mentors who have sat where you sit — and know exactly how to guide you there."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {mentors.map((mentor) => (
          <article
            key={mentor.name}
            className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-200 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-premium"
            data-testid={`mentor-${mentor.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors duration-200 group-hover:bg-gold/10 group-hover:text-gold">
              <GraduationCap className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              {mentor.school}
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold">{mentor.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{mentor.subject}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Courses() {
  const courses = [
    {
      title: "CLAT",
      tag: "Flagship",
      text: "One and two-year classroom programs with weekly mocks and mentor reviews.",
      featured: true,
    },
    { title: "AILET", tag: "NLU Delhi", text: "Focused preparation tuned to the AILET pattern and pace." },
    { title: "Foundation", tag: "Class 9–11", text: "Reading and reasoning habits, built before exam pressure begins." },
  ];
  return (
    <Section id="courses" eyebrow="Programs" title={<>Find the path that fits your year.</>}>
      <div className="grid gap-5 md:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.title}
            className={`group flex flex-col rounded-2xl border p-8 shadow-soft transition-all duration-200 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-premium ${
              course.featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
            }`}
            data-testid={`course-${course.title.toLowerCase()}-card`}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              {course.tag}
            </p>
            <h3 className="mt-3 font-serif text-4xl font-bold">{course.title}</h3>
            <p
              className={`mt-4 flex-1 text-sm leading-relaxed ${
                course.featured ? "text-primary-foreground/75" : "text-muted-foreground"
              }`}
            >
              {course.text}
            </p>
            <a
              href="/courses"
              data-testid={`course-${course.title.toLowerCase()}-explore-link`}
              className={`mt-7 inline-flex min-h-12 items-center gap-2 text-sm font-semibold ${
                course.featured ? "text-gold" : "text-primary"
              }`}
            >
              Explore program
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
    <Section id="results" eyebrow="Outcomes" title={<>Results that speak quietly.</>}>
      <div className="grid gap-5 md:grid-cols-3">
        {results.map((student) => (
          <article
            key={student.name}
            className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-200 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-premium"
            data-testid={`result-${student.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-success">
              <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={1.75} /> {student.rank}
            </span>
            <h3 className="mt-6 font-serif text-2xl font-bold">{student.name}</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{student.exam}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function StudentLife() {
  const items = [
    { src: libraryImg, title: "Reading rooms", text: "Quiet study blocks that build stamina." },
    { src: debateImg, title: "Debate practice", text: "Learning to speak and reason clearly." },
    { src: campusImg, title: "Campus support", text: "Students and parents, counselled together." },
  ];
  return (
    <Section
      id="student-life"
      eyebrow="Student experience"
      title={<>A place that feels calm, warm, and serious.</>}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-200 hover:-translate-y-1.5 hover:shadow-premium"
            data-testid={`student-life-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                width={1280}
                height={896}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Diagnostic() {
  const benefits = [
    "CLAT-pattern paper",
    "Section-wise score view",
    "Honest AIR direction",
    "30-day improvement plan",
  ];
  return (
    <section
      id="diagnostic"
      className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 md:px-8"
      data-testid="diagnostic-section"
    >
      <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#081E45_0%,#14366E_100%)] p-8 text-primary-foreground shadow-premium-lg md:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <span className="h-px w-6 bg-gold" /> Start with clarity
            </p>
            <h2
              className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl"
              data-testid="diagnostic-heading"
            >
              Take a diagnostic. Know where you stand.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              A calm first step for any student: test, understand, and plan your next move with a
              mentor.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                data-testid="diagnostic-start-button"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gold px-6 text-sm font-semibold text-gold-foreground transition-all duration-200 hover:-translate-y-1.5 hover:shadow-premium"
              >
                Start diagnostic
              </a>
              <a
                href="#final-cta"
                data-testid="diagnostic-counselling-button"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary-foreground/30 px-6 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold"
              >
                Talk to a mentor
              </a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4"
                data-testid={`diagnostic-benefit-${benefit.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                <p className="text-sm font-medium">{benefit}</p>
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
    <Section id="campuses" eyebrow="Campuses" title={<>Three cities. One standard.</>}>
      <div className="grid gap-5 md:grid-cols-3">
        {campuses.map((city) => (
          <article
            key={city}
            className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-200 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-premium"
            data-testid={`campus-${city.toLowerCase()}-card`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-3xl font-bold">{city}</h3>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold">
                <Star className="h-4 w-4" strokeWidth={1.75} />
                4.9
              </span>
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              Central location with classroom and counselling support.
            </p>
            <a
              href="/branches"
              data-testid={`campus-${city.toLowerCase()}-visit-link`}
              className="mt-6 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-primary"
            >
              Visit campus
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    {
      q: "Who is TCR for?",
      a: "Students preparing for CLAT, AILET, CUET-Law, or early foundation batches from Class 9 onward.",
    },
    {
      q: "Can a complete beginner join?",
      a: "Yes. The first few weeks focus on reading habits, fundamentals, and a clear personal routine.",
    },
    {
      q: "Are classes online or offline?",
      a: "Both options are explained during your mentor call, based on your city and schedule.",
    },
    {
      q: "How do parents follow progress?",
      a: "Mock results, weak areas, and mentor feedback are shared in simple review conversations.",
    },
  ];
  return (
    <Section id="faq" eyebrow="Questions" title={<>Answers, before you call.</>}>
      <div className="max-w-3xl overflow-hidden rounded-2xl border border-border bg-card" data-testid="faq-list">
        {items.map((item, index) => (
          <div key={item.q} className="border-b border-border last:border-b-0">
            <button
              type="button"
              onClick={() => setOpen(open === index ? null : index)}
              data-testid={`faq-question-${index + 1}-button`}
              className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-serif text-xl font-semibold md:text-2xl">{item.q}</span>
              {open === index ? (
                <Minus className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
              )}
            </button>
            {open === index && (
              <p
                className="px-6 pb-6 text-base leading-relaxed text-muted-foreground"
                data-testid={`faq-answer-${index + 1}`}
              >
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 sm:px-6 md:px-8" data-testid="final-cta-section">
      <div
        id="final-cta"
        className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#081E45_0%,#14366E_100%)] px-6 py-16 text-center text-primary-foreground shadow-premium-lg md:px-12 md:py-24"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-[100px]" />
        <p className="relative flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          <span className="h-px w-6 bg-gold" /> Preparation with purpose <span className="h-px w-6 bg-gold" />
        </p>
        <h2
          className="relative mx-auto mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          data-testid="final-cta-heading"
        >
          Your NLU plan can begin with one honest conversation.
        </h2>
        <p className="relative mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          Book a free 30-minute mentor call for a practical path based on your class, pace, and
          target exam.
        </p>
        <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#"
            data-testid="final-counselling-button"
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-all duration-200 hover:-translate-y-1.5 hover:shadow-premium sm:text-[15px]"
          >
            Book a Mentor Call
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+919220761399"
            data-testid="final-call-button"
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold sm:text-[15px]"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} /> +91 92207 61399
          </a>
          <a
            href="#"
            data-testid="final-whatsapp-button"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: "Courses", href: "/courses" },
    { label: "Faculty", href: "/faculties" },
    { label: "Results", href: "/results" },
    { label: "Blog", href: "/blog" },
    { label: "Branches", href: "/branches" },
    { label: "FAQs", href: "/faqs" },
  ];
  return (
    <footer className="bg-primary pb-24 text-primary-foreground lg:pb-0" data-testid="site-footer">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <TcrLogo variant="inverted" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/65">
              Modern legal education, built by NLU alumni. Reading-first learning and personal
              mentorship for the next generation of lawyers.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              Explore
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`footer-${link.label.toLowerCase()}-link`}
                  className="flex min-h-12 items-center rounded-lg border border-primary-foreground/10 px-4 text-sm font-medium text-primary-foreground/75 transition-colors hover:border-gold hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p data-testid="footer-copyright">
            © {new Date().getFullYear()} The Court Room. All rights reserved.
          </p>
          <a
            href="mailto:hello@thecourtroom.in"
            data-testid="footer-email-link"
            className="inline-flex min-h-10 items-center gap-2 transition-colors hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} /> hello@thecourtroom.in
          </a>
        </div>
      </div>
    </footer>
  );
}

function MobileBottomBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-3 border-t border-border bg-card/95 backdrop-blur-xl lg:hidden"
      data-testid="mobile-bottom-bar"
    >
      <a
        href="tel:+919220761399"
        data-testid="mobile-bottom-call-link"
        className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold"
      >
        <Phone className="h-5 w-5 text-primary" strokeWidth={1.75} /> Call
      </a>
      <a
        href="#final-cta"
        data-testid="mobile-bottom-counselling-link"
        className="flex min-h-16 flex-col items-center justify-center gap-1 bg-secondary text-xs font-semibold"
      >
        <Calendar className="h-5 w-5 text-primary" strokeWidth={1.75} /> Mentor Call
      </a>
      <a
        href="#diagnostic"
        data-testid="mobile-bottom-free-mock-link"
        className="flex min-h-16 flex-col items-center justify-center gap-1 bg-primary text-xs font-semibold text-primary-foreground"
      >
        <Sparkles className="h-5 w-5 text-gold" strokeWidth={1.75} /> Diagnostic
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
        <Air1Story />
        <Approach />
        <Faculty />
        <Courses />
        <Results />
        <StudentLife />
        <Diagnostic />
        <Campuses />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
