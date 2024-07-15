import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  LI_2Wrapper,
  ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS,
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
let theIndexTitle = 0
export const ORG_D_SearchComponent_LabelInput_Dropdown2 = ({
  isFocus,
  isHovered,
  handleIsHovered,
  diagnosisSearchedByUser,
  setDiagnosisSearchedByUser,
  setDiagnosisCategory,
  handleHaveAtLeastOneMatchState,
  suggestionKeywords,
  inputRefFocus,
  refLabel,
  handleUserClickOnSuggestion,
  handleCloseDropdown,
  handleIsFocus,
}: any) => {
  // const handleSelecOption = (e) => {}

  const handleSelecOption = ({ e, whatToUpdate }) => {
    // e.preventDefault()
    setDiagnosisSearchedByUser(whatToUpdate)
    inputRefFocus.current.focus()
    handleUserClickOnSuggestion(true)

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

  /*
  const listToRender = Object.entries(suggestionKeywords)
    .map(([key, values]) => {
      return [key, ...(values as Array<string>)]
    })
    .flat()
  */

  const entries = Object.entries(suggestionKeywords)
  const listToRender99 = ["0"]

  for (let i = 0; i < entries.length; i++) {
    const [, value] = entries[i]
    const currentLength = (value as Array<string>).length + 1
    const previousValue = parseInt(listToRender99[listToRender99.length - 1])
    listToRender99.push((previousValue + currentLength).toString())
  }

  const listToRender3 = Object.entries(suggestionKeywords).flat(Infinity)

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
            {listToRender3.map((x, indexData) => {
              const theReactNode = x as ReactNode
              const {
                isMatch,
                highlightWord,
                leftSideOfWord,
                rightSideOfWord,
              } = formatForMatch({
                diagnosisSearchedByUser,
                toCheck: x as string,
              })

              const { currentFocus: focus, setCurrentFocus } = useRoveFocus(13)

              const shouldFocus = focus === indexData

              const theRef = useRef<HTMLLIElement>(null)

              useEffect(() => {
                if (shouldFocus) {
                  // Move element into view when it is focused
                  theRef?.current?.focus()
                }
              }, [shouldFocus])

              /* 
              !FH0
              Make the dropdown close when user click outside the input or the dropdown
              */
              useEffect(() => {
                const closeDropdownKeyboard = (e) => {
                  if (isFocus && e.code === "Tab" && !e.shiftKey) {
                    handleIsFocus(false)
                  }

                  if (
                    inputRefFocus?.current?.contains(document.activeElement) &&
                    isFocus &&
                    e.shiftKey &&
                    e.code === "Tab"
                  ) {
                    handleIsFocus(false)
                  }
                }

                /*
                const closeDropdownClick = (event: MouseEvent) => {
                  if (
                    inputRefFocus.current &&
                    !inputRefFocus.current.contains(event.target as Node) &&
                    theRef.current &&
                    !theRef.current.contains(event.target as Node)
                  ) {
                    handleIsFocus(false)
                  } else {
                    // console.log("click something!", event)
                  }
                }
                */

                document.addEventListener("keydown", closeDropdownKeyboard)
                // document.addEventListener("click", closeDropdownClick)

                return () => {
                  document.removeEventListener("keydown", closeDropdownKeyboard)
                  // document.removeEventListener("click", closeDropdownClick)
                }
              }, [])

              for (const y in listToRender99) {
                if (indexData === Number(listToRender99[y])) {
                  useEffect(() => {
                    /*
                    const closeDropdownKeyboard = (e) => {
                      if (isFocus && e.code === "Tab" && !e.shiftKey) {
                        handleIsFocus(false)
                      }

                      if (
                        inputRefFocus?.current?.contains(
                          document.activeElement
                        ) &&
                        isFocus &&
                        e.shiftKey &&
                        e.code === "Tab"
                      ) {
                        handleIsFocus(false)
                      }
                    }
                    */

                    const closeDropdownClick = (event: MouseEvent) => {
                      console.log(
                        "Ref here🚝",
                        inputRefFocus?.current,
                        refLabel,
                        event
                      )

                      if (
                        inputRefFocus.current &&
                        !inputRefFocus.current.contains(event.target as Node) &&
                        theRef.current &&
                        !theRef.current.contains(event.target as Node) &&
                        refLabel.current &&
                        !refLabel.current.contains(event.target as Node)
                      ) {
                        // handleSelecOption({
                        //   e: event,
                        //   whatToUpdate: "ADHD",
                        // })
                        handleIsFocus(false)
                        // console.log("🟥 SHOULD CLOSE!")
                      }
                    }

                    // document.addEventListener("keydown", closeDropdownKeyboard)
                    document.addEventListener("click", closeDropdownClick)

                    return () => {
                      // document.removeEventListener(
                      //   "keydown",
                      //   closeDropdownKeyboard
                      // )
                      document.removeEventListener("click", closeDropdownClick)
                    }
                  }, [])

                  return (
                    <Fragment key={`${x}_${indexData}`}>
                      <ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS
                        isTitle={Number(y) > 0}
                        onClick={(e) => {
                          handleSelecOption({ e, whatToUpdate: x })
                          // handleIsFocus(false)
                        }}
                        onKeyDown={(e) => {
                          if (e.code === "Enter") {
                            handleSelecOption({ e, whatToUpdate: x })
                          }
                        }}
                        data-content={
                          highlightWord
                            ? `${leftSideOfWord}${highlightWord}${rightSideOfWord}`
                            : x
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
                          theReactNode
                        )}
                      </ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS>
                      <ORG_D_SearchComponent_LabelInput_Dropdown_SYMPTOMS>
                        <P>In symptoms ({theReactNode as ReactNode})</P>
                      </ORG_D_SearchComponent_LabelInput_Dropdown_SYMPTOMS>
                    </Fragment>
                  )
                }
              }

              return (
                <Fragment>
                  {isMatch && (
                    <LI_2Wrapper
                      onClick={(e) => {
                        handleSelecOption({ e, whatToUpdate: x })
                      }}
                      onKeyDown={(e) => {
                        if (e.code === "Enter") {
                          handleSelecOption({ e, whatToUpdate: x })
                        }
                      }}
                      data-content={
                        highlightWord
                          ? `${leftSideOfWord}${highlightWord}${rightSideOfWord}`
                          : theReactNode
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
                        theReactNode
                      )}
                    </LI_2Wrapper>
                  )}
                </Fragment>
              )
            })}
          </ul>
        </div>
      )}
    </ORG_D_SearchComponent_LabelInput_DropdownWrapper>
  )
}
