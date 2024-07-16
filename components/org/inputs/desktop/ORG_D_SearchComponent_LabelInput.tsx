import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  suggestionKeywords,
  suggestionKeywords2,
} from "@/utils/org/typed-flow/suggestionKeywords"
import { useTypedFlowLogicSelection } from "@/utils/org/typed-flow/useTypedFlowLogicSelection"
import { useEffect, useRef, useState } from "react"
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

  const [listToRender, setListToRender] = useState<null | {}>(null)

  useEffect(() => {
    const entries = Object.entries(suggestionKeywords2)
    const listToRender99 = ["0"]

    for (let i = 0; i < entries.length; i++) {
      const [, value] = entries[i]
      const currentLength = (value as Array<string>).length + 1
      const previousValue = parseInt(listToRender99[listToRender99.length - 1])
      listToRender99.push((previousValue + currentLength).toString())
    }

    const listToRender3 = Object.entries(suggestionKeywords2).flat(Infinity)

    setListToRender(() => ({
      symptoms: listToRender99,
      allData: listToRender3,
    }))
  }, [suggestionKeywords2])

  return (
    <ORG_D_SearchComponent_LabelInputWrapper
      shouldDisplayDropdown={shouldDisplayDropdown}
    >
      <P
        ref={refLabel}
        onClick={() => {
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
              listToRender={listToRender}
            />
          </>
        )}
      </div>
    </ORG_D_SearchComponent_LabelInputWrapper>
  )
}
