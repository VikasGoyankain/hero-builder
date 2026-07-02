import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/toppers/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("toppers", params.slug)?.title ?? "Topper not found"} | TCR Toppers` }, { name: "description", content: getHubItem("toppers", params.slug)?.subtitle ?? hubConfigs.toppers.description }] }),
  component: TopperDetail,
});

function TopperDetail() {
  const { slug } = Route.useParams();
  const item = getHubItem("toppers", slug);
  return item ? <HubDetailPage config={hubConfigs.toppers} item={item} /> : <HubNotFoundPage hubPath="/toppers" hubTitle="Toppers" />;
}