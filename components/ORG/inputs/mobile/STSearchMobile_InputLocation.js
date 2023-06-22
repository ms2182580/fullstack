import { useEffect, useRef, useState } from "react"
import { useORG_InputCtx } from "../../../../context/ORG_Input"
import { useCheckMobile } from "../../../../utils/useCheckMobile"
import { Caption } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STSearchMobile_OptionDropdown1Level } from "./STSearchMobile_OptionDropdown1Level"
import { STSearchMobile_OptionDropdown2Level } from "./STSearchMobile_OptionDropdown2Level"
import { STSearchMobile_InputWrapper } from "./styles/STSearchMobile_InputWrapper"


export const STSearchMobile_InputLocation = () => {
  const suggestionsCity = ["Current location", "The Bronx", "Manhattan", "Queens", "Brooklyn", "Staten Island"]
  const [isFocusCity, setIsFocusCity] = useState(false)
  const [isHoveredCity, setIsHoveredCity] = useState(false)
  const inputRefCity = useRef()
  const [cityInput, setCityInput] = useState("")

  const { setCitiesContext, citiesContext } = useORG_InputCtx()

  useEffect(() => {
    setCityInput(citiesContext)
  }, [citiesContext])

  const { isTouchScreen } = useCheckMobile()
  const cityFirstLevelRef = useRef(null)
  const citySecondLevelRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        cityFirstLevelRef.current &&
        !cityFirstLevelRef.current.contains(event.target) &&
        citySecondLevelRef.current &&
        !citySecondLevelRef.current.contains(event.target)
      ) {
        setIsFocusCity(false)
      }
    }

    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  return (
    <STSearchMobile_InputWrapper>
      <Caption
        dark_gray
        bolder>
        {" "}
        Enter City/Zip Code{" "}
      </Caption>

      <span>
        <input
          placeholder="Example: 12345"
          onFocus={!isTouchScreen ? () => setIsFocusCity(true) : undefined}
          onBlur={
            !isTouchScreen
              ? () => {
                if (!isHoveredCity) {
                  setIsFocusCity(false)
                }
              }
              : undefined
          }
          onTouchStart={(e) => {
            e.stopPropagation()
            setIsFocusCity(true)
          }}
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value)
            setCitiesContext(e.target.value)
          }}
          ref={inputRefCity}
        />
      </span>

      <STSearchMobile_OptionDropdown1Level
        isFocus={isFocusCity}
        setIsFocusKeyword={setIsFocusCity}
        setIsHover={setIsHoveredCity}
        theRef={cityFirstLevelRef}>
        <Caption bolder>QUICK LINKS</Caption>
        <div></div>
        <STSearchMobile_OptionDropdown2Level
          title="Locations"
          suggestions={suggestionsCity}
          landingHere={true}
          toWhere="SpeechTherapists"
          isMobile={true}
          setIsFocusKeyword={setIsFocusCity}
          isHover={isHoveredCity}
          theRef={citySecondLevelRef}
          shouldShowImmediately={true}
        />
      </STSearchMobile_OptionDropdown1Level>

    </STSearchMobile_InputWrapper>
  )
}
