import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Fragment } from "react"
import {
  ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS,
  ORG_D_SearchComponent_LabelInput_Dropdown_LI,
  ORG_D_SearchComponent_LabelInput_Dropdown_SYMPTOMS,
  ORG_D_SearchComponent_LabelInput_DropdownWrapper,
} from "./styles/ORG_D_SearchComponent_LabelInput_DropdownWrapper"

export const enum CLASSNAME_ISDIAGNOSIS {
  DIAGNOSIS = "DIAGNOSIS",
}

export const ORG_D_SearchComponent_LabelInput_Dropdown = ({
  isFocus,
  handleIsHovered,
  diagnosisSearchedByUser,
  setDiagnosisSearchedByUser,
  setDiagnosisCategory,
  handleHaveAtLeastOneMatchState,
  suggestionKeywords,
  inputRefFocus,
  handleUserClickOnSuggestion,
}: any) => {
  const handleSelecOption = (e) => {
    const isDiagnosis =
      e.target.attributes?.["data-diagnosis"]?.value ===
      CLASSNAME_ISDIAGNOSIS["DIAGNOSIS"]

    if (isDiagnosis) {
      setDiagnosisCategory(() => ({
        diagnosis: [e.target.textContent],
        symptoms: [],
      }))
      handleHaveAtLeastOneMatchState(true)
    }
    if (!isDiagnosis) {
      setDiagnosisCategory(() => ({
        diagnosis: [],
        symptoms: [e.target.textContent],
      }))
      handleHaveAtLeastOneMatchState(true)
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
          <ul onClick={handleSelecOption}>
            {suggestionKeywords.map(({ diagnosis, symptoms }, indexData) => {
              const isMatchDiagnosis =
                diagnosis
                  .toLowerCase()
                  .indexOf(diagnosisSearchedByUser.toLowerCase()) > -1

              let highlightWordDiagnosis
              let leftSideOfWordDiagnosis
              let rightSideOfWordDiagnosis

              const theRegex = new RegExp(
                diagnosisSearchedByUser.replace(
                  /[-\/\\^$*+?.()|[\]{}]/g,
                  "\\$&"
                ),
                "gi"
              )
              const matchHighlight = diagnosis.match(theRegex)

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
                    <ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS
                      onClick={() => {
                        setDiagnosisSearchedByUser(diagnosis)
                        inputRefFocus.current.focus()
                        handleUserClickOnSuggestion(true)
                      }}
                      data-content={
                        highlightWordDiagnosis
                          ? `${leftSideOfWordDiagnosis}${highlightWordDiagnosis}${rightSideOfWordDiagnosis}`
                          : diagnosis
                      }
                      data-diagnosis={CLASSNAME_ISDIAGNOSIS["DIAGNOSIS"]}
                      className="DIAGNOSIS"
                    >
                      {highlightWordDiagnosis ? (
                        <>
                          {leftSideOfWordDiagnosis}
                          <strong>{highlightWordDiagnosis}</strong>
                          {rightSideOfWordDiagnosis}
                        </>
                      ) : (
                        diagnosis
                      )}
                    </ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS>
                  )}
                  <ORG_D_SearchComponent_LabelInput_Dropdown_SYMPTOMS>
                    <P>In symptoms ({diagnosis})</P>
                  </ORG_D_SearchComponent_LabelInput_Dropdown_SYMPTOMS>
                  <ORG_D_SearchComponent_LabelInput_Dropdown_LI>
                    <ul onClick={handleSelecOption}>
                      {symptoms.map((suggestion, indexSymptoms) => {
                        const isMatch =
                          suggestion
                            .toLowerCase()
                            .indexOf(diagnosisSearchedByUser.toLowerCase()) > -1
                        let highlightWord
                        let leftSideOfWord
                        let rightSideOfWord
                        const theRegex = new RegExp(
                          diagnosisSearchedByUser.replace(
                            /[-\/\^$*+?.()|[\]{}]/g,
                            "$&"
                          ),
                          "gi"
                        )
                        const matchHighlightSuggestion =
                          suggestion.match(theRegex)

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
                              <li
                                onClick={() => {
                                  setDiagnosisSearchedByUser(suggestion)
                                  inputRefFocus.current.focus()
                                  handleUserClickOnSuggestion(true)
                                }}
                                data-content={
                                  highlightWord
                                    ? `${leftSideOfWord}${highlightWord}${rightSideOfWord}`
                                    : suggestion
                                }
                              >
                                {highlightWord ? (
                                  <>
                                    {leftSideOfWord}
                                    <strong>{highlightWord}</strong>
                                    {rightSideOfWord}
                                  </>
                                ) : (
                                  suggestion
                                )}
                              </li>
                            )}
                          </Fragment>
                        )
                      })}
                    </ul>
                  </ORG_D_SearchComponent_LabelInput_Dropdown_LI>
                </Fragment>
              )
            })}
          </ul>
        </div>
      )}
    </ORG_D_SearchComponent_LabelInput_DropdownWrapper>
  )
}
