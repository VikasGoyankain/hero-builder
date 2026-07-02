import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";
import { buildHubConfig, fetchPublishedItems } from "@/lib/content";

export const Route = createFileRoute("/faculties/")({
  head: () => ({
    meta: [
      { title: "CLAT Faculty | The Court Room" },
      { name: "description", content: hubConfigs.faculties.description },
    ],
  }),
  loader: async () => ({ items: await fetchPublishedItems("faculties") }),
  component: FacultiesListing,
});

function FacultiesListing() {
  const { items } = Route.useLoaderData();
  return <HubListingPage config={buildHubConfig("faculties", items)} />;
}
