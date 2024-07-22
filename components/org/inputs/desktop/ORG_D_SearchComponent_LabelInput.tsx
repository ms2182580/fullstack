import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  suggestionKeywords,
  suggestionKeywords2,
} from "@/utils/org/typed-flow/suggestionKeywords"
import { useTypedFlowLogicSelection } from "@/utils/org/typed-flow/useTypedFlowLogicSelection"
import { useEffect, useRef, useState } from "react"
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
}: ORG_D_SearchComponent_LabelInput_Type &
  TypedFlowProps & { index: number }) => {
  let TheIcon = icon

  const {
    handleIsFocus,
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
    handleFocusInputRef,
  } = useTypedFlowLogicSelection({
    suggestionKeywords,
    setDiagnosisChoosed,
    setInputTypesByUser,
    pushToTypedFlow,
  })

  const refLabel = useRef(null)

  /* 
    !FH1
    * This code of "listToRender" state and his useEffect should be look at it to work when the data come from the API.
    * The expected behavior should be the same of the input search of youtube, this mean:
    * 1. The list to render should be the data from the API
    * 2. The list should be usable with arrow keys, down and up. When it reach the final bottom list suggestion, and press arrow down it should return to the input
    * 3. When the focus is on the suggestions, it should change the text on the input and lead the caret of the input at the end of the text
    * 4. The user should have, all the time, the caret of the input at the end of the text, beeng possible to press left arrow, right arrow or just type in order to change the text
  
  */
  const [listToRender, setListToRender] = useState<null | {}>(null)

  useEffect(() => {
    const entries = Object.entries(suggestionKeywords2)
    const indexToSubtitle = ["0"]

    for (let i = 0; i < entries.length; i++) {
      const [, value] = entries[i]
      const currentLength = (value as Array<string>).length + 1
      const previousValue = parseInt(
        indexToSubtitle[indexToSubtitle.length - 1]
      )
      indexToSubtitle.push((previousValue + currentLength).toString())
    }

    const listToRender = Object.entries(suggestionKeywords2).flat(Infinity)

    setListToRender(() => ({
      symptoms: indexToSubtitle,
      allData: listToRender,
    }))
  }, [suggestionKeywords2])

  return (
    <ORG_D_SearchComponent_LabelInputWrapper
      shouldDisplayDropdown={shouldDisplayDropdown}
    >
      <P ref={refLabel} onClick={() => handleFocusInputRef()}>
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
              }}
              onBlur={() => {
                handleUserPressEnter(false)
              }}
              onMouseDown={() => {
                handleIsHovered(true)
                handleIsFocus(true)
                handleFocusInputRef()
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
              inputRefFocus={inputRef}
              refLabel={refLabel}
              handleUserClickOnSuggestion={handleUserClickOnSuggestion}
              handleIsFocus={handleIsFocus}
              listToRender={listToRender}
              handleFocusInputRef={handleFocusInputRef}
            />
          </>
        )}
      </div>
    </ORG_D_SearchComponent_LabelInputWrapper>
  )
}
