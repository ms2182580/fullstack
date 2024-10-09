/*
import { useEffect } from "react"

export const useOutsideHide = (ref, handleStateOutside, ...rest) => {
  useEffect(() => {
    setTimeout(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleStateOutside(false)
        }
      }

      function handleKeydown(event) {
        if ((ref.current && event.code === "Escape") || event.code === "Tab") {
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

*/

import { useEffect } from "react"

export const useOutsideHide = (theRef, handleStateOutside, ...rest) => {
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside all refs
      if (
        theRef.every(
          (ref) => ref.current && !ref.current.contains(event.target)
        ) ||
        (theRef.current && !theRef.current.contains(event.target))
      ) {
        handleStateOutside(false)
      }
    }

    function handleFocus(event) {
      // Check if focus is not on any of the referenced elements
      if (
        theRef.every(
          (ref) => ref.current && !ref.current.contains(event.target)
        ) ||
        (theRef.current && !theRef.current.contains(event.target))
      ) {
        handleStateOutside(false)
      }
    }

    function handleKeydown(event) {
      if (event.code === "Escape") {
        handleStateOutside(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("focusin", handleFocus) // Listen for focus events
    document.addEventListener("keydown", handleKeydown)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("focusin", handleFocus)
      document.removeEventListener("keydown", handleKeydown)
    }
  }, [theRef, handleStateOutside])
}
