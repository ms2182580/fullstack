import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Image from "next/legacy/image"
import { useRef, useState } from "react"
import ORGDesktop_AgeIcon from "../../../assets/icons/ORGDesktop_AgeIcon.png"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { NavBar_D_DropdownSuggestionComponent } from "./NavBar_D_DropdownSuggestionComponent"
import { NavBar_D_DropdownSuggestionWrapper } from "./NavBar_D_DropdownSuggestionWrapper"

const suggestionsKeywords = ["Autism (ASD)", "ADHD", "Down Syndrome", "Cerebral Palsy", "Frafile X", "Other"]

export const NavBar_D_InputDiagnosis = () => {
  const [isFocusKeyword, setIsFocusKeyword] = useState(false)
  const [isHoveredKeyword, setIsHoveredKeyword] = useState(false)
  const inputRefKeyword = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  // const { setKeywordsContext, keywordsContext } = useORG_InputCtx()

  // useEffect(() => {
  //   setKeywordInput(keywordsContext)
  // }, [keywordsContext])

  const shouldTab = useShouldTab()

  return (
    <div>
      <div>
        <Caption>
          <span>*</span>
          Diagnosis
        </Caption>

        <span>
          <span>
            <Image
              src={ORGDesktop_AgeIcon}
              alt=""
            />
          </span>
          <input
            placeholder="Diagnosis (Ex: Autism...)"
            onFocus={() => setIsFocusKeyword(true)}
            onBlur={() => {
              if (!isHoveredKeyword) {
                setIsFocusKeyword(false)
              }
            }}
            value={keywordInput}
            onChange={(e) => {
              setKeywordInput(e.target.value)
              // setKeywordsContext(e.target.value)
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
          inputRefFocus={inputRefKeyword}
          isFirstOrSecondDropdown={true}
        />
      </NavBar_D_DropdownSuggestionWrapper>
    </div>
  )
}
