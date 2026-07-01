import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Phone, Play, Trophy, Users, Building2, UserCheck, Monitor, ChevronRight, Menu, X } from "lucide-react";
import { HeroScene } from "@/components/HeroScene";
import tcrLogo from "@/assets/tcr-logo.png.asset.json";

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

const navItems = [
  { label: "Courses", hasDropdown: true },
  { label: "Results" },
  { label: "Faculty" },
  { label: "Batches" },
  { label: "Resources" },
  { label: "About Us" },
];

const stats = [
  { icon: Trophy, title: "AIR 1", sub: "AILET 2026" },
  { icon: Users, title: "100%", sub: "NLU Alumni Faculty" },
  { icon: Building2, title: "3", sub: "Campuses" },
  { icon: UserCheck, title: "Personalised", sub: "Mentorship" },
  { icon: Monitor, title: "Offline + Online", sub: "Classes" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* ================= NAV ================= */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-8 md:py-4">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center" aria-label="The Court Room home">
            <img
              src={tcrLogo.url}
              alt="TCR — The Court Room"
              width={160}
              height={64}
              className="h-11 w-auto sm:h-12 md:h-14"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 text-[14px] font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </button>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:+919220761399" className="hidden items-center gap-2 text-[14px] font-medium text-foreground xl:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 text-primary">
                <Phone className="h-3.5 w-3.5" />
              </span>
              +91 92207 61399
            </a>
            <button className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
              Free Mock Test
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+919220761399"
              aria-label="Call TCR"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 text-primary active:scale-95 transition-transform"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground active:scale-95 transition-transform"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col px-4 py-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between border-b border-border/60 py-3 text-left text-[15px] font-medium text-foreground/90 last:border-b-0"
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
              <button className="mt-3 rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground">
                Free Mock Test
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-6 sm:px-6 md:px-8 md:pt-10 lg:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ---- Copy ---- */}
          <div className="order-2 lg:order-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[13px]">
              India's Modern Law School Preparation Institute
            </p>

            <h1 className="mt-4 font-serif text-[40px] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[56px] md:text-[64px] lg:text-[72px]">
              Where Future <span className="text-primary">Lawyers</span> Are Built<span className="text-primary">.</span>
            </h1>

            <div className="mt-5 h-[3px] w-16 bg-primary sm:w-24" />

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              NLU Alumni Mentors. Personalised Guidance. Proven Results.
            </p>

            {/* AIR 1 highlight */}
            <div className="mt-7 flex items-end gap-4 sm:gap-6">
              <div>
                <p className="font-serif text-xs font-semibold tracking-[0.2em] text-primary sm:text-sm">AIR</p>
                <p className="font-serif text-[56px] font-bold leading-none text-primary sm:text-[72px]">1</p>
              </div>
              <div className="pb-1.5 sm:pb-2">
                <p className="font-serif text-lg font-bold text-foreground sm:text-2xl">AILET 2026</p>
                <p className="text-sm text-muted-foreground sm:text-base">In Our Very First Year</p>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.18em] text-primary sm:text-xs">AARYAN SINGH</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <button className="group flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-[15px] font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]">
                Take Free Mock Test
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="group flex items-center justify-center gap-2 rounded-md border border-foreground/25 bg-transparent px-6 py-4 text-[15px] font-semibold text-foreground transition-all hover:border-primary hover:text-primary active:scale-[0.98]">
                Book Free Counselling
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* ---- Animated scene ---- */}
          <div className="relative order-1 lg:order-2">
            <HeroScene />
            {/* Watch story pill */}
            <button className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-white/80 pl-1.5 pr-4 py-1.5 shadow-md backdrop-blur transition hover:bg-white active:scale-95 sm:bottom-5 sm:right-5 sm:gap-3 sm:pl-2 sm:pr-5 sm:py-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-11 sm:w-11">
                <Play className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
              </span>
              <span className="text-xs font-semibold text-foreground sm:text-sm">Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-10 lg:mt-6">
          {/* Mobile: horizontal snap scroll */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {stats.map((s) => (
              <div
                key={s.title}
                className="flex min-w-[210px] snap-start items-center gap-3 rounded-xl bg-white px-4 py-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
              >
                <s.icon className="h-7 w-7 shrink-0 text-primary" strokeWidth={1.5} />
                <div className="min-w-0">
                  <p className="font-serif text-base font-bold leading-tight text-foreground">{s.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: single card row */}
          <div className="hidden rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] md:grid md:grid-cols-5 md:gap-4 lg:gap-6">
            {stats.map((s) => (
              <div key={s.title} className="flex items-center gap-3 lg:gap-4">
                <s.icon className="h-8 w-8 shrink-0 text-foreground/80 lg:h-9 lg:w-9" strokeWidth={1.5} />
                <div className="min-w-0">
                  <p className="font-serif text-base font-bold leading-tight text-foreground lg:text-lg">{s.title}</p>
                  <p className="truncate text-xs text-muted-foreground lg:text-sm">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
