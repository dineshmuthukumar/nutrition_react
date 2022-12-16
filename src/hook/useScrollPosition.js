import { useEffect, useState } from "react";

const useScrollPercentage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      let scrollPercentage = parseInt(
        (window.pageYOffset /
          (document.body.offsetHeight - window.innerHeight)) *
          100
      );
      setScrollPercentage(scrollPercentage);
    };
    window.addEventListener("scroll", updateScrollPercentage);
    updateScrollPercentage();
    return () => window.removeEventListener("scroll", updateScrollPercentage);
  }, []);

  return scrollPercentage;
};

export default useScrollPercentage;
