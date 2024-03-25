import { size } from "@/assets/screen-sizes/ScreenSizes"
import { useEffect, useState } from "react"

type WindowDimentions = {
  isMobile: boolean | undefined
}

export const useWidthSize = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    isMobile: undefined,
  })
  useEffect(() => {
    function handleResize(): void {
      let isMobile = window.innerWidth <= Number(size.laptop)

      setWindowDimensions({
        isMobile,
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return (): void => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowDimensions
}

/* 
!FH
Change this actual implementation for this: https://twitter.com/midudev/status/1744719872913981720

CHange the validation of resize eventListener with window.innerWidth > NUMBER_ON_PX for: 

  const matched = window.matchMedia("(min-width: 720px")
  matched.addEventListener("change", (event) => {
    if (event.matches) {
      CODE_HERE_SHOWING_DATA
    }
  })
  


*/
