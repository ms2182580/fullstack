import { useEffect, useState } from "react"

export const useCheckMobile = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false)

  useEffect(() => {
    const checkWinPointer = typeof window === "object" && window.matchMedia("(pointer: coarse)").matches
    
    
    if (checkWinPointer) {
      setIsTouchScreen(true)
    } else {
      setIsTouchScreen(false)
    }
  })

  return { isTouchScreen }
}
