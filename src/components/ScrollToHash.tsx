import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ScrollToHash: React.FC = () => {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const currentBaseRoute = pathname.split("/").slice(0, 3).join("/");
    const prevBaseRoute = prevPathname.current.split("/").slice(0, 3).join("/");

    const isBaseRouteChanged = currentBaseRoute !== prevBaseRoute;
    prevPathname.current = pathname;

    if (hash) {
      const targetId = hash.replace("#", "");
      let attempts = 0;
      const maxAttempts = 10;

      const scrollToElement = () => {
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToElement, 50);
        } else {
          if (pathname === "/") {
            navigate("/404", { replace: true });
          } else {
            navigate(`/${hash}`, { replace: true });
          }
        }
      };

      const timer = setTimeout(scrollToElement, 50);
      return () => clearTimeout(timer);
    } else if (isBaseRouteChanged) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname, navigate]);

  return null;
};
