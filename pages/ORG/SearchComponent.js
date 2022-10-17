import { useRef, useState } from "react"
import { ButtonSmall } from "../../components/ui/buttons/general"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_KeywordsCtx } from "../../context/ORG_Keywords"
import ORGDropdown from "./ORGDropdown"
import SearchComponentWrapper, {
  OptionsWrapper,
  SuggestionsKeywordWrapper,
  EverySingleSuggestionWrapper,
  EverySingleSuggestion,
} from "./styles/SearchComponentWrapper"
import EverySingleSuggestionKeyword from "./EverySingleSuggestionKeyword.js"
import SearchIcon from "../../assets/Icons/SearchIcon.png"
import ORG_Landing_CC from "../../assets/Icons/ORG_Landing_CC.png"
import ORG_Landing_SSA from "../../assets/Icons/ORG_Landing_SSA.png"
import ORG_Landing_TP from "../../assets/Icons/ORG_Landing_TP.png"
import Image from "next/image"

const SearchComponent = () => {
  const { setKeywordsToSearch } = useORG_KeywordsCtx()

  const suggestions = [
    "Physical Therapist",
    "Occupational Therapist",
    "Speech Therapist"
  ]
  const [isFocus, setIsFocus] = useState(false)
  // console.log('isFocus:', isFocus)
  const [isHovered, setIsHovered] = useState(false)
  console.log('isHovered:', isHovered)
  const [clickOnSingleElement, setClickOnSingleElement] = useState(false)
  console.log('clickOnSingleElement:', clickOnSingleElement)
  const inputRef = useRef()
  const [inputValue, setInputValue] = useState("")

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
              onFocus={() => setIsFocus(true)}
              onBlur={() => {
                if (!isHovered) {
                  setIsFocus(false)
                }
                setClickOnSingleElement(false)
              }}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              ref={inputRef} /* This is local */
            />
          </span>

          <SuggestionsKeywordWrapper>
            {isFocus && (
              <EverySingleSuggestionWrapper
                onMouseEnter={() => {
                  setIsHovered(true)
                  
                }}
                onMouseLeave={() => {
                  setIsHovered(false)
                  // setIsFocus(false)
                  // setClickOnSingleElement(false)
                }}
                
                isHover={isHovered}
                isClick={clickOnSingleElement}
                
              >
                {suggestions.map((suggestion, index) => {
                  const isMatch =
                    suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) >
                    -1
                  return (
                    <div key={index}>
                      {isMatch && (
                        <EverySingleSuggestion
                          onClick={() => {
                            setInputValue(suggestion) /* This is local */
                            inputRef.current.focus() /* This is local */
                            setClickOnSingleElement(true)
                            // setIsFocus(false)
                            // setIsHovered(false)
                          }}
                          
                          
                          
                        >
                          {suggestion}
                        </EverySingleSuggestion>
                      )}
                    </div>
                  )
                })}
              </EverySingleSuggestionWrapper>
            )}
          </SuggestionsKeywordWrapper>

          {/* let result3 = array.filter(x => x.toLowerCase().indexOf(typed3.toLowerCase()) > -1)
console.log(result3) */}
        </div>
        <div>
          <P dark_gray bold>
            Enter City or Zip Code
          </P>
          <span>
            <span>
              <Image src={SearchIcon} alt="" />
            </span>
            <input placeholder="Example: 12345" />
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
