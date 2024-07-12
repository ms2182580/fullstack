import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { suggestionKeywords } from "@/utils/org/typed-flow/suggestionKeywords"
import { useTypedFlowLogicSelection } from "@/utils/org/typed-flow/useTypedFlowLogicSelection"
import { ORG_D_SearchComponent_LabelInput_Dropdown } from "./ORG_D_SearchComponent_LabelInput_Dropdown"
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
}: ORG_D_SearchComponent_LabelInput_Type & TypedFlowProps) => {
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

  return (
    <ORG_D_SearchComponent_LabelInputWrapper
      shouldDisplayDropdown={shouldDisplayDropdown}
    >
      <P>{label}</P>

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
              }}
              onBlur={() => {
                handleCloseDropdown()
                handleUserPressEnter(false)
              }}
              onChange={(e) => {
                handleSetDiagnosis(e)
                handleWhichMatch(e)
              }}
              onKeyDown={(e) => handleUserPressEnter(true, e)}
              value={diagnosisSearchedByUser}
              ref={inputRef}
            />
            <ORG_D_SearchComponent_LabelInput_Dropdown
              isFocus={isFocus}
              handleIsHovered={handleIsHovered}
              diagnosisSearchedByUser={diagnosisSearchedByUser}
              setDiagnosisSearchedByUser={setDiagnosisSearchedByUser}
              setDiagnosisCategory={setDiagnosisCategory}
              handleHaveAtLeastOneMatchState={handleHaveAtLeastOneMatchState}
              suggestionKeywords={suggestionKeywords}
              inputRefFocus={inputRef}
              handleUserClickOnSuggestion={handleUserClickOnSuggestion}
            />
          </>
        )}
      </div>
    </ORG_D_SearchComponent_LabelInputWrapper>
  )
}
