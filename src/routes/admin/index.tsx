import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Login | The Court Room" }] }),
  beforeLoad: () => {
    throw redirect({ to: "/admin/dashboard" });
  },
});