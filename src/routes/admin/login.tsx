import { createFileRoute } from "@tanstack/react-router";
import { AdminLoginScreen } from "@/components/admin/AdminScreens";

export const Route = createFileRoute("/admin/login")({
  head: () => ({ meta: [{ title: "Admin Login | The Court Room" }] }),
  component: AdminLoginScreen,
});