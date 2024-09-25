import React, { useState } from "react"
import styles from "./AI_You.module.css" // Assuming you have a CSS file for styling

export const AI_You: React.FC = () => {
  const [inputText, setInputText] = useState<string>("")
  const [entries, setEntries] = useState<string[]>([])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      // event.preventDefault() // Prevents new line in contentEditable
      if (inputText.trim() !== "") {
        setEntries([...entries, inputText])
        setInputText("")
      }
    }
  }

  const deleteEntry = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index)
    setEntries(newEntries)
  }

  return (
    <div>
      <div
        contentEditable="true"
        className={styles.inputArea}
        onKeyDown={handleKeyDown}
        onInput={(e) => setInputText(e.currentTarget.textContent || "")}
        // suppressContentEditableWarning={true}
      >
        {inputText}
      </div>
      <div className={styles.entriesContainer}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entry}>
            {entry}
            <span
              className={styles.deleteIcon}
              onClick={() => deleteEntry(index)}
            >
              x
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
