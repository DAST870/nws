import { useParams } from "react-router-dom";

export function NewsDetailsPage() {
  const { newsSlug } = useParams();

  return (
    <article className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">تفاصيل الخبر</h1>
      <p className="mt-4 text-gray-600">معرّف الخبر: {newsSlug}</p>
    </article>
  );
}
