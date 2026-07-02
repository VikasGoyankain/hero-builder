import { createFileRoute } from "@tanstack/react-router";
import { UtilityHubPage } from "@/components/marketing/HubPages";
import { utilityHubs } from "@/lib/hub-data";

export const Route = createFileRoute("/scholarships")({
  head: () => ({ meta: [{ title: "CLAT Scholarships | The Court Room" }, { name: "description", content: utilityHubs.scholarships.description }] }),
  component: () => <UtilityHubPage {...utilityHubs.scholarships} testId="scholarships" />,
});