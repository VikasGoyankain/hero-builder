import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [{ title: "CLAT Learning Hub | The Court Room" }, { name: "description", content: hubConfigs.blog.description }] }),
  component: () => <HubListingPage config={hubConfigs.blog} />,
});