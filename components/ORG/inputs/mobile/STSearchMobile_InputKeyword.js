import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import ORG_STMobileSearch_CC from '../../../../assets/Icons/ORG_STMobileSearch_CC.png'
import ORG_STMobileSearch_SSA from '../../../../assets/Icons/ORG_STMobileSearch_SSA.png'
import ORG_STMobileSearch_TP from '../../../../assets/Icons/ORG_STMobileSearch_TP.png'
import { useORG_InputCtx } from "../../../../context/ORG_Input"
import { useCheckMobile } from "../../../../utils/useCheckMobile"
import { Caption } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STSearchMobile_OptionDropdown1Level } from "./STSearchMobile_OptionDropdown1Level"
import { STSearchMobile_OptionDropdown2Level } from "./STSearchMobile_OptionDropdown2Level"
import { STSearchMobile_InputWrapper } from "./styles/STSearchMobile_InputWrapper.js"

export const STSearchMobile_InputKeyword = () => {
  const router = useRouter()
  const formatRouter = router.pathname

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

  // const { isTouchScreen } = useCheckMobile()
  const keywordFirstLevelRef = useRef(null)
  const keywordSecondLevelRef = useRef(null)
  const { isTouchScreen } = useCheckMobile()

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
    <STSearchMobile_InputWrapper>
      <Caption
        dark_gray
        bolder>
        {" "}
        Enter Keyword{" "}
      </Caption>

      <span>
        <input
          placeholder="Example: Therapist, Dance Class, etc"
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
          onTouchStart={(e) => {
            e.stopPropagation()
            setIsFocusKeyword(true)
          }}
          value={keywordInput}
          onChange={(e) => {
            setKeywordInput(e.target.value)
            setKeywordsContext(e.target.value)
          }}
          ref={inputRefKeyword}
        />
      </span>

      <STSearchMobile_OptionDropdown1Level
        isFocus={isFocusKeyword}
        setIsFocusKeyword={setIsFocusKeyword}
        setIsHover={setIsHoveredKeyword}
        theRef={keywordFirstLevelRef}>
        <Caption bolder>QUICK LINKS</Caption>
        <div></div>
        <STSearchMobile_OptionDropdown2Level
          icon={ORG_STMobileSearch_TP}
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
        <STSearchMobile_OptionDropdown2Level
          icon={ORG_STMobileSearch_SSA}
          title="Social Service Agencies"
          landingHere={true}
          toWhere="SpeechTherapists"
          isMobile={true}
          isHover={isHoveredKeyword}
          setIsFocusKeyword={setIsFocusKeyword}
          theRef={keywordSecondLevelRef}
        />
        <STSearchMobile_OptionDropdown2Level
          icon={ORG_STMobileSearch_CC}
          title="Community Classes"
          landingHere={true}
          toWhere="SpeechTherapists"
          isMobile={true}
          isHover={isHoveredKeyword}
          setIsFocusKeyword={setIsFocusKeyword}
          theRef={keywordSecondLevelRef}
        />
      </STSearchMobile_OptionDropdown1Level>
    </STSearchMobile_InputWrapper>
  )
}
