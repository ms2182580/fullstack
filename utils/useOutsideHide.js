import { useEffect } from "react"

export const useOutsideHide = (ref, handleStateOutside) => {
  useEffect(() => {
    setTimeout(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleStateOutside(false)
        }

      }

      document.addEventListener("mousedown", handleClickOutside)

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, 0)
  }, [ref])
}
