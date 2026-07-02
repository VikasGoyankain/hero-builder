import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/toppers/")({
  head: () => ({ meta: [{ title: "CLAT & AILET Toppers | The Court Room" }, { name: "description", content: hubConfigs.toppers.description }] }),
  component: () => <HubListingPage config={hubConfigs.toppers} />,
});