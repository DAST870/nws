export function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="mb-3 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
          منصة إعلامية محلية
        </p>

        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          أخبار العارضة في مكان واحد
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          منصة إخبارية محلية لعرض الأخبار، التنبيهات، الفعاليات، والإعلانات الخاصة بمحافظة العارضة.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {["آخر الأخبار", "الخدمات والتنبيهات", "الفعاليات"].map((title) => (
          <article key={title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">
              سيتم ربط هذا القسم لاحقًا بقاعدة البيانات ولوحة التحكم.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
