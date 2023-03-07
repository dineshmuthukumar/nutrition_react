import { useEffect, useState } from "react";
const useWindowUtils = () => {
  const [windowUtils, setWindowUtils] = useState({});
  useEffect(() => {
    if (typeof window !== "undefined") {
      //* Add more window properties here
      setWindowUtils({
        ...windowUtils,
        height: window.innerHeight,
        width: window.innerWidth,
        location: window.location,
        href: window.location.href,
        hash: window.location.hash,
        open: window.open,
        navigator: window.navigator,
      });
      const handleResize = () =>
        setWindowUtils({
          ...windowUtils,
          height: window.innerHeight,
          width: window.innerWidth,
          location: window.location,
          href: window.location.href,
          hash: window.location.hash,
          open: window.open,
          navigator: window.navigator,
        });
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowUtils;
};
export default useWindowUtils;
