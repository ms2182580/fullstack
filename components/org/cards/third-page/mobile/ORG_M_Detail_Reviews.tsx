import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { Fragment, useMemo, useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D"
import { useScrollLock } from "../../../../../utils/useScrollLock"

export const enum KEYS_FOR_PROPS {
  TITLE_ON_HEADER = "TITLE_ON_HEADER",
}

export type Type_Props_TITLE_ON_HEADER = {
  title: string
  highlight: string[] | string
}

export const ORG_M_Detail_Reviews = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const {
    theIdForComponent = "#",
    [KEYS_FOR_PROPS.TITLE_ON_HEADER]: customTitle = null,
  } = allProps || {}

  const customTitleFormat = useMemo(() => {
    if (customTitle) {
      const words = customTitle.title.split(" ")

      const titleWithHighlights = words.map((word, index) => {
        if (customTitle.highlight.includes(word.replace(/[^\w\s]/gi, ""))) {
          return <span key={`${word}_${index}`}>{word} </span>
        } else {
          return <Fragment key={`${word}_${index}`}>{word} </Fragment>
        }
      })

      return titleWithHighlights
    }
  }, [customTitle])

  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const { fullName, card } = thirdpageDataORG

  const [getReviews, setGetReviews] = useState(
    ORG_ST_Review(fullName.first, fullName.last)
  )

  const [showModal_ViewAll, setShowModal_ViewAll] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx }: any = useCtx_ShowModal()

  const handleShowModal_ViewAll = (e: any) => {
    if (e.type === "click" || e.key === "Enter") {
      lockScroll()
      setShowModal_ViewAll(true)
      setModalShowedCtx(true)
      setShowModal_WriteAReview(false)
    }
  }

  const handleHideModal_ViewAll = (e: any) => {
    if (e.key === "Enter" || e.key === "Escape" || e.type === "mousedown") {
      unlockScroll()
      setShowModal_ViewAll(false)
      setModalShowedCtx(false)
    }
  }

  const [showModal_WriteAReview, setShowModal_WriteAReview] = useState(false)

  const handleShowModal_WriteAReview = (e: any) => {
    if (e.type === "click" || e.key === "Enter") {
      // lockScroll()
      setShowModal_WriteAReview(true)
      setModalShowedCtx(true)

      setShowModal_ViewAll(false)
    }
  }

  const handleHideModal_WriteAReview = (e: any) => {
    if (
      e.key === "Enter" ||
      e.key === "Escape" ||
      e.type === "mousedown" ||
      e.type === "click"
    ) {
      unlockScroll()
      setShowModal_WriteAReview(false)
      setModalShowedCtx(false)
    }
  }

  return <>{null}</>
}
