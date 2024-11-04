import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { useRef, useState } from "react"
import { EditorWrapper } from "./styles/EditorWrapper"

const PLACEHOLDER =
  "Your care plan will generate here after answering a few questions!"

type Props = {
  currentPosition?: number
}

export const Editor = ({ currentPosition }: Props) => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
  } = useCtxDataCreatePlan().TABS

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
    <EditorWrapper
      onClick={handleFocusOnContenteditable}
      isEmpty={isEmpty}
      isVisible={currentPosition === dataActiveTabsTABS}
    >
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

type Props_PLACEHOLDER = {
  currentPosition?: number
}

export const ORG_PLACEHOLDER = ({ currentPosition }: Props_PLACEHOLDER) => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
  } = useCtxDataCreatePlan().TABS

  const isVisible = currentPosition === dataActiveTabsTABS

  return (
    <div
      style={{
        minHeight: "150dvh",
        display: isVisible ? "block" : "none",
      }}
    >
      ORG_PLACEHOLDER
    </div>
  )
}
