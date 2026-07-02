import { createFileRoute } from "@tanstack/react-router";
import { UtilityHubPage } from "@/components/marketing/HubPages";
import { utilityHubs } from "@/lib/hub-data";

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [{ title: "CLAT & AILET Results | The Court Room" }, { name: "description", content: utilityHubs.results.description }] }),
  component: () => <UtilityHubPage {...utilityHubs.results} testId="results" />,
});