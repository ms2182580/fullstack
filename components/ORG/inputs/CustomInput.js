import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import SearchIcon from "../../../assets/Icons/SearchIcon.png"
import { CurrentLocationSvg } from "../../../assets/Icons"
import SearchComponentWrapper, { SuggestionsKeywordWrapper } from "./styles/SearchComponentWrapper"
import DropdownSuggestionsInput from "./DropdownSuggestionsInput"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { ButtonSmall } from "../../ui/buttons/general"

const CustomInput = ({
  setKeywordsContext,
  setCitiesContext,
  keywordValueContext,
  citiesValueContext,
  actualRoute,
  toWhere,
}) => {
  const suggestionsKeywords = [
    "Physical Therapist",
    "Occupational Therapist",
    "Speech Therapist"
  ]
  const [isFocusKeyword, setIsFocusKeyword] = useState(false)
  const [isHoveredKeyword, setIsHoveredKeyword] = useState(false)
  const inputRefKeyword = useRef()
  const [keywordInput, setKeywordInput] = useState("")
  // console.log('✅ keywordInput:', keywordInput)

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
  // console.log('✅ cityInput:', cityInput)
  
  useEffect(() => {
    // console.log("👀 useEffect()",keywordValueContext)
    setKeywordInput(keywordValueContext)
  }, [keywordValueContext])

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
                setKeywordsContext(e.target.value)
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
              setKeywordClickByUserContext={setKeywordsContext}
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
                setCitiesContext(e.target.value)
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
              setKeywordClickByUserContext={setCitiesContext}
              inputRefFocus={inputRefCity}
              haveIcon={true}
              whichIcon={CurrentLocationSvg}
            />
          </SuggestionsKeywordWrapper>
        </div>

        <LinkNoStyle href={`${actualRoute.pathname}/${toWhere}`}>
          <ButtonSmall>Search</ButtonSmall>
        </LinkNoStyle>
      </SearchComponentWrapper>
    </>
  )
}

export default CustomInput
