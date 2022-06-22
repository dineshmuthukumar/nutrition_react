import React, { useEffect } from "react";
let t;
const useDebounce = (callBack, slug = false, delay = 500, dependencies) => {
    useEffect(() => {
        clearTimeout(t);
        if (!slug)
            t = setTimeout(callBack, delay)
    }, [dependencies])
};

export default useDebounce;