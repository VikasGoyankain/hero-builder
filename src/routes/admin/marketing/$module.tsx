import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudScreen } from "@/components/admin/AdminScreens";
import { getAdminEntityByPath } from "@/lib/admin/admin-data";

export const Route = createFileRoute("/admin/marketing/$module")({
  head: ({ params }) => ({ meta: [{ title: `${getAdminEntityByPath(`/admin/marketing/${params.module}`).label} | TCR Admin` }] }),
  component: MarketingModule,
});

function MarketingModule() {
  const { module } = Route.useParams();
  const entity = getAdminEntityByPath(`/admin/marketing/${module}`);
  return <AdminLayout title={entity.label} eyebrow="Marketing workspace" crumbs={["Marketing", entity.label]} actionLabel={`New ${entity.label}`}><CrudScreen entity={entity} /></AdminLayout>;
}