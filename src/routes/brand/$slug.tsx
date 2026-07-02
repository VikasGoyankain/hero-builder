import { createFileRoute } from "@tanstack/react-router";
import { PremiumNotFound, PremiumPageView } from "@/components/marketing/PremiumEngine";
import { brandPages } from "@/lib/premium-content";

export const Route = createFileRoute("/brand/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${brandPages[params.slug]?.title ?? "Brand page"} | The Court Room` },
      { name: "description", content: brandPages[params.slug]?.subtitle ?? "Premium brand page for The Court Room." },
    ],
  }),
  component: BrandPage,
});

function BrandPage() {
  const { slug } = Route.useParams();
  const page = brandPages[slug];
  return page ? <PremiumPageView page={page} /> : <PremiumNotFound />;
}