import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/branches/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("branches", params.slug)?.title ?? "Branch not found"} | TCR Branches` }, { name: "description", content: getHubItem("branches", params.slug)?.subtitle ?? hubConfigs.branches.description }] }),
  component: BranchDetail,
});

function BranchDetail() {
  const { slug } = Route.useParams();
  const item = getHubItem("branches", slug);
  return item ? <HubDetailPage config={hubConfigs.branches} item={item} /> : <HubNotFoundPage hubPath="/branches" hubTitle="Branches" />;
}