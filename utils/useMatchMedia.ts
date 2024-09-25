import { size } from "@/assets/screen-sizes/ScreenSizes"
import { useEffect, useState } from "react"

const desktopSize = `(max-width: ${size.laptop}px)`

export const useMatchMedia = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (typeof window === "undefined") {
      // If window is undefined, it's server-side rendering (SSR), so we don't run the media query
      return
    }

    const mediaQuery = window.matchMedia(desktopSize)
    setIsMobile(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent): void => {
      setIsMobile(event.matches)
    }

    // Add event listener for media query changes
    mediaQuery.addEventListener("change", handleChange)

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return { isMobile }
}
