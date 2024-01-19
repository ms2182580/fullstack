import {
  ArrowRightSvg,
  LeftArrowSvg,
  ORG_D_Search_CarePlanSvg,
} from "@/assets/icons/index.js"
import ORGDesktop_Search_Hero from "@/assets/images/ORGDesktop_Search_Hero.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal.js"
import Image from "next/image.js"
import { Fragment, useEffect, useRef, useState } from "react"
import { INDEX_ORG_Search_D } from "../../cards/first-page/desktop/INDEX_ORG_Search_D"
import { ORG_D_SearchComponent } from "../../inputs/desktop/ORG_D_SearchComponent.js"
import { INDEX_D_ORGWrapper, LI_Category } from "./styles/INDEX_D_ORGWrapper"

// console.log("ALL_DATA:", ALL_DATA)

type Props = {
  allBackendData: object[] | any
}

export const INDEX_D_ORG = ({ allBackendData }: Props) => {
  /* //?TODO:BUG
  * There's a bug here when you change something in development here and save it, it trigger useFormatData or something and new dataToORG is created in the UI
  
   */
  // const { dataToORG }: { dataToORG: object[] } = useFormatData({
  //   allBackendData,
  // })

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
      <INDEX_D_ORGWrapper>
        <header>
          <H1>
            Find your I/DD <br /> community
            <br /> and resources
          </H1>
          <div>
            <div>
              <ORG_D_Search_CarePlanSvg />
              <P semibold>Care Plan</P>
            </div>
          </div>
          <div>
            <Image
              src={ORGDesktop_Search_Hero}
              alt="Image of doctors and patients looking forward, smiling and shaking hands"
            />
          </div>
          <ORG_D_SearchComponent />
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
      </INDEX_D_ORGWrapper>
    </>
  )
}
