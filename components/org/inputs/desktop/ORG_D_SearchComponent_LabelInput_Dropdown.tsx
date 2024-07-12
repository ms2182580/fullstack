import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Fragment, useCallback, useEffect, useRef, useState } from "react"
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

function useRoveFocus(size) {
  const [currentFocus, setCurrentFocus] = useState(0)

  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "ArrowDown") {
        /* Prevent move the whole view of the user on the page */
        e.preventDefault()
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1)
      }

      if (e.code === "ArrowUp") {
        /* Prevent move the whole view of the user on the page */
        e.preventDefault()
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1)
      }
    },
    [size, currentFocus, setCurrentFocus]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return { currentFocus, setCurrentFocus }
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
    console.log("e 🟩:", e)
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
          <ul>
            {suggestionKeywords.map(({ diagnosis, symptoms }, indexData) => {
              /*
              console.log("indexData:", indexData)
              */
              const {
                isMatch,
                highlightWord,
                leftSideOfWord,
                rightSideOfWord,
              } = formatForMatch({
                diagnosisSearchedByUser,
                toCheck: diagnosis,
              })

              const { currentFocus: focus } = useRoveFocus(13)
              // console.log("focus:", focus, setFocus)

              const shouldFocus = focus === indexData
              console.log("shouldFocus:", shouldFocus, focus, indexData)
              /* console.log("shouldFocus:", shouldFocus, indexData, focus)
              console.log() */

              const theRef = useRef<HTMLLIElement>(null)
              // console.log("theRef:", theRef)

              useEffect(() => {
                if (shouldFocus) {
                  // Move element into view when it is focused
                  theRef?.current?.focus()
                }
              }, [shouldFocus])

              return (
                <Fragment key={`${diagnosis}_${indexData}`}>
                  {isMatch && (
                    <ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS
                      onClick={(e) => {
                        setDiagnosisSearchedByUser(diagnosis)
                        inputRefFocus.current.focus()
                        handleUserClickOnSuggestion(true)
                        handleSelecOption(e)
                      }}
                      onKeyDown={(e) => {
                        if (e.code === "Enter") {
                          e.preventDefault()
                          setDiagnosisSearchedByUser(diagnosis)
                          inputRefFocus.current.focus()
                          handleUserClickOnSuggestion(true)
                          handleSelecOption(e)
                        }
                      }}
                      data-content={
                        highlightWord
                          ? `${leftSideOfWord}${highlightWord}${rightSideOfWord}`
                          : diagnosis
                      }
                      data-diagnosis={CLASSNAME_ISDIAGNOSIS["DIAGNOSIS"]}
                      // tabIndex={0}
                      tabIndex={shouldFocus ? 0 : -1}
                      ref={theRef}
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
                    <ul>
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

                        const { currentFocus: focus2 } = useRoveFocus(
                          symptoms.length
                        )
                        // console.log("focus2:", focus2, setFocus)

                        const shouldFocus2 = focus2 === indexSymptoms
                        /* console.log("shouldFocus2:", shouldFocus2, indexData, focus)
                        console.log() */

                        const theRef2 = useRef<HTMLLIElement>(null)
                        // console.log("theRef:", theRef)

                        useEffect(() => {
                          if (shouldFocus2) {
                            // Move element into view when it is focused
                            theRef2?.current?.focus()
                          }
                        }, [shouldFocus2])

                        return (
                          <Fragment key={`${suggestion}_${indexSymptoms}`}>
                            {isMatch && (
                              <li
                                onClick={(e) => {
                                  setDiagnosisSearchedByUser(suggestion)
                                  inputRefFocus.current.focus()
                                  handleUserClickOnSuggestion(true)
                                  handleSelecOption(e)
                                }}
                                data-content={
                                  highlightWord
                                    ? `${leftSideOfWord}${highlightWord}${rightSideOfWord}`
                                    : suggestion
                                }
                                tabIndex={shouldFocus ? 0 : -1}
                                ref={theRef}
                                // tabIndex={0}
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
