import { useEffect, useState } from "react"

export const useToggableOnDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  useEffect(() => {
    if (window.innerHeight <= 843) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [])

  return isOpen
}
