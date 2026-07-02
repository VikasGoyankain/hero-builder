import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudScreen } from "@/components/admin/AdminScreens";
import { getAdminEntityByPath } from "@/lib/admin/admin-data";

export const Route = createFileRoute("/admin/users/$module")({
  head: ({ params }) => ({ meta: [{ title: `${getAdminEntityByPath(`/admin/users/${params.module}`).label} | TCR Admin` }] }),
  component: UsersModule,
});

function UsersModule() {
  const { module } = Route.useParams();
  const entity = getAdminEntityByPath(`/admin/users/${module}`);
  return <AdminLayout title={entity.label} eyebrow="Access workspace" crumbs={["Users", entity.label]} actionLabel="Invite user"><CrudScreen entity={entity} /></AdminLayout>;
}