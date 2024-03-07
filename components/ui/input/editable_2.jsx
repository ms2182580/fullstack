import { useRef } from "react"

export const Editable_2 = ({ theFocus }) => {
  const inputRef = useRef(null)

  const handleInput = (e) => {
    const text = inputRef.current.innerText
    const words = text.split(" ")

    inputRef.current.innerHTML = "" // Clear the input

    // words.forEach((word, index) => {
    //   const span = document.createElement("span")
    //   span.textContent = word
    //   span.style.background = "red"
    //   span.style.padding = "5px"
    //   inputRef.current.appendChild(span)

    //   if (index < words.length - 1) {
    //     const space = document.createTextNode(" ")
    //     inputRef.current.appendChild(space)
    //   }
    // })

    if (e.code === "Space") {
      const range = document.createRange()
      const sel = window.getSelection()
      range.setStart(inputRef.current, 1)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    }

    // Move the cursor to the end of the input
  }

  return (
    <div
      ref={inputRef}
      contentEditable
      style={{ border: "1px solid #ccc", padding: "5px" }}
      // onInput={handleInput}
      onKeyDown={handleInput}
      onFocus={theFocus}
    ></div>
  )
}
