/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

const useCloseOutside = (handler: () => void, listeningCapturing = true) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as any)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, listeningCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listeningCapturing);
  }, [handler, listeningCapturing]);
  return ref;
};

export default useCloseOutside;
