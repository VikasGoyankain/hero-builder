import { createFileRoute } from "@tanstack/react-router";
import { UtilityHubPage } from "@/components/marketing/HubPages";
import { utilityHubs } from "@/lib/hub-data";

export const Route = createFileRoute("/faqs")({
  head: () => ({ meta: [{ title: "CLAT Coaching FAQs | The Court Room" }, { name: "description", content: utilityHubs.faqs.description }] }),
  component: () => <UtilityHubPage {...utilityHubs.faqs} testId="faqs" />,
});