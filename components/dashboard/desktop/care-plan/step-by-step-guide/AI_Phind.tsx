import React, { useEffect, useRef, useState } from "react"
import styles from "./AI_PhindCSS.module.css"

export const AI_Phind = (): React.ReactElement => {
  const [inputValue, setInputValue] = useState("")
  const [submittedItems, setSubmittedItems] = useState<string[]>([])
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setSubmittedItems([...submittedItems, inputValue])
      setInputValue("")
    }
  }

  const handleDelete = (index: number) => {
    setSubmittedItems(submittedItems.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.editable_component}>
      <div
        ref={inputRef}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        onChange={(e) => setInputValue(e.currentTarget.innerText)}
        className={styles.input_area}
      />
      {submittedItems.map((item, index) => (
        <div key={index} className={styles.submitted_item}>
          <span>{item}</span>
          <button onClick={() => handleDelete(index)}>&times;</button>
        </div>
      ))}
    </div>
  )
}
