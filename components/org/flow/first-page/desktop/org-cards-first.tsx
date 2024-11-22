import { ORG_D_Search_ViewProfileSvg } from "@/assets/icons"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { imagesToUse_backup } from "@/utils/org/categories/general/imagesToUse_backup"
import { handleMoveToSecondPage_Backend } from "@/utils/org/handleMoveToSecondPage_Backend"
import { handleMoveToThirdPage_Backend } from "@/utils/org/handleMoveToThirdPage_Backend"
import { preferFirstDefaultSecondFn } from "@/utils/org/prefer-first-default-second-fn"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import { INDEX_ORG_Search_DWrapper } from "./styles/INDEX_ORG_Search_DWrapper"

export type OrgCardsFirst_Props = {
  positionInArray?: number
  theData?: object[]
  someLayoutSpecial?: any
  dataComesFromBackend?: boolean
  isSelected?: boolean
  category: string
  allSubcategories: string[]
  allBackendData: any
  handleMoveToSecondPage?: (e) => void
  handleMoveToThirdPage?: (e) => void
}

export const OrgCardsFirst = ({
  someLayoutSpecial,
  dataComesFromBackend = true,
  isSelected = false,
  category,
  allSubcategories,
  allBackendData,
  handleMoveToSecondPage,
  handleMoveToThirdPage,
}: OrgCardsFirst_Props) => {
  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(allSubcategories.length)
    }
  }, [isSelected])

  const { push } = useRouter()

  const { setSecondpageDataORG: setSecondpageDataORG_Backend }: any =
    useORG_Ctx_D_SecondpageData_Backend()

  const { setThirdpageDataORG: setThirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const handleToMoveView = useMemo(() => {
    const moveToSecondPage = preferFirstDefaultSecondFn(
      handleMoveToSecondPage,
      handleMoveToSecondPage_Backend
    )

    const moveToThirdPage = preferFirstDefaultSecondFn(
      handleMoveToThirdPage,
      handleMoveToThirdPage_Backend
    )

    return {
      moveToSecondPage,
      moveToThirdPage,
    }
  }, [])

  if (dataComesFromBackend) {
    return (
      <INDEX_ORG_Search_DWrapper someLayoutSpecial={someLayoutSpecial}>
        {allSubcategories.map((x, index) => {
          const toDataTestId_2Page = x.replaceAll(/[\s-]/g, "_").toLowerCase()

          while (howMuchDisplay > index) {
            return (
              <section key={x}>
                <header>
                  <H2>{x}</H2>
                </header>

                <div>
                  {allBackendData.map((xBackendData, indexBackend) => {
                    const toDataTestId_3Page = xBackendData.recordName
                      .toLowerCase()
                      .replaceAll(/[\s-]/g, "_")
                      .toLowerCase()

                    return (
                      <article key={`${x}_${xBackendData.listingType}`}>
                        <div>
                          <Image
                            src={imagesToUse_backup[indexBackend]}
                            alt={`${xBackendData.recordName}`}
                          />
                        </div>

                        <H3 title={xBackendData.recordName.toLowerCase()}>
                          {xBackendData.recordName.toLowerCase()}
                        </H3>
                        <H4 title={xBackendData.recordSubtype}>
                          {xBackendData.recordSubtype}
                        </H4>

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
                          data-testid={`${toDataTestId_2Page}_${toDataTestId_3Page}`}
                          onClick={(event) =>
                            handleToMoveView.moveToThirdPage({
                              event,
                              raw: allBackendData[indexBackend],
                              indexSubcategory: index,
                              category,
                              setThirdpageDataORG_Backend,
                              push,
                              indexBackendToDisplayDummyImage: indexBackend,
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

                <button
                  data-testid={toDataTestId_2Page}
                  onClick={() => {
                    return handleToMoveView.moveToSecondPage({
                      category,
                      theSubcategory: allSubcategories[index],
                      raw: allBackendData,
                      setSecondpageDataORG_Backend,
                      push,
                    })
                  }}
                >
                  See all (25)
                </button>
              </section>
            )
          }
        })}
      </INDEX_ORG_Search_DWrapper>
    )
  }

  return null
}
