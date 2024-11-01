import { useRef, useState } from "react"
import { EditorWrapper } from "./styles/EditorWrapper"

const PLACEHOLDER =
  "Your care plan will generate here after answering a few questions!"

export const Editor = () => {
  const refContentEditable = useRef<HTMLDivElement | null>(null)

  const handleFocusOnContenteditable = () => {
    if (refContentEditable.current) {
      refContentEditable.current.focus()
    }
  }

  const [isEmpty, setIsEmpty] = useState<boolean>(true)

  const handleInput = () => {
    const contentText = refContentEditable.current?.innerText || ""
    setIsEmpty(contentText.trim() === "") // Only update `isEmpty` state
  }

  return (
    <EditorWrapper onClick={handleFocusOnContenteditable} isEmpty={isEmpty}>
      <div
        suppressContentEditableWarning
        contentEditable
        spellCheck={true}
        onInput={handleInput}
        // onChange={handleChange}
        // onInput={handleChange}
        // onPaste={handlePaste}
        // onSelect={handleSelectExecCommand}
        // className={styles.editor}
        ref={refContentEditable}
        data-placeholder={PLACEHOLDER}
      />
    </EditorWrapper>
  )
}

/* 

https://codepen.io/JuanPastenCastillo/pen/qBzpJmb
*/
