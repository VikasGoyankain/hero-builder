import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";
import { fetchPublishedItem } from "@/lib/content";

export const Route = createFileRoute("/faculties/$slug")({
  loader: async ({ params }) => ({ item: await fetchPublishedItem("faculties", params.slug) }),
  head: ({ params, loaderData }) => {
    const item = loaderData?.item ?? getHubItem("faculties", params.slug);
    return {
      meta: [
        { title: `${item?.title ?? "Faculty not found"} | TCR Faculty` },
        { name: "description", content: item?.subtitle ?? hubConfigs.faculties.description },
      ],
    };
  },
  component: FacultyDetail,
});

function FacultyDetail() {
  const { item } = Route.useLoaderData();
  return item ? (
    <HubDetailPage config={hubConfigs.faculties} item={item} />
  ) : (
    <HubNotFoundPage hubPath="/faculties" hubTitle="Faculty" />
  );
}
