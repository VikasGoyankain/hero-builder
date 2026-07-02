import {
  ArrowRight as ArrowRightIcon, BarChart3, Bell, BookOpen, Building2, CalendarDays,
  Command as CommandIcon, FileText, GraduationCap, Image, Landmark, LayoutDashboard, Megaphone, Newspaper, Percent, Search,
  Settings, ShieldCheck, Sparkles, Star, Trophy, Users, WalletCards,
} from "lucide-react";

export type AdminEntity = {
  key: string;
  label: string;
  section: string;
  path: string;
  icon: typeof LayoutDashboard;
  description: string;
  count: string;
  status: "Live" | "Draft" | "Review" | "System";
  fields: string[];
};

export const adminSections = [
  { title: "Core", items: [{ label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard }] },
  { title: "CMS", items: [
    { label: "Static Pages", path: "/admin/cms/static-pages", icon: FileText },
    { label: "Blogs", path: "/admin/cms/blogs", icon: Newspaper },
    { label: "Resources", path: "/admin/cms/resources", icon: BookOpen },
    { label: "FAQs", path: "/admin/cms/faqs", icon: Search },
    { label: "Media Library", path: "/admin/cms/media-library", icon: Image },
  ] },
  { title: "Academics", items: [
    { label: "Courses", path: "/admin/academics/courses", icon: GraduationCap },
    { label: "Batches", path: "/admin/academics/batches", icon: CalendarDays },
    { label: "Faculties", path: "/admin/academics/faculties", icon: Users },
    { label: "Subjects", path: "/admin/academics/subjects", icon: BookOpen },
    { label: "Exams", path: "/admin/academics/exams", icon: Landmark },
    { label: "Study Materials", path: "/admin/academics/study-materials", icon: FileText },
  ] },
  { title: "Growth", items: [
    { label: "Toppers", path: "/admin/results/toppers", icon: Trophy },
    { label: "Results", path: "/admin/results/results", icon: BarChart3 },
    { label: "Testimonials", path: "/admin/results/testimonials", icon: Star },
    { label: "Branches", path: "/admin/organization/branches", icon: Building2 },
    { label: "Events", path: "/admin/organization/events", icon: CalendarDays },
    { label: "Team", path: "/admin/organization/team", icon: Users },
  ] },
  { title: "Revenue", items: [
    { label: "Coupons", path: "/admin/marketing/coupons", icon: Percent },
    { label: "Discounts", path: "/admin/marketing/discounts", icon: WalletCards },
    { label: "Landing Pages", path: "/admin/marketing/landing-pages", icon: Sparkles },
    { label: "Announcements", path: "/admin/marketing/announcements", icon: Bell },
    { label: "Promotional Banners", path: "/admin/marketing/promotional-banners", icon: Megaphone },
  ] },
  { title: "System", items: [
    { label: "Metadata Editor", path: "/admin/seo/metadata-editor", icon: Search },
    { label: "Open Graph Preview", path: "/admin/seo/open-graph-preview", icon: Image },
    { label: "Schema Preview", path: "/admin/seo/schema-preview", icon: FileText },
    { label: "Redirect Manager", path: "/admin/seo/redirect-manager", icon: ArrowRightIcon },
    { label: "Sitemap Management", path: "/admin/seo/sitemap-management", icon: Landmark },
    { label: "User Management", path: "/admin/users/user-management", icon: ShieldCheck },
    { label: "Role Management", path: "/admin/users/role-management", icon: Users },
    { label: "Permission Matrix", path: "/admin/users/permission-matrix", icon: ShieldCheck },
    { label: "Profile Pages", path: "/admin/users/profile-pages", icon: Users },
    { label: "Institute Settings", path: "/admin/settings/institute-settings", icon: Settings },
    { label: "Theme Customization", path: "/admin/settings/theme-customization", icon: Sparkles },
    { label: "Notifications", path: "/admin/settings/notifications", icon: Bell },
    { label: "Integrations", path: "/admin/settings/integrations", icon: CommandIcon },
  ] },
];

