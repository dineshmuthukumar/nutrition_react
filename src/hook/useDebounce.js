import React, { useEffect } from "react";
let t;
const useDebounce = (callBack, delay = 500, dependencies) => {
    useEffect(() => {
        clearTimeout(t);
        t = setTimeout(callBack, delay)
    }, [dependencies])
};

export default useDebounce;