import { ORG_D_Search_ViewProfileSvg } from "@/assets/icons"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { imagesToUse_backup } from "@/utils/org/categories/general/imagesToUse_backup"
import { handleMoveToSecondPage_Backend } from "@/utils/org/handleMoveToSecondPage_Backend"
import { handleMoveToThirdPage_Backend } from "@/utils/org/handleMoveToThirdPage_Backend"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { INDEX_ORG_Search_DWrapper } from "./styles/INDEX_ORG_Search_DWrapper"

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

export const INDEX_ORG_Search_D = ({
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

  const { setSecondpageDataORG: setSecondpageDataORG_Backend }: any =
    useORG_Ctx_D_SecondpageData_Backend()

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const { setThirdpageDataORG: setThirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  if (dataComesFromBackend) {
    return (
      <INDEX_ORG_Search_DWrapper someLayoutSpecial={someLayoutSpecial}>
        {allSubcategories.map((x, index) => {
          while (howMuchDisplay > index) {
            return (
              <>
                <section key={x}>
                  <header>
                    <H2>{x}</H2>
                  </header>

                  <div>
                    {allBackendData.map((xBackendData, indexBackend) => {
                      return (
                        <>
                          <article key={`${x}_${xBackendData.listingType}`}>
                            <div>
                              <Image
                                src={imagesToUse_backup[indexBackend]}
                                alt={`${xBackendData.recordName}`}
                              />
                            </div>

                            <H3>{xBackendData.recordName.toLowerCase()}</H3>
                            <H4>{xBackendData.recordSubtype}</H4>

                            <P>
                              {xBackendData?.address[0].city || ""},{" "}
                              {xBackendData?.address[0].state || ""}
                            </P>

                            <StarsRatingReview_D
                              rating={5}
                              reviews={147 + indexBackend}
                            />

                            <P>{xBackendData?.reviews?.[1]}</P>
                            <button
                              onClick={(event) =>
                                handleMoveToThirdPage_Backend({
                                  event,
                                  raw: allBackendData[indexBackend],
                                  indexSubcategory: index,
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
                        </>
                      )
                    })}
                  </div>

                  <button
                    onClick={(event) =>
                      handleMoveToSecondPage_Backend({
                        event,
                        category,
                        theSubcategory: allSubcategories[index],
                        raw: allBackendData,
                        setSecondpageDataORG_Backend,
                        push,
                      })
                    }
                  >
                    See all (25)
                  </button>
                </section>
              </>
            )
          }
        })}
      </INDEX_ORG_Search_DWrapper>
    )
  }

  return null
}
