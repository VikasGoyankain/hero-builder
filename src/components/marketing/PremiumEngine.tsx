import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, MapPin, MessageCircle, Phone, Search, Sparkles, Star, Trophy, Users, Zap } from "lucide-react";
import type { PremiumCard, PremiumPage, Stat } from "@/lib/premium-content";

const primaryNav = [
  { label: "About", href: "/brand/about" },
  { label: "Why TCR", href: "/brand/why-choose-us" },
  { label: "Method", href: "/brand/methodology" },
  { label: "CLAT", href: "/exams/clat-ug" },
  { label: "Resources", href: "/conversion/resources" },
];

export function PremiumShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white selection:bg-[#007AFF] selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,122,255,.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.08),transparent_24%),linear-gradient(180deg,#050505,#08090d_42%,#050505)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl" data-testid="premium-header">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="/" data-testid="premium-logo-link" className="group flex min-h-12 items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white text-black font-serif text-xl font-black transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">T</span>
            <span className="hidden text-sm font-black tracking-[0.28em] sm:block">THE COURT ROOM</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {primaryNav.map((item) => (
              <a key={item.label} href={item.href} data-testid={`premium-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-link`} className="flex min-h-12 items-center text-sm font-bold text-white/70 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="/conversion/contact" data-testid="premium-header-cta-link" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-black transition-transform duration-300 hover:scale-105 active:scale-95">
            Book counselling <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>
      <div className="relative z-10">{children}</div>
      <MobileConversionBar />
    </div>
  );
}

export function PremiumPageView({ page }: { page: PremiumPage }) {
  return (
    <PremiumShell>
      <main data-testid={`${page.slug}-premium-page`}>
        <CinematicHero page={page} />
        <DreamTicker />
        <QuickFacts stats={page.quickFacts} />
        <BentoCards cards={page.cards} title={page.layer === "Exam" ? "Everything you need to decide with confidence." : "Designed to make the dream feel real."} />
        <VisualTimeline items={page.timeline} />
        {page.slug === "why-choose-us" && <ComparisonTable />}
        {page.layer === "Exam" && <ExamDecisionPanel page={page} />}
        {page.layer === "Conversion" && <ConversionPanel page={page} />}
        <FAQSection faqs={page.faqs} />
        <FinalDreamCTA text={page.cta} />
      </main>
    </PremiumShell>
  );
}

function CinematicHero({ page }: { page: PremiumPage }) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden px-5 py-16 md:px-10 md:py-24" data-testid="premium-hero-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="premium-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/65" data-testid="premium-hero-eyebrow">
            <Sparkles className="h-4 w-4 text-[#007AFF]" /> {page.eyebrow}
          </div>
          <h1 className="mt-7 max-w-5xl font-serif text-5xl font-black leading-[0.92] tracking-[-0.08em] text-white text-glow sm:text-6xl lg:text-[5.8rem]" data-testid="premium-hero-heading">
            {page.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-white/68 md:text-xl" data-testid="premium-hero-subtitle">
            {page.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/conversion/contact" data-testid="premium-hero-primary-cta" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-black text-black transition-transform duration-300 hover:scale-105 active:scale-95">
              {page.cta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#page-story" data-testid="premium-hero-secondary-cta" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-black text-white transition-colors hover:bg-white/10">
              Explore journey <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative premium-rise [animation-delay:160ms]" data-testid="premium-hero-visual">
          <div className="absolute -left-8 top-10 z-20 hidden rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl lg:block premium-float" data-testid="hero-floating-rank-card">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Dream target</p>
            <p className="mt-2 font-serif text-5xl font-black text-white">NLU</p>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_40px_140px_rgba(0,0,0,.7)]">
            <img src={page.heroImage} alt={page.title} width={1280} height={896} loading="eager" className="aspect-[4/5] w-full object-cover object-center opacity-90 saturate-125 lg:aspect-[5/4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
              {page.stats.slice(0, 4).map((stat) => <MiniStat key={stat.label} stat={stat} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl" data-testid={`premium-mini-stat-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
      <p className="font-serif text-3xl font-black text-white">{stat.value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-white/55">{stat.label}</p>
    </div>
  );
}

function DreamTicker() {
  const items = ["NLSIU Bangalore", "NLU Delhi", "NALSAR Hyderabad", "WBNUJS Kolkata", "NLU Jodhpur", "GNLU", "NLU dreams", "Rank stories"];
  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-5" data-testid="premium-dream-ticker">
      <div className="premium-ticker flex w-max gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="font-serif text-2xl font-black tracking-[-0.04em] text-white/55 md:text-4xl">{item}</span>
        ))}
      </div>
    </section>
  );
}

function QuickFacts({ stats }: { stats: Stat[] }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28" data-testid="premium-quick-facts-section">
      <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="glass-panel premium-rise rounded-[2rem] p-7" style={{ animationDelay: `${index * 80}ms` }} data-testid={`premium-quick-fact-${index + 1}`}>
            <p className="font-serif text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">{stat.value}</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/50">{stat.label}</p>
            {stat.detail && <p className="mt-4 text-sm leading-relaxed text-white/55">{stat.detail}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function BentoCards({ cards, title }: { cards: PremiumCard[]; title: string }) {
  return (
    <section id="page-story" className="px-5 py-20 md:px-10 md:py-28" data-testid="premium-bento-section">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-4xl font-serif text-4xl font-black leading-none tracking-[-0.07em] text-white md:text-6xl" data-testid="premium-bento-heading">{title}</h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">Visual cards turn trust, process and outcomes into something students can feel instantly.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-12">
          {cards.map((card, index) => (
            <article key={card.title} className={`group relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 ${index % 5 === 0 ? "md:col-span-6 lg:col-span-7" : index % 5 === 1 ? "md:col-span-6 lg:col-span-5" : "md:col-span-3 lg:col-span-4"}`} data-testid={`premium-bento-card-${index + 1}`}>
              {card.image && <img src={card.image} alt={card.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-105" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/60"><Zap className="h-3 w-3 text-[#007AFF]" /> {card.tag || "TCR"}</span>
                <h3 className="font-serif text-3xl font-black leading-none tracking-[-0.05em] text-white">{card.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/62">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualTimeline({ items }: { items: PremiumCard[] }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28" data-testid="premium-timeline-section">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#007AFF]">The journey</p>
        <h2 className="mt-5 max-w-4xl font-serif text-4xl font-black leading-none tracking-[-0.07em] text-white md:text-6xl">A visual path from ambition to admission.</h2>
        <div className="mt-12 overflow-x-auto pb-5 no-scrollbar">
          <div className="flex min-w-max gap-4">
            {items.map((item, index) => (
              <article key={`${item.title}-${index}`} className="glass-panel w-[280px] rounded-[2rem] p-6" data-testid={`premium-timeline-step-${index + 1}`}>
                <p className="font-serif text-5xl font-black text-[#007AFF]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 font-serif text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/58">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    ["Personalized Reports", "Included", "Rare"],
    ["AI Analytics", "Every mock", "Basic score"],
    ["Doubt Sessions", "Unlimited", "Weekly"],
    ["Small Batches", "Focused", "Crowded"],
    ["Parent Clarity", "Reports + calls", "Limited"],
  ];
  return (
    <section className="px-5 py-20 md:px-10 md:py-28" data-testid="premium-comparison-section">
      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
        <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.06] p-5 text-sm font-black text-white/70"><span>Feature</span><span>TCR</span><span>Typical coaching</span></div>
        {rows.map((row) => <div key={row[0]} className="grid grid-cols-3 border-b border-white/10 p-5 text-sm text-white/70 last:border-b-0" data-testid={`comparison-${row[0].toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}><span className="font-bold text-white">{row[0]}</span><span className="text-[#7CFFB2]">{row[1]}</span><span>{row[2]}</span></div>)}
      </div>
    </section>
  );
}

function ExamDecisionPanel({ page }: { page: PremiumPage }) {
  const items = ["What is this exam?", "Who is eligible?", "What is the syllabus?", "Which course should I choose?", "Which faculty teaches it?", "How can I enroll?"];
  return (
    <section className="px-5 py-20 md:px-10 md:py-28" data-testid="premium-exam-decision-panel">
      <div className="mx-auto grid max-w-[1440px] gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#007AFF]">AEO-ready answers</p>
          <h2 className="mt-5 font-serif text-4xl font-black tracking-[-0.06em] md:text-5xl">{page.title.split(" ").slice(0, 5).join(" ")}</h2>
          <p className="mt-5 text-white/60">Every exam page is structured to answer student questions directly, then guide them toward the right course.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm font-bold text-white/75" data-testid={`exam-answer-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}><CheckCircle2 className="mb-4 h-5 w-5 text-[#007AFF]" />{item}</div>)}
        </div>
      </div>
    </section>
  );
}

function ConversionPanel({ page }: { page: PremiumPage }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28" data-testid="premium-conversion-panel">
      <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-3">
        {[Search, Phone, MessageCircle].map((Icon, index) => (
          <article key={index} className="glass-panel rounded-[2rem] p-8" data-testid={`conversion-action-${index + 1}`}>
            <Icon className="h-8 w-8 text-[#007AFF]" />
            <h3 className="mt-8 font-serif text-3xl font-black tracking-[-0.05em]">{index === 0 ? "Find answers" : index === 1 ? "Talk to mentor" : "Move faster"}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/58">{page.layer} experience designed to reduce friction and move students closer to action.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28" data-testid="premium-faq-section">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="font-serif text-4xl font-black tracking-[-0.06em] md:text-6xl">Questions students ask before they commit.</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => <details key={faq.q} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6" data-testid={`premium-faq-${index + 1}`}><summary className="cursor-pointer list-none font-serif text-2xl font-black tracking-[-0.04em]">{faq.q}</summary><p className="mt-4 text-white/62">{faq.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}

function FinalDreamCTA({ text }: { text: string }) {
  return (
    <section className="px-5 py-24 md:px-10 md:py-36" data-testid="premium-final-cta-section">
      <div className="mx-auto max-w-[1200px] rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(0,122,255,.35),transparent_45%),linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.04))] p-8 text-center md:p-16">
        <Trophy className="mx-auto h-12 w-12 text-[#007AFF]" />
        <h2 className="mx-auto mt-7 max-w-4xl font-serif text-5xl font-black leading-none tracking-[-0.08em] md:text-7xl" data-testid="premium-final-cta-heading">Your dream law college deserves a serious plan.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/62">Talk to a mentor, understand your starting point, and leave with a path that feels possible.</p>
        <a href="/conversion/contact" data-testid="premium-final-cta-link" className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-8 text-sm font-black text-black transition-transform duration-300 hover:scale-105 active:scale-95">{text} <ArrowRight className="h-4 w-4" /></a>
      </div>
    </section>
  );
}

function MobileConversionBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid h-16 grid-cols-3 border-t border-white/10 bg-black/80 backdrop-blur-2xl md:hidden" data-testid="premium-mobile-conversion-bar">
      <a href="tel:+919220761399" data-testid="premium-mobile-call-link" className="flex flex-col items-center justify-center gap-1 text-xs font-black text-white/75"><Phone className="h-4 w-4 text-[#007AFF]" />Call</a>
      <a href="#" data-testid="premium-mobile-whatsapp-link" className="flex flex-col items-center justify-center gap-1 text-xs font-black text-white/75"><MessageCircle className="h-4 w-4 text-[#007AFF]" />WhatsApp</a>
      <a href="/conversion/contact" data-testid="premium-mobile-apply-link" className="flex flex-col items-center justify-center gap-1 bg-white text-xs font-black text-black"><ArrowRight className="h-4 w-4" />Apply</a>
    </nav>
  );
}

export function PremiumNotFound() {
  return (
    <PremiumShell>
      <main className="mx-auto max-w-[900px] px-5 py-28 md:px-10" data-testid="premium-not-found-page">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#007AFF]">Not found</p>
        <h1 className="mt-5 font-serif text-5xl font-black tracking-[-0.07em] md:text-7xl">This premium page is not available yet.</h1>
        <a href="/" data-testid="premium-not-found-home-link" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-white px-7 text-sm font-black text-black">Back home</a>
      </main>
    </PremiumShell>
  );
}