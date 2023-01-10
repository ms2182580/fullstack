import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import SearchIcon from "../../../assets/Icons/SearchIcon.png"
import { CurrentLocationSvg } from "../../../assets/Icons"
import SearchComponentWrapper, { SuggestionsKeywordWrapper } from "./styles/SearchComponentWrapper"
import DropdownSuggestionsInput from "./DropdownSuggestionsInput"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { ButtonSmall } from "../../ui/buttons/general"
import { useRouter } from "next/router"
import { OptionsMobile } from "../dropdown/OptionsMobile.js"
import Customdropdown from "../dropdown/CustomDropdown"
import ORG_LANDING_CC from "../../../assets/Icons/ORG_Landing_CC.png"
import ORG_LANDING_SSA from "../../../assets/Icons/ORG_Landing_SSA.png"
import ORG_LANDING_TP from "../../../assets/Icons/ORG_Landing_TP.png"
import { PlaceholderComponent } from "../placeholders/searchPage"

const CustomInput = ({
  setKeywordsContext,
  setCitiesContext,
  keywordValueContext,
  citiesValueContext,
  toWhere = "undefined",
  landingHere,
  windowSize
}) => {
  const router = useRouter()
  const formatRouter = router.pathname

  const [isFocusKeyword, setIsFocusKeyword] = useState(false)
  const [isHoveredKeyword, setIsHoveredKeyword] = useState(false)
  const inputRefKeyword = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  const suggestionsKeywords = ["Physical Therapist", "Occupational Therapist", "Speech Therapist"]

  const suggestionsCity = ["Current location", "The Bronx", "Manhattan", "Queens", "Brooklyn", "Staten Island"]
  const [isFocusCity, setIsFocusCity] = useState(false)
  const [isHoveredCity, setIsHoveredCIty] = useState(false)
  const inputRefCity = useRef()
  const [cityInput, setCityInput] = useState("")

  useEffect(() => {
    setKeywordInput(keywordValueContext)
    setCityInput(citiesValueContext)
  }, [keywordValueContext, citiesValueContext])

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
      <SearchComponentWrapper landingHere={landingHere}>
        <div>
          {windowSize > 768 ? (
            <P
              dark_gray
              bold>
              Enter Keyword
            </P>
          ) : (
            <Caption
              dark_gray
              bold>
              {" "}
              Enter Keyword{" "}
            </Caption>
          )}

          <span>
            <span>
              <Image
                src={SearchIcon}
                alt=""
              />
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

          {windowSize === undefined ? (
            <PlaceholderComponent />
          ) : windowSize !== undefined && windowSize > 768 ? (
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
          ) : windowSize !== undefined && windowSize <= 768 ? (
            <OptionsMobile
              isFocus={isFocusKeyword}
              setIsFocus={setIsHoveredKeyword}>
              <Caption bolder>QUICK LINKS</Caption>
              <div></div>
              <Customdropdown
                icon={ORG_LANDING_TP}
                title="Therapeutic Providers"
                suggestions={suggestionDropdownTP}
                landingHere={true}
                actualRoute={formatRouter}
                toWhere="SpeechTherapists"
                isMobile={true}
              />
              <Customdropdown
                icon={ORG_LANDING_SSA}
                title="Social Service Agencies"
                suggestions={suggestionDropdownSSA}
                landingHere={true}
                toWhere="SpeechTherapists"
                isMobile={true}
              />
              <Customdropdown
                icon={ORG_LANDING_CC}
                title="Community Classes"
                suggestions={suggestionDropdownCC}
                landingHere={true}
                toWhere="SpeechTherapists"
                isMobile={true}
              />
            </OptionsMobile>
          ) : null}
        </div>
        <div>
          {windowSize > 768 ? (
            <P
              dark_gray
              bold>
              Enter City or Zip Code
            </P>
          ) : (
            <Caption
              dark_gray
              bold>
              {" "}
              Enter City or Zip Code{" "}
            </Caption>
          )}

          <span>
            <span>
              <Image
                src={SearchIcon}
                alt=""
              />
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

        {toWhere === "SpeechTherapists" ? (
          <LinkNoStyle href={`${router.pathname}/${toWhere}`}>
            <ButtonSmall>Search</ButtonSmall>
          </LinkNoStyle>
        ) : toWhere === "no where" ? (
          <LinkNoStyle href="#">
            <ButtonSmall>Search</ButtonSmall>
          </LinkNoStyle>
        ) : (
          <LinkNoStyle href={`${router.pathname}`}>
            <ButtonSmall>Search</ButtonSmall>
          </LinkNoStyle>
        )}
      </SearchComponentWrapper>
    </>
  )
}

export default CustomInput
