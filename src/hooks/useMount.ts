import { useEffect, useRef } from "react";

export const useMount = (callback: () => void) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      callback();
      return () => {
        mounted.current = false;
      };
    }
  }, [callback, mounted]);
};
export default useMount;
