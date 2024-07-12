import { useCallback, useEffect, useRef, useState } from "react"

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

  return [currentFocus, setCurrentFocus]
}

export const ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS = ({
  setDiagnosisSearchedByUser,
  inputRefFocus,
  handleUserClickOnSuggestion,
  diagnosis,
  highlightWord,
  leftSideOfWord,
  rightSideOfWord,
  theClassName,
  suggestionKeywords,
  indexData,
}) => {
  const [focus, setFocus] = useRoveFocus(suggestionKeywords.length)

  const theRef = useRef<HTMLLIElement>(null)

  const shouldFocus = focus === indexData

  useEffect(() => {
    if (shouldFocus) {
      // Move element into view when it is focused
      theRef?.current?.focus()
    }
  }, [shouldFocus])

  return (
    <li
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
      data-diagnosis={theClassName}
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
    </li>
  )
}
