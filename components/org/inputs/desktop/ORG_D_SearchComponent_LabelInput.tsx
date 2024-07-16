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
  !FH0
  Clean the mess to achieve the same logic
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
              data-dropdown="dropdown"
              onFocus={() => {
                handleIsFocus(true)
                if (inputRef?.current) {
                  inputRef?.current.focus()
                }
              }}
              onBlur={() => {
                // console.log("isFocus:", isFocus)
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
