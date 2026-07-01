import { FileText, Newspaper, Send, Settings } from "lucide-react";
import { Link } from "react-router-dom";

import { adminStats, latestNews } from "../../features/news/news.mock";

export function DashboardPage() {
  const cards = [
    { label: "������� ��������", value: adminStats.published, icon: Newspaper },
    { label: "��������", value: adminStats.drafts, icon: FileText },
    { label: "��������", value: adminStats.scheduled, icon: Send },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-red-700">����� ������</p>
          <h1 className="mt-1 text-3xl font-bold text-gray-950">���� ������</h1>
        </div>
        <Link
          to="/admin/news/create"
          className="inline-flex items-center justify-center rounded-md bg-gray-950 px-4 py-3 text-sm font-medium text-white"
        >
          ����� ��� ����
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.label} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-gray-500">{card.label}</p>
                <Icon size={20} className="text-red-700" />
              </div>
              <p className="mt-3 text-3xl font-bold text-gray-950">{card.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-xl font-bold text-gray-950">��� ������� �� �������</h2>
          <div className="mt-4 divide-y divide-gray-100">
            {latestNews.map((item) => (
              <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-bold text-gray-950">{item.title}</h3>
                  <span className="w-fit rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    {item.status === "published" ? "�����" : "�����"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{item.category}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100">
          <Settings size={22} className="text-red-700" />
          <h2 className="mt-3 text-xl font-bold text-gray-950">������ ����� ������</h2>
          <p className="mt-3 leading-7 text-gray-600">
            ��� ������� ������ ������ ����� ���� ����� ��������� ������ ������ Supabase �������� �������� ������.
          </p>
        </aside>
      </div>
    </section>
  );
}
