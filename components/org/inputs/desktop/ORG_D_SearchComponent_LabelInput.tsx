import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  suggestionKeywords,
  suggestionKeywords2,
} from "@/utils/org/typed-flow/suggestionKeywords"
import { useTypedFlowLogicSelection } from "@/utils/org/typed-flow/useTypedFlowLogicSelection"
import { useRef } from "react"
import { ORG_D_SearchComponent_LabelInput_Dropdown2 } from "./ORG_D_SearchComponent_LabelInput_Dropdown2"
import { ORG_D_SearchComponent_LabelInputWrapper } from "./styles/ORG_D_SearchComponent_LabelInputWrapper"

export type ORG_D_SearchComponent_LabelInput_Type = {
  label: string
  placeholder: string
  icon: any
  dropdown: string[]
  shouldDisplayDropdown?: boolean
}

type TypedFlowProps = {
  setDiagnosisChoosed: (e: {}) => void
  setInputTypesByUser: (e: string) => void
  pushToTypedFlow: () => void
}

export const ORG_D_SearchComponent_LabelInput = ({
  label = "label title",
  placeholder = "placeholder text",
  icon,
  dropdown = ["first", "second"],
  shouldDisplayDropdown = false,
  setDiagnosisChoosed,
  setInputTypesByUser,
  pushToTypedFlow,
  index,
}: ORG_D_SearchComponent_LabelInput_Type &
  TypedFlowProps & { index: number }) => {
  let TheIcon = icon

  const {
    handleIsFocus,
    handleCloseDropdown,
    handleUserPressEnter,
    handleSetDiagnosis,
    handleWhichMatch,
    diagnosisSearchedByUser,
    inputRef,
    isFocus,
    isHovered,
    handleIsHovered,
    setDiagnosisSearchedByUser,
    setDiagnosisCategory,
    handleHaveAtLeastOneMatchState,
    handleUserClickOnSuggestion,
  } = useTypedFlowLogicSelection({
    suggestionKeywords,
    setDiagnosisChoosed,
    setInputTypesByUser,
    pushToTypedFlow,
  })

  const refLabel = useRef(null)

  /*
  useEffect(() => {
    console.log("isHovered, isFocus:", isHovered, isFocus)

    if ((isFocus || isHovered) && inputRef?.current !== null) {
      inputRef?.current.focus()
    }
  }, [isHovered, isFocus])
  */
  /*
useEffect(() => {
    const closeDropdownClick = (event: MouseEvent) => {
      console.log("Ref here🚝", inputRef?.current, refLabel)

      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        handleIsFocus(false)
      } else if (
        isFocus &&
        inputRef?.current == document.activeElement
        // isHovered
      ) {
        console.log("click something on INPUT✅!", event)
        // inputRefFocus?.current.focus()
      }
    }

    // document.addEventListener("keydown", closeDropdownKeyboard)
    document.addEventListener("mousedown", closeDropdownClick)

    return () => {
      // document.removeEventListener(
      //   "keydown",
      //   closeDropdownKeyboard
      // )
      document.removeEventListener("mousedown", closeDropdownClick)
    }
  }, [isFocus])
*/

  return (
    <ORG_D_SearchComponent_LabelInputWrapper
      shouldDisplayDropdown={shouldDisplayDropdown}
    >
      <P
        ref={refLabel}
        onClick={() => {
          // handleIsFocus(true)
          // handleIsHovered(true)
          if (inputRef?.current) {
            inputRef?.current.focus()
          }
        }}
      >
        {label}
      </P>

      <div>
        <TheIcon />

        {!shouldDisplayDropdown ? (
          <input type="text" placeholder={placeholder} />
        ) : (
          <>
            <input
              type="text"
              placeholder={placeholder}
              onFocus={() => {
                handleIsFocus(true)
                // inputRef?.current.focus()
              }}
              onBlur={() => {
                console.log("isFocus:", isFocus)
                if (!isFocus) {
                  // handleCloseDropdown()
                  // handleIsFocus(false)
                }
                handleUserPressEnter(false)
              }}
              onMouseDown={() => {
                handleIsHovered(true)
                handleIsFocus(true)
                if (inputRef?.current) {
                  inputRef?.current.focus()
                }
              }}
              onChange={(e) => {
                handleSetDiagnosis(e)
                handleWhichMatch(e)
              }}
              onKeyDown={(e) => handleUserPressEnter(true, e)}
              value={diagnosisSearchedByUser}
              ref={inputRef}
            />

            <ORG_D_SearchComponent_LabelInput_Dropdown2
              isFocus={isFocus}
              isHovered={isHovered}
              handleIsHovered={handleIsHovered}
              diagnosisSearchedByUser={diagnosisSearchedByUser}
              setDiagnosisSearchedByUser={setDiagnosisSearchedByUser}
              setDiagnosisCategory={setDiagnosisCategory}
              handleHaveAtLeastOneMatchState={handleHaveAtLeastOneMatchState}
              suggestionKeywords={suggestionKeywords2}
              inputRefFocus={inputRef}
              refLabel={refLabel}
              handleUserClickOnSuggestion={handleUserClickOnSuggestion}
              handleCloseDropdown={handleCloseDropdown}
              handleIsFocus={handleIsFocus}
            />
          </>
        )}
      </div>
    </ORG_D_SearchComponent_LabelInputWrapper>
  )
}
