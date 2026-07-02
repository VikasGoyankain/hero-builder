import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";
import { fetchPublishedItem } from "@/lib/content";

export const Route = createFileRoute("/branches/$slug")({
  loader: async ({ params }) => ({ item: await fetchPublishedItem("branches", params.slug) }),
  head: ({ params, loaderData }) => {
    const item = loaderData?.item ?? getHubItem("branches", params.slug);
    return {
      meta: [
        { title: `${item?.title ?? "Branch not found"} | TCR Branches` },
        { name: "description", content: item?.subtitle ?? hubConfigs.branches.description },
      ],
    };
  },
  component: BranchDetail,
});

function BranchDetail() {
  const { item } = Route.useLoaderData();
  return item ? (
    <HubDetailPage config={hubConfigs.branches} item={item} />
  ) : (
    <HubNotFoundPage hubPath="/branches" hubTitle="Branches" />
  );
}
