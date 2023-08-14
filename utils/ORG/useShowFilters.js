import { useEffect, useRef, useState } from "react"
import { useCtx_ShowModal } from "../../context/Ctx_ShowModal"
import { useOutsideHide } from "../useOutsideHide"

export const useShowFilters = () => {
  const { setModalShowedCtx } = useCtx_ShowModal()
  const [mustShowFilter, setMustShowFilter] = useState(false)
  const handleShowFilter = (e) => {
    if ((e.type === "keydown" && e.code === "Enter") || e.type === "click") {
      setMustShowFilter((prevState) => !prevState)
    }
  }

  useEffect(() => {
    setModalShowedCtx((prevState) => !prevState)
  }, [mustShowFilter])

  const checkOrientation_False = () => {
    setMustShowFilter(() => false)
    setModalShowedCtx(() => false)
  }

  useEffect(() => {
    checkOrientation_False()
  }, [])

  /* 
  !FH
  There is a bug here: if the user resize the window 1 pixel it will not work but if the user resize, at least, 2 pixels it will work
  */

  useEffect(() => {
    window.addEventListener("resize", checkOrientation_False)
    return () => {
      window.removeEventListener("resize", checkOrientation_False)
    }
  }, [])

  const refContainer = useRef(null)
  useOutsideHide(refContainer, setMustShowFilter)

  return { mustShowFilter, setMustShowFilter, handleShowFilter, refContainer }
}
