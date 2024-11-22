import { useCtxCreatePlanData } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useLayoutEffect, useRef, useState } from "react"
import { EditorWrapper } from "./styles/editor-wrapper"

const PLACEHOLDER =
  "Your care plan will generate here after answering a few questions!"

const MIN_TEXTAREA_HEIGHT = 32

export const Editor = () => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
  } = useCtxCreatePlanData().TABS

  const refContentEditable = useRef<HTMLDivElement | null>(null)

  const [isEmpty, setIsEmpty] = useState<boolean>(true)

  const handleInput = () => {
    const contentText = refContentEditable.current?.innerText || ""
    setIsEmpty(contentText.trim() === "") // Only update `isEmpty` state
  }

  // const editableRef = useRef<HTMLTextAreaElement | null>(null)

  // useEffect(() => {

  // }, [])

  const [typingOnTextarea, setTypingOnTextarea] = useState("")
  const [theHeightOfTextarea, setTheHeightOfTextarea] = useState(0)

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleTypingOnTextarea = (e) => {
    setTypingOnTextarea(e.target.value)
  }

  const handleFocusOnContenteditable = () => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit"
      // Set height
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`
    }
  }, [typingOnTextarea])

  return (
    <EditorWrapper
      onClick={handleFocusOnContenteditable}
      isEmpty={isEmpty}
      theHeightOfTextarea={theHeightOfTextarea}
    >
      {/* <div
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
      /> */}

      <textarea
        // rows={theHeightOfTextarea}
        ref={textareaRef}
        value={typingOnTextarea}
        onChange={handleTypingOnTextarea}
        placeholder={PLACEHOLDER}
      />
    </EditorWrapper>
  )
}

/* 

https://codepen.io/JuanPastenCastillo/pen/qBzpJmb
*/
