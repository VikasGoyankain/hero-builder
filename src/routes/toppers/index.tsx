import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";
import { buildHubConfig, fetchPublishedItems } from "@/lib/content";

export const Route = createFileRoute("/toppers/")({
  head: () => ({
    meta: [
      { title: "CLAT & AILET Toppers | The Court Room" },
      { name: "description", content: hubConfigs.toppers.description },
    ],
  }),
  loader: async () => ({ items: await fetchPublishedItems("toppers") }),
  component: ToppersListing,
});

function ToppersListing() {
  const { items } = Route.useLoaderData();
  return <HubListingPage config={buildHubConfig("toppers", items)} />;
}
