import { useEffect, useState } from "react"
import { PinSvgDefault, PinSvgHover } from "../../../../../assets/Icons"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { ST_D_Results_CardsOnMapCardVisible } from "./ST_D_Results_CardsOnMapCardVisible"
import { ST_D_Results_CardsOnMapCardWrapper } from "./styles/ST_D_Results_CardsOnMapCardWrapper"

const nameToCloseCard = "ShowCardsDesktop"

export const ST_D_Results_CardsOnMapCard = ({ top, left, handleShowMap, personalData, technicalData, review }) => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  const [mustShow, setMustShow] = useState(false)

  const handleClick = () => {
    if (ORGshowFullMapButton) {
      setMustShow(true)
    } else {
      handleShowMap(true)
    }

    if (mustShow && ORGshowFullMapButton) {
      setMustShow(false)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mustShow && !event.target.closest(`.${nameToCloseCard}`)) {
        setMustShow(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mustShow])

  useEffect(() => {
    // console.log("mustShow:", mustShow)
  }, [mustShow])

  return (
    <ST_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}
      mustShow={mustShow}
      ORGshowFullMapButton={ORGshowFullMapButton}
      className={nameToCloseCard}>
      <div>
        <div onClick={handleClick}>{mustShow ? <PinSvgHover /> : <PinSvgDefault />}</div>
        <ST_D_Results_CardsOnMapCardVisible
          personalData={personalData}
          technicalData={technicalData}
          review={review}
        />
      </div>
    </ST_D_Results_CardsOnMapCardWrapper>
  )
}
