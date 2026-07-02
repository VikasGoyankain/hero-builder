import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/toppers/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("toppers", params.slug).title} | TCR Toppers` }, { name: "description", content: getHubItem("toppers", params.slug).subtitle }] }),
  component: TopperDetail,
});

function TopperDetail() {
  const { slug } = Route.useParams();
  return <HubDetailPage config={hubConfigs.toppers} item={getHubItem("toppers", slug)} />;
}