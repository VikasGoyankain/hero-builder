import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Phone, Play, Trophy, Users, Building2, UserCheck, Monitor, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-courtroom.png";

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
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-4xl font-bold text-primary">TCR</span>
            <span className="mt-1 font-serif text-[11px] tracking-[0.2em] text-foreground">
              THE COURT ROOM
            </span>
            <span className="mt-0.5 text-[8px] tracking-[0.3em] text-muted-foreground">
              LEARN · PREPARE · SUCCEED
            </span>
          </div>
          <div className="ml-2 text-primary text-2xl">⚖</div>
        </div>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 text-[15px] font-medium text-foreground/90 transition-colors hover:text-primary"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-2 text-[15px] font-medium text-foreground md:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 text-primary">
              <Phone className="h-3.5 w-3.5" />
            </span>
            +91 92207 61399
          </div>
          <button className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
            Free Mock Test
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-8 pt-6 pb-40">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-[13px] font-semibold tracking-[0.15em] text-primary">
              INDIA'S MODERN LAW SCHOOL PREPARATION INSTITUTE
            </p>
            <h1 className="mt-6 font-serif text-[76px] font-bold leading-[1.05] tracking-tight text-foreground">
              Where Future <span className="text-primary">Lawyers</span> Are Built<span className="text-primary">.</span>
            </h1>
            <div className="mt-6 h-[3px] w-24 bg-primary" />
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              NLU Alumni Mentors. Personalised Guidance.
              <br />
              Proven Results.
            </p>

            <div className="mt-10 flex items-end gap-6">
              <div>
                <p className="font-serif text-sm font-semibold tracking-widest text-primary">AIR</p>
                <p className="font-serif text-[72px] font-bold leading-none text-primary">1</p>
              </div>
              <div className="pb-2">
                <p className="font-serif text-2xl font-bold text-foreground">AILET 2026</p>
                <p className="text-muted-foreground">In Our Very First Year</p>
                <p className="mt-3 text-sm font-semibold tracking-wider text-primary">AARYAN SINGH</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 rounded-md bg-primary px-7 py-4 text-[15px] font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                Take Free Mock Test
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="group flex items-center gap-3 rounded-md border border-foreground/30 bg-transparent px-7 py-4 text-[15px] font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                Book Free Counselling
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Stack of law books with courthouse and scales of justice"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
            {/* Floating annotations */}
            <span className="pointer-events-none absolute top-[8%] right-[12%] text-xs font-semibold tracking-wider text-primary">
              NLU
            </span>
            <span className="pointer-events-none absolute top-[28%] left-[18%] text-xs font-semibold tracking-wider text-primary">
              AILET
            </span>
            <span className="pointer-events-none absolute bottom-[32%] left-[4%] text-xs font-semibold tracking-wider text-primary">
              CLAT
            </span>
            <span className="pointer-events-none absolute top-[32%] right-[2%] text-xs font-semibold tracking-wider text-primary leading-tight text-right">
              YOUR<br />DREAM
            </span>

            {/* Watch story */}
            <button className="absolute bottom-6 right-6 flex items-center gap-3 rounded-full bg-white/70 backdrop-blur px-2 py-2 pr-5 shadow-md transition hover:bg-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="text-sm font-medium text-foreground">Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative mt-4">
          <div className="mx-auto grid grid-cols-2 gap-6 rounded-2xl bg-white px-10 py-7 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] md:grid-cols-5">
            {stats.map((s) => (
              <div key={s.title} className="flex items-center gap-4">
                <s.icon className="h-9 w-9 text-foreground/80" strokeWidth={1.5} />
                <div>
                  <p className="font-serif text-lg font-bold text-foreground leading-tight">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
