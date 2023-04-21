import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { CurrentLocationSvg } from "../../../assets/Icons"
import LocationIcon from "../../../assets/Icons/LocationIcon.png"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { useCheckMobile } from "../../../utils/useCheckMobile"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import DropdownSuggestionsInput from "./DropdownSuggestionsInput"
import { SuggestionsKeywordWrapper } from "./styles/SearchComponentWrapper"

export const InputLocation = () => {
  const router = useRouter()

  const { isMobile } = useWidthWindow1024()

  const suggestionsCity = ["Current location", "The Bronx", "Manhattan", "Queens", "Brooklyn", "Staten Island"]
  const [isFocusCity, setIsFocusCity] = useState(false)
  const [isHoveredCity, setIsHoveredCity] = useState(false)
  const inputRefCity = useRef()
  const [cityInput, setCityInput] = useState("")

  const { setCitiesContext, citiesContext } = useORG_InputCtx()
  
  useEffect(() => {
    setCityInput(citiesContext)
  }, [ citiesContext])


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
  
  const shouldTab = useShouldTab()

  return (
    <div>
      {isMobile === false ? (
        <P
          dark_gray
          bold>
          Location
        </P>
      ) : (
        <Caption
          dark_gray
          bold>
          {" "}
          Location{" "}
        </Caption>
      )}

      <span>
        <span>
          <Image
            src={LocationIcon}
            alt=""
          />
        </span>
        <input
          placeholder="City or zip code"
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
          onTouchStart={
            isTouchScreen
              ? (e) => {
                  e.stopPropagation()
                  setIsFocusCity(true)
                }
              : undefined
          }
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value)
            setCitiesContext(e.target.value)
          }}
          ref={inputRefCity}
          tabIndex={shouldTab}
        />
      </span>

      <SuggestionsKeywordWrapper ref={cityFirstLevelRef}>
        <DropdownSuggestionsInput
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
          theRef={citySecondLevelRef}
        />
      </SuggestionsKeywordWrapper>
    </div>
  )
}
