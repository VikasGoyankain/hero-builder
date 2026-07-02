import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AlertTriangle,
  ExternalLink,
  Loader2,
  Pencil,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import {
  createItem,
  deleteItem,
  fetchAllItems,
  slugify,
  updateItem,
  type ContentInput,
  type ContentRow,
  type ContentStatus,
} from "@/lib/content";
import type { HubKind } from "@/lib/hub-data";
import { isSupabaseConfigured } from "@/lib/supabase";

type Draft = {
  id?: string;
  title: string;
  slug: string;
  category: string;
  subtitle: string;
  status: ContentStatus;
  badges: string;
  facts: string;
  summary: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
};

const emptyDraft = (): Draft => ({
  title: "",
  slug: "",
  category: "",
  subtitle: "",
  status: "draft",
  badges: "",
  facts: "",
  summary: "",
  sections: [],
  faqs: [],
});

const rowToDraft = (row: ContentRow): Draft => ({
  id: row.id,
  title: row.title,
  slug: row.slug,
  category: row.category,
  subtitle: row.subtitle,
  status: row.status,
  badges: (row.badges ?? []).join(", "),
  facts: (row.facts ?? []).join("\n"),
  summary: (row.summary ?? []).join("\n"),
  sections: row.sections ?? [],
  faqs: row.faqs ?? [],
});

const lines = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

const csv = (value: string) =>
  value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

function draftToInput(draft: Draft): ContentInput {
  return {
    slug: slugify(draft.slug || draft.title),
    title: draft.title.trim(),
    subtitle: draft.subtitle.trim(),
    category: draft.category.trim(),
    status: draft.status,
    badges: csv(draft.badges),
    facts: lines(draft.facts),
    summary: lines(draft.summary),
    sections: draft.sections.filter((s) => s.heading.trim() || s.body.trim()),
    faqs: draft.faqs.filter((f) => f.q.trim() || f.a.trim()),
  };
}

