import { useOutsideHide } from "@/utils/useOutsideHide"
import { useRef, useState } from "react"
import { List_Example } from "./example"
import { Input_MultSelectListboxWrapper } from "./styles/Input_MultSelectListboxWrapper"

export type Input_MultSelectListbox_Props = {
  label?: string
  listToShow: string[]
}

export const Input_MultSelectListbox_TSX = ({
  label,
  listToShow,
}: Input_MultSelectListbox_Props) => {
  const [inputIsFocus, setInputIsFocus] = useState(false)
  const handleInputIsFocus = () => {
    setInputIsFocus(true)
  }
  const inputRef = useRef(null)
  useOutsideHide(inputRef, setInputIsFocus)

  const refInputEditable = useRef<HTMLDivElement>(null)

  const handleAddData = ({
    event,
    dataToAdd,
  }: {
    event: any
    dataToAdd?: string | undefined
  }) => {
    if (event.code == "Enter") event.preventDefault()

    console.log("event:", event, dataToAdd)

    if (
      event.code === "Space" &&
      refInputEditable?.current &&
      refInputEditable?.current.innerText.trim() !== ""
    ) {
      // Step 1: Capture the cursor position

      console.log("dataToAdd:", dataToAdd)
      const text = refInputEditable?.current?.innerText.trim()
      let words = text?.split(" ")

      refInputEditable.current.innerHTML = ""

      words.forEach((word, index) => {
        const span = document.createElement("span")
        span.textContent = word

        refInputEditable?.current?.appendChild(span)

        if (index < words.length - 1) {
          const space = document.createTextNode(" ")
          refInputEditable?.current?.appendChild(space)
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
      newSelection?.removeAllRanges()
      newSelection?.addRange(newRange)
    }
  }

  return (
    <Input_MultSelectListboxWrapper inputIsFocus={inputIsFocus} ref={inputRef}>
      {!label || label}

      <div
        onKeyDown={(e) => handleAddData({ event: e })}
        onFocus={handleInputIsFocus}
        contentEditable
        suppressContentEditableWarning
        ref={refInputEditable}
      />

      <List_Example
        listToDisplay={listToShow}
        handleNameChange={handleAddData}
      />
    </Input_MultSelectListboxWrapper>
  )
}
