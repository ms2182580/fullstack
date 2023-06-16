import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { CurrentLocationSvg } from "../../../../assets/Icons"
import ORGDesktop_LocationIcon from "../../../../assets/Icons/ORGDesktop_LocationIcon.png"
import { useORG_InputCtx } from "../../../../context/ORG_Input"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STDesktop_DropdownSuggestionComponent } from "./STDesktop_DropdownSuggestionComponent"
import { STDesktop_DropdownSuggestionWrapper } from "./styles/STDesktop_DropdownSuggestionWrapper"

const suggestionsCity = ["Current location", "The Bronx", "Manhattan", "Queens", "Brooklyn", "Staten Island"]

export const STDesktop_InputLocation = () => {
  const [isFocusCity, setIsFocusCity] = useState(false)
  const [isHoveredCity, setIsHoveredCity] = useState(false)
  const inputRefCity = useRef()
  const [cityInput, setCityInput] = useState("")

  const { setCitiesContext, citiesContext } = useORG_InputCtx()

  useEffect(() => {
    setCityInput(citiesContext)
  }, [citiesContext])

  // const { isTouchScreen } = useCheckMobile()
  // const cityFirstLevelRef = useRef(null)
  // const citySecondLevelRef = useRef(null)
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       cityFirstLevelRef.current &&
  //       !cityFirstLevelRef.current.contains(event.target) &&
  //       citySecondLevelRef.current &&
  //       !citySecondLevelRef.current.contains(event.target)
  //     ) {
  //       setIsFocusCity(false)
  //     }
  //   }

  //   document.addEventListener("touchstart", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("touchstart", handleClickOutside)
  //   }
  // }, [])

  const shouldTab = useShouldTab()

  return (
    <div>
      <P
        dark_gray
        bold>
        Location
      </P>

      <span>
        <span>
          <Image
            src={ORGDesktop_LocationIcon}
            alt=""
          />
        </span>
        <input
          placeholder="City or zip code"
          onFocus={() => setIsFocusCity(true)}
          onBlur={() => {
            if (!isHoveredCity) {
              setIsFocusCity(false)
            }
          }}
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value)
            setCitiesContext(e.target.value)
          }}
          ref={inputRefCity}
          tabIndex={shouldTab}
        />
      </span>

      <STDesktop_DropdownSuggestionWrapper>
        <STDesktop_DropdownSuggestionComponent
          isFocus={isFocusCity}
          setIsHover={setIsHoveredCity}
          setIsFocus={setIsFocusCity}
          suggestions={suggestionsCity}
          keywordClickByUser={cityInput}
          setKeywordClickByUser={setCityInput}
          setKeywordClickByUserContext={setCitiesContext}
          inputRefFocus={inputRefCity}
          haveIcon={true}
          whichIcon={CurrentLocationSvg}
        />
      </STDesktop_DropdownSuggestionWrapper>
    </div>
  )
}
