import { useRef, useState } from "react"

export const Editable_3 = ({ theFocus }) => {
  const [inputValue, setInputValue] = useState("")

  const inputRef = useRef(null)

  const handleInputChange = (event) => {
    setInputValue(event.target.innerText)
  }

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      if (inputRef.current) {
        const selectionStart = inputRef.current.selectionStart

        const inputText =
          inputValue.slice(0, selectionStart) +
          " " +
          inputValue.slice(selectionStart)

        setInputValue(inputText)

        const range = document.createRange()

        range.setStart(inputRef.current.childNodes[selectionStart], 1)

        range.setEnd(inputRef.current.childNodes[selectionStart], 1)

        const selection = window.getSelection()

        selection.removeAllRanges()

        selection.addRange(range)

        event.preventDefault()
      }
    }
  }

  return (
    <div>
      <h2>Sign In</h2>

      <div
        ref={inputRef}
        contentEditable
        suppressContentEditableWarning
        spellCheck="false"
        onInput={handleInputChange}
        // onKeyDown={handleKeyDown}
        // onFocus={theFocus}
      >
        {inputValue.split(" ").map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
    </div>
  )
}
