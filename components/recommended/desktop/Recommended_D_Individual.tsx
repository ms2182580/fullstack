import { ORG_D_Search_ViewProfileSvg } from "@/assets/icons"
import Backup_Image from "@/assets/images/org/backup/backup_image.jpg"
import {
  All_Layouts_Accepted,
  INDEX_ORG_Search_DWrapper,
} from "@/components/org/flow/first-page/desktop/styles/INDEX_ORG_Search_DWrapper"
import { Highlights_2_D } from "@/components/org/highlights/Highlights_2_D"
import { Highlights_D } from "@/components/org/highlights/Highlights_D"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "@/components/org/verified/Verified"
import { ButtonSmall } from "@/components/ui/buttons/general"
import {
  Caption,
  P,
} from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { NamesCategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import { handleMoveToSecondPage } from "@/utils/org/handleMoveToSecondPage"
import { handleMoveToThirdPage } from "@/utils/org/handleMoveToThirdPage"
import { handleMoveToThirdPage_Backend } from "@/utils/org/handleMoveToThirdPage_Backend"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Recommended_D_IndividualWrapped } from "./styles/Recommended_D_IndividualWrapper"
// import {
//   All_Layouts_Accepted,
//   INDEX_ORG_Search_DWrapper,
// } from "./styles/INDEX_ORG_Search_DWrapper"

type Props = {
  positionInArray?: number
  theData?: object[]
  someLayoutSpecial?: any
  dataComesFromBackend?: boolean
  isSelected?: boolean
  category: string
  allSubcategories: string[]
  allBackendData: any
}

export const Recommended_D_Individual = ({
  positionInArray,
  theData = [],
  someLayoutSpecial,
  dataComesFromBackend = true,
  isSelected = false,
  category,
  allSubcategories,
  allBackendData,
}: Props) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(allSubcategories.length)
    }
  }, [isSelected])

  const { push } = useRouter()
  const { setSecondpageFiltersORG }: any = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG }: any = useORG_Ctx_D_SecondpageData()

  //   const { setSecondpageDataORG: setSecondpageDataORG_Backend }: any =
  //     useORG_Ctx_D_SecondpageData_Backend()

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const { setThirdpageDataORG: setThirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  if (dataComesFromBackend) {
    return (
      <Recommended_D_IndividualWrapped
        someLayoutSpecial={someLayoutSpecial}
        className={dataComesFromBackend && "dataComesFromBackend"}
      >
        <div>
          {allBackendData[
            NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]
          ].map((xBackendData, indexBackend) => {
            return (
              <article key={`_${xBackendData.listingType}`}>
                <div>
                  <Image
                    src={Backup_Image}
                    alt={`backup image`}
                    layout="intrinsic"
                    objectFit="initial"
                    width="1200"
                    height="600"
                  />
                </div>

                <H3>{xBackendData.recordName.toLowerCase()}</H3>
                <H4>{xBackendData.recordSubtype}</H4>

                {/* <P>{xBackendData?.address[0].city}</P> */}

                <StarsRatingReview_D
                  rating={xBackendData.ratings.length || 0}
                  reviews={xBackendData.reviews.length || 0}
                />

                <P>{xBackendData?.reviews?.[1]}</P>
                <button
                  onClick={(event) =>
                    handleMoveToThirdPage_Backend({
                      event,
                      raw: allBackendData[
                        NamesCategories_KEY[
                          "MENTAL HEALTH PROVIDERS & SERVICES"
                        ]
                      ][indexBackend],
                      indexSubcategory: indexBackend,
                      category,
                      setThirdpageDataORG_Backend,
                      push,
                    })
                  }
                >
                  <ORG_D_Search_ViewProfileSvg />
                  View Profile
                </button>
              </article>
            )
          })}
        </div>
      </Recommended_D_IndividualWrapped>
    )
  }

  return (
    <INDEX_ORG_Search_DWrapper someLayoutSpecial={someLayoutSpecial}>
      {theData?.map((x, iData) => {
        const [title, ...objects]: any = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${title}_${iData}`}>
                <H2>{title}</H2>
                <div>
                  {objects.map((obj: any, iSubData: number) => {
                    return (
                      <div key={`${iSubData}_${obj.title}_${obj.reviews}`}>
                        <div>
                          <Image
                            src={obj.imageToUse}
                            alt={obj.title}
                            layout={
                              someLayoutSpecial ===
                                All_Layouts_Accepted.like_PAT ||
                              someLayoutSpecial ===
                                All_Layouts_Accepted.like_PVES
                                ? "responsive"
                                : "intrinsic"
                            }
                            objectFit={
                              someLayoutSpecial ===
                                All_Layouts_Accepted.like_PAT ||
                              someLayoutSpecial ===
                                All_Layouts_Accepted.like_PVES
                                ? "contain"
                                : "initial"
                            }
                            width={
                              someLayoutSpecial ===
                                All_Layouts_Accepted.like_PAT ||
                              someLayoutSpecial ===
                                All_Layouts_Accepted.like_PVES
                                ? 1
                                : 1200
                            }
                            height={
                              someLayoutSpecial ===
                                All_Layouts_Accepted.like_PAT ||
                              someLayoutSpecial ===
                                All_Layouts_Accepted.like_PVES
                                ? 0.522
                                : 600
                            }
                          />
                          {someLayoutSpecial ===
                          All_Layouts_Accepted.like_PAT ? null : (
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
                            handleMoveToThirdPage({
                              event,
                              categoryPosition: positionInArray,
                              subcategoryPosition: iData,
                              resourcePosition: iSubData,
                              setThirdpageDataORG,
                              push,
                            })
                          }
                        >
                          <ORG_D_Search_ViewProfileSvg />
                          {someLayoutSpecial === "like_PVES" && iData === 0
                            ? "View Listing"
                            : "View Profile"}
                        </button>
                      </div>
                    )
                  })}
                </div>
                <span
                  onClick={(event) =>
                    handleMoveToSecondPage({
                      event,
                      categoryPosition: positionInArray,
                      subcategoryPosition: iData,
                      setSecondpageFiltersORG,
                      setSecondpageDataORG,
                      push,
                    })
                  }
                >
                  <ButtonSmall secondary>See all (25) </ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_ORG_Search_DWrapper>
  )
}
