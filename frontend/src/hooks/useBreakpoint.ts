import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize"

export const useBreakpoint = (n: number, type: "smaller" | "bigger") => {
  const windowSize = useWindowSize()
  const [value, setValue] = useState(false)

  useEffect(() => {
    if(!windowSize) return;
    let value = windowSize?.width >= n;

    if(type === "smaller") {
      value = windowSize?.width <= n;
    }
  
    setValue(value)
  }, [windowSize])

  return value
}