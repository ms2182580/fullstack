import {
  ArrowRightSvg,
  LeftArrowSvg,
  ORG_D_Search_CarePlanSvg,
} from "@/assets/icons/index.js"
import ORGDesktop_Search_Hero from "@/assets/images/ORGDesktop_Search_Hero.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { ROUTER_PUSH_SEARCH } from "@/utils/org/DATA_ORG_CheckPaths_Search_D.js"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import { useFormatData } from "@/utils/org/useFormatData"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal.js"
import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ORG_D_SearchComponent } from "../../inputs/desktop/ORG_D_SearchComponent.js"
import { INDEX_D_ORGWrapper, LI_Category } from "./styles/INDEX_D_ORGWrapper"

type Props = {
  allBackendData: object[] | any
}

export const INDEX_D_ORG = ({ allBackendData }: Props) => {
  /* //?TODO:BUG
  * There's a bug here when you change something in development here and save it, it trigger useFormatData or something and new dataToORG is created in the UI
  
   */
  const { dataToORG }: { dataToORG: object[] } = useFormatData({
    allBackendData,
  })

  // console.log("dataToORG:", dataToORG)

  const [singleCardIsSelected, setSingleCardIsSelected] = useState(false)
  const [matchNameState, setMatchNameState] = useState<
    string | string[] | undefined
  >("All")

  const handleShowAll = () => {
    setSingleCardIsSelected(false)
    setMatchNameState("All")
  }

  const handleShowOneCard = (e) => {
    setSingleCardIsSelected(true)
    setMatchNameState(e.target.dataset.name)
  }

  // const { setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFiltersDesktop()

  // useEffect(() => {
  //   setShouldFetchDesktopNoFilters(true)
  // }, [])

  const { query } = useRouter()
  const refOfORGSelections = useRef<HTMLUListElement | null>(null)

  const { moveToLeft, moveToRight, stateToCss, setListRef } =
    useScrollHorizontal(refOfORGSelections)

  /* useEffect(() => {
    if (refOfORGSelections) {
      let allChildren = Array.from(refOfORGSelections.current.children)
      let getIsActive = allChildren.filter((x) => x.className === "isActive")[0]

      let liClientWidth_IsActive = getIsActive.clientWidth
      let liOffSetLeft_IsActive = getIsActive.offsetLeft

      let positionToMove = liOffSetLeft_IsActive - liClientWidth_IsActive
    }
  }, [refOfORGSelections]) */

  useLayoutEffect(() => {
    if (
      query[ROUTER_PUSH_SEARCH.nameJSX] &&
      refOfORGSelections.current !== null
    ) {
      let allChildren = Array.from(refOfORGSelections.current.children)
      let getIsActive = allChildren.filter((x) => x.className === "isActive")[0]

      let liClientWidth_IsActive = getIsActive.clientWidth
      let liOffSetLeft_IsActive = (getIsActive as HTMLUListElement).offsetLeft

      let positionToMove = liOffSetLeft_IsActive - liClientWidth_IsActive

      refOfORGSelections.current.scroll({
        left: positionToMove,
      })
    }
  }, [query, matchNameState])

  useEffect(() => {
    if (
      query[ROUTER_PUSH_SEARCH.nameJSX] &&
      refOfORGSelections.current !== null
    ) {
      let componentName = query[ROUTER_PUSH_SEARCH.nameJSX]

      setSingleCardIsSelected(true)
      setMatchNameState(componentName)

      const ulElement = refOfORGSelections.current.getBoundingClientRect()

      const theElementTop = ulElement.top
      window.scrollTo({ top: theElementTop })
    }
  }, [query])

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  return (
    <>
      <INDEX_D_ORGWrapper
      // shouldHideAllLi={stateToCss.scrollRight}
      >
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

        {/* 
            //!FH0
            make the arrow left a styled-component to pass the stateToCss.reachFinal there
          */}
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
            {/* 
            //* Inner navigation bar here → scroll right
            */}

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

          {/* 
            //!FH0
            make the arrow right a styled-component to pass the stateToCss.reachFinal there
          */}
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
        {/* 
        // !FH0
        use "ALL_DATA" like this Object.values(ALL_DATA).map()
        
        Object.values(ALL_DATA).map(({ CATEGORY, SUB_CATEGORY }) =>
           console.log("💛", CATEGORY, SUB_CATEGORY)
        )
        
        */}
        {/* {dataToORG.map((x, i) => {
          const someLayoutSpecial = x?.somethingSpecial?.layout ?? null
          const dataComesFromBackend =
            x?.somethingSpecial?.isFromBackend ?? null
          if (singleCardIsSelected === false) {
            return (
              <Fragment key={`${x.nameJSX}`}>
                <INDEX_ORG_Search_D
                  positionInArray={i}
                  theData={x.thisParticularData}
                  someLayoutSpecial={someLayoutSpecial}
                  dataComesFromBackend={dataComesFromBackend}
                />
              </Fragment>
            )
          }
          if (
            singleCardIsSelected &&
            matchNameState.toLowerCase() === x.nameJSX.toLowerCase()
          ) {
            return (
              <Fragment key={`${x.nameJSX}_${i}`}>
                <INDEX_ORG_Search_D
                  isSelected={singleCardIsSelected}
                  positionInArray={i}
                  theData={x.thisParticularData}
                  someLayoutSpecial={someLayoutSpecial}
                  dataComesFromBackend={dataComesFromBackend}
                  allData={dataToORG}
                />
              </Fragment>
            )
          }
          return null
        })} */}
      </INDEX_D_ORGWrapper>
    </>
  )
}
