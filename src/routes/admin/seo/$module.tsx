import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudScreen } from "@/components/admin/AdminScreens";
import { getAdminEntityByPath } from "@/lib/admin/admin-data";

export const Route = createFileRoute("/admin/seo/$module")({
  head: ({ params }) => ({ meta: [{ title: `${getAdminEntityByPath(`/admin/seo/${params.module}`).label} | TCR Admin` }] }),
  component: SeoModule,
});

function SeoModule() {
  const { module } = Route.useParams();
  const entity = getAdminEntityByPath(`/admin/seo/${module}`);
  return <AdminLayout title={entity.label} eyebrow="SEO workspace" crumbs={["SEO", entity.label]} actionLabel="Create rule"><CrudScreen entity={entity} /></AdminLayout>;
}