import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";
import { buildHubConfig, fetchPublishedItems } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "CLAT Learning Hub | The Court Room" },
      { name: "description", content: hubConfigs.blog.description },
    ],
  }),
  loader: async () => ({ items: await fetchPublishedItems("blog") }),
  component: BlogListing,
});

function BlogListing() {
  const { items } = Route.useLoaderData();
  return <HubListingPage config={buildHubConfig("blog", items)} />;
}
