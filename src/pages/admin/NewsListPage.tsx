import { Link } from "react-router-dom";

export function NewsListPage() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">إدارة الأخبار</h1>

        <Link to="/admin/news/create" className="rounded-xl bg-black px-4 py-2 text-white">
          إضافة خبر
        </Link>
      </div>

      <p className="mt-4 text-gray-600">لا توجد أخبار حتى الآن.</p>
    </section>
  );
}
