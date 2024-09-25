import React, { useRef, useState } from "react"
import styles from "./AI_BingCSS.module.css"

export const AI_chatGPT: React.FC = () => {
  const [entries, setEntries] = useState<string[]>([])
  const inputRef = useRef<HTMLDivElement>(null)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault() // Prevents creating a new line in the div
      const text = inputRef.current?.innerText.trim()
      if (text) {
        setEntries([...entries, text])
        inputRef.current!.innerText = "" // Clear input after submission
      }
    }
  }

  const handleDelete = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index))
  }

  return (
    <div>
      <div
        ref={inputRef}
        contentEditable={true}
        className={styles.inputBox}
        onKeyDown={handleKeyPress}
        placeholder="Type something and press Enter..."
      ></div>

      <div className={styles.entriesContainer}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entryBox}>
            <span>{entry}</span>
            <button
              className={styles.deleteBtn}
              onClick={() => handleDelete(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
