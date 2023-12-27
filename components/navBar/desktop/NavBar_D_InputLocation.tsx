import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Image from "next/legacy/image"
import { useEffect, useRef, useState } from "react"
import { CurrentLocationSvg } from "../../../assets/icons"
import ORGDesktop_LocationIcon from "../../../assets/icons/ORGDesktop_LocationIcon.png"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { NavBar_D_DropdownSuggestionComponent } from "./NavBar_D_DropdownSuggestionComponent"
import { NavBar_D_DropdownSuggestionWrapper } from "./NavBar_D_DropdownSuggestionWrapper"

const suggestionsCity = ["Current location", "The Bronx", "Manhattan", "Queens", "Brooklyn", "Staten Island"]

export type widthOfDropdown_TYPE = {
  widthOfDropdown: number
}

export const NavBar_D_InputLocation = ({ widthOfDropdown }: widthOfDropdown_TYPE) => {
  const [isFocusCity, setIsFocusCity] = useState(false)
  const [isHoveredCity, setIsHoveredCity] = useState(false)
  const inputRefCity = useRef<HTMLInputElement>(null)
  const [cityInput, setCityInput] = useState("")

  const { setCitiesContext, citiesContext }: any = useORG_InputCtx()

  useEffect(() => {
    setCityInput(citiesContext)
  }, [citiesContext])

  const shouldTab = useShouldTab()

  return (
    <div>
      <div>
        <Caption>Location</Caption>

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
      </div>

      <NavBar_D_DropdownSuggestionWrapper widthOfDropdown={widthOfDropdown}>
        <NavBar_D_DropdownSuggestionComponent
          isFocus={isFocusCity}
          setIsHover={setIsHoveredCity}
          suggestions={suggestionsCity}
          keywordClickByUser={cityInput}
          setKeywordClickByUser={setCityInput}
          setKeywordClickByUserContext={setCitiesContext}
          inputRefFocus={inputRefCity}
          haveIcon={true}
          whichIcon={CurrentLocationSvg}
          theRef={undefined}
        />
      </NavBar_D_DropdownSuggestionWrapper>
    </div>
  )
}
