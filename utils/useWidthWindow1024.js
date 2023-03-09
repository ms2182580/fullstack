import { useEffect, useState } from "react"
import { size } from "../assets/screenSizes/ScreenSizes"

export const useWidthWindow1024 = () => {
  const [laptopSize, setTabletSize] = useState(Number(size.laptop))
  const [isMobileSSR, setIsMobileSSR] = useState(true)

  const [isMobile, setIsMobile] = useState(isMobileSSR || window.innerWidth <= laptopSize)

  useEffect(() => {
    if (typeof window === "object") {
      setIsMobileSSR(false)

      const handleResize = () => {
        const widthWindowInsideResize = window.innerWidth
        if (widthWindowInsideResize <= laptopSize) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  const [widthWindowSSR, setWidthWindowSSR] = useState("is server")
  const [widthWindow, setWidthWindow] = useState(() => {
    if (widthWindowSSR === "is server") {
      return "is server"
    } else {
      if (typeof window === "object") {
        const widthWindowInsideState = window.innerWidth
        return widthWindowInsideState
      }
    }
  })

  useEffect(() => {
    if (typeof window === "object") {
      setWidthWindowSSR(false)
    }
  }, [])

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
  }, [imInClient])

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
