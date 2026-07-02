import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudScreen } from "@/components/admin/AdminScreens";
import { getAdminEntityByPath } from "@/lib/admin/admin-data";

export const Route = createFileRoute("/admin/academics/$module")({
  head: ({ params }) => ({ meta: [{ title: `${getAdminEntityByPath(`/admin/academics/${params.module}`).label} | TCR Admin` }] }),
  component: AcademicsModule,
});

function AcademicsModule() {
  const { module } = Route.useParams();
  const entity = getAdminEntityByPath(`/admin/academics/${module}`);
  return <AdminLayout title={entity.label} eyebrow="Academic workspace" crumbs={["Academics", entity.label]} actionLabel={`New ${entity.label}`}><CrudScreen entity={entity} /></AdminLayout>;
}