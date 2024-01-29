import { ArrowRightSvg, LeftArrowSvg } from "@/assets/icons"
import { Hero_D_Banner } from "@/components/home/desktop/Hero_D_Banner"
import { INDEX_ORG_Search_D } from "@/components/org/cards/first-page/desktop/INDEX_ORG_Search_D"
import { LI_Category } from "@/components/org/home/desktop/styles/INDEX_D_ORGWrapper"
import { ORG_D_SearchComponent } from "@/components/org/inputs/desktop/ORG_D_SearchComponent"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal"
import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from "react"
import { INDEX_D_MoreRecommendationWrapper } from "./styles/INDEX_D_MoreRecommendationWrapper"

type Props = {
  allBackendData: object[] | any
}

export const INDEX_D_MoreRecommendation = ({ allBackendData }: Props) => {
  console.log("🟧allBackendData:", allBackendData)
  const [singleCardIsSelected, setSingleCardIsSelected] = useState(false)
  const [matchNameState, setMatchNameState] = useState("All")

  const handleShowAll = () => {
    setSingleCardIsSelected(false)
    setMatchNameState("All")
  }

  const handleShowOneCard = (e) => {
    setSingleCardIsSelected(true)
    setMatchNameState(e.target.dataset.name)
  }

  const refOfORGSelections = useRef<HTMLUListElement | null>(null)

  const { moveToLeft, moveToRight, stateToCss, setListRef } =
    useScrollHorizontal(refOfORGSelections)

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  return (
    <>
      <INDEX_D_MoreRecommendationWrapper>
        <header>
          <H1>More Recommendations</H1>
          <ORG_D_SearchComponent />
          <Image
            src={"/background/background2.svg"}
            width={1}
            height={1}
            layout="responsive"
            alt="Background Image"
          />
          <Image
            src={"/background/background3.svg"}
            width={1}
            height={1}
            layout="responsive"
            alt="Background Image"
          />
        </header>

        <div>
          <div
            className={`${
              stateToCss.scrollRight ? "navBarLeftArrowShouldDisplay" : ""
            }`}
          >
            <div onClick={moveToLeft}>
              <LeftArrowSvg />
            </div>
            <div />
          </div>
          <ul
            ref={(el: any) => {
              setListRef(el)
              refOfORGSelections.current = el
            }}
          >
            <LI_Category
              onClick={handleShowAll}
              isActiveCategory={!singleCardIsSelected}
            >
              <P primary_cta semibold>
                All
              </P>
            </LI_Category>

            {Object.values(ALL_DATA).map(({ CATEGORY }, index) => {
              return (
                <LI_Category
                  key={`${CATEGORY}_${index}`}
                  data-name={CATEGORY}
                  onClick={handleShowOneCard}
                  isActiveCategory={
                    singleCardIsSelected && matchNameState === CATEGORY
                  }
                >
                  <P primary_cta semibold data-name={CATEGORY}>
                    {CATEGORY}
                  </P>
                </LI_Category>
              )
            })}
          </ul>

          <div
            className={`${
              stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""
            }`}
          >
            <div
              onClick={moveToRight}
              className={`${
                stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""
              }`}
            >
              <ArrowRightSvg />
            </div>
            <div />
          </div>
        </div>

        {Object.values(ALL_DATA).map(({ CATEGORY, SUB_CATEGORY }) => {
          if (singleCardIsSelected === false) {
            return (
              <Fragment key={CATEGORY}>
                <INDEX_ORG_Search_D
                  category={CATEGORY}
                  allSubcategories={SUB_CATEGORY}
                  allBackendData={allBackendData}
                />
              </Fragment>
            )
          }

          if (
            singleCardIsSelected &&
            matchNameState?.toLowerCase() === CATEGORY.toLowerCase()
          ) {
            return (
              <Fragment key={CATEGORY}>
                <INDEX_ORG_Search_D
                  category={CATEGORY}
                  allSubcategories={SUB_CATEGORY}
                  allBackendData={allBackendData}
                  isSelected={singleCardIsSelected}
                />
              </Fragment>
            )
          }
        })}
      </INDEX_D_MoreRecommendationWrapper>
      <Hero_D_Banner />
    </>
  )
}
