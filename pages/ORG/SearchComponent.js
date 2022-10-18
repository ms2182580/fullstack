import { useRef, useState } from "react"
import { ButtonSmall } from "../../components/ui/buttons/general"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_KeywordsCtx } from "../../context/ORG_Keywords"
import DropdownSuggestions from "../../components/ORG/DropdownSuggestions"
import ORGDropdown from "./ORGDropdown"
import SearchComponentWrapper, {
  OptionsWrapper,
  SuggestionsKeywordWrapper,
  EverySingleSuggestionWrapper,
  EverySingleSuggestion
} from "./styles/SearchComponentWrapper"
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
            <DropdownSuggestions
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
        </div>
        <ButtonSmall>Search</ButtonSmall>
      </SearchComponentWrapper>

      <OptionsWrapper>
        <ORGDropdown icon={ORG_Landing_TP} title="Therapeutic Providers" />
        <ORGDropdown icon={ORG_Landing_SSA} title="Social Service Agencies" />
        <ORGDropdown icon={ORG_Landing_CC} title="Community Classes" />
      </OptionsWrapper>
    </>
  )
}

export default SearchComponent
