import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  Command,
  Loader2,
  LogOut,
  Menu,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Search,
  Sun,
  X,
} from "lucide-react";
import { adminSections } from "@/lib/admin/admin-data";
import { signOut, useSupabaseAuth } from "@/lib/auth";

type AdminLayoutProps = {
  children: React.ReactNode;
  title: string;
  eyebrow?: string;
  crumbs?: string[];
  actionLabel?: string;
};

export function AdminLayout({
  children,
  title,
  eyebrow = "Admin",
  crumbs = [],
  actionLabel = "Create",
}: AdminLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();
  const { loading, session, user, configured } = useSupabaseAuth();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    return () => document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    if (configured && !loading && !session) {
      navigate({ to: "/admin/login" });
    }
  }, [configured, loading, session, navigate]);

  const openCreateFlow = () => {
    window.dispatchEvent(new CustomEvent("admin:create"));
  };

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/admin/login" });
  };

  // While auth resolves (or redirect is pending), avoid flashing the admin UI.
  if (configured && (loading || !session)) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-background text-foreground"
        data-testid="admin-auth-gate"
      >
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  const rootClass = dark ? "dark" : "";
  return (
    <div className={rootClass}>
      <div className="min-h-screen bg-background text-foreground" data-testid="admin-shell">
        <Sidebar collapsed={collapsed} open={mobileOpen} onClose={() => setMobileOpen(false)} />
        <div
          className={`min-h-screen transition-[padding] duration-300 ${collapsed ? "lg:pl-20" : "lg:pl-72"}`}
        >
          <header
            className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur"
            data-testid="admin-topbar"
          >
            <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  data-testid="admin-mobile-menu-button"
                  onPointerDown={() => setMobileOpen(true)}
                  onClick={() => setMobileOpen(true)}
                  className="relative z-50 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
                  aria-label="Open navigation"
                >
                  <Menu className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  data-testid="admin-collapse-sidebar-button"
                  onClick={() => setCollapsed((value) => !value)}
                  className="hidden min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-card lg:inline-flex"
                  aria-label="Toggle sidebar"
                >
                  {collapsed ? (
                    <PanelLeftOpen className="h-5 w-5" />
                  ) : (
                    <PanelLeftClose className="h-5 w-5" />
                  )}
                </button>
                <div>
                  <div
                    className="hidden items-center gap-1 text-xs font-bold text-muted-foreground sm:flex"
                    data-testid="admin-breadcrumbs"
                  >
                    <a href="/admin/dashboard" className="hover:text-primary">
                      Admin
                    </a>
                    {[...crumbs].map((crumb) => (
                      <span key={crumb} className="inline-flex items-center gap-1">
                        <ChevronRight className="h-3 w-3" />
                        {crumb}
                      </span>
                    ))}
                  </div>
                  <h1
                    className="font-serif text-xl font-black leading-tight sm:text-2xl"
                    data-testid="admin-page-title"
                  >
                    {title}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  data-testid="admin-command-button"
                  onClick={() => setCommandOpen(true)}
                  className="hidden min-h-11 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-bold text-muted-foreground md:inline-flex"
                >
                  <Command className="h-4 w-4" /> Search{" "}
                  <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px]">⌘K</span>
                </button>
                <button
                  type="button"
                  data-testid="admin-theme-toggle-button"
                  aria-pressed={dark}
                  onClick={() => setDark((value) => !value)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-card"
                  aria-label="Toggle theme"
                >
                  {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  type="button"
                  data-testid="admin-notifications-button"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-card"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  data-testid="admin-primary-action-button"
                  onClick={openCreateFlow}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground"
                >
                  <Plus className="h-4 w-4" />{" "}
                  <span className="hidden sm:inline">{actionLabel}</span>
                </button>
                {configured && session && (
                  <button
                    type="button"
                    data-testid="admin-signout-button"
                    onClick={handleSignOut}
                    title={user?.email ?? "Sign out"}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-card"
                    aria-label="Sign out"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </header>
          <main className="px-4 py-6 sm:px-6 lg:px-8" data-testid="admin-main-content">
            <p
              className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary"
              data-testid="admin-page-eyebrow"
            >
              {eyebrow}
            </p>
            {children}
          </main>
        </div>
        {commandOpen && <CommandPalette onClose={() => setCommandOpen(false)} />}
      </div>
    </div>
  );
}

function Sidebar({
  collapsed,
  open,
  onClose,
}: {
  collapsed: boolean;
  open: boolean;
  onClose: () => void;
}) {
  const content = useMemo(
    () => (
      <div className="flex h-full flex-col bg-card" data-testid="admin-sidebar-content">
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <a
            href="/admin/dashboard"
            data-testid="admin-brand-link"
            className="flex min-h-11 items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-serif text-lg font-black text-primary-foreground">
              T
            </span>
            {!collapsed && (
              <span className="font-serif text-2xl font-black text-primary">TCR Admin</span>
            )}
          </a>
          <button
            type="button"
            data-testid="admin-sidebar-close-button"
            onClick={onClose}
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-border lg:hidden"
            aria-label="Close navigation"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4" data-testid="admin-sidebar-nav">
          {adminSections.map((section) => (
            <div key={section.title} className="mb-5">
              {!collapsed && (
                <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {section.title}
                </p>
              )}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    data-testid={`admin-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-link`}
                    className="group flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-primary" />
                    {!collapsed && <span>{item.label}</span>}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
        {!collapsed && (
          <div
            className="m-3 rounded-2xl border border-border bg-secondary p-4"
            data-testid="admin-sidebar-status-card"
          >
            <p className="font-serif text-lg font-black">SEO Health 94</p>
            <p className="mt-1 text-xs text-muted-foreground">12 pages need schema review.</p>
          </div>
        )}
      </div>
    ),
    [collapsed, onClose],
  );
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-50 hidden border-r border-border transition-[width] duration-300 lg:block ${collapsed ? "w-20" : "w-72"}`}
        data-testid="admin-sidebar"
      >
        {content}
      </aside>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-foreground/30 lg:hidden"
          data-testid="admin-mobile-sidebar-overlay"
        >
          <aside className="h-full w-[86vw] max-w-80 border-r border-border shadow-2xl">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}

function CommandPalette({ onClose }: { onClose: () => void }) {
  const actions = [
    "Create blog",
    "Open courses",
    "Review SEO",
    "Invite user",
    "Upload media",
    "Create coupon",
  ];
  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-foreground/30 px-4 pt-20"
      data-testid="admin-command-palette"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <Search className="h-5 w-5 text-primary" />
          <input
            autoFocus
            data-testid="admin-command-input"
            placeholder="Search modules, content, users..."
            className="flex-1 bg-transparent text-sm font-bold outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            data-testid="admin-command-close-button"
            className="rounded-lg border border-border px-3 py-1 text-xs font-bold"
          >
            Esc
          </button>
        </div>
        <div className="p-3">
          {actions.map((action) => (
            <button
              key={action}
              type="button"
              data-testid={`admin-command-${action.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-left text-sm font-bold hover:bg-secondary"
            >
              <span>{action}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
