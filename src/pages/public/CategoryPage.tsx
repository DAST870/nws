import { useParams } from "react-router-dom";

export function CategoryPage() {
  const { categorySlug } = useParams();

  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">تصنيف: {categorySlug}</h1>
      <p className="mt-4 text-gray-600">سيتم عرض أخبار هذا التصنيف هنا.</p>
    </section>
  );
}
