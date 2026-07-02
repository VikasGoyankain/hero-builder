import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/testimonials/")({
  head: () => ({ meta: [{ title: "Student & Parent Testimonials | The Court Room" }, { name: "description", content: hubConfigs.testimonials.description }] }),
  component: () => <HubListingPage config={hubConfigs.testimonials} />,
});