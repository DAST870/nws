import { Link } from "react-router-dom";
import { ArrowLeft, Clock3, MapPin } from "lucide-react";

import { featuredNews, latestNews } from "../../features/news/news.mock";
import { NEWS_CATEGORIES } from "../../lib/constants/categories";

const labels = {
  featured: "\u0627\u0644\u062e\u0628\u0631 \u0627\u0644\u0623\u0628\u0631\u0632",
  read: "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u062e\u0628\u0631",
  bulletin: "\u0646\u0634\u0631\u0629 \u0627\u0644\u0639\u0627\u0631\u0636\u0629 \u0627\u0644\u0645\u062d\u0644\u064a\u0629",
  bulletinText:
    "\u0645\u0633\u0627\u062d\u0629 \u0645\u0628\u062f\u0626\u064a\u0629 \u0644\u0639\u0631\u0636 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0648\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0642\u0628\u0644 \u0631\u0628\u0637\u0647\u0627 \u0628\u0642\u0627\u0639\u062f\u0629 \u0628\u064a\u0627\u0646\u0627\u062a Supabase.",
  published: "\u0623\u062e\u0628\u0627\u0631 \u0645\u0646\u0634\u0648\u0631\u0629",
  categories: "\u062a\u0635\u0646\u064a\u0641\u0627\u062a",
  latest: "\u0622\u062e\u0631 \u0627\u0644\u0623\u062e\u0628\u0627\u0631",
  search: "\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0623\u062e\u0628\u0627\u0631",
};

export function HomePage() {
  return (
    <section className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">
          <p className="mb-3 inline-flex rounded-md bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
            {labels.featured}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
            {featuredNews.title}
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-gray-600">
            {featuredNews.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center gap-1">
              <MapPin size={16} />
              {featuredNews.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 size={16} />
              {featuredNews.publishedAt}
            </span>
          </div>
          <Link
            to={`/news/${featuredNews.slug}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gray-950 px-4 py-3 text-sm font-medium text-white"
          >
            {labels.read}
            <ArrowLeft size={16} />
          </Link>
        </article>

        <aside className="rounded-lg bg-gray-950 p-5 text-white sm:p-6">
          <h2 className="text-xl font-bold">{labels.bulletin}</h2>
          <p className="mt-3 leading-7 text-gray-300">{labels.bulletinText}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md bg-white/10 p-3">
              <p className="text-gray-300">{labels.published}</p>
              <p className="mt-1 text-2xl font-bold">3</p>
            </div>
            <div className="rounded-md bg-white/10 p-3">
              <p className="text-gray-300">{labels.categories}</p>
              <p className="mt-1 text-2xl font-bold">{NEWS_CATEGORIES.length}</p>
            </div>
          </div>
        </aside>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-gray-950">{labels.latest}</h2>
          <Link to="/search" className="text-sm font-medium text-red-700">
            {labels.search}
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {latestNews.slice(1).map((item) => (
            <article
              key={item.id}
              className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <Link
                to={`/category/${item.categorySlug}`}
                className="text-sm font-medium text-red-700"
              >
                {item.category}
              </Link>
              <h3 className="mt-3 text-xl font-bold leading-8 text-gray-950">
                <Link to={`/news/${item.slug}`}>{item.title}</Link>
              </h3>
              <p className="mt-3 leading-7 text-gray-600">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex gap-2 overflow-x-auto pb-2">
        {NEWS_CATEGORIES.map((category) => (
          <Link
            key={category.value}
            to={`/category/${category.value}`}
            className="shrink-0 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
          >
            {category.label}
          </Link>
        ))}
      </section>
    </section>
  );
}
