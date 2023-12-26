import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Image from "next/legacy/image"
import { useEffect, useRef, useState } from "react"
import ORGDesktop_LoupeIcon from "../../../assets/icons/ORGDesktop_LoupeIcon.png"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { NavBar_D_DropdownSuggestionComponent } from "./NavBar_D_DropdownSuggestionComponent"
import { NavBar_D_DropdownSuggestionWrapper } from "./NavBar_D_DropdownSuggestionWrapper"

const suggestionsKeywords = ["Physical Therapist", "Speech Therapist", "Occupational Therapist", "Dance Class", "Art Camp"]

export const NavBar_D_InputKeyword = () => {
  const [isFocusKeyword, setIsFocusKeyword] = useState(false)
  const [isHoveredKeyword, setIsHoveredKeyword] = useState(false)
  const inputRefKeyword = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  const { setKeywordsContext, keywordsContext } = useORG_InputCtx()

  useEffect(() => {
    setKeywordInput(keywordsContext)
  }, [keywordsContext])

  const shouldTab = useShouldTab()

  return (
    <div>
      <div>
        <Caption>Keyword</Caption>

        <span>
          <span>
            <Image
              src={ORGDesktop_LoupeIcon}
              alt=""
            />
          </span>
          <input
            placeholder="Social skills, evaluation, school  etc."
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
      </div>

      <NavBar_D_DropdownSuggestionWrapper>
        <NavBar_D_DropdownSuggestionComponent
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
      </NavBar_D_DropdownSuggestionWrapper>
    </div>
  )
}
