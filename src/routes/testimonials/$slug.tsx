import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/testimonials/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("testimonials", params.slug).title} | TCR Reviews` }, { name: "description", content: getHubItem("testimonials", params.slug).subtitle }] }),
  component: TestimonialDetail,
});

function TestimonialDetail() {
  const { slug } = Route.useParams();
  return <HubDetailPage config={hubConfigs.testimonials} item={getHubItem("testimonials", slug)} />;
}