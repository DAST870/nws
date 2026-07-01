export type NewsStatus = "published" | "draft" | "scheduled";

export type MockNewsItem = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  location: string;
  publishedAt: string;
  status: NewsStatus;
};

const local = "\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0639\u0627\u0631\u0636\u0629";
const services = "\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0648\u0627\u0644\u062a\u0646\u0628\u064a\u0647\u0627\u062a";
const events = "\u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a";
const education = "\u0627\u0644\u062a\u0639\u0644\u064a\u0645";
const aradah = "\u0627\u0644\u0639\u0627\u0631\u0636\u0629";

export const featuredNews: MockNewsItem = {
  id: "1",
  title:
    "\u0628\u0644\u062f\u064a\u0629 \u0627\u0644\u0639\u0627\u0631\u0636\u0629 \u062a\u0648\u0627\u0635\u0644 \u0623\u0639\u0645\u0627\u0644 \u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0637\u0631\u0642 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629",
  slug: "aradah-roads-maintenance",
  excerpt:
    "\u062a\u0633\u062a\u0645\u0631 \u0641\u0631\u0642 \u0627\u0644\u0635\u064a\u0627\u0646\u0629 \u0641\u064a \u062a\u0646\u0641\u064a\u0630 \u0623\u0639\u0645\u0627\u0644 \u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u064a\u0629 \u0648\u0631\u0641\u0639 \u062c\u0648\u062f\u0629 \u0627\u0644\u0637\u0631\u0642.",
  category: services,
  categorySlug: "services",
  location: aradah,
  publishedAt: "2026-07-01",
  status: "published",
};

export const latestNews: MockNewsItem[] = [
  featuredNews,
  {
    id: "2",
    title:
      "\u0625\u0639\u0644\u0627\u0646 \u0645\u0648\u0627\u0639\u064a\u062f \u0641\u0639\u0627\u0644\u064a\u0629 \u0635\u064a\u0641\u064a\u0629 \u0644\u0644\u0623\u0633\u0631",
    slug: "summer-family-event",
    excerpt:
      "\u062a\u0646\u0637\u0644\u0642 \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0629 \u0645\u0633\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0628\u0645\u0634\u0627\u0631\u0643\u0629 \u062c\u0647\u0627\u062a \u062a\u0637\u0648\u0639\u064a\u0629 \u0648\u0623\u0631\u0643\u0627\u0646 \u0644\u0644\u0623\u0637\u0641\u0627\u0644.",
    category: events,
    categorySlug: "events",
    location: "\u0648\u0633\u0637 \u0627\u0644\u0639\u0627\u0631\u0636\u0629",
    publishedAt: "2026-06-30",
    status: "published",
  },
  {
    id: "3",
    title:
      "\u062a\u0646\u0628\u064a\u0647 \u0644\u0644\u0633\u0627\u0626\u0642\u064a\u0646 \u0628\u0634\u0623\u0646 \u062a\u062d\u0648\u064a\u0644\u0629 \u0645\u0624\u0642\u062a\u0629",
    slug: "temporary-road-diversion",
    excerpt:
      "\u062a\u0628\u062f\u0623 \u0627\u0644\u062a\u062d\u0648\u064a\u0644\u0629 \u0627\u0644\u0645\u0624\u0642\u062a\u0629 \u0635\u0628\u0627\u062d \u0627\u0644\u062c\u0645\u0639\u0629 \u0644\u0627\u0633\u062a\u0643\u0645\u0627\u0644 \u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0635\u064a\u0627\u0646\u0629.",
    category: services,
    categorySlug: "services",
    location: "\u0637\u0631\u064a\u0642 \u0627\u0644\u0645\u0644\u0643 \u0639\u0628\u062f\u0627\u0644\u0639\u0632\u064a\u0632",
    publishedAt: "2026-06-29",
    status: "published",
  },
  {
    id: "4",
    title:
      "\u0645\u062f\u0627\u0631\u0633 \u0627\u0644\u0639\u0627\u0631\u0636\u0629 \u062a\u0633\u062a\u0639\u062f \u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0646\u0634\u0627\u0637 \u0627\u0644\u0635\u064a\u0641\u064a",
    slug: "schools-summer-programs",
    excerpt:
      "\u062a\u0633\u062a\u0642\u0628\u0644 \u0627\u0644\u0645\u062f\u0627\u0631\u0633 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0637\u0644\u0627\u0628 \u0641\u064a \u0628\u0631\u0627\u0645\u062c \u0645\u0647\u0627\u0631\u064a\u0629 \u0648\u062b\u0642\u0627\u0641\u064a\u0629.",
    category: education,
    categorySlug: "education",
    location: aradah,
    publishedAt: "2026-06-28",
    status: "draft",
  },
];

export const adminStats = {
  published: latestNews.filter((item) => item.status === "published").length,
  drafts: latestNews.filter((item) => item.status === "draft").length,
  scheduled: latestNews.filter((item) => item.status === "scheduled").length,
  categories: [local, services, events, education].length,
};
