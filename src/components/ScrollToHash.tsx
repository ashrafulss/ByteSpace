import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash: React.FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");

      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      // Slight delay ensures the DOM is mounted when switching pages
      const timer = setTimeout(scrollToElement, 100);
      return () => clearTimeout(timer);
    } else {
      // Normal page navigation: Reset scroll to top
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};
