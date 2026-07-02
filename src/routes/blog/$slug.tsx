import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("blog", params.slug).title} | TCR Blog` }, { name: "description", content: getHubItem("blog", params.slug).subtitle }] }),
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();
  return <HubDetailPage config={hubConfigs.blog} item={getHubItem("blog", slug)} />;
}