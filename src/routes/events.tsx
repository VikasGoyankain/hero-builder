import { createFileRoute } from "@tanstack/react-router";
import { UtilityHubPage } from "@/components/marketing/HubPages";
import { utilityHubs } from "@/lib/hub-data";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "CLAT Events & Webinars | The Court Room" }, { name: "description", content: utilityHubs.events.description }] }),
  component: () => <UtilityHubPage {...utilityHubs.events} testId="events" />,
});