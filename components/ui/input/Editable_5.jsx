import { useRef } from "react"
import { Editable_5Wrapper } from "./styles/Editable_5Wrapper"

export const Editable_5 = ({ isFocus }) => {
  const refInputEditable = useRef(null)

  // const handleAddData = (event) => {
  //   if (event.code == "Enter") event.preventDefault()

  //   if (
  //     (event.code === "Space" || event.code == "Enter") &&
  //     refInputEditable?.current
  //   ) {
  //     const selection = window.getSelection()
  //     const range = selection.getRangeAt(0)
  //     const offset = range.startOffset

  //     const text = refInputEditable.current.innerText
  //     const words = text.split(" ")

  //     refInputEditable.current.innerHTML = ""

  //     words.forEach((word, index) => {
  //       const span = document.createElement("span")
  //       span.textContent = word
  //       span.style.background = "red"
  //       span.style.fontSize = "24px"
  //       refInputEditable.current.appendChild(span)

  //       if (index < words.length - 1) {
  //         const space = document.createTextNode(" ")
  //         refInputEditable.current.appendChild(space)
  //       }

  //       selection.removeAllRanges()
  //       selection.addRange(range)
  //     })
  //   }
  // }

  const handleAddData = (event) => {
    if (event.code == "Enter") event.preventDefault()

    if (event.code === "Space" && refInputEditable?.current) {
      // Step 1: Capture the cursor position

      const text = refInputEditable.current.innerText
      const words = text.split(" ")

      refInputEditable.current.innerHTML = ""

      words.forEach((word, index) => {
        const span = document.createElement("span")
        span.textContent = word
        span.style.background = "red"
        span.style.fontSize = "24px"
        refInputEditable.current.appendChild(span)

        if (index < words.length - 1) {
          const space = document.createTextNode("  ")
          refInputEditable.current.appendChild(space)
        }
      })

      // Step 2 & 3: Restore the cursor position
      // Assuming you want to place the cursor at the end of the newly added content
      const newRange = document.createRange()
      const newSelection = window.getSelection()
      newRange.setStart(
        refInputEditable.current,
        refInputEditable.current.childNodes.length
      )
      newRange.setEnd(
        refInputEditable.current,
        refInputEditable.current.childNodes.length
      )
      newSelection.removeAllRanges()
      newSelection.addRange(newRange)
    }
  }

  return (
    <>
      <Editable_5Wrapper
        onKeyDown={handleAddData}
        onFocus={isFocus}
        contentEditable
        suppressContentEditableWarning
        ref={refInputEditable}
      ></Editable_5Wrapper>
    </>
  )
}
