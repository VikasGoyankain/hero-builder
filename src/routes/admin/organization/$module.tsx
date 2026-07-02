import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudScreen } from "@/components/admin/AdminScreens";
import { getAdminEntityByPath } from "@/lib/admin/admin-data";

export const Route = createFileRoute("/admin/organization/$module")({
  head: ({ params }) => ({ meta: [{ title: `${getAdminEntityByPath(`/admin/organization/${params.module}`).label} | TCR Admin` }] }),
  component: OrganizationModule,
});

function OrganizationModule() {
  const { module } = Route.useParams();
  const entity = getAdminEntityByPath(`/admin/organization/${module}`);
  return <AdminLayout title={entity.label} eyebrow="Organization workspace" crumbs={["Organization", entity.label]} actionLabel={`New ${entity.label}`}><CrudScreen entity={entity} /></AdminLayout>;
}