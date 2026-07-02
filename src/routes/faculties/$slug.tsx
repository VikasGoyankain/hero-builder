import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/faculties/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("faculties", params.slug)?.title ?? "Faculty not found"} | TCR Faculty` }, { name: "description", content: getHubItem("faculties", params.slug)?.subtitle ?? hubConfigs.faculties.description }] }),
  component: FacultyDetail,
});

function FacultyDetail() {
  const { slug } = Route.useParams();
  const item = getHubItem("faculties", slug);
  return item ? <HubDetailPage config={hubConfigs.faculties} item={item} /> : <HubNotFoundPage hubPath="/faculties" hubTitle="Faculty" />;
}