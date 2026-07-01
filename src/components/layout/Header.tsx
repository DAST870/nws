import { Link } from "react-router-dom";

const labels = {
  site: "\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0639\u0627\u0631\u0636\u0629",
  home: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
  local: "\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0639\u0627\u0631\u0636\u0629",
  services: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a",
  about: "\u0639\u0646 \u0627\u0644\u0645\u0646\u0635\u0629",
  admin: "\u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645",
};

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="text-xl font-bold text-gray-950">
          {labels.site}
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
          <Link to="/">{labels.home}</Link>
          <Link to="/category/local">{labels.local}</Link>
          <Link to="/category/services">{labels.services}</Link>
          <Link to="/about">{labels.about}</Link>
          <Link
            to="/admin"
            className="rounded-lg bg-red-700 px-3 py-2 text-white transition hover:bg-red-800"
          >
            {labels.admin}
          </Link>
        </nav>
      </div>
    </header>
  );
}
