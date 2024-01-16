import { useEffect, useState } from "react"
import { size } from "../assets/screen-sizes/ScreenSizes"

export const useWidthSize = () => {
  const [widthWindow, setWidthWindow] = useState(Number(size.laptop))
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const widthWindowInsideResize = window.innerWidth
      if (widthWindowInsideResize <= widthWindow) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { isMobile, widthWindow }
}

/* 

!FH
Change this actual implementation for this: https://twitter.com/midudev/status/1744719872913981720
*/
