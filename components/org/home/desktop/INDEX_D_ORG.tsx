import { ArrowRightSvg, LeftArrowSvg } from "@/assets/icons/index"
import ORG_1_page from "@/assets/images/org/1_page/org_1_page.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import {
  ALL_DATA,
  NamesCategories_KEY,
} from "@/utils/org/categories/general/ALL_DATA"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal.js"
import Image from "next/image.js"
import { Fragment, useEffect, useRef, useState } from "react"
import { INDEX_ORG_Search_D } from "../../cards/first-page/desktop/INDEX_ORG_Search_D"
import { ORG_D_SearchComponent } from "../../inputs/desktop/ORG_D_SearchComponent"
import { INDEX_D_ORGWrapper, LI_Category } from "./styles/INDEX_D_ORGWrapper"

type Props = {
  allBackendData: object[] | any
}

export const INDEX_D_ORG = ({ allBackendData }: Props) => {
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
    <INDEX_D_ORGWrapper>
      <header>
        <H1>
          Find exactly what <br /> you're looking for
        </H1>
        <Image
          src={ORG_1_page}
          alt="Image of doctors and patients looking forward, smiling and shaking hands"
        />
        <ORG_D_SearchComponent />
        <Image
          src={"/background/background2.svg"}
          width={1}
          height={1}
          alt="Background Image"
        />
        <Image
          src={"/background/background3.svg"}
          width={1}
          height={1}
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
        </div>
      </div>

      {Object.values(ALL_DATA).map(({ CATEGORY, SUB_CATEGORY }) => {
        if (singleCardIsSelected === false) {
          return (
            <Fragment key={CATEGORY}>
              <INDEX_ORG_Search_D
                category={CATEGORY}
                allSubcategories={SUB_CATEGORY}
                allBackendData={
                  allBackendData[
                    NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]
                  ]
                }
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
                allBackendData={
                  allBackendData[
                    NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]
                  ]
                }
                isSelected={singleCardIsSelected}
              />
            </Fragment>
          )
        }

        // if (allBackendData[CATEGORY]) {
        //   if (singleCardIsSelected === false) {
        //     return (
        //       <Fragment key={CATEGORY}>
        //         <INDEX_ORG_Search_D
        //           category={CATEGORY}
        //           allSubcategories={SUB_CATEGORY}
        //           allBackendData={allBackendData[CATEGORY]}
        //         />
        //       </Fragment>
        //     )
        //   }

        //   if (
        //     singleCardIsSelected &&
        //     matchNameState?.toLowerCase() === CATEGORY.toLowerCase()
        //   ) {
        //     return (
        //       <Fragment key={CATEGORY}>
        //         <INDEX_ORG_Search_D
        //           category={CATEGORY}
        //           allSubcategories={SUB_CATEGORY}
        //           allBackendData={allBackendData[CATEGORY]}
        //           isSelected={singleCardIsSelected}
        //         />
        //       </Fragment>
        //     )
        //   }
        // }

        /*
        if (allBackendData[CATEGORY].length === 0) {
          return <h2>Data not found</h2>
        }
        */
      })}
    </INDEX_D_ORGWrapper>
  )
}
