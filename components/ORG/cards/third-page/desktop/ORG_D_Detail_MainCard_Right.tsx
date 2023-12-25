import { ORG_D_Search_CarePlanSvg } from "@/assets/Icons"
import ORG_D_Detail_Share_Modal_QRAltIcon from "@/assets/Icons/ORG_D_Detail_Share_Modal_QRAltIcon.png"
import { Highlights_2_D } from "@/components/org/highlights/Highlights_2_D"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { capitalizeWords } from "@/utils/capitalizeWords"
import { DATA_ORG_KeyNamesForCards_D, DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { SPECIFIC_DATA_KEY } from "@/utils/org/second-page/desktop/specificData"
import { Tooltip_KEYS, Tooltip_VALUES } from "@/utils/org/third-page/tooltip"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import { Fragment, useMemo, useState } from "react"
import { ORG_D_Detail_About } from "./ORG_D_Detail_About"
import { ORG_D_Detail_Card_SecondRow_Info } from "./ORG_D_Detail_Card_SecondRow_Info"
import { ORG_D_Detail_HighlightBoxes } from "./ORG_D_Detail_HighlightBoxes"
import { ORG_D_Detail_Share } from "./ORG_D_Detail_Share"
import { ORG_D_Detail_Tooltip } from "./ORG_D_Detail_Tooltip"
import { Layout_MainCardRight_VALUES, ORG_D_Detail_MainCard_RightWrapper } from "./styles/ORG_D_Detail_MainCard_RightWrapper"

export const ORG_D_Detail_MainCard_Right = ({ layout_MainCardRight, addToCarePlanWithIcon, tooltipDisplay, isPVES }: any) => {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const { query } = useRouter()

  let atLeastOneHighlightplus = useMemo(() => {
    return Boolean(thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.HIGHLIGHT_PLUS])
  }, [])

  const getLengthResponsabilitiesData = useMemo(() => {
    return isPVES
      ? thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D_KEYS.CARD][
          DATA_ORG_KeyNamesForCards_D_KEYS.RESPONSABILITIES
        ][DATA_ORG_KeyNamesForCards_D_KEYS.VALUE_NAME].length
      : null
  }, [isPVES])

  const [shouldShowTooltip, setShouldShowTooltip] = useState(false)

  let handleShowTooltip = () => {
    setShouldShowTooltip(true)
  }
  let handleHideTooltip = () => {
    setShouldShowTooltip(false)
  }

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
            {thirdpageDataORG.fullName.first !== "" ? (
              <>
                {thirdpageDataORG.fullName.first} {thirdpageDataORG.fullName.last}
              </>
            ) : (
              <>{thirdpageDataORG.card.leftPart.title}</>
            )}
          </H2>

          {tooltipDisplay?.[Tooltip_KEYS.WHAT_DISPLAY] === Tooltip_VALUES.NO_DISPLAY ? null : (
            <>
              <ORG_D_Detail_Tooltip allProps={tooltipDisplay} />
            </>
          )}
        </header>

        <div className={isPVES ? `${Layout_MainCardRight_VALUES.IS_PVES}` : ``}>
          {isPVES ? (
            <div>
              <H2
                onFocus={handleShowTooltip}
                onBlur={handleHideTooltip}
                onMouseEnter={handleShowTooltip}
                onMouseLeave={handleHideTooltip}
                tabIndex={0}>
                {thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].leftPart[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY][DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA].brandName}
              </H2>

              {shouldShowTooltip && (
                <div className={Layout_MainCardRight_VALUES.TOOLTIP}>
                  Click here to see more <br />
                  jobs from{" "}
                  <span>
                    {
                      thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].leftPart[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY][DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA]
                        .brandName
                    }
                  </span>
                </div>
              )}
            </div>
          ) : (
            <H3>{query.subTitle}</H3>
          )}

          <P>{thirdpageDataORG.card.leftPart.city}</P>

          {isPVES ? (
            <>
              <P>
                {thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].leftPart[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY][DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA].datePosted}
              </P>
            </>
          ) : null}
        </div>

        <StarsRatingReview_D
          rating={thirdpageDataORG.card.leftPart.rating}
          reviews={thirdpageDataORG.card.leftPart.reviews}
        />

        <div
          className={
            !thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.HIGHLIGHT] &&
            !thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.HIGHLIGHT_PLUS]
              ? Layout_MainCardRight_VALUES.NO_HIGHLIGHT
              : Layout_MainCardRight_VALUES.ONE_HIGHLIGHT_AT_LEAST
          }>
          {atLeastOneHighlightplus && (
            <Highlights_2_D
              highlights={
                thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.HIGHLIGHT_PLUS][DATA_ORG_KeyNamesForCards_D_KEYS.VALUE_NAME]
              }
            />
          )}

          {/* 
          Should I use this «Highlights_D» component instead?
          */}
          <ORG_D_Detail_HighlightBoxes
            meetingFormat={
              thirdpageDataORG[DATA_ORG_KeyNamesForCards_D.CARD].rightPart[DATA_ORG_KeyNamesForCards_D.HIGHLIGHT]
                ? thirdpageDataORG[DATA_ORG_KeyNamesForCards_D.CARD].rightPart[DATA_ORG_KeyNamesForCards_D.HIGHLIGHT][DATA_ORG_KeyNamesForCards_D.VALUE_NAME]
                : undefined
            }
          />
        </div>
      </div>

      {isPVES && (
        <div className={Layout_MainCardRight_VALUES.IS_PVES_SPECIFIC_DATA}>
          <H4>
            {
              thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D_KEYS.CARD][
                DATA_ORG_KeyNamesForCards_D_KEYS.JOB_DESCRIPTION
              ][DATA_ORG_KeyNamesForCards_D_KEYS.KEY_NAME]
            }
            :
          </H4>

          <P>
            {
              thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D_KEYS.CARD][
                DATA_ORG_KeyNamesForCards_D_KEYS.JOB_DESCRIPTION
              ][DATA_ORG_KeyNamesForCards_D_KEYS.VALUE_NAME]
            }
          </P>

          <H4>
            {
              thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D_KEYS.CARD][
                DATA_ORG_KeyNamesForCards_D_KEYS.RESPONSABILITIES
              ][DATA_ORG_KeyNamesForCards_D_KEYS.KEY_NAME]
            }
            :
          </H4>

          <ul>
            {thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.CARD].rightPart[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D_KEYS.CARD][
              DATA_ORG_KeyNamesForCards_D_KEYS.RESPONSABILITIES
            ][DATA_ORG_KeyNamesForCards_D_KEYS.VALUE_NAME].map((x: any, index: number) => {
              if (getLengthResponsabilitiesData !== null) {
                if (index < getLengthResponsabilitiesData - 1) {
                  return <li key={x}>{x}</li>
                }

                return (
                  <li key={x}>
                    {x} <span tabIndex={0}>See more</span>
                  </li>
                )
              }

              return <li key={x}>{x}</li>
            })}
          </ul>
        </div>
      )}

      <div className={Layout_MainCardRight_VALUES.DOUBLE_COLUMN_CARD}>
        {Object.entries(thirdpageDataORG.card.rightPart.thirdPageData.card).map((x: any) => {
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
            (x: any, index) => {
              let shouldDisplayInBlock = x[1][DATA_ORG_KeyNamesForCards_D.DISPLAY_BLOCK] ? true : false

              return (
                <Fragment key={`${x[1][DATA_ORG_KeyNamesForCards_D.KEY_NAME]}_${x[1][DATA_ORG_KeyNamesForCards_D.VALUE_NAME].join(", ")}_${index}`}>
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

        <div>
          {Object.entries(thirdpageDataORG.card.rightPart[DATA_ORG_KeyNamesForCards_D.THIRD_PAGE_DATA][DATA_ORG_KeyNamesForCards_D.CARD][DATA_ORG_KeyNamesForCards_D.RIGHT]).map(
            (x: any, index) => {
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

      {isPVES ? null : (
        <>
          <ORG_D_Detail_About
            name={thirdpageDataORG.fullName.first}
            lastName={thirdpageDataORG.fullName.last}
            aboutRef={null}
          />
        </>
      )}

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
            alt="QR Icon"
          />
        </span>
      </div>
    </ORG_D_Detail_MainCard_RightWrapper>
  )
}
