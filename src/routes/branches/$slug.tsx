import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/branches/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("branches", params.slug).title} | TCR Branches` }, { name: "description", content: getHubItem("branches", params.slug).subtitle }] }),
  component: BranchDetail,
});

function BranchDetail() {
  const { slug } = Route.useParams();
  return <HubDetailPage config={hubConfigs.branches} item={getHubItem("branches", slug)} />;
}