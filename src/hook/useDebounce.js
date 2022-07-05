import { useEffect } from "react";
let t;
const useDebounce = (callBack, delay = 500, dependencies) => {
  useEffect(() => {
    clearTimeout(t);
    t = setTimeout(callBack, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies]);
};

export default useDebounce;
