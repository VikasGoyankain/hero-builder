import { createFileRoute } from "@tanstack/react-router";
import { HubListingPage } from "@/components/marketing/HubPages";
import { hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/courses/")({
  head: () => ({ meta: [{ title: "CLAT & AILET Courses | The Court Room" }, { name: "description", content: hubConfigs.courses.description }] }),
  component: () => <HubListingPage config={hubConfigs.courses} />,
});