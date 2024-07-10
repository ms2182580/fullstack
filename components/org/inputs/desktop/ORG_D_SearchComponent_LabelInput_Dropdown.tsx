import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Fragment } from "react"
import { ORG_D_SearchComponent_LabelInput_DropdownWrapper } from "./styles/ORG_D_SearchComponent_LabelInput_DropdownWrapper"

export const enum CLASSNAME_ISDIAGNOSIS {
  DIAGNOSIS = "DIAGNOSIS",
  DIAGNOSIS_SPAN = "DIAGNOSIS_SPAN",
  BOLD = "BOLD",
  IN_SYMPTOMS = "IN_SYMPTOMS",
  SUGGESTION = "SUGGESTION",
  SUGGESTION_LI = "SUGGESTION_LI",
}

export const ORG_D_SearchComponent_LabelInput_Dropdown = ({
  isFocus,
  handleIsHovered,
  diagnosisSearchedByUser,
  setDiagnosisSearchedByUser,
  // setInputTypesByUser,
  setDiagnosisCategory,
  // setHaveAtLeastOneMatchState,
  handleHaveAtLeastOneMatchState,
  suggestionKeywords,
  inputRefFocus,
  handleUserClickOnSuggestion,
}: any) => {
  const handleSelecOption = (e) => {
    const isDiagnosis = e.target.className === "DIAGNOSIS_SPAN"
    if (isDiagnosis) {
      setDiagnosisCategory(() => ({
        diagnosis: [e.target.textContent],
        symptoms: [],
      }))
      handleHaveAtLeastOneMatchState({ updateTo: true })
    }
    if (!isDiagnosis) {
      setDiagnosisCategory(() => ({
        diagnosis: [],
        symptoms: [e.target.textContent],
      }))
      handleHaveAtLeastOneMatchState({ updateTo: true })
    }
  }

  return (
    <ORG_D_SearchComponent_LabelInput_DropdownWrapper>
      {isFocus && (
        <div
          onMouseEnter={() => {
            handleIsHovered(true)
          }}
          onMouseLeave={() => {
            handleIsHovered(false)
          }}
          onClick={() => {
            inputRefFocus.current.focus()
          }}
        >
          <div className="DIAGNOSIS" onClick={handleSelecOption}>
            {suggestionKeywords.map(({ diagnosis, symptoms }, indexData) => {
              const isMatchDiagnosis =
                diagnosis
                  .toLowerCase()
                  .indexOf(diagnosisSearchedByUser.toLowerCase()) > -1

              let highlightWordDiagnosis
              let leftSideOfWordDiagnosis
              let rightSideOfWordDiagnosis

              let theRegex = new RegExp(
                diagnosisSearchedByUser.replace(
                  /[-\/\\^$*+?.()|[\]{}]/g,
                  "\\$&"
                ),
                "gi"
              )
              let matchHighlight = diagnosis.match(theRegex)
              // console.log("matchHighlight:", matchHighlight)

              if (
                isMatchDiagnosis &&
                matchHighlight[0] !== "" &&
                matchHighlight !== null
              ) {
                highlightWordDiagnosis = matchHighlight[0]

                let indexOfWord = diagnosis.indexOf(highlightWordDiagnosis)

                leftSideOfWordDiagnosis = diagnosis.slice(0, indexOfWord)

                rightSideOfWordDiagnosis = diagnosis.slice(
                  indexOfWord + highlightWordDiagnosis.length,
                  diagnosis.length
                )
              }

              let theKey = `${diagnosis}_${indexData}`
              return (
                <Fragment key={theKey}>
                  {isMatchDiagnosis && (
                    <>
                      <li
                        onClick={() => {
                          setDiagnosisSearchedByUser(diagnosis)
                          // setInputTypesByUser(diagnosis)
                          inputRefFocus.current.focus()
                          handleUserClickOnSuggestion(true)
                        }}
                        data-content={
                          highlightWordDiagnosis
                            ? `${leftSideOfWordDiagnosis}${highlightWordDiagnosis}${rightSideOfWordDiagnosis}`
                            : diagnosis
                        }
                        className="DIAGNOSIS_SPAN"
                      >
                        {highlightWordDiagnosis ? (
                          <>
                            {leftSideOfWordDiagnosis}
                            <span className="BOLD">
                              {highlightWordDiagnosis}
                            </span>
                            {rightSideOfWordDiagnosis}
                          </>
                        ) : (
                          diagnosis
                        )}
                      </li>
                    </>
                  )}
                  <P className="IN_SYMPTOMS">In symptoms ({diagnosis})</P>
                  <ul className="SUGGESTION" onClick={handleSelecOption}>
                    {symptoms.map((suggestion, indexSymptoms) => {
                      const isMatch =
                        suggestion
                          .toLowerCase()
                          .indexOf(diagnosisSearchedByUser.toLowerCase()) > -1

                      let highlightWord
                      let leftSideOfWord
                      let rightSideOfWord

                      let theRegex = new RegExp(
                        diagnosisSearchedByUser.replace(
                          /[-\/\\^$*+?.()|[\]{}]/g,
                          "\\$&"
                        ),
                        "gi"
                      )

                      let isThis = `${leftSideOfWord}${highlightWord}${rightSideOfWord}`

                      let matchHighlightSuggestion = suggestion.match(theRegex)

                      if (
                        isMatch &&
                        matchHighlightSuggestion[0] !== "" &&
                        matchHighlightSuggestion !== null
                      ) {
                        highlightWord = matchHighlightSuggestion[0]

                        let indexOfWord = suggestion.indexOf(highlightWord)

                        leftSideOfWord = suggestion.slice(0, indexOfWord)

                        rightSideOfWord = suggestion.slice(
                          indexOfWord + highlightWord.length,
                          suggestion.length
                        )
                      }
                      return (
                        <Fragment key={indexSymptoms}>
                          {isMatch && (
                            <>
                              <li
                                onClick={() => {
                                  setDiagnosisSearchedByUser(suggestion)
                                  // setInputTypesByUser(suggestion)

                                  inputRefFocus.current.focus()
                                  handleUserClickOnSuggestion(true)
                                }}
                                data-content={
                                  highlightWord
                                    ? `${leftSideOfWord}${highlightWord}${rightSideOfWord}`
                                    : suggestion
                                }
                                className="SUGGESTION_LI"
                              >
                                {highlightWord ? (
                                  <>
                                    {leftSideOfWord}
                                    <span className="BOLD">
                                      {highlightWord}
                                    </span>
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
    </ORG_D_SearchComponent_LabelInput_DropdownWrapper>
  )
}
