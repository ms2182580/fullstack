import { useEffect, useState } from "react"

export const useWidthWindow = () => {
  const [widthWindow, setWidthWindow] = useState(() => {
    if (typeof window === "object") {
      return window.innerWidth
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
  }, [widthWindow])

  return { widthWindow, setWidthWindow }
}
