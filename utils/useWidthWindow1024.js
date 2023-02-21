import { useEffect, useState } from "react"
import { size } from "../assets/screenSizes/ScreenSizes"

export const useWidthWindow1024 = () => {
  const [laptopSize, setTabletSize] = useState(Number(size.laptop))
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "object") {
      const widthWindowInsideState = window.innerWidth
      if (widthWindowInsideState <= laptopSize) {
        return true
      } else {
        return false
      }
    }
  })

  const [widthWindow, setWidthWindow] = useState(() => {
    if (typeof window === "object") {
      const widthWindowInsideState = window.innerWidth
      return widthWindowInsideState
    }
  })
  const [imInClient, setImInClient] = useState(() => {
    if (typeof window === "object") {
      return true
    }
  })

  useEffect(() => {
    window.onresize = () => {
      setWidthWindow(window.innerWidth)
    }

    if (imInClient) {
      setWidthWindow(window.innerWidth)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "object") {
      setImInClient(true)
    } else {
      setImInClient(false)
    }

    if (widthWindow <= laptopSize) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [widthWindow])

  return { widthWindow, setWidthWindow, isMobile, setIsMobile }
}
