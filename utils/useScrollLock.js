import { useCallback, useLayoutEffect } from "react"

/*//!FH1 Eliminate te use of this hook on all the website. Use the dialog html instead  */

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    // document.body.style.overflow = "hidden"
    // document.body.style.paddingRight = "var(--scrollbar-compensation)"
    // document.body.dataset.scrollLock = "true"
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
    delete document.body.dataset.scrollLock
  }, [])

  useLayoutEffect(() => {
    // const scrollBarCompensation = window.innerWidth - document.body.offsetWidth
    // document.body.style.setProperty(
    //   "--scrollbar-compensation",
    //   `${scrollBarCompensation}px`
    // )
  }, [])

  return {
    lockScroll,
    unlockScroll,
  }
}
