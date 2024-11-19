import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Define routes for which scroll to top should not happen
    const exemptedRoutes = ["/products", "/products/:id"]; // Update with actual dynamic routes if necessary

    // Check if current or previous route is exempted
    const isExempted = exemptedRoutes.some((route) =>
      location.pathname.includes(route.replace(":id", ""))
    );

    // Scroll to top only if the route is not exempted
    if (!isExempted) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToTop;
