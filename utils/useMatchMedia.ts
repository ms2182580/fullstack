import { size } from "@/assets/screen-sizes/ScreenSizes"
import { useEffect, useState } from "react"

const desktopSize = `(max-width: ${size.laptop}px)`

/* //!FH1
 * Bug here:
  - Is not possible to block the render of the page until the app get the window width. This make a problem on the first render of the components for mobile versions (from 1024 and less)
  - This bug is only on developer mode, on production everything goes well

*/

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
