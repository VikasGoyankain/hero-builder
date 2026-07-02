import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";
import { buildHubConfig, fetchPublishedItems } from "@/lib/content";

export const Route = createFileRoute("/branches/")({
  head: () => ({
    meta: [
      { title: "TCR Branches Near You | The Court Room" },
      { name: "description", content: hubConfigs.branches.description },
    ],
  }),
  loader: async () => ({ items: await fetchPublishedItems("branches") }),
  component: BranchesListing,
});

function BranchesListing() {
  const { items } = Route.useLoaderData();
  return <HubListingPage config={buildHubConfig("branches", items)} />;
}
