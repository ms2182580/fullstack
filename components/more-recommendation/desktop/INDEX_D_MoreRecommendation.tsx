import { ArrowRightSvg, LeftArrowSvg } from "@/assets/icons"
import More_recommended from "@/assets/images/recommended/more-recommended.png"
import { OrgCardsFirst } from "@/components/org/flow/first-page/desktop/org-cards-first"
import { LI_Wrapper } from "@/components/org/flow/first-page/desktop/styles/index-wrapper"
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
        <div>
          <header>
            <H1>Better recommendations, better results</H1>
            <Image
              src={More_recommended}
              alt="Image of a person and a robot looking each other smiling, both have laptops and they are sitting"
            />
          </header>
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
        </div>

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
            <LI_Wrapper
              onClick={handleShowAll}
              isActiveCategory={!singleCardIsSelected}
            >
              <P>All</P>
            </LI_Wrapper>

            {Object.values(ALL_DATA).map(({ CATEGORY }, index) => {
              return (
                <LI_Wrapper
                  key={`${CATEGORY}_${index}`}
                  data-name={CATEGORY}
                  onClick={handleShowOneCard}
                  isActiveCategory={
                    singleCardIsSelected && matchNameState === CATEGORY
                  }
                >
                  <P data-name={CATEGORY}>{CATEGORY}</P>
                </LI_Wrapper>
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
                <OrgCardsFirst
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
                <OrgCardsFirst
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
    </>
  )
}
