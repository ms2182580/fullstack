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
