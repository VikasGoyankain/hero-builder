import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminDashboardScreen } from "@/components/admin/AdminScreens";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Admin Dashboard | The Court Room" }] }),
  component: () => <AdminLayout title="Dashboard" eyebrow="Operations overview" crumbs={["Dashboard"]} actionLabel="Quick create"><AdminDashboardScreen /></AdminLayout>,
});