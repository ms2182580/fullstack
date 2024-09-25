import React, { useState } from "react"
import styles from "./AI_BingCSS.module.css"

interface TextContainer {
  id: number
  text: string
}

export const AI_Bing: React.FC = () => {
  const [inputValue, setInputValue] = useState("")
  const [containers, setContainers] = useState<TextContainer[]>([])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      setContainers([...containers, { id: Date.now(), text: inputValue }])
      setInputValue("")
    }
  }

  const handleDelete = (id: number) => {
    setContainers(containers.filter((container) => container.id !== id))
  }

  return (
    <div className={styles.app}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type something and press Enter"
      />
      <div className={styles.container_list}>
        {containers.map((container) => (
          <div key={container.id} className={styles.container}>
            <span>{container.text}</span>
            <button onClick={() => handleDelete(container.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  )
}
