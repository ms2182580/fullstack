import { ORG_D_Search_ViewProfileSvg } from "@/assets/icons"
import Backup_Image from "@/assets/images/org/backup/backup_image.jpg"
import { Highlights_2_D } from "@/components/org/highlights/Highlights_2_D"
import { Highlights_D } from "@/components/org/highlights/Highlights_D"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "@/components/org/verified/Verified"
import { ButtonSmall } from "@/components/ui/buttons/general"
import {
  Caption,
  P,
} from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  H2,
  H3,
  H4,
} from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { handleMoveToSecondPage } from "@/utils/org/handleMoveToSecondPage"
import { handleMoveToSecondPage_Backend } from "@/utils/org/handleMoveToSecondPage_Backend"
import { handleMoveToThirdPage } from "@/utils/org/handleMoveToThirdPage"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {
  All_Layouts_Accepted,
  INDEX_ORG_Search_DWrapper,
} from "./styles/INDEX_ORG_Search_DWrapper"

type Props = {
  positionInArray: number
  isSelected: boolean
  theData: object[]
  someLayoutSpecial: any
  dataComesFromBackend?: boolean
  allData: any
}

export const INDEX_ORG_Search_D = ({
  positionInArray,
  isSelected = false,
  theData,
  someLayoutSpecial,
  dataComesFromBackend,
  allData,
}: Props) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(theData.length)
    }
  }, [isSelected])

  const { push } = useRouter()
  const { setSecondpageFiltersORG }: any =
    useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG }: any =
    useORG_Ctx_D_SecondpageData()

  const {
    setSecondpageDataORG: setSecondpageDataORG_Backend,
  }: any = useORG_Ctx_D_SecondpageData_Backend()

  const { setThirdpageDataORG }: any =
    useORG_Ctx_D_ThirdpageData()

  if (dataComesFromBackend) {
    return (
      <>
        <INDEX_ORG_Search_DWrapper
          someLayoutSpecial={someLayoutSpecial}
          className={
            dataComesFromBackend && "dataComesFromBackend"
          }
        >
          {theData.map((x, iData) => {
            const [title, ...objects]: any = x
            let howMuch: number = objects.length
            let onlyThree = objects.slice(0, 3)

            /* If the resource have no category («title» variable) nothing is displayed */
            if (title === "") {
              return <></>
            }

            while (howMuchDisplay > iData) {
              return (
                <>
                  <section key={`${title}_${iData}`}>
                    <header>
                      <H2>{title}</H2>
                    </header>

                    <div>
                      {onlyThree.map(
                        (obj: any, iSubData: number) => {
                          return (
                            <article
                              key={`${obj.resourceId}`}
                            >
                              <div>
                                <Image
                                  src={Backup_Image}
                                  alt={`backup image`}
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
                                {obj.verifiedUnverifiedResource !==
                                  "" && (
                                  <>
                                    <Verified />
                                  </>
                                )}
                              </div>

                              <H3>
                                {obj.recordName.toLowerCase()}
                              </H3>
                              <H4>{obj.recordSubtype}</H4>

                              <P>{obj?.address[0].city}</P>

                              <StarsRatingReview_D
                                rating={
                                  obj?.ratings?.[0]
                                    ?.value || 99
                                }
                                reviews={99}
                              />

                              <P>{obj?.reviews?.[0]}</P>
                              <button
                              /* onClick={(_) =>
                                handleMoveToThirdPage({
                                  _,
                                  categoryPosition: positionInArray,
                                  subcategoryPosition: iData,
                                  resourcePosition: iSubData,
                                  setThirdpageDataORG,
                                  push,
                                })
                              } */
                              >
                                <ORG_D_Search_ViewProfileSvg />
                                {someLayoutSpecial ===
                                  "like_PVES" && iData === 0
                                  ? "View Listing"
                                  : "View Profile"}
                              </button>
                            </article>
                          )
                        }
                      )}
                    </div>

                    <span
                      onClick={(event) =>
                        handleMoveToSecondPage_Backend({
                          event,
                          raw: x,
                          setSecondpageDataORG_Backend,
                          push,
                        })
                      }
                    >
                      <ButtonSmall secondary>
                        See all ({howMuch})
                      </ButtonSmall>
                    </span>
                  </section>
                </>
              )
            }
          })}
        </INDEX_ORG_Search_DWrapper>
      </>
    )
  }

  return (
    <INDEX_ORG_Search_DWrapper
      someLayoutSpecial={someLayoutSpecial}
    >
      {theData.map((x, iData) => {
        const [title, ...objects]: any = x
        while (howMuchDisplay > iData) {
          return (
            <>
              <div key={`${title}_${iData}`}>
                <H2>{title}</H2>
                <div>
                  {objects.map(
                    (obj: any, iSubData: number) => {
                      return (
                        <div
                          key={`${iSubData}_${obj.title}_${obj.reviews}`}
                        >
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
                          {someLayoutSpecial ===
                            "like_PVES" && iData === 0 ? (
                            <>
                              <Caption>
                                {obj.hourlyRate}
                              </Caption>
                              <div>
                                <Highlights_D
                                  highlights={obj.highlight}
                                />
                                <Highlights_2_D
                                  highlights={
                                    obj.highlight_plus
                                  }
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
                                categoryPosition:
                                  positionInArray,
                                subcategoryPosition: iData,
                                resourcePosition: iSubData,
                                setThirdpageDataORG,
                                push,
                              })
                            }
                          >
                            <ORG_D_Search_ViewProfileSvg />
                            {someLayoutSpecial ===
                              "like_PVES" && iData === 0
                              ? "View Listing"
                              : "View Profile"}
                          </button>
                        </div>
                      )
                    }
                  )}
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
                  <ButtonSmall secondary>
                    See all (25){" "}
                  </ButtonSmall>
                </span>
              </div>
            </>
          )
        }
      })}
    </INDEX_ORG_Search_DWrapper>
  )
}
