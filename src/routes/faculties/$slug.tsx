import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/faculties/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("faculties", params.slug).title} | TCR Faculty` }, { name: "description", content: getHubItem("faculties", params.slug).subtitle }] }),
  component: FacultyDetail,
});

function FacultyDetail() {
  const { slug } = Route.useParams();
  return <HubDetailPage config={hubConfigs.faculties} item={getHubItem("faculties", slug)} />;
}