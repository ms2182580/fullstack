import { useEffect, useState } from "react"
import { PinSvgDefault, PinSvgHover } from "../../../../../assets/Icons"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { STResults_CardsOnMapCardVisible } from "./STResults_CardsOnMapCardVisible"
import { STResults_CardsOnMapCardWrapper } from "./styles/STResults_CardsOnMapCardWrapper"

const nameToCloseCard = "ShowCardsDesktop"

export const STResults_CardsOnMapCard = ({ top, left, handleShowMap, personalData, technicalData, review }) => {
  // console.log('top, left, handleShowMap, personalData, technicalData, review:', top, left, handleShowMap, personalData, technicalData, review)
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
    <STResults_CardsOnMapCardWrapper
      top={top}
      left={left}
      mustShow={mustShow}
      ORGshowFullMapButton={ORGshowFullMapButton}
      className={nameToCloseCard}>
      <div>
        <div onClick={handleClick}>{mustShow ? <PinSvgHover /> : <PinSvgDefault />}</div>
        <STResults_CardsOnMapCardVisible
          personalData={personalData}
          technicalData={technicalData}
          review={review}
        />
      </div>
    </STResults_CardsOnMapCardWrapper>
  )
}
