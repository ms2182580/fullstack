import { ORG_D_Search_ViewProfileSvg } from "@/assets/Icons"
import { Highlights_2_D } from "@/components/ORG/highlights/Highlights_2_D"
import { Highlights_D } from "@/components/ORG/highlights/Highlights_D"
import { StarsRatingReview_D } from "@/components/ORG/stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "@/components/ORG/verified/Verified"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { Caption, P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { handleMoveToSecondPage } from "@/utils/ORG/handleMoveToSecondPage"
import { handleMoveToThirdPage } from "@/utils/ORG/handleMoveToThirdPage"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { All_Layouts_Accepted, INDEX_ORG_Search_DWrapper } from "./styles/INDEX_ORG_Search_DWrapper"

export const INDEX_ORG_Search_D = ({ positionInArray, isSelected = false, theData, someLayoutSpecial }) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(theData.length)
    }
  }, [isSelected])

  const { push } = useRouter()
  const { setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG } = useORG_Ctx_D_SecondpageData()

  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  return (
    <INDEX_ORG_Search_DWrapper someLayoutSpecial={someLayoutSpecial}>
      {theData.map((x, iData) => {
        const [title, ...objects] = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${title}_${iData}`}>
                <H2>{title}</H2>
                <div>
                  {objects.map((obj, iSubData) => {
                    return (
                      <div key={`${iSubData}_${obj.title}_${obj.reviews}`}>
                        <div>
                          <Image
                            src={obj.imageToUse}
                            alt={obj.title}
                            layout={someLayoutSpecial === All_Layouts_Accepted.like_PAT ? "responsive" : "intrinsic"}
                            objectFit={someLayoutSpecial === All_Layouts_Accepted.like_PAT ? "contain" : "initial"}
                            width={someLayoutSpecial === All_Layouts_Accepted.like_PAT ? 1 : 1200}
                            height={someLayoutSpecial === All_Layouts_Accepted.like_PAT ? 0.522 : 600}
                          />
                          {someLayoutSpecial === All_Layouts_Accepted.like_PAT ? null : (
                            <>
                              <Verified />
                            </>
                          )}
                        </div>
                        <H3>{obj.title}</H3>
                        <H4>{obj.subtitle}</H4>
                        {obj?.city && <P>{obj?.city}</P>}
                        {someLayoutSpecial === "like_PVES" && iData === 0 ? (
                          <>
                            <Caption>{obj.hourlyRate}</Caption>
                            <div>
                              <Highlights_D highlights={obj.highlight} />
                              <Highlights_2_D
                                highlights={obj.highlight_plus}
                                withIcon={false}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <StarsRatingReview_D
                              rating={obj.rating}
                              reviews={obj.reviews}
                            />
                          </>
                        )}

                        <P>{obj.textReview}</P>
                        <button
                          onClick={(event) =>
                            handleMoveToThirdPage({ event, categoryPosition: positionInArray, subcategoryPosition: iData, resourcePosition: iSubData, setThirdpageDataORG, push })
                          }>
                          <ORG_D_Search_ViewProfileSvg />
                          {someLayoutSpecial === "like_PVES" && iData === 0 ? "View Listing" : "View Profile"}
                        </button>
                      </div>
                    )
                  })}
                </div>
                <span
                  onClick={(event) =>
                    handleMoveToSecondPage({ event, categoryPosition: positionInArray, subcategoryPosition: iData, setSecondpageFiltersORG, setSecondpageDataORG, push })
                  }>
                  <ButtonSmall secondary>See all (25)</ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_ORG_Search_DWrapper>
  )
}
