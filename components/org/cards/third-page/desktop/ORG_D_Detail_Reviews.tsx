import { NavBar_D_WriteAReviewSvg } from "@/assets/icons"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import {
  Caption,
  P,
} from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { ORG_ST_Review } from "@/utils/ORG_ST_Review_D"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { useRouter } from "next/router"
import { Fragment, useMemo, useRef, useState } from "react"
import { ORG_D_Detail_Review_Modal_WriteAReview } from "./ORG_D_Detail_Review_Modal_WriteAReview"
import { ORG_D_Detail_Review_StarsRating } from "./ORG_D_Detail_Review_StarsRating"
import { ORG_D_Detail_Reviews_IndividualComponent } from "./ORG_D_Detail_Reviews_IndividualComponent"
import { ORG_D_Detail_Reviews_Mention } from "./ORG_D_Detail_Reviews_Mention"
import { ORG_D_Detail_Reviews_Rating } from "./ORG_D_Detail_Reviews_Rating"
import { ORG_D_Detail_ReviewsWrapper } from "./styles/ORG_D_Detail_ReviewsWrapper"

export const enum KEYS_FOR_PROPS {
  TITLE_ON_HEADER = "TITLE_ON_HEADER",
}

export type Type_Props_TITLE_ON_HEADER = {
  title: string
  highlight: string[] | string
}

const MANY_SHOW = {
  INITIAL: 2,
}

export const ORG_D_Detail_Reviews = ({
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

  const { thirdpageDataORG: thirdpageDataORG_backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const { query } = useRouter()

  const theReviews = useMemo(() => {
    if (!Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])) {
      return null
    }

    return ORG_ST_Review(
      thirdpageDataORG_backend[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
        .recordName,
      "",
      8
    )
  }, [])

  const [howManyShow, setHowManyShow] = useState(MANY_SHOW.INITIAL)
  const handleHowManyShow = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      if (
        howManyShow === MANY_SHOW.INITIAL &&
        theReviews &&
        theReviews !== null &&
        theReviews !== undefined
      ) {
        setHowManyShow(theReviews?.length)
      } else {
        setHowManyShow(MANY_SHOW.INITIAL)

        theRef?.current?.scrollIntoView()
      }
    }
  }

  const theRef = useRef<HTMLElement>(null)

  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <>
      <ORG_D_Detail_ReviewsWrapper id={theIdForComponent} ref={theRef}>
        <header>
          <H2>{!customTitle ? "Reviews" : customTitleFormat}</H2>
          <button
            type="button"
            tabIndex={0}
            onClick={(e) => openDialog({ event: e })}
            onKeyDown={(e) => openDialog({ event: e })}
          >
            <NavBar_D_WriteAReviewSvg />
            Write a review
          </button>
        </header>

        <div>
          <Caption>
            Your trust is our top concern, so providers can’t pay to alter or
            remove reviews. We also don’t publish reviews that contain any
            private patient health information.{" "}
            <Caption tabIndex={0}>Learn more here.</Caption>
          </Caption>

          <ORG_D_Detail_Review_StarsRating rating={5} reviews={99} />

          <ORG_D_Detail_Reviews_Rating />

          <ORG_D_Detail_Reviews_Mention />

          <ORG_D_Detail_Reviews_IndividualComponent
            getReviews={theReviews}
            howManyShow={howManyShow}
          />

          <P
            tabIndex={0}
            onClick={handleHowManyShow}
            onKeyDown={handleHowManyShow}
          >
            {howManyShow === MANY_SHOW.INITIAL ? "View All" : "View less"}
          </P>
        </div>
      </ORG_D_Detail_ReviewsWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={(e) => closeDialog({ event: e })}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ORG_D_Detail_Review_Modal_WriteAReview name="" lastName="" />
      </Dialog_D>
    </>
  )
}
