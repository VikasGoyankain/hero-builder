import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";
import { fetchPublishedItem } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => ({ item: await fetchPublishedItem("blog", params.slug) }),
  head: ({ params, loaderData }) => {
    const item = loaderData?.item ?? getHubItem("blog", params.slug);
    return {
      meta: [
        { title: `${item?.title ?? "Blog not found"} | TCR Blog` },
        { name: "description", content: item?.subtitle ?? hubConfigs.blog.description },
      ],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { item } = Route.useLoaderData();
  return item ? (
    <HubDetailPage config={hubConfigs.blog} item={item} />
  ) : (
    <HubNotFoundPage hubPath="/blog" hubTitle="Blog" />
  );
}
