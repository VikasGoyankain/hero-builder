import { createFileRoute } from "@tanstack/react-router";
import { PremiumNotFound, PremiumPageView } from "@/components/marketing/PremiumEngine";
import { conversionPages } from "@/lib/premium-content";

export const Route = createFileRoute("/conversion/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${conversionPages[params.slug]?.title ?? "Conversion page"} | The Court Room` },
      { name: "description", content: conversionPages[params.slug]?.subtitle ?? "Premium conversion page for The Court Room." },
    ],
  }),
  component: ConversionPage,
});

function ConversionPage() {
  const { slug } = Route.useParams();
  const page = conversionPages[slug];
  return page ? <PremiumPageView page={page} /> : <PremiumNotFound />;
}