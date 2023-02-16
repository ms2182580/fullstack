import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { CurrentLocationSvg } from "../../../assets/Icons"
import ORG_LANDING_CC from "../../../assets/Icons/ORG_Landing_CC.png"
import ORG_LANDING_SSA from "../../../assets/Icons/ORG_Landing_SSA.png"
import ORG_LANDING_TP from "../../../assets/Icons/ORG_Landing_TP.png"
import SearchIcon from "../../../assets/Icons/SearchIcon.png"
import { useCheckMobile } from "../../../utils/useCheckMobile"
import { ButtonSmall } from "../../ui/buttons/general"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import Customdropdown from "../dropdown/CustomDropdown"
import { OptionsMobile } from "../dropdown/OptionsMobile.js"
import DropdownSuggestionsInput from "./DropdownSuggestionsInput"
import SearchComponentWrapper, { SuggestionsKeywordWrapper } from "./styles/SearchComponentWrapper"

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

  const { isTouchScreen } = useCheckMobile()
  const firstLevelRef = useRef(null)
  const secondLevelRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        firstLevelRef.current &&
        !firstLevelRef.current.contains(event.target) &&
        secondLevelRef.current &&
        !secondLevelRef.current.contains(event.target)
      ) {
        setIsFocusKeyword(false)
      }
    }

    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

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
              onFocus={!isTouchScreen ? () => setIsFocusKeyword(true) : undefined}
              onBlur={
                !isTouchScreen
                  ? () => {
                      if (!isHoveredKeyword) {
                        setIsFocusKeyword(false)
                      }
                    }
                  : undefined
              }
              onTouchStart={
                isTouchScreen
                  ? (e) => {
                      e.stopPropagation()
                      setIsFocusKeyword(true)
                    }
                  : undefined
              }
              /* 
              !FH0
              This works. Use useRef plus event.stopPropagation() mainly
              
              https://codesandbox.io/s/twilight-shadow-4qcd2p?file=/src/App.js
              
              */
              // onTouchEnd={() => {
              //   setIsFocusKeyword(false)
              // }}

              value={keywordInput}
              onChange={(e) => {
                setKeywordInput(e.target.value)
                setKeywordsContext(e.target.value)
              }}
              ref={inputRefKeyword}
            />
          </span>

          {windowSize > 768 ? (
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
          ) : windowSize <= 768 ? (
            <OptionsMobile
              isFocus={isFocusKeyword}
              setIsHover={setIsHoveredKeyword}
              setIsFocusKeyword={setIsFocusKeyword}
              theRef={firstLevelRef}>
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
                setIsFocusKeyword={setIsFocusKeyword}
                isHover={isHoveredKeyword}
                theRef={secondLevelRef}
              />
              <Customdropdown
                icon={ORG_LANDING_SSA}
                title="Social Service Agencies"
                suggestions={suggestionDropdownSSA}
                landingHere={true}
                toWhere="SpeechTherapists"
                isMobile={true}
                isHover={isHoveredKeyword}
                setIsFocusKeyword={setIsFocusKeyword}
                theRef={secondLevelRef}
              />
              <Customdropdown
                icon={ORG_LANDING_CC}
                title="Community Classes"
                suggestions={suggestionDropdownCC}
                landingHere={true}
                toWhere="SpeechTherapists"
                isMobile={true}
                isHover={isHoveredKeyword}
                setIsFocusKeyword={setIsFocusKeyword}
                theRef={secondLevelRef}
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
