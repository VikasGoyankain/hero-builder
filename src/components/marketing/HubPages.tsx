import { ArrowRight, Bookmark, CheckCircle2, Clock, Copy, Filter, Phone, Search, Share2, Star } from "lucide-react";
import type { HubConfig, HubItem } from "@/lib/hub-data";

export function HubShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95" data-testid="hub-header">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 md:px-8">
          <a href="/" data-testid="hub-home-link" className="min-h-12 font-serif text-3xl font-black text-primary">TCR</a>
          <nav className="hidden gap-6 md:flex">
            {["blog", "courses", "faculties", "branches", "toppers"].map((item) => (
              <a key={item} href={`/${item}`} data-testid={`hub-nav-${item}-link`} className="flex min-h-12 items-center text-sm font-bold capitalize hover:text-primary">
                {item}
              </a>
            ))}
          </nav>
          <a href="tel:+919220761399" data-testid="hub-phone-link" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground">
            <Phone className="h-4 w-4" /> Call
          </a>
        </div>
      </header>
      {children}
      <nav className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-4 border-t border-border bg-card md:hidden" data-testid="hub-mobile-sticky-bar">
        <a href="tel:+919220761399" data-testid="hub-mobile-call-link" className="flex flex-col items-center justify-center gap-1 text-xs font-bold"><Phone className="h-4 w-4 text-primary" />Call</a>
        <a href="#" data-testid="hub-mobile-whatsapp-link" className="flex flex-col items-center justify-center gap-1 text-xs font-bold"><Share2 className="h-4 w-4 text-primary" />WhatsApp</a>
        <a href="#lead-form" data-testid="hub-mobile-apply-link" className="flex flex-col items-center justify-center gap-1 bg-primary text-xs font-bold text-primary-foreground"><ArrowRight className="h-4 w-4" />Apply</a>
        <button type="button" data-testid="hub-mobile-share-button" className="flex flex-col items-center justify-center gap-1 text-xs font-bold"><Copy className="h-4 w-4 text-primary" />Share</button>
      </nav>
    </div>
  );
}

