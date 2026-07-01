import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold">
          أخبار العارضة
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link to="/">الرئيسية</Link>
          <Link to="/category/local">أخبار العارضة</Link>
          <Link to="/category/services">الخدمات</Link>
          <Link to="/about">عن المنصة</Link>
          <Link to="/admin" className="rounded-lg bg-black px-3 py-2 text-white">
            لوحة التحكم
          </Link>
        </nav>
      </div>
    </header>
  );
}