export const adminEntities: AdminEntity[] = [
  { key: "blogs", label: "Blogs", section: "CMS", path: "/admin/cms/blogs", icon: Newspaper, description: "Articles, learning center content, authors, SEO and related resources.", count: "128", status: "Live", fields: ["Category", "Author", "Editor", "Content", "Featured image", "Tags", "Reading time", "Related articles", "SEO"] },
  { key: "resources", label: "Resources", section: "CMS", path: "/admin/cms/resources", icon: BookOpen, description: "Downloadables, PYQs, current affairs sheets and visibility controls.", count: "84", status: "Live", fields: ["Exam", "Subject", "Type", "Files", "Tags", "Visibility"] },
  { key: "courses", label: "Courses", section: "Academics", path: "/admin/academics/courses", icon: GraduationCap, description: "Course catalogue, curriculum, pricing, discounts, scholarship and gallery.", count: "12", status: "Review", fields: ["Title", "Slug", "Exam", "Description", "Curriculum", "Pricing", "Discounts", "Scholarships", "Faculties", "Batches", "FAQs", "SEO", "Gallery"] },
  { key: "batches", label: "Batches", section: "Academics", path: "/admin/academics/batches", icon: CalendarDays, description: "Schedules, faculty mapping, seats, fees, coupon rules and status.", count: "36", status: "Live", fields: ["Course", "Faculty", "Timings", "Mode", "Seats", "Dates", "Fees", "Discount rules", "Coupon applicability", "Status"] },
  { key: "faculties", label: "Faculties", section: "Academics", path: "/admin/academics/faculties", icon: Users, description: "Profiles, education, expertise, achievements, media and SEO.", count: "24", status: "Live", fields: ["Profile", "Education", "Experience", "Expertise", "Branches", "Courses", "Achievements", "Social links", "Media", "SEO"] },
  { key: "branches", label: "Branches", section: "Organization", path: "/admin/organization/branches", icon: Building2, description: "Local SEO pages, maps, facilities, timings, contacts and courses.", count: "8", status: "Live", fields: ["Address", "Maps", "Facilities", "Timings", "Gallery", "Contacts", "Assigned faculty", "Available courses"] },
  { key: "toppers", label: "Toppers", section: "Results", path: "/admin/results/toppers", icon: Trophy, description: "Rank stories, marks, course, branch, journey, interviews and advice.", count: "41", status: "Review", fields: ["Exam", "Year", "AIR", "Marks", "Course", "Branch", "Preparation journey", "Interview", "Advice", "Media"] },
  { key: "coupons", label: "Coupons", section: "Marketing", path: "/admin/marketing/coupons", icon: Percent, description: "Flat, percentage, early-bird and usage-limit based discount campaigns.", count: "18", status: "Live", fields: ["Flat discount", "Percentage discount", "Early bird", "Expiry", "Usage limits", "Applicable courses/batches"] },
  { key: "seo", label: "Metadata Editor", section: "SEO", path: "/admin/seo/metadata-editor", icon: Search, description: "Metadata, Open Graph previews, schema previews, redirects and sitemaps.", count: "312", status: "System", fields: ["Title", "Description", "Canonical", "Open Graph", "Schema", "Robots", "Redirects", "Sitemap"] },
  { key: "users", label: "User Management", section: "Users", path: "/admin/users/user-management", icon: ShieldCheck, description: "Admins, roles, permission matrix, profiles and access states.", count: "16", status: "System", fields: ["Name", "Email", "Role", "Permissions", "Status", "Profile", "Activity"] },
];

export const dashboardMetrics = [
  { label: "Leads this month", value: "1,284", change: "+18.2%", tone: "primary" },
  { label: "Published content", value: "312", change: "+24 live", tone: "dark" },
  { label: "Admissions pipeline", value: "₹42.8L", change: "+11.6%", tone: "green" },
  { label: "Scholarship claims", value: "86", change: "12 pending", tone: "amber" },
];

export const activityFeed = [
  "Riya updated CLAT newspaper guide SEO title",
  "New admission enquiry from Lucknow branch",
  "AILET Intensive batch seats changed to 8 left",
  "Topper story submitted for editorial review",
  "Coupon EARLY25 reached 62% usage limit",
];

export const blogRows = [
  { title: "How to read the newspaper for CLAT 2027", category: "Study Plans", author: "Riya Kapoor", status: "Published", updated: "Today", score: "96" },
  { title: "CLAT legal reasoning strategy", category: "Legal GK", author: "Ishaan Mehra", status: "Review", updated: "2h ago", score: "91" },
  { title: "Monthly current affairs revision table", category: "Current Affairs", author: "Editorial", status: "Draft", updated: "Yesterday", score: "84" },
  { title: "AILET mock analysis checklist", category: "AILET", author: "Kabir Sood", status: "Published", updated: "Jul 1", score: "89" },
];

export const entityRows = [
  { name: "CLAT Two-Year Program", type: "Course", owner: "Academic Team", status: "Published", updated: "Today" },
  { name: "AILET Intensive Morning Batch", type: "Batch", owner: "Ops", status: "Filling", updated: "2h ago" },
  { name: "Adv. Ishaan Mehra", type: "Faculty", owner: "HR", status: "Published", updated: "Yesterday" },
  { name: "Lucknow Hazratganj", type: "Branch", owner: "Local SEO", status: "Published", updated: "Jun 30" },
];

function titleFromSlug(slug: string) {
  return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export function getAdminEntityByPath(path: string): AdminEntity {
  const known = adminEntities.find((entity) => entity.path === path);
  if (known) return known;
  const [, , section = "system", module = "module"] = path.split("/");
  const label = titleFromSlug(module);
  const normalizedSection = titleFromSlug(section);
  return {
    key: module,
    label,
    section: normalizedSection,
    path,
    icon: FileText,
    description: `${label} workspace with searchable records, filters, bulk actions, responsive cards, editor drawer, SEO fields and reusable admin states.`,
    count: "24",
    status: "Draft",
    fields: ["Title", "Slug", "Description", "Status", "Owner", "SEO", "Media", "Tags", "Visibility"],
  };
}