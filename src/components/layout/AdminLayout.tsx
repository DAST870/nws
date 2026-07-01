import { Link, Outlet } from "react-router-dom";

const labels = {
  site: "\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0639\u0627\u0631\u0636\u0629",
  home: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
  news: "\u0627\u0644\u0623\u062e\u0628\u0627\u0631",
  create: "\u0625\u0636\u0627\u0641\u0629 \u062e\u0628\u0631",
  settings: "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",
};

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="font-bold text-gray-950">
            {labels.site}
          </Link>

          <nav className="flex flex-wrap gap-3 text-sm text-gray-700">
            <Link to="/admin">{labels.home}</Link>
            <Link to="/admin/news">{labels.news}</Link>
            <Link to="/admin/news/create">{labels.create}</Link>
            <Link to="/admin/settings">{labels.settings}</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
