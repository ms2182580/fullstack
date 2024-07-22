import { size } from "@/assets/screen-sizes/ScreenSizes"
import { useEffect, useState } from "react"

const desktopSize = `(max-width: ${size.laptop}px)`

export const useMatchMedia = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window?.matchMedia(desktopSize)?.matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopSize)
    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches)
    }
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return { isMobile }
}
