import { useEffect } from "react"

export const useOutsideHideHover = (ref, handleStateOutside, howMuchDelay = 0) => {
  useEffect(() => {
    setTimeout(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleStateOutside(false)
        } else {
          handleStateOutside(true)
        }
      }

      document.addEventListener("mouseover", handleClickOutside)

      return () => {
        document.removeEventListener("mouseover", handleClickOutside)
      }


    }, howMuchDelay)



  }, [ref])
}
