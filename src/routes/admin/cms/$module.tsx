import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudScreen } from "@/components/admin/AdminScreens";
import { getAdminEntityByPath } from "@/lib/admin/admin-data";

export const Route = createFileRoute("/admin/cms/$module")({
  head: ({ params }) => ({ meta: [{ title: `${getAdminEntityByPath(`/admin/cms/${params.module}`).label} | TCR Admin` }] }),
  component: CmsModule,
});

function CmsModule() {
  const { module } = Route.useParams();
  const entity = getAdminEntityByPath(`/admin/cms/${module}`);
  return <AdminLayout title={entity.label} eyebrow="CMS workspace" crumbs={["CMS", entity.label]} actionLabel={`New ${entity.label}`}><CrudScreen entity={entity} /></AdminLayout>;
}