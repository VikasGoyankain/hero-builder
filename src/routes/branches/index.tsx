import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/branches/")({
  head: () => ({ meta: [{ title: "TCR Branches Near You | The Court Room" }, { name: "description", content: hubConfigs.branches.description }] }),
  component: () => <HubListingPage config={hubConfigs.branches} />,
});