import { lazy, Suspense } from "react";
import { RouteObject, Navigate } from "react-router-dom";

const lazyLoad = (
  load: () => Promise<{
    default: () => JSX.Element;
  }>
) => {
  const Comp = lazy(load);
  return (
    <Suspense fallback={<>加载中...</>}>
      <Comp />
    </Suspense>
  );
};

export const routes: RouteObject[] = [
  // 默认路由时重定向到设置
  {
    path: "/",
    element: <Navigate replace to="/preference" />,
  },
  // 默认路径时重定向到通用设置
  {
    path: "/preference",
    element: <Navigate replace to="/preference/general" />,
  },
  {
    path: "/preference",
    element: lazyLoad(() => import("@/pages/preference/index")),
    children: [
      {
        path: "general",
        element: lazyLoad(() => import("@/pages/preference/general/index")),
      },
      {
        path: "browser",
        element: lazyLoad(() => import("@/pages/preference/browser/index")),
      },
      {
        path: "about",
        element: lazyLoad(() => import("@/pages/preference/about/index")),
      },
    ],
  },
];

export default routes;
