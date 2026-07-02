import { getHubItem, hubConfigs, type HubConfig, type HubItem, type HubKind } from "@/lib/hub-data";
import { supabase } from "@/lib/supabase";

export type ContentStatus = "draft" | "published";

export type ContentRow = {
  id: string;
  kind: HubKind;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badges: string[];
  facts: string[];
  summary: string[];
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  status: ContentStatus;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type ContentInput = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badges: string[];
  facts: string[];
  summary: string[];
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  status: ContentStatus;
  sort_order?: number;
};

/** Hub kinds backed by the admin panel / Supabase. Others stay static-only for now. */
const MANAGED_KINDS: HubKind[] = ["blog", "faculties", "branches", "toppers"];
export const isManagedKind = (kind: HubKind): boolean => MANAGED_KINDS.includes(kind);

/** Maps an admin entity key (e.g. "blogs") to its hub kind (e.g. "blog"). */
export function adminKeyToHubKind(key: string): HubKind | null {
  const map: Record<string, HubKind> = {
    blogs: "blog",
    faculties: "faculties",
    branches: "branches",
    toppers: "toppers",
  };
  return map[key] ?? null;
}

function rowToItem(row: ContentRow): HubItem {
  return {
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    category: row.category,
    badges: row.badges ?? [],
    facts: row.facts ?? [],
    summary: row.summary ?? [],
    sections: row.sections ?? [],
    faqs: row.faqs ?? [],
  };
}

/* ------------------------- public reads (SSR + client) ------------------------- */

/** Published items for a hub. Falls back to bundled static content when Supabase
 * is unavailable so the site never breaks. */
export async function fetchPublishedItems(kind: HubKind): Promise<HubItem[]> {
  if (!supabase || !isManagedKind(kind)) return hubConfigs[kind].items;
  try {
    const { data, error } = await supabase
      .from("content_items")
      .select("*")
      .eq("kind", kind)
      .eq("status", "published")
      .order("sort_order", { ascending: true })
      .order("updated_at", { ascending: false });
    if (error) return hubConfigs[kind].items;
    return (data as ContentRow[]).map(rowToItem);
  } catch {
    return hubConfigs[kind].items;
  }
}

export async function fetchPublishedItem(kind: HubKind, slug: string): Promise<HubItem | null> {
  if (!supabase || !isManagedKind(kind)) return getHubItem(kind, slug) ?? null;
  try {
    const { data, error } = await supabase
      .from("content_items")
      .select("*")
      .eq("kind", kind)
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) return getHubItem(kind, slug) ?? null;
    return data ? rowToItem(data as ContentRow) : null;
  } catch {
    return getHubItem(kind, slug) ?? null;
  }
}

export function buildHubConfig(kind: HubKind, items: HubItem[]): HubConfig {
  return { ...hubConfigs[kind], items };
}

/* ------------------------- admin reads + mutations (client) ------------------------- */

export async function fetchAllItems(kind: HubKind): Promise<ContentRow[]> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { data, error } = await supabase
    .from("content_items")
    .select("*")
    .eq("kind", kind)
    .order("sort_order", { ascending: true })
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as ContentRow[];
}

export async function createItem(kind: HubKind, input: ContentInput): Promise<ContentRow> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { data, error } = await supabase
    .from("content_items")
    .insert({ kind, ...input })
    .select()
    .single();
  if (error) throw error;
  return data as ContentRow;
}

export async function updateItem(id: string, input: ContentInput): Promise<ContentRow> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { data, error } = await supabase
    .from("content_items")
    .update(input)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data as ContentRow;
}

export async function deleteItem(id: string): Promise<void> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { error } = await supabase.from("content_items").delete().eq("id", id);
  if (error) throw error;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
