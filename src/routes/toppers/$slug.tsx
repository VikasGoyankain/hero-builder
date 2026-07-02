import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";
import { fetchPublishedItem } from "@/lib/content";

export const Route = createFileRoute("/toppers/$slug")({
  loader: async ({ params }) => ({ item: await fetchPublishedItem("toppers", params.slug) }),
  head: ({ params, loaderData }) => {
    const item = loaderData?.item ?? getHubItem("toppers", params.slug);
    return {
      meta: [
        { title: `${item?.title ?? "Topper not found"} | TCR Toppers` },
        { name: "description", content: item?.subtitle ?? hubConfigs.toppers.description },
      ],
    };
  },
  component: TopperDetail,
});

function TopperDetail() {
  const { item } = Route.useLoaderData();
  return item ? (
    <HubDetailPage config={hubConfigs.toppers} item={item} />
  ) : (
    <HubNotFoundPage hubPath="/toppers" hubTitle="Toppers" />
  );
}
