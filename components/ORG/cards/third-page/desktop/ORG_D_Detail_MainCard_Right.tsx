import { ORG_D_Search_CarePlanSvg } from "@/assets/Icons"
import ORG_D_Detail_Share_Modal_QRAltIcon from "@/assets/Icons/ORG_D_Detail_Share_Modal_QRAltIcon.png"
import { Highlights_2_D } from "@/components/ORG/highlights/Highlights_2_D"
import { StarsRatingReview_D } from "@/components/ORG/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_KeyNamesForCards_D } from "@/utils/ORG/DATA_ORG_KeyNamesForCards_D"
import { capitalizeWords } from "@/utils/capitalizeWords"
import Image from "next/image"
import { useRouter } from "next/router"
import { Fragment } from "react"
import { ORG_D_Detail_About } from "./ORG_D_Detail_About"
import { ORG_D_Detail_Card_SecondRow_Info } from "./ORG_D_Detail_Card_SecondRow_Info"
import { ORG_D_Detail_HighlightBoxes } from "./ORG_D_Detail_HighlightBoxes"
import { ORG_D_Detail_Share } from "./ORG_D_Detail_Share"
import { ORG_D_Detail_Tooltip } from "./ORG_D_Detail_Tooltip"
import { ORG_D_Detail_MainCard_RightWrapper } from "./styles/ORG_D_Detail_MainCard_RightWrapper"

export const ORG_D_Detail_MainCard_Right = ({ layout_MainCardRight, addToCarePlanWithIcon }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { query } = useRouter()

  return (
    <ORG_D_Detail_MainCard_RightWrapper
      className={layout_MainCardRight}
      layout_MainCardRight={layout_MainCardRight}>
      <div>
        <div>
          <ORG_D_Detail_Share
            picture={thirdpageDataORG.card.leftPart.photo.src}
            name={thirdpageDataORG.card.leftPart.title}
            lastName={""}
          />
        </div>

        <header>
          <H2>
            {thirdpageDataORG.fullName.first} {thirdpageDataORG.fullName.last}
          </H2>

          <ORG_D_Detail_Tooltip />
        </header>

        <H3>{query.subTitle}</H3>
        <P>{thirdpageDataORG.card.leftPart.city}</P>

        <StarsRatingReview_D
          rating={thirdpageDataORG.card.leftPart.rating}
          reviews={thirdpageDataORG.card.leftPart.reviews}
        />

        <div
          className={
            !thirdpageDataORG.card.rightPart.highlightsPlus && !thirdpageDataORG[DATA_ORG_KeyNamesForCards_D.CARD].rightPart[DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]
              ? "NO_HIGHLIGHT"
              : "ONE_HIGHLIGHT_AT_LEAST"
          }>
          <Highlights_2_D highlights={thirdpageDataORG.card.rightPart.highlightsPlus} />
          <ORG_D_Detail_HighlightBoxes
            meetingFormat={
              thirdpageDataORG[DATA_ORG_KeyNamesForCards_D.CARD].rightPart[DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]
                ? thirdpageDataORG[DATA_ORG_KeyNamesForCards_D.CARD].rightPart[DATA_ORG_KeyNamesForCards_D.HIGHLIGHT][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]
                : undefined
            }
          />
        </div>
      </div>

      <div>
        {Object.entries(thirdpageDataORG.card.rightPart.thirdPageData.card).map((x, index) => {
          if (x[0] === DATA_ORG_KeyNamesForCards_D.WITH_BACKGROUND) {
            return (
              <div key={`${x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]}_${x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME].join(", ")}`}>
                <ORG_D_Detail_Card_SecondRow_Info
                  title={x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]}
                  dataToShow={x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]}
                  withBackground
                />
              </div>
            )
          }
        })}

        <div>
          {Object.entries(thirdpageDataORG.card.rightPart[DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D.CARD][DATA_ORG_KeyNamesForCards_D.LEFT]).map(
            (x, index) => {
              return (
                <Fragment key={`${x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]}_${x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME].join(", ")}_${index}`}>
                  <ORG_D_Detail_Card_SecondRow_Info
                    title={capitalizeWords(x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME])}
                    dataToShow={x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]}
                  />
                </Fragment>
              )
            },
          )}
        </div>

        <div>
          {Object.entries(thirdpageDataORG.card.rightPart[DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D.CARD][DATA_ORG_KeyNamesForCards_D.RIGHT]).map(
            (x, index) => {
              let shouldDisplayInBlock = x[1][DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK] ? true : false

              return (
                <Fragment key={`${x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]}_${x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME].join(", ")}`}>
                  <ORG_D_Detail_Card_SecondRow_Info
                    title={capitalizeWords(x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME])}
                    dataToShow={x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]}
                    displayBlock={shouldDisplayInBlock}
                  />
                </Fragment>
              )
            },
          )}
        </div>
      </div>

      <ORG_D_Detail_About
        name={thirdpageDataORG.fullName.first}
        lastName={thirdpageDataORG.fullName.last}
        aboutRef={null}
      />

      <div>
        <button>
          {" "}
          {addToCarePlanWithIcon && <ORG_D_Search_CarePlanSvg />}
          Add to Care Plan
        </button>

        <span tabIndex={0}>
          <Image
            src={ORG_D_Detail_Share_Modal_QRAltIcon}
            layout="fixed"
            width={48}
            height={48}
          />
        </span>
      </div>
    </ORG_D_Detail_MainCard_RightWrapper>
  )
}
