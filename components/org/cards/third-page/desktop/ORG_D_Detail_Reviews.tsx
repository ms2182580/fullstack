import { NavBar_D_WriteAReviewSvg } from "@/assets/icons"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { useRouter } from "next/router"
import { Fragment, useMemo, useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D"
import { useScrollLock } from "../../../../../utils/useScrollLock"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_Review_Modal_ViewAll } from "./ORG_D_Detail_Review_Modal_ViewAll"
import { ORG_D_Detail_Review_Modal_WriteAReview } from "./ORG_D_Detail_Review_Modal_WriteAReview"
import { ORG_D_Detail_Reviews_IndividualComponent } from "./ORG_D_Detail_Reviews_IndividualComponent"
import { ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention } from "./ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention"
import { ORG_D_Detail_ReviewsWrapper } from "./styles/ORG_D_Detail_ReviewsWrapper"

export const enum KEYS_FOR_PROPS {
  TITLE_ON_HEADER = "TITLE_ON_HEADER",
}

export type Type_Props_TITLE_ON_HEADER = {
  title: string
  highlight: string[] | string
}

export const ORG_D_Detail_Reviews = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const {
    theIdForComponent = "#",
    [KEYS_FOR_PROPS.TITLE_ON_HEADER]: customTitle = null,
    // [DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]: backendComponent = false,
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

  const { thirdpageDataORG: thirdpageDataORG_backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const { fullName, card } = thirdpageDataORG

  const { query } = useRouter()

  const theReviews = useMemo(() => {
    if (!Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])) {
      return ORG_ST_Review(fullName.first, fullName.last)
    }

    return ORG_ST_Review(
      thirdpageDataORG_backend[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
        .recordName,
      ""
    )
  }, [])

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
      lockScroll()
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

  return (
    <>
      <ORG_D_Detail_ReviewsWrapper id={theIdForComponent}>
        <header>
          <H3>{!customTitle ? "Reviews" : customTitleFormat}</H3>
          <button
            type="button"
            tabIndex={0}
            onClick={handleShowModal_WriteAReview}
            onKeyDown={handleShowModal_WriteAReview}
          >
            <NavBar_D_WriteAReviewSvg />
            Write a review
          </button>
        </header>
        <Caption>
          Your trust is our top concern, so providers can’t pay to alter or
          remove reviews. We also don’t publish reviews that contain <br /> any
          private patient health information.{" "}
          <Caption tabIndex={0}>Learn more here.</Caption>
        </Caption>

        <ORG_D_Detail_Reviews_ViewAll_PeopleOftenMention
          rating={
            !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
              ? card.leftPart.rating
              : ""
          }
          reviews={
            !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
              ? card.leftPart.reviews
              : ""
          }
        />
        <ORG_D_Detail_Reviews_IndividualComponent getReviews={theReviews} />
        <P
          onClick={handleShowModal_ViewAll}
          onKeyDown={handleShowModal_ViewAll}
          tabIndex={0}
        >
          View All
        </P>
      </ORG_D_Detail_ReviewsWrapper>

      {showModal_ViewAll && (
        <ORG_D_Detail_Review_Modal_ViewAll
          showModal={showModal_ViewAll}
          handleHideModal={handleHideModal_ViewAll}
          handleShowModal_WriteAReview={handleShowModal_WriteAReview}
          rating={
            !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
              ? card.leftPart.rating
              : ""
          }
          reviews={
            !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
              ? card.leftPart.reviews
              : ""
          }
          getReviews={theReviews}
          name={
            !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND] ? fullName.first : ""
          }
          lastName={
            !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND] ? fullName.last : ""
          }
        />
      )}

      {showModal_WriteAReview && (
        <ORG_D_Detail_Review_Modal_WriteAReview
          name={
            !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND] ? fullName.first : ""
          }
          lastName={
            !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND] ? fullName.last : ""
          }
          handleHideModal_WriteAReview={handleHideModal_WriteAReview}
        />
      )}
    </>
  )
}
