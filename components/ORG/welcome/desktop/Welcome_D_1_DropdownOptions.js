import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts.js"
import { Fragment } from "react"
import { CLASSNAME_ISDIAGNOSIS } from "./Welcome_D_1_DropdownOptions_TYPE.ts"
import { Welcome_D_1_DropdownOptionsWrapper } from "./styles/Welcome_D_1_DropdownOptionsWrapper.js"

export const Welcome_D_1_DropdownOptions = ({
  isFocus,
  setIsHovered,
  diagnosisSearchedByUser,
  setDiagnosisSearchedByUser,
  setInputTypesByUser,
  setDiagnosisCategory,
  setHaveAtLeastOneMatchState,
  suggestionKeywords,
  inputRefFocus,
}) => {
  let handleSelecOption = (e) => {
    let isDiagnosis = e.target.className === CLASSNAME_ISDIAGNOSIS.DIAGNOSIS_SPAN
    if (isDiagnosis) {
      setDiagnosisCategory(() => ({
        diagnosis: [e.target.textContent],
        symptoms: [],
      }))
      setHaveAtLeastOneMatchState(true)
    }
    if (!isDiagnosis) {
      setDiagnosisCategory(() => ({
        diagnosis: [],
        symptoms: [e.target.textContent],
      }))
      setHaveAtLeastOneMatchState(true)
    }
  }

  return (
    <Welcome_D_1_DropdownOptionsWrapper>
      {isFocus && (
        <div
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
          onClick={(e) => {
            inputRefFocus.current.focus()
          }}>
          <div
            className={CLASSNAME_ISDIAGNOSIS.DIAGNOSIS}
            onClick={handleSelecOption}>
            {suggestionKeywords.map((suggestionData, indexData) => {
              const isMatchDiagnosis = suggestionData.diagnosis.toLowerCase().indexOf(diagnosisSearchedByUser.toLowerCase()) > -1

              let highlightWordDiagnosis
              let leftSideOfWordDiagnosis
              let rightSideOfWordDiagnosis

              let theRegex = new RegExp(diagnosisSearchedByUser.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")
              let matchHighlight = suggestionData.diagnosis.match(theRegex)

              if (isMatchDiagnosis && matchHighlight[0] !== "" && matchHighlight !== null) {
                highlightWordDiagnosis = matchHighlight[0]

                let indexOfWord = suggestionData.diagnosis.indexOf(highlightWordDiagnosis)

                leftSideOfWordDiagnosis = suggestionData.diagnosis.slice(0, indexOfWord)

                rightSideOfWordDiagnosis = suggestionData.diagnosis.slice(indexOfWord + highlightWordDiagnosis.length, suggestionData.diagnosis.length)
              }
              return (
                <Fragment key={`${suggestionData.diagnosis}_${indexData}`}>
                  {isMatchDiagnosis && (
                    <>
                      <span
                        onClick={() => {
                          setDiagnosisSearchedByUser(suggestionData.diagnosis)
                          setInputTypesByUser(suggestionData.diagnosis)
                          inputRefFocus.current.focus()
                        }}
                        data-content={
                          highlightWordDiagnosis ? `${leftSideOfWordDiagnosis}${highlightWordDiagnosis}${rightSideOfWordDiagnosis}` : suggestionData.diagnosissuggestion
                        }
                        className={CLASSNAME_ISDIAGNOSIS.DIAGNOSIS_SPAN}>
                        {highlightWordDiagnosis ? (
                          <>
                            {leftSideOfWordDiagnosis}
                            <span className={CLASSNAME_ISDIAGNOSIS.BOLD}>{highlightWordDiagnosis}</span>
                            {rightSideOfWordDiagnosis}
                          </>
                        ) : (
                          suggestionData.diagnosis
                        )}
                      </span>
                    </>
                  )}
                  <P className={CLASSNAME_ISDIAGNOSIS.IN_SYMPTOMS}>In symptoms ({suggestionData.diagnosis})</P>
                  <ul
                    className={CLASSNAME_ISDIAGNOSIS.SUGGESTION}
                    onClick={handleSelecOption}>
                    {suggestionData.symptoms.map((suggestion, indexSymptoms) => {
                      const isMatch = suggestion.toLowerCase().indexOf(diagnosisSearchedByUser.toLowerCase()) > -1

                      let highlightWord
                      let leftSideOfWord
                      let rightSideOfWord

                      let theRegex = new RegExp(diagnosisSearchedByUser.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi")

                      let matchHighlightSuggestion = suggestion.match(theRegex)

                      if (isMatch && matchHighlightSuggestion[0] !== "" && matchHighlightSuggestion !== null) {
                        highlightWord = matchHighlightSuggestion[0]

                        let indexOfWord = suggestion.indexOf(highlightWord)

                        leftSideOfWord = suggestion.slice(0, indexOfWord)

                        rightSideOfWord = suggestion.slice(indexOfWord + highlightWord.length, suggestion.length)
                      }
                      return (
                        <Fragment key={indexSymptoms}>
                          {isMatch && (
                            <>
                              <li
                                onClick={() => {
                                  setDiagnosisSearchedByUser(suggestion)
                                  setInputTypesByUser(suggestion)

                                  inputRefFocus.current.focus()
                                }}
                                data-content={highlightWord ? `${leftSideOfWord}${highlightWord}${rightSideOfWord}` : suggestion}
                                className={CLASSNAME_ISDIAGNOSIS.SUGGESTION_LI}>
                                {highlightWord ? (
                                  <>
                                    {leftSideOfWord}
                                    <span className={CLASSNAME_ISDIAGNOSIS.BOLD}>{highlightWord}</span>
                                    {rightSideOfWord}
                                  </>
                                ) : (
                                  suggestion
                                )}
                              </li>
                            </>
                          )}
                        </Fragment>
                      )
                    })}
                  </ul>
                </Fragment>
              )
            })}
          </div>
        </div>
      )}
    </Welcome_D_1_DropdownOptionsWrapper>
  )
}
