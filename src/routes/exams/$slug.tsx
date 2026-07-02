import { createFileRoute } from "@tanstack/react-router";
import { PremiumNotFound, PremiumPageView } from "@/components/marketing/PremiumEngine";
import { examPages } from "@/lib/premium-content";

export const Route = createFileRoute("/exams/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${examPages[params.slug]?.title ?? "Exam page"} | The Court Room` },
      { name: "description", content: examPages[params.slug]?.subtitle ?? "Premium exam page for law entrance preparation." },
    ],
  }),
  component: ExamPage,
});

function ExamPage() {
  const { slug } = Route.useParams();
  const page = examPages[slug];
  return page ? <PremiumPageView page={page} /> : <PremiumNotFound />;
}