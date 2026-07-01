import { Link } from "react-router-dom";

import { latestNews } from "../../features/news/news.mock";

export function NewsListPage() {
  return (
    <section className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-950">����� �������</h1>

        <Link to="/admin/news/create" className="rounded-md bg-gray-950 px-4 py-3 text-sm font-medium text-white">
          ����� ���
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-gray-100">
        <div className="grid grid-cols-[1fr_auto] bg-gray-50 px-4 py-3 text-sm font-medium text-gray-600 sm:grid-cols-[1fr_140px_120px]">
          <span>�������</span>
          <span className="hidden sm:block">�������</span>
          <span>������</span>
        </div>
        {latestNews.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[1fr_auto] items-center gap-3 border-t border-gray-100 px-4 py-4 sm:grid-cols-[1fr_140px_120px]"
          >
            <Link to={`/admin/news/${item.id}/edit`} className="font-medium text-gray-950">
              {item.title}
            </Link>
            <span className="hidden text-sm text-gray-500 sm:block">{item.category}</span>
            <span className="w-fit rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
              {item.status === "published" ? "�����" : "�����"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
