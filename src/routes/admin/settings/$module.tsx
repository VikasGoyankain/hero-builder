import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudScreen } from "@/components/admin/AdminScreens";
import { getAdminEntityByPath } from "@/lib/admin/admin-data";

export const Route = createFileRoute("/admin/settings/$module")({
  head: ({ params }) => ({ meta: [{ title: `${getAdminEntityByPath(`/admin/settings/${params.module}`).label} | TCR Admin` }] }),
  component: SettingsModule,
});

function SettingsModule() {
  const { module } = Route.useParams();
  const entity = getAdminEntityByPath(`/admin/settings/${module}`);
  return <AdminLayout title={entity.label} eyebrow="Settings workspace" crumbs={["Settings", entity.label]} actionLabel="Save setting"><CrudScreen entity={entity} /></AdminLayout>;
}