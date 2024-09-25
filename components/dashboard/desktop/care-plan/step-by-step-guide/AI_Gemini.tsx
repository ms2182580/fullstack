import React, { useState } from "react"
import styles from "./AI_GeminiCSS.module.css"

interface Container {
  text: string
}

export const AI_Gemini: React.FC = () => {
  const [containers, setContainers] = useState<Container[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContainers([
      {
        text: event.target.value,
      },
    ])
  }

  // const handleEnterKeyPress = (
  //   event: React.KeyboardEvent<HTMLTextAreaElement>
  // ) => {
  //   if (event.key === "Enter") {
  //     setContainers([
  //       ...containers,
  //       {
  //         text: event.target.value,
  //       },
  //     ])
  //   }
  // }

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      // Type guard to ensure event.target is HTMLTextAreaElement
      if (event.target instanceof HTMLTextAreaElement) {
        setContainers([
          ...containers,
          {
            text: event.target.value,
          },
        ])
      }
    }
  }

  const handleDelete = (index: number) => {
    setContainers(containers.filter((_, i) => i !== index))
  }

  return (
    <div>
      <textarea
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyPress}
        placeholder="Type your text here"
      />
      <div>
        {containers.map((container, index) => (
          <div key={index} className={styles.container}>
            <span>{container.text}</span>
            <button onClick={() => handleDelete(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  )
}
