import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { Fragment, useEffect, useState } from "react"
import { ArrowRightSvg, LeftArrowSvg, ORG_D_Search_CarePlanSvg } from "../../../../../assets/Icons/index.js"
import ORGDesktop_Search_Hero from "../../../../../assets/images/ORGDesktop_Search_Hero.png"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
import { DATA_ORG_D as DATA } from "../../../../../utils/ORG/DATA_ORG_D.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H1 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_SearchComponent } from "../../../inputs/desktop/ORG_D_SearchComponent.js"
import { INDEX_D_ORGWrapper } from "./styles/INDEX_D_ORGWrapper.js"

export const INDEX_D_ORG = () => {
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

  const { setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFiltersDesktop()

  useEffect(() => {
    setShouldFetchDesktopNoFilters(true)
  }, [])

  const [listRef, setListRef] = useState(null)

  const [currentScrollState, setCurrentScrollState] = useState(null)
  const [isFinalScrollState, setIsFinalScrollState] = useState(null)

  const [stateToCss, setstateToCss] = useState({
    scrollRight: false,
    reachFinal: false
  })

  useEffect(() => {
    if (currentScrollState === 0 || currentScrollState === null) {
      setstateToCss((prevState) => ({
        ...prevState,
        scrollRight: false,
        reachFinal: false
      }))
    }

    if (currentScrollState > 100) {
      setstateToCss((prevState) => ({
        ...prevState,
        scrollRight: true,
        reachFinal: false
      }))
    }

    if (currentScrollState === isFinalScrollState) {
      setstateToCss((prevState) => ({
        ...prevState,
        scrollRight: true,
        reachFinal: true
      }))
    }
  }, [currentScrollState, isFinalScrollState])

  useEffect(() => {
    setstateToCss((prevState) => ({
      ...prevState,
      scrollRight: false,
      reachFinal: false
    }))
  }, [])

  useEffect(() => {
    if (listRef) {
      let startTouch = 0

      const handleTouchStart = (event) => {
        startTouch = event.touches[0].clientX
      }

      const handleScroll = (event) => {
        event.preventDefault()
        if (event.type === "wheel") {
          listRef.scrollLeft += event.deltaY
        }

        if (event.type === "touchmove") {
          const change = startTouch - event.touches[0].clientX
          startTouch = event.touches[0].clientX
          listRef.scrollLeft += change
        }

        const currentScroll = listRef.scrollLeft
        if (currentScrollState === null) {
          setCurrentScrollState(currentScroll)
        }

        const finalScroll = listRef.scrollLeftMax
        if (isFinalScrollState === null) {
          setIsFinalScrollState(finalScroll)
        }
      }

      listRef.addEventListener("wheel", handleScroll)
      listRef.addEventListener("touchstart", handleTouchStart)
      listRef.addEventListener("touchmove", handleScroll)

      return () => {
        listRef.removeEventListener("wheel", handleScroll)
        listRef.addEventListener("touchstart", handleTouchStart)
        listRef.removeEventListener("touchmove", handleScroll)
      }
    }
  }, [listRef])

  const handleMoveNavBarToLeftByClick = () => {
    if (listRef) {
      let toRest = listRef.scrollLeft > 200 ? 200 : listRef.scrollLeft

      setCurrentScrollState((prevState) => prevState - toRest)

      listRef.scrollLeft -= 200
    }
  }

  const handleMoveNavBarToRightByClick = () => {
    if (listRef) {
      listRef.scrollLeft += 200

      const currentScroll = listRef.scrollLeft
      if (currentScrollState === null) {
        setCurrentScrollState(currentScroll)
      } else {
        setCurrentScrollState(currentScroll)
      }

      const finalScroll = listRef.scrollLeftMax
      if (isFinalScrollState === null) {
        setIsFinalScrollState(finalScroll)
      }
    }
  }

  const { query } = useRouter()
  // console.log('query:', query)/* Here we have the query from 404 page or index  */

  return (
    <INDEX_D_ORGWrapper shouldHideAllLi={stateToCss.scrollRight}>
      <div>
        <H1 semi_bold>
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
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>

        <ORG_D_SearchComponent />
      </div>

      <div>
        <div className={`${stateToCss.scrollRight ? "navBarLeftArrowShouldDisplay" : ""}`}>
          <div onClick={handleMoveNavBarToLeftByClick}>
            <LeftArrowSvg />
          </div>
          <div />
        </div>

        <ul ref={setListRef}>
          <li
            onClick={handleShowAll}
            className={!singleCardIsSelected ? "isActive" : ""}>
            <P
              primary_cta
              semibold>
              All
            </P>
          </li>
          {DATA.map((x, i) => (
            <li
              key={`${x.nameJSX}_${i}`}
              data-name={x.componentName}
              onClick={handleShowOneCard}
              className={singleCardIsSelected && matchNameState === x.componentName ? "isActive" : ""}>
              <P
                primary_cta
                semibold
                data-name={x.componentName}>
                {x.nameJSX}
              </P>
            </li>
          ))}
        </ul>
        <div className={`${stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""}`}>
          <div
            onClick={handleMoveNavBarToRightByClick}
            className={`${stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""}`}>
            <ArrowRightSvg />
          </div>
          <div />
        </div>
      </div>

      {DATA.map((x, i) => {
        if (singleCardIsSelected === false) {
          return (
            <Fragment key={`${x.componentName}`}>
              <x.component positionInArray={i} />
            </Fragment>
          )
        }

        if (singleCardIsSelected && matchNameState === x.componentName) {
          return (
            <x.component
              key={`${x.componentName}_${i}_${matchNameState}`}
              isSelected={singleCardIsSelected}
              positionInArray={i}
            />
          )
        }

        return null
      })}
    </INDEX_D_ORGWrapper>
  )
}
