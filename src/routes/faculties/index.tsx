import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/faculties/")({
  head: () => ({ meta: [{ title: "CLAT Faculty | The Court Room" }, { name: "description", content: hubConfigs.faculties.description }] }),
  component: () => <HubListingPage config={hubConfigs.faculties} />,
});