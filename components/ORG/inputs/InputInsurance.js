import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import InsuranceIcon from "../../../assets/Icons/InsuranceIcon.png"
import { useCheckUserWidth } from "../../../context/CheckUserWidth"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { useCheckMobile } from "../../../utils/useCheckMobile"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import DropdownSuggestionsInput from "./DropdownSuggestionsInput"
import { SuggestionsKeywordWrapper } from "./desktop/styles/STDesktop_SearchComponentWrapper"

export const InputInsurance = () => {
  const { isMobile } = useCheckUserWidth()

  const [isFocusEnsurance, setIsFocusEnsurance] = useState(false)
  const [isHoveredEnsurance, setIsHoveredEnsurance] = useState(false)
  const inputRefEnsurance = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  const suggestionsKeywords = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Tricare", "VSP"]

  const { ensuranceContext, setEnsuranceContext } = useORG_InputCtx()

  useEffect(() => {
    setKeywordInput(ensuranceContext)
  }, [ensuranceContext])

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
        setIsFocusEnsurance(false)
      }
    }

    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  const shouldTab = useShouldTab()

  return (
    <div>
      {isMobile === false ? (
        <P
          dark_gray
          bold>
          Insurance
        </P>
      ) : (
        <Caption
          dark_gray
          bold>
          {" "}
          Insurance{" "}
        </Caption>
      )}

      <span>
        <span>
          <Image
            src={InsuranceIcon}
            alt=""
          />
        </span>
        <input
          placeholder="VSP, Tricare, Cigna..."
          onFocus={!isTouchScreen ? () => setIsFocusEnsurance(true) : undefined}
          onBlur={
            !isTouchScreen
              ? () => {
                if (!isHoveredEnsurance) {
                  setIsFocusEnsurance(false)
                }
              }
              : undefined
          }
          onTouchStart={
            isTouchScreen
              ? (e) => {
                e.stopPropagation()
                setIsFocusEnsurance(true)
              }
              : undefined
          }
          value={keywordInput}
          onChange={(e) => {
            setKeywordInput(e.target.value)
            setEnsuranceContext(e.target.value)
          }}
          ref={inputRefEnsurance}
          tabIndex={shouldTab}

        />
      </span>

      <SuggestionsKeywordWrapper>
        <DropdownSuggestionsInput
          isFocus={isFocusEnsurance}
          setIsHover={setIsHoveredEnsurance}
          setIsFocus={setIsFocusEnsurance}
          suggestions={suggestionsKeywords}
          keywordClickByUser={keywordInput}
          setKeywordClickByUser={setKeywordInput}
          setKeywordClickByUserContext={setEnsuranceContext}
          inputRefFocus={inputRefEnsurance}
          isFirstOrSecondDropdown={true}
          theRef={keywordSecondLevelRef}
        />
      </SuggestionsKeywordWrapper>
    </div>
  )
}