export function ContentManager({
  hubKind,
  label,
  publicPath,
}: {
  hubKind: HubKind;
  label: string;
  publicPath: string;
}) {
  const queryClient = useQueryClient();
  const singular = label.endsWith("s") ? label.slice(0, -1) : label;
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState<Draft | null>(null);
  const [confirmRow, setConfirmRow] = useState<ContentRow | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const queryKey = ["content", hubKind];
  const {
    data: rows = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey,
    queryFn: () => fetchAllItems(hubKind),
    enabled: isSupabaseConfigured,
  });

  const saveMutation = useMutation({
    mutationFn: (d: Draft) =>
      d.id ? updateItem(d.id, draftToInput(d)) : createItem(hubKind, draftToInput(d)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      setDraft(null);
      setFormError(null);
    },
    onError: (err: unknown) => setFormError(err instanceof Error ? err.message : "Failed to save."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      setConfirmRow(null);
    },
  });

  useEffect(() => {
    const openCreate = () => {
      setFormError(null);
      setDraft(emptyDraft());
    };
    window.addEventListener("admin:create", openCreate);
    return () => window.removeEventListener("admin:create", openCreate);
  }, []);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) => row.title.toLowerCase().includes(term) || row.category.toLowerCase().includes(term),
    );
  }, [rows, search]);

  if (!isSupabaseConfigured) {
    return (
      <div
        className="rounded-3xl border border-dashed border-border bg-card p-8 text-center"
        data-testid={`${hubKind}-not-configured`}
      >
        <AlertTriangle className="mx-auto h-8 w-8 text-gold" />
        <h2 className="mt-4 font-serif text-2xl font-bold">Supabase not connected</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Set <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to manage{" "}
          {label.toLowerCase()} from the database.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-testid={`${hubKind}-content-manager`}>
      <section className="rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold">{label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Live records from Supabase. Published items appear on{" "}
              <a href={publicPath} className="font-semibold text-primary underline">
                {publicPath}
              </a>
              .
            </p>
          </div>
          <button
            type="button"
            data-testid={`${hubKind}-create-button`}
            onClick={() => {
              setFormError(null);
              setDraft(emptyDraft());
            }}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            <Plus className="h-4 w-4" /> New {singular}
          </button>
        </div>
        <label className="mt-5 flex min-h-12 items-center gap-3 rounded-lg border border-border bg-background px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            data-testid={`${hubKind}-search-input`}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={`Search ${label.toLowerCase()}...`}
            className="w-full bg-transparent text-sm font-medium outline-none"
          />
        </label>
      </section>

      <section
        className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
        data-testid={`${hubKind}-table`}
      >
        {isLoading ? (
          <div className="flex items-center gap-3 p-8 text-sm text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin text-primary" /> Loading {label.toLowerCase()}
            ...
          </div>
        ) : isError ? (
          <div className="p-8 text-sm text-destructive" data-testid={`${hubKind}-error`}>
            {error instanceof Error ? error.message : "Failed to load records."}
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center" data-testid={`${hubKind}-empty`}>
            <p className="font-semibold">No {label.toLowerCase()} yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Create your first {singular.toLowerCase()} to see it here.
            </p>
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <tr>
                <th className="px-5 py-4 font-semibold">Title</th>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold">Updated</th>
                <th className="px-5 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-border last:border-0"
                  data-testid={`${hubKind}-row-${row.slug}`}
                >
                  <td className="px-5 py-4 font-semibold">{row.title}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.category}</td>
                  <td className="px-5 py-4">
                    <StatusPill status={row.status} />
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">
                    {new Date(row.updated_at).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-1">
                      <button
                        type="button"
                        data-testid={`${hubKind}-edit-${row.slug}`}
                        onClick={() => {
                          setFormError(null);
                          setDraft(rowToDraft(row));
                        }}
                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-border hover:border-primary"
                        aria-label={`Edit ${row.title}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <a
                        href={`${publicPath}/${row.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`${hubKind}-view-${row.slug}`}
                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-border hover:border-primary"
                        aria-label={`View ${row.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <button
                        type="button"
                        data-testid={`${hubKind}-delete-${row.slug}`}
                        onClick={() => setConfirmRow(row)}
                        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border border-border text-destructive hover:border-destructive"
                        aria-label={`Delete ${row.title}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {draft && (
        <EditorDrawer
          draft={draft}
          singular={singular}
          saving={saveMutation.isPending}
          error={formError}
          onChange={setDraft}
          onClose={() => setDraft(null)}
          onSave={() => {
            if (!draft.title.trim()) {
              setFormError("Title is required.");
              return;
            }
            saveMutation.mutate(draft);
          }}
        />
      )}

      {confirmRow && (
        <ConfirmDialog
          title={confirmRow.title}
          pending={deleteMutation.isPending}
          onCancel={() => setConfirmRow(null)}
          onConfirm={() => deleteMutation.mutate(confirmRow.id)}
        />
      )}
    </div>
  );
}

function StatusPill({ status }: { status: ContentStatus }) {
  const published = status === "published";
  return (
    <span
      data-testid={`status-${status}`}
      className={`inline-flex min-h-7 items-center gap-1.5 rounded-full px-3 text-xs font-semibold ${
        published ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${published ? "bg-success" : "bg-muted-foreground"}`}
      />
      {published ? "Published" : "Draft"}
    </span>
  );
}

function EditorDrawer({
  draft,
  singular,
  saving,
  error,
  onChange,
  onClose,
  onSave,
}: {
  draft: Draft;
  singular: string;
  saving: boolean;
  error: string | null;
  onChange: (draft: Draft) => void;
  onClose: () => void;
  onSave: () => void;
}) {
  const set = (patch: Partial<Draft>) => onChange({ ...draft, ...patch });

  return (
    <div className="fixed inset-0 z-[70] bg-foreground/40" data-testid="content-editor-drawer">
      <aside className="ml-auto flex h-full w-full max-w-3xl flex-col overflow-hidden bg-background shadow-2xl">
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-serif text-2xl font-bold">
            {draft.id ? `Edit ${singular}` : `New ${singular}`}
          </h2>
          <button
            type="button"
            onClick={onClose}
            data-testid="content-editor-close"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-border"
            aria-label="Close editor"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          {error && (
            <p
              className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
              data-testid="content-editor-error"
            >
              {error}
            </p>
          )}
          <TextField
            label="Title"
            value={draft.title}
            testId="content-title"
            onChange={(value) =>
              set({ slug: draft.id || draft.slug ? draft.slug : slugify(value), title: value })
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Slug"
              value={draft.slug}
              testId="content-slug"
              onChange={(value) => set({ slug: value })}
            />
            <TextField
              label="Category"
              value={draft.category}
              testId="content-category"
              onChange={(value) => set({ category: value })}
            />
          </div>
          <label className="block text-sm font-semibold">
            Status
            <select
              data-testid="content-status"
              value={draft.status}
              onChange={(event) => set({ status: event.target.value as ContentStatus })}
              className="mt-2 min-h-12 w-full rounded-lg border border-border bg-card px-3 outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
          <AreaField
            label="Subtitle"
            value={draft.subtitle}
            testId="content-subtitle"
            rows={2}
            onChange={(value) => set({ subtitle: value })}
          />
          <TextField
            label="Badges (comma separated)"
            value={draft.badges}
            testId="content-badges"
            onChange={(value) => set({ badges: value })}
          />
          <AreaField
            label="Key facts (one per line)"
            value={draft.facts}
            testId="content-facts"
            rows={3}
            onChange={(value) => set({ facts: value })}
          />
          <AreaField
            label="Summary points (one per line)"
            value={draft.summary}
            testId="content-summary"
            rows={3}
            onChange={(value) => set({ summary: value })}
          />

          <RepeatableSections items={draft.sections} onChange={(sections) => set({ sections })} />
          <RepeatableFaqs items={draft.faqs} onChange={(faqs) => set({ faqs })} />
        </div>

        <footer className="flex items-center justify-end gap-2 border-t border-border bg-card px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            data-testid="content-editor-cancel"
            className="min-h-11 rounded-lg border border-border px-4 text-sm font-semibold"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSave}
            disabled={saving}
            data-testid="content-editor-save"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground disabled:opacity-60"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />} Save {singular.toLowerCase()}
          </button>
        </footer>
      </aside>
    </div>
  );
}

function RepeatableSections({
  items,
  onChange,
}: {
  items: { heading: string; body: string }[];
  onChange: (items: { heading: string; body: string }[]) => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4" data-testid="content-sections">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Content sections</p>
        <button
          type="button"
          data-testid="content-add-section"
          onClick={() => onChange([...items, { heading: "", body: "" }])}
          className="rounded-lg border border-border px-3 py-1 text-xs font-semibold"
        >
          + Add section
        </button>
      </div>
      <div className="mt-3 space-y-3">
        {items.map((section, index) => (
          <div key={index} className="rounded-xl border border-border p-3">
            <div className="flex items-center gap-2">
              <input
                value={section.heading}
                placeholder="Heading"
                onChange={(event) => {
                  const next = [...items];
                  next[index] = { ...section, heading: event.target.value };
                  onChange(next);
                }}
                className="min-h-11 flex-1 rounded-lg border border-border bg-background px-3 text-sm font-semibold outline-none"
              />
              <button
                type="button"
                onClick={() => onChange(items.filter((_, i) => i !== index))}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-destructive"
                aria-label="Remove section"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <textarea
              value={section.body}
              placeholder="Body"
              rows={2}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...section, body: event.target.value };
                onChange(next);
              }}
              className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function RepeatableFaqs({
  items,
  onChange,
}: {
  items: { q: string; a: string }[];
  onChange: (items: { q: string; a: string }[]) => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4" data-testid="content-faqs">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">FAQs</p>
        <button
          type="button"
          data-testid="content-add-faq"
          onClick={() => onChange([...items, { q: "", a: "" }])}
          className="rounded-lg border border-border px-3 py-1 text-xs font-semibold"
        >
          + Add FAQ
        </button>
      </div>
      <div className="mt-3 space-y-3">
        {items.map((faq, index) => (
          <div key={index} className="rounded-xl border border-border p-3">
            <div className="flex items-center gap-2">
              <input
                value={faq.q}
                placeholder="Question"
                onChange={(event) => {
                  const next = [...items];
                  next[index] = { ...faq, q: event.target.value };
                  onChange(next);
                }}
                className="min-h-11 flex-1 rounded-lg border border-border bg-background px-3 text-sm font-semibold outline-none"
              />
              <button
                type="button"
                onClick={() => onChange(items.filter((_, i) => i !== index))}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border text-destructive"
                aria-label="Remove FAQ"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <textarea
              value={faq.a}
              placeholder="Answer"
              rows={2}
              onChange={(event) => {
                const next = [...items];
                next[index] = { ...faq, a: event.target.value };
                onChange(next);
              }}
              className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TextField({
  label,
  value,
  testId,
  onChange,
}: {
  label: string;
  value: string;
  testId: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        data-testid={`${testId}-input`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-12 w-full rounded-lg border border-border bg-card px-4 outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function AreaField({
  label,
  value,
  testId,
  rows,
  onChange,
}: {
  label: string;
  value: string;
  testId: string;
  rows: number;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <textarea
        data-testid={`${testId}-input`}
        value={value}
        rows={rows}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function ConfirmDialog({
  title,
  pending,
  onCancel,
  onConfirm,
}: {
  title: string;
  pending: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/40 px-4"
      data-testid="content-confirm-dialog"
    >
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl">
        <AlertTriangle className="h-8 w-8 text-destructive" />
        <h2 className="mt-4 font-serif text-2xl font-bold">Delete “{title}”?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This permanently removes the record from the database. This cannot be undone.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            data-testid="content-confirm-cancel"
            className="min-h-11 rounded-lg border border-border px-4 text-sm font-semibold"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={pending}
            data-testid="content-confirm-delete"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-destructive px-4 text-sm font-semibold text-destructive-foreground disabled:opacity-60"
          >
            {pending && <Loader2 className="h-4 w-4 animate-spin" />} Delete
          </button>
        </div>
      </div>
    </div>
  );
}