export function HubListingPage({ config }: { config: HubConfig }) {
  return (
    <HubShell>
      <main className="pb-20 md:pb-0" data-testid={`${config.kind}-listing-page`}>
        <section className="border-b border-border bg-[linear-gradient(135deg,#fafafa,#f3f0e8,#fff)] px-4 py-14 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary" data-testid={`${config.kind}-eyebrow`}>{config.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-black leading-tight sm:text-5xl lg:text-6xl" data-testid={`${config.kind}-heading`}>{config.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid={`${config.kind}-description`}>{config.description}</p>
            <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm md:grid-cols-[1fr_auto]" data-testid={`${config.kind}-search-panel`}>
              <label className="flex min-h-12 items-center gap-3 rounded-xl bg-secondary px-4">
                <Search className="h-5 w-5 text-primary" />
                <input data-testid={`${config.kind}-search-input`} aria-label={`Search ${config.kind}`} placeholder={config.searchPlaceholder} className="w-full bg-transparent text-sm font-medium outline-none" />
              </label>
              <button type="button" data-testid={`${config.kind}-filter-button`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground"><Filter className="h-4 w-4" /> Filters</button>
            </div>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2" data-testid={`${config.kind}-filters`}>
              {config.filters.map((filter) => (
                <button key={filter} type="button" data-testid={`${config.kind}-filter-${filter.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="min-h-11 shrink-0 rounded-full border border-border bg-card px-4 text-sm font-bold">{filter}</button>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1200px] gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1fr_320px] md:px-8">
          <div className="grid gap-4" data-testid={`${config.kind}-cards-grid`}>
            {config.items.map((item) => (
              <article key={item.slug} className="rounded-2xl border border-border bg-card p-6 shadow-sm" data-testid={`${config.kind}-${item.slug}-card`}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{item.category}</p>
                <h2 className="mt-3 font-serif text-3xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.badges.map((badge) => <span key={badge} className="rounded-full bg-secondary px-3 py-1 text-xs font-bold">{badge}</span>)}
                </div>
                <a href={`${config.path}/${item.slug}`} data-testid={`${config.kind}-${item.slug}-view-link`} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground">
                  View details <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-secondary/60 p-6 md:sticky md:top-24" data-testid={`${config.kind}-sidebar`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Trending now</p>
            <div className="mt-4 space-y-3">
              {config.items.slice(0, 3).map((item) => (
                <a key={item.slug} href={`${config.path}/${item.slug}`} data-testid={`${config.kind}-trending-${item.slug}-link`} className="block rounded-xl bg-card p-4 text-sm font-bold shadow-sm">{item.title}</a>
              ))}
            </div>
            <div id="lead-form" className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground" data-testid={`${config.kind}-lead-card`}>
              <p className="font-serif text-2xl font-black">Need guidance?</p>
              <p className="mt-2 text-sm text-primary-foreground/80">Book a free counselling call and get the right path.</p>
              <a href="tel:+919220761399" data-testid={`${config.kind}-lead-call-link`} className="mt-4 inline-flex min-h-12 items-center rounded-md bg-background px-4 text-sm font-bold text-foreground">Call now</a>
            </div>
          </aside>
        </section>
      </main>
    </HubShell>
  );
}

export function HubDetailPage({ config, item }: { config: HubConfig; item: HubItem }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": config.schema,
    name: item.title,
    description: item.subtitle,
    mainEntityOfPage: `${config.path}/${item.slug}`,
  };
  return (
    <HubShell>
      <main className="pb-20 md:pb-0" data-testid={`${config.kind}-detail-page`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="border-b border-border bg-[linear-gradient(135deg,#fafafa,#f3f0e8,#fff)] px-4 py-12 sm:px-6 md:px-8 md:py-16">
          <div className="mx-auto max-w-[1200px]">
            <nav className="flex flex-wrap gap-2 text-sm font-bold text-muted-foreground" data-testid="detail-breadcrumb">
              <a href="/" data-testid="breadcrumb-home-link">Home</a><span>/</span><a href={config.path} data-testid="breadcrumb-hub-link">{config.title}</a><span>/</span><span className="text-primary">{item.title}</span>
            </nav>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-primary" data-testid="detail-category">{item.category}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-black leading-tight sm:text-5xl lg:text-6xl" data-testid="detail-heading">{item.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="detail-subtitle">{item.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.badges.map((badge) => <span key={badge} data-testid={`detail-badge-${badge.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="inline-flex min-h-9 items-center rounded-full bg-card px-3 text-xs font-bold shadow-sm">{badge}</span>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" data-testid="detail-share-button" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-bold"><Share2 className="h-4 w-4" /> Share</button>
              <button type="button" data-testid="detail-copy-link-button" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-bold"><Copy className="h-4 w-4" /> Copy link</button>
              <button type="button" data-testid="detail-bookmark-button" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border bg-card px-4 text-sm font-bold"><Bookmark className="h-4 w-4" /> Bookmark</button>
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1200px] gap-8 px-4 py-12 sm:px-6 md:grid-cols-[280px_1fr] md:px-8">
          <aside className="h-fit rounded-2xl border border-border bg-card p-5 md:sticky md:top-24" data-testid="detail-toc">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">On this page</p>
            <div className="mt-4 space-y-2">
              {["Key facts", "Summary", ...item.sections.map((section) => section.heading), "FAQs"].map((heading) => (
                <a key={heading} href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} data-testid={`toc-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-link`} className="block min-h-10 rounded-md px-3 py-2 text-sm font-bold hover:bg-secondary">{heading}</a>
              ))}
            </div>
          </aside>
          <article className="space-y-8" data-testid="detail-article">
            <ContentBlock id="key-facts" title="Key facts">
              <div className="grid gap-3 sm:grid-cols-3">{item.facts.map((fact) => <Fact key={fact}>{fact}</Fact>)}</div>
            </ContentBlock>
            <ContentBlock id="summary" title="Bullet summary">
              <ul className="space-y-3">{item.summary.map((point) => <li key={point} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{point}</li>)}</ul>
            </ContentBlock>
            {item.sections.map((section) => (
              <ContentBlock key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} title={section.heading}>
                <p className="text-base leading-relaxed text-muted-foreground">{section.body}</p>
              </ContentBlock>
            ))}
            <ContentBlock id="faqs" title="FAQs">
              <div className="space-y-3">{item.faqs.map((faq, index) => <div key={faq.q} className="rounded-xl border border-border bg-card p-5" data-testid={`detail-faq-${index + 1}`}><h3 className="font-serif text-xl font-black">{faq.q}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p></div>)}</div>
            </ContentBlock>
            <section id="lead-form" className="rounded-3xl bg-primary p-6 text-primary-foreground md:p-8" data-testid="detail-course-cta">
              <p className="font-serif text-3xl font-black">Want a personal plan?</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/80">Talk to a mentor and connect this content to the right course, branch, faculty, or result story.</p>
              <a href="tel:+919220761399" data-testid="detail-cta-call-link" className="mt-5 inline-flex min-h-12 items-center rounded-md bg-background px-5 text-sm font-bold text-foreground">Book counselling</a>
            </section>
          </article>
        </section>
      </main>
    </HubShell>
  );
}

export function UtilityHubPage({ eyebrow, title, description, cards, testId }: { eyebrow: string; title: string; description: string; cards: string[]; testId: string }) {
  return (
    <HubShell>
      <main className="pb-20 md:pb-0" data-testid={`${testId}-page`}>
        <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 md:px-8 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary" data-testid={`${testId}-eyebrow`}>{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-black leading-tight sm:text-5xl lg:text-6xl" data-testid={`${testId}-heading`}>{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid={`${testId}-description`}>{description}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {cards.map((card) => <article key={card} className="rounded-2xl border border-border bg-card p-6 shadow-sm" data-testid={`${testId}-${card.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-card`}><Star className="h-6 w-6 text-primary" /><h2 className="mt-4 font-serif text-2xl font-black">{card}</h2><p className="mt-2 text-sm text-muted-foreground">SEO, AEO and lead-ready content block with internal links and FAQs.</p></article>)}
          </div>
        </section>
      </main>
    </HubShell>
  );
}

function ContentBlock({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="rounded-2xl border border-border bg-card p-6 shadow-sm" data-testid={`content-${id}`}><h2 className="font-serif text-3xl font-black">{title}</h2><div className="mt-4">{children}</div></section>;
}

function Fact({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl bg-secondary p-4 text-sm font-bold" data-testid="detail-fact"><Clock className="mb-3 h-5 w-5 text-primary" />{children}</div>;
}