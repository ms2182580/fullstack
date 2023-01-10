import { useEffect, useState } from "react"

export const useWidthWindow = () => {
  const [widthWindow, setWidthWindow] = useState()
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

  return { widthWindow, setWidthWindow }
}
