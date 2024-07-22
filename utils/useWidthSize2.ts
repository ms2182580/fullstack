import { useEffect, useState } from "react"

/* 
!FH1
This component doesn't work because trigget a "Hydration failed" on Nextjs
*/

export const useWidthSize2 = () => {
  const [actualWidth, setActualWidth] = useState(
    typeof window !== undefined && window.innerWidth
  )

  useEffect(() => {
    const getWidth = () => {
      setActualWidth(window.innerWidth)
    }

    window.addEventListener("resize", getWidth)
    return () => {
      window.removeEventListener("resize", getWidth)
    }
  }, [])

  return { actualWidth }
}
