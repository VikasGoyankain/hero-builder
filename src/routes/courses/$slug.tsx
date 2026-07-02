import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/courses/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("courses", params.slug)?.title ?? "Course not found"} | TCR Courses` }, { name: "description", content: getHubItem("courses", params.slug)?.subtitle ?? hubConfigs.courses.description }] }),
  component: CourseDetail,
});

function CourseDetail() {
  const { slug } = Route.useParams();
  const item = getHubItem("courses", slug);
  return item ? <HubDetailPage config={hubConfigs.courses} item={item} /> : <HubNotFoundPage hubPath="/courses" hubTitle="Courses" />;
}