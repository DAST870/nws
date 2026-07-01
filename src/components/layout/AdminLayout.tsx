import { Link, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="font-bold">
            أخبار العارضة
          </Link>

          <nav className="flex gap-4 text-sm">
            <Link to="/admin">الرئيسية</Link>
            <Link to="/admin/news">الأخبار</Link>
            <Link to="/admin/news/create">إضافة خبر</Link>
            <Link to="/admin/settings">الإعدادات</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
