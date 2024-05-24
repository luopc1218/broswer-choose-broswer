import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

const lazyLoad = (path: string) => {
  const Comp = lazy(() => import(path));
  return (
    <Suspense fallback={<>加载中...</>}>
      <Comp />
    </Suspense>
  );
};

export const routes: RouteObject[] = [
  {
    path: "/",
  },
  {
    path: "/preference",
    element: lazyLoad("@/pages/preference"),
  },
];

export default routes;
