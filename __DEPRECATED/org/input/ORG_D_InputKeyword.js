import ORGDesktop_LoupeIcon from "@/assets/icons/ORGDesktop_LoupeIcon.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_InputCtx } from "@/context/ORG_Input"
import { ORG_FILTERS_DATA_D } from "@/utils/ORG_FiltersCategories"
import { useShouldTab } from "@/utils/ORG_shouldTab"
import Image from "next/legacy/image"
import { useEffect, useRef, useState } from "react"
import { ORG_D_DropdownSuggestionComponent } from "./ORG_D_DropdownSuggestionComponent"
import { ORG_D_DropdownSuggestionWrapper } from "./styles/ORG_D_DropdownSuggestionWrapper"

const suggestionsKeywords = [
  "Physical Therapist",
  "Speech Therapist",
  "Occupational Therapist",
  "Dance Class",
  "Art Camp",
]

export const ORG_D_InputKeyword = ({ setTypedInputKeyword }) => {
  const [isFocusKeyword, setIsFocusKeyword] = useState(false)
  const [isHoveredKeyword, setIsHoveredKeyword] = useState(false)
  const inputRefKeyword = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  const { setKeywordsContext, keywordsContext } = useORG_InputCtx()

  useEffect(() => {
    setKeywordInput(keywordsContext)
  }, [keywordsContext])

  useEffect(() => {
    setTypedInputKeyword(keywordInput)
  }, [keywordInput])

  const shouldTab = useShouldTab()

  return (
    <div>
      <P dark_gray bold>
        Keyword
      </P>

      <span>
        <span>
          <Image src={ORGDesktop_LoupeIcon} alt="desktop icon" />
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

      <ORG_D_DropdownSuggestionWrapper>
        <ORG_D_DropdownSuggestionComponent
          isFocus={isFocusKeyword}
          setIsHover={setIsHoveredKeyword}
          setIsFocus={setIsFocusKeyword}
          suggestions={ORG_FILTERS_DATA_D.diagnosis}
          keywordClickByUser={keywordInput}
          setKeywordClickByUser={setKeywordInput}
          setKeywordClickByUserContext={setKeywordsContext}
          inputRefFocus={inputRefKeyword}
          isFirstOrSecondDropdown={true}
        />
      </ORG_D_DropdownSuggestionWrapper>
    </div>
  )
}
