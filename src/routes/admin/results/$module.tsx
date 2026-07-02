import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudScreen } from "@/components/admin/AdminScreens";
import { getAdminEntityByPath } from "@/lib/admin/admin-data";

export const Route = createFileRoute("/admin/results/$module")({
  head: ({ params }) => ({ meta: [{ title: `${getAdminEntityByPath(`/admin/results/${params.module}`).label} | TCR Admin` }] }),
  component: ResultsModule,
});

function ResultsModule() {
  const { module } = Route.useParams();
  const entity = getAdminEntityByPath(`/admin/results/${module}`);
  return <AdminLayout title={entity.label} eyebrow="Results workspace" crumbs={["Results", entity.label]} actionLabel={`New ${entity.label}`}><CrudScreen entity={entity} /></AdminLayout>;
}