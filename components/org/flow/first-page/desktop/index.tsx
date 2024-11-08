import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import ORG_1_page from "@/assets/images/org/1_page/org_1_page.png"
import { INDEX_D_HorizontalNavigationNav } from "@/components/horizontal-navigation-nav"
import { ORG_D_SearchComponent } from "@/components/org/inputs/desktop/ORG_D_SearchComponent"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import {
  ALL_DATA,
  NamesCategories_KEY,
} from "@/utils/org/categories/general/ALL_DATA"
import Image from "next/image.js"
import { Fragment, useEffect, useState } from "react"
import { OrgCardsFirst } from "./org-cards-first"
import { INDEX_D_ORGWrapper } from "./styles/index-wrapper"

type Props = {
  allBackendData: object[] | any
}

export const INDEX_D_ORGHome = ({ allBackendData }: Props) => {
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

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  return (
    <INDEX_D_ORGWrapper data-testid={KEYS_DATA_TESTID.INDEX_D_ORG_HOME}>
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

      {/* 
        Make a reusable component: horizontal-inner-nav
      */}
      {/* <div>
        <div>
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

        <div>
          <div onClick={moveToRight}>
            <ArrowRightSvg />
          </div>
        </div>
      </div> */}

      <INDEX_D_HorizontalNavigationNav
        dataToDisplay={ALL_DATA}
        handleShowAll={handleShowAll}
        handleShowOneCard={handleShowOneCard}
        singleCardIsSelected={singleCardIsSelected}
        matchNameState={matchNameState}
      />
      {/* 
        //!FH0
        Make a reusable component: card display
      */}
      {Object.values(ALL_DATA).map(({ CATEGORY, SUB_CATEGORY }, index) => {
        if (singleCardIsSelected === false) {
          return (
            <Fragment key={CATEGORY}>
              <OrgCardsFirst
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
              <OrgCardsFirst
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
      })}
    </INDEX_D_ORGWrapper>
  )
}
