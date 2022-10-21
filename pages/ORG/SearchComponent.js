import { useRef, useState } from "react"
import { ButtonSmall } from "../../components/ui/buttons/general"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_KeywordsCtx } from "../../context/ORG_Keywords"
import DropdownSuggestionsInput from "../../components/ORG/DropdownSuggestionsInput"
import ORGDropdown from "./ORGDropdown"
import SearchComponentWrapper, {
  OptionsWrapper,
  SuggestionsKeywordWrapper,
  EverySingleSuggestionWrapper,
  EverySingleSuggestion,
  SuggestionsCityWrapper
} from "./styles/SearchComponentWrapper"
import { CurrentLocationSvg } from "../../assets/Icons/index.js"
import EverySingleSuggestionKeyword from "./EverySingleSuggestionKeyword.js"
import SearchIcon from "../../assets/Icons/SearchIcon.png"
import ORG_Landing_CC from "../../assets/Icons/ORG_Landing_CC.png"
import ORG_Landing_SSA from "../../assets/Icons/ORG_Landing_SSA.png"
import ORG_Landing_TP from "../../assets/Icons/ORG_Landing_TP.png"
import Image from "next/image"

const SearchComponent = () => {
  const { setKeywordsToSearch } = useORG_KeywordsCtx()

  const suggestionsKeywords = [
    "Physical Therapist",
    "Occupational Therapist",
    "Speech Therapist"
  ]
  const [isFocusKeyword, setIsFocusKeyword] = useState(false)
  const [isHoveredKeyword, setIsHoveredKeyword] = useState(false)
  const inputRefKeyword = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  const suggestionsCity = [
    "Current location",
    "The Bronx",
    "Manhattan",
    "Queens",
    "Brooklyn",
    "Staten Island"
  ]
  const [isFocusCity, setIsFocusCity] = useState(false)
  const [isHoveredCity, setIsHoveredCIty] = useState(false)
  const inputRefCity = useRef()
  const [cityInput, setCityInput] = useState("")

  const suggestionDropdownTP = [
    "Speech Therapist",
    "Behavioral Therapist",
    "Physical Therapist",
    "Occupational Therapist"
  ]
  const suggestionDropdownSSA = []
  const suggestionDropdownCC = []

  return (
    <>
      <SearchComponentWrapper>
        <div>
          <P dark_gray bold>
            Enter Keyword
          </P>
          <span>
            <span>
              <Image src={SearchIcon} alt="" />
            </span>
            <input
              placeholder="Example: Therapist, Accessible Dance Class, etc"
              onFocus={() => setIsFocusKeyword(true)}
              onBlur={() => {
                if (!isHoveredKeyword) {
                  setIsFocusKeyword(false)
                }
              }}
              value={keywordInput}
              onChange={(e) => {
                setKeywordInput(e.target.value)
              }}
              ref={inputRefKeyword}
            />
          </span>

          <SuggestionsKeywordWrapper>
            <DropdownSuggestionsInput
              isFocus={isFocusKeyword}
              setIsFocus={setIsHoveredKeyword}
              suggestions={suggestionsKeywords}
              keywordClickByUser={keywordInput}
              setKeywordClickByUser={setKeywordInput}
              inputRefFocus={inputRefKeyword}
            />
          </SuggestionsKeywordWrapper>
        </div>
        <div>
          <P dark_gray bold>
            Enter City or Zip Code
          </P>
          <span>
            <span>
              <Image src={SearchIcon} alt="" />
            </span>
            <input
              placeholder="Example: 12345"
              onFocus={() => setIsFocusCity(true)}
              onBlur={() => {
                if (!isHoveredCity) {
                  setIsFocusCity(false)
                }
              }}
              value={cityInput}
              onChange={(e) => {
                setCityInput(e.target.value)
              }}
              ref={inputRefCity}
            />
          </span>

          <SuggestionsKeywordWrapper>
            <DropdownSuggestionsInput
              isFocus={isFocusCity}
              setIsFocus={setIsHoveredCIty}
              suggestions={suggestionsCity}
              keywordClickByUser={cityInput}
              setKeywordClickByUser={setCityInput}
              inputRefFocus={inputRefCity}
              haveIcon={true}
              whichIcon={CurrentLocationSvg}
            />
          </SuggestionsKeywordWrapper>
        </div>
        <ButtonSmall>Search</ButtonSmall>
      </SearchComponentWrapper>

      <OptionsWrapper>
        <ORGDropdown
          icon={ORG_Landing_TP}
          title="Therapeutic Providers"
          suggestions={suggestionDropdownTP}
        />
        <ORGDropdown
          icon={ORG_Landing_SSA}
          title="Social Service Agencies"
          suggestions={suggestionDropdownSSA}
        />
        <ORGDropdown
          icon={ORG_Landing_CC}
          title="Community Classes"
          suggestions={suggestionDropdownCC}
        />
      </OptionsWrapper>
    </>
  )
}

export default SearchComponent
