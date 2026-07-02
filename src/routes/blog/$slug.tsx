import { createFileRoute } from "@tanstack/react-router";
import { HubDetailPage, HubNotFoundPage } from "@/components/marketing/HubPages";
import { getHubItem, hubConfigs } from "@/lib/hub-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${getHubItem("blog", params.slug)?.title ?? "Blog not found"} | TCR Blog` }, { name: "description", content: getHubItem("blog", params.slug)?.subtitle ?? hubConfigs.blog.description }] }),
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();
  const item = getHubItem("blog", slug);
  return item ? <HubDetailPage config={hubConfigs.blog} item={item} /> : <HubNotFoundPage hubPath="/blog" hubTitle="Blog" />;
}