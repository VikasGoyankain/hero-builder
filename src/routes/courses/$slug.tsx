import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/courses/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("courses", params.slug).title} | TCR Courses` }, { name: "description", content: getHubItem("courses", params.slug).subtitle }] }),
  component: CourseDetail,
});

function CourseDetail() {
  const { slug } = Route.useParams();
  return <HubDetailPage config={hubConfigs.courses} item={getHubItem("courses", slug)} />;
}