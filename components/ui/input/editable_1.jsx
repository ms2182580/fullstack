import { useRef } from "react"

export const StyledInput = () => {
  const inputRef = useRef(null)

  const handleInput = () => {
    const text = inputRef.current.innerText
    const words = text.split(" ")

    inputRef.current.innerHTML = "" // Clear the input

    words.forEach((word, index) => {
      const span = document.createElement("span")
      span.textContent = word
      span.style.background = "red"
      span.style.padding = "5px"
      inputRef.current.appendChild(span)

      if (index < words.length - 1) {
        const space = document.createTextNode(" ")
        inputRef.current.appendChild(space)
      }
    })
  }

  return (
    <div
      ref={inputRef}
      contentEditable
      style={{ border: "1px solid #ccc", padding: "5px" }}
      onInput={handleInput}
    />
  )
}
