import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash: React.FC = () => {
  const { hash, pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Check if the base route changed (e.g. / -> /course/7) vs sub-tab change (/course/7/about -> /course/7/lessons)
    const currentBaseRoute = pathname.split("/").slice(0, 3).join("/");
    const prevBaseRoute = prevPathname.current.split("/").slice(0, 3).join("/");

    const isBaseRouteChanged = currentBaseRoute !== prevBaseRoute;
    prevPathname.current = pathname;

    if (hash) {
      const targetId = hash.replace("#", "");

      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      const timer = setTimeout(scrollToElement, 100);
      return () => clearTimeout(timer);
    } else if (isBaseRouteChanged) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};
