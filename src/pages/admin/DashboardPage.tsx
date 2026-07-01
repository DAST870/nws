export function DashboardPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">لوحة التحكم</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">الأخبار المنشورة</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">المسودات</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">التصنيفات</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
      </div>
    </section>
  );
}
