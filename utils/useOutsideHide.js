import { useEffect } from "react"

export const useOutsideHide = (ref, handleStateOutside) => {
  useEffect(() => {
    setTimeout(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleStateOutside(false)
        }
      }

      function handleKeydown(event) {
        if (ref.current && event.code === "Escape") {
          handleStateOutside(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleKeydown)

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        document.removeEventListener("keydown", handleKeydown)
      }

    }, 0)
  }, [ref])
}
