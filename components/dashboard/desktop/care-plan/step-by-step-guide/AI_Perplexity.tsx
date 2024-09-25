import React, { useState } from "react"
import styles from "./PerplexityCSS.module.css" // Importing CSS file for styling

export const Perplexity: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [entries, setEntries] = useState<string[]>([])

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      event.preventDefault() // Prevents new line on Enter
      setEntries([...entries, inputValue])
      setInputValue("") // Clear input after submission
    }
  }

  const handleDelete = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index)
    setEntries(newEntries)
  }

  return (
    <div className={styles.text_input_container}>
      <textarea
        className={styles.textarea}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your text and press Enter..."
      />
      <div className={styles.entries_container}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entry_container}>
            <span>{entry}</span>
            <button
              className={styles.delete_button}
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
