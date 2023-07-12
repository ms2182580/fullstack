import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ORGDesktop_InsuranceIcon from "../../../../assets/Icons/ORGDesktop_InsuranceIcon.png"
import { useORG_InputCtx } from "../../../../context/ORG_Input"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_DropdownSuggestionComponent } from "./ORG_D_DropdownSuggestionComponent"
import { ORG_D_DropdownSuggestionWrapper } from "./styles/ORG_D_DropdownSuggestionWrapper"

const suggestionsKeywords = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Tricare", "VSP"]

export const ORG_D_InputInsurance = () => {
  const [isFocusEnsurance, setIsFocusEnsurance] = useState(false)
  const [isHoveredEnsurance, setIsHoveredEnsurance] = useState(false)
  const inputRefEnsurance = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  const { insuranceContext, setInsuranceContext } = useORG_InputCtx()

  useEffect(() => {
    setKeywordInput(insuranceContext)
  }, [insuranceContext])

  const shouldTab = useShouldTab()

  return (
    <div>
      <P
        dark_gray
        bold>
        Insurance
      </P>

      <span>
        <span>
          <Image
            src={ORGDesktop_InsuranceIcon}
            alt=""
          />
        </span>
        <input
          placeholder="VSP, Tricare, Cigna..."
          onFocus={() => setIsFocusEnsurance(true)}
          onBlur={() => {
            if (!isHoveredEnsurance) {
              setIsFocusEnsurance(false)
            }
          }}
          value={keywordInput}
          onChange={(e) => {
            setKeywordInput(e.target.value)
            setInsuranceContext(e.target.value)
          }}
          ref={inputRefEnsurance}
          tabIndex={shouldTab}
        />
      </span>

      <ORG_D_DropdownSuggestionWrapper>
        <ORG_D_DropdownSuggestionComponent
          isFocus={isFocusEnsurance}
          setIsHover={setIsHoveredEnsurance}
          setIsFocus={setIsFocusEnsurance}
          suggestions={suggestionsKeywords}
          keywordClickByUser={keywordInput}
          setKeywordClickByUser={setKeywordInput}
          setKeywordClickByUserContext={setInsuranceContext}
          inputRefFocus={inputRefEnsurance}
          isFirstOrSecondDropdown={true}
        />
      </ORG_D_DropdownSuggestionWrapper>
    </div>
  )
}
