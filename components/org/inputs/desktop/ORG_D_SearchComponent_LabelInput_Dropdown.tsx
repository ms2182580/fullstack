import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Fragment } from "react"
import {
  ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS,
  ORG_D_SearchComponent_LabelInput_Dropdown_LI,
  ORG_D_SearchComponent_LabelInput_Dropdown_SYMPTOMS,
  ORG_D_SearchComponent_LabelInput_DropdownWrapper,
} from "./styles/ORG_D_SearchComponent_LabelInput_DropdownWrapper"

const formatForMatch = ({
  diagnosisSearchedByUser,
  toCheck,
}: {
  diagnosisSearchedByUser: string
  toCheck: string
}) => {
  const format = diagnosisSearchedByUser.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  const theRegex = new RegExp(format, "gi")
  const matchHighlight = toCheck.match(theRegex)

  const isMatch =
    toCheck.toLowerCase().indexOf(diagnosisSearchedByUser.toLowerCase()) > -1

  let highlightWord
  let leftSideOfWord
  let rightSideOfWord

  if (isMatch && matchHighlight && matchHighlight?.[0] !== "") {
    highlightWord = matchHighlight[0]

    const indexOfWord = toCheck.indexOf(highlightWord)

    leftSideOfWord = toCheck.slice(0, indexOfWord)

    rightSideOfWord = toCheck.slice(
      indexOfWord + highlightWord.length,
      toCheck.length
    )
  }

  return {
    matchHighlight,
    isMatch,
    highlightWord,
    leftSideOfWord,
    rightSideOfWord,
  }
}

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
              const {
                isMatch,
                highlightWord,
                leftSideOfWord,
                rightSideOfWord,
              } = formatForMatch({
                diagnosisSearchedByUser,
                toCheck: diagnosis,
              })

              return (
                <Fragment key={`${diagnosis}_${indexData}`}>
                  {isMatch && (
                    <ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS
                      onClick={() => {
                        setDiagnosisSearchedByUser(diagnosis)
                        inputRefFocus.current.focus()
                        handleUserClickOnSuggestion(true)
                      }}
                      data-content={
                        highlightWord
                          ? `${leftSideOfWord}${highlightWord}${rightSideOfWord}`
                          : diagnosis
                      }
                      data-diagnosis={CLASSNAME_ISDIAGNOSIS["DIAGNOSIS"]}
                      className="DIAGNOSIS"
                    >
                      {highlightWord ? (
                        <>
                          {leftSideOfWord}
                          <strong>{highlightWord}</strong>
                          {rightSideOfWord}
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
                        const {
                          isMatch,
                          highlightWord,
                          leftSideOfWord,
                          rightSideOfWord,
                        } = formatForMatch({
                          diagnosisSearchedByUser,
                          toCheck: suggestion,
                        })

                        return (
                          <Fragment key={`${suggestion}_${indexSymptoms}`}>
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
