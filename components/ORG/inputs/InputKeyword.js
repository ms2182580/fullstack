import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import ORG_LANDING_CC from "../../../assets/Icons/ORG_Landing_CC.png"
import ORG_LANDING_SSA from "../../../assets/Icons/ORG_Landing_SSA.png"
import ORG_LANDING_TP from "../../../assets/Icons/ORG_Landing_TP.png"
import SearchIcon from "../../../assets/Icons/SearchIcon.png"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { useCheckMobile } from "../../../utils/useCheckMobile"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import Customdropdown from "../dropdown/CustomDropdown"
import { OptionsMobile } from "../dropdown/OptionsMobile"
import DropdownSuggestionsInput from "./DropdownSuggestionsInput"
import { SuggestionsKeywordWrapper } from "./styles/SearchComponentWrapper"

export const InputKeyword = () => {
  const router = useRouter()
  const formatRouter = router.pathname

  
  const { isMobile, widthWindow } = useWidthWindow1024()
  

  const [isFocusKeyword, setIsFocusKeyword] = useState(false)
  const [isHoveredKeyword, setIsHoveredKeyword] = useState(false)
  const inputRefKeyword = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  const suggestionsKeywords = [
    "Physical Therapist",
    "Speech Therapist",
    "Occupational Therapist",
    "Dance Class",
    "Art Camp"
  ]

  const { setKeywordsContext, keywordsContext } = useORG_InputCtx()

  useEffect(() => {
    setKeywordInput(keywordsContext)
  }, [keywordsContext])

  const { isTouchScreen } = useCheckMobile()
  const keywordFirstLevelRef = useRef(null)
  const keywordSecondLevelRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        keywordFirstLevelRef.current &&
        !keywordFirstLevelRef.current.contains(event.target) &&
        keywordSecondLevelRef.current &&
        !keywordSecondLevelRef.current.contains(event.target)
      ) {
        setIsFocusKeyword(false)
      }
    }

    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  const suggestionDropdownTP = [
    "Speech Therapist",
    "Behavioral Therapist",
    "Physical Therapist",
    "Occupational Therapist"
  ]

  return (
    <div>
      {isMobile === false ? (
        <P
          dark_gray
          bold>
          Keyword
        </P>
      ) : (
        <Caption
          dark_gray
          bold>
          {" "}
          Keyword{" "}
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
          placeholder="ADHD, speech therapy, music classes, etc."
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
          value={keywordInput}
          onChange={(e) => {
            setKeywordInput(e.target.value)
            setKeywordsContext(e.target.value)
          }}
          ref={inputRefKeyword}
        />
      </span>

      {isMobile === false ? (
        <SuggestionsKeywordWrapper>
          <DropdownSuggestionsInput
            isFocus={isFocusKeyword}
            setIsHover={setIsHoveredKeyword}
            setIsFocus={setIsFocusKeyword}
            suggestions={suggestionsKeywords}
            keywordClickByUser={keywordInput}
            setKeywordClickByUser={setKeywordInput}
            setKeywordClickByUserContext={setKeywordsContext}
            inputRefFocus={inputRefKeyword}
            isFirstOrSecondDropdown={true}
          />
        </SuggestionsKeywordWrapper>
      ) : isMobile ? (
        <OptionsMobile
          isFocus={isFocusKeyword}
          setIsHover={setIsHoveredKeyword}
          setIsFocusKeyword={setIsFocusKeyword}
          theRef={keywordFirstLevelRef}>
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
            theRef={keywordSecondLevelRef}
          />
          <Customdropdown
            icon={ORG_LANDING_SSA}
            title="Social Service Agencies"
            landingHere={true}
            toWhere="SpeechTherapists"
            isMobile={true}
            isHover={isHoveredKeyword}
            setIsFocusKeyword={setIsFocusKeyword}
            theRef={keywordSecondLevelRef}
          />
          <Customdropdown
            icon={ORG_LANDING_CC}
            title="Community Classes"
            landingHere={true}
            toWhere="SpeechTherapists"
            isMobile={true}
            isHover={isHoveredKeyword}
            setIsFocusKeyword={setIsFocusKeyword}
            theRef={keywordSecondLevelRef}
          />
        </OptionsMobile>
      ) : null}
    </div>
  )
}
