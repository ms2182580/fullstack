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

const Item = ({ character, focus, index, setFocus, handleNameChange }) => {
  console.log("handleNameChange:", handleNameChange)

  const ref = useRef(null)

  useEffect(() => {
    if (focus) {
      // Move element into view when it is focused
      ref.current.focus()
    }
  }, [focus])

  const handleSelect = useCallback(() => {
    // Setting focus to that element when it is selected
    setFocus(index)
  }, [character, index, setFocus])

  /* 
  !FH0
  
  Keep creating this with all the accessible good practices
  - https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#examples
  - https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/
  */
  return (
    <li
      tabIndex={focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={(e) => {
        handleSelect()
        handleNameChange({ event: e, dataToAdd: character })
      }}
    >
      {character}
    </li>
  )
}

const characters = ["first", "second", "third"]

export const List_Example = ({
  listToDisplay = characters,
  handleNameChange,
}) => {
  const [focus, setFocus] = useRoveFocus(listToDisplay.length)

  return (
    <ul>
      {listToDisplay.map((character, index) => (
        <Item
          key={character}
          setFocus={setFocus}
          index={index}
          focus={focus === index}
          character={character}
          handleNameChange={handleNameChange}
        />
      ))}
    </ul>
  )
}
