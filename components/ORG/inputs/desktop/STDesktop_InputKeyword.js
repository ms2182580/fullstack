import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ORGDesktop_LoupeIcon from "../../../../assets/Icons/ORGDesktop_LoupeIcon.png"
import { useORG_InputCtx } from "../../../../context/ORG_Input"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STDesktop_DropdownSuggestionComponent } from "./STDesktop_DropdownSuggestionComponent"
import { STDesktop_DropdownSuggestionWrapper } from "./styles/STDesktop_DropdownSuggestionWrapper"

const suggestionsKeywords = [
  "Physical Therapist",
  "Speech Therapist",
  "Occupational Therapist",
  "Dance Class",
  "Art Camp"
]

export const STDesktop_InputKeyword = () => {
  const [isFocusKeyword, setIsFocusKeyword] = useState(false)
  const [isHoveredKeyword, setIsHoveredKeyword] = useState(false)
  const inputRefKeyword = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  const { setKeywordsContext, keywordsContext } = useORG_InputCtx()

  useEffect(() => {
    setKeywordInput(keywordsContext)
  }, [keywordsContext])

  // const { isTouchScreen } = useCheckMobile()
  // const keywordFirstLevelRef = useRef(null)
  // const keywordSecondLevelRef = useRef(null)

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       keywordFirstLevelRef.current &&
  //       !keywordFirstLevelRef.current.contains(event.target) &&
  //       keywordSecondLevelRef.current &&
  //       !keywordSecondLevelRef.current.contains(event.target)
  //     ) {
  //       setIsFocusKeyword(false)
  //     }
  //   }

  //   document.addEventListener("touchstart", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("touchstart", handleClickOutside)
  //   }
  // }, [])

  // const suggestionDropdownTP = [
  //   "Speech Therapist",
  //   "Behavioral Therapist",
  //   "Physical Therapist",
  //   "Occupational Therapist"
  // ]

  const shouldTab = useShouldTab()

  return (
    <div>
      <P
        dark_gray
        bold>
        Keyword
      </P>

      <span>
        <span>
          <Image
            src={ORGDesktop_LoupeIcon}
            alt=""
          />
        </span>
        <input
          placeholder="ADHD, speech therapy, music classes, etc."
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
          tabIndex={shouldTab}
        />
      </span>

      <STDesktop_DropdownSuggestionWrapper>
        <STDesktop_DropdownSuggestionComponent
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
      </STDesktop_DropdownSuggestionWrapper>
    </div>
  )
}
