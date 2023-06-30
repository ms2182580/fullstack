import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ORGDesktop_InsuranceIcon from "../../../../assets/Icons/ORGDesktop_InsuranceIcon.png"
import { useORG_InputCtx } from "../../../../context/ORG_Input"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_D_DropdownSuggestionComponent } from "./ST_D_DropdownSuggestionComponent"
import { ST_D_DropdownSuggestionWrapper } from "./styles/ST_D_DropdownSuggestionWrapper"

const suggestionsKeywords = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Tricare", "VSP"]

export const ST_D_InputInsurance = () => {
  const [isFocusEnsurance, setIsFocusEnsurance] = useState(false)
  const [isHoveredEnsurance, setIsHoveredEnsurance] = useState(false)
  const inputRefEnsurance = useRef()
  const [keywordInput, setKeywordInput] = useState("")




  const { insuranceContext, setInsuranceContext } = useORG_InputCtx()

  useEffect(() => {
    setKeywordInput(insuranceContext)
  }, [insuranceContext])

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

      <ST_D_DropdownSuggestionWrapper>
        <ST_D_DropdownSuggestionComponent
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
      </ST_D_DropdownSuggestionWrapper>
    </div>
  )
}
