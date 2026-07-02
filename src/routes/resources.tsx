import { createFileRoute } from "@tanstack/react-router";
import { UtilityHubPage } from "@/components/marketing/HubPages";
import { utilityHubs } from "@/lib/hub-data";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [{ title: "Free CLAT Resources | The Court Room" }, { name: "description", content: utilityHubs.resources.description }] }),
  component: () => <UtilityHubPage {...utilityHubs.resources} testId="resources" />,
});