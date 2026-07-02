import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/testimonials/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("testimonials", params.slug)?.title ?? "Testimonial not found"} | TCR Reviews` }, { name: "description", content: getHubItem("testimonials", params.slug)?.subtitle ?? hubConfigs.testimonials.description }] }),
  component: TestimonialDetail,
});

function TestimonialDetail() {
  const { slug } = Route.useParams();
  const item = getHubItem("testimonials", slug);
  return item ? <HubDetailPage config={hubConfigs.testimonials} item={item} /> : <HubNotFoundPage hubPath="/testimonials" hubTitle="Testimonials" />;
}