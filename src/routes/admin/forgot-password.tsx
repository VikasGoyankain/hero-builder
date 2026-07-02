import { createFileRoute } from "@tanstack/react-router";
import { ForgotPasswordScreen } from "@/components/admin/AdminScreens";

export const Route = createFileRoute("/admin/forgot-password")({
  head: () => ({ meta: [{ title: "Reset Admin Password | The Court Room" }] }),
  component: ForgotPasswordScreen,
});