import { createHashRouter } from "react-router-dom";

import { MainLayout } from "../components/layout/MainLayout";
import { AdminLayout } from "../components/layout/AdminLayout";

import { HomePage } from "../pages/public/HomePage";
import { AboutPage } from "../pages/public/AboutPage";
import { CategoryPage } from "../pages/public/CategoryPage";
import { NewsDetailsPage } from "../pages/public/NewsDetailsPage";
import { SearchPage } from "../pages/public/SearchPage";

import { LoginPage } from "../pages/admin/LoginPage";
import { DashboardPage } from "../pages/admin/DashboardPage";
import { NewsListPage } from "../pages/admin/NewsListPage";
import { CreateNewsPage } from "../pages/admin/CreateNewsPage";
import { EditNewsPage } from "../pages/admin/EditNewsPage";
import { SettingsPage } from "../pages/admin/SettingsPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "category/:categorySlug", element: <CategoryPage /> },
      { path: "news/:newsSlug", element: <NewsDetailsPage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "news", element: <NewsListPage /> },
      { path: "news/create", element: <CreateNewsPage /> },
      { path: "news/:newsId/edit", element: <EditNewsPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
