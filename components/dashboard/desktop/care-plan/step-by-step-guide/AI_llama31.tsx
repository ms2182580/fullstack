// TextInput.tsx
import React, { useEffect, useState } from "react"
import styles from "./AI_llama31CSS.module.css"

interface TextInputProps {
  id: string
  className?: string
  placeholder?: string
}

export const AI_llama31: React.FC<TextInputProps> = ({
  id,
  className,
  placeholder,
}) => {
  const [text, setText] = useState<string>("")
  const [arrayText, setArrayText] = useState<string[]>([])
  const [caretPosition, setCaretPosition] = useState<number>(0)

  useEffect(() => {
    if (text) {
      const words = text.split(" ")
      const temp: string[] = []
      let charCount = 0
      for (let i = 0; i < words.length; i++) {
        if (charCount + words[i].length > 80) {
          temp.push("")
          charCount = 0
        }
        temp[temp.length - 1] += words[i] + " "
        charCount += words[i].length + 1
      }
      setArrayText(temp)
    }
  }, [text])

  const updateText = (index: number, newText: string) => {
    setArrayText((prev) =>
      prev.map((item, i) => (i === index ? newText : item))
    )
  }

  const insertText = (index: number) => {
    const newArr = arrayText.slice()
    newArr.splice(index, 0, "")
    setCaretPosition(
      newArr.reduce((total, item, i) => total + item.length + 1, 0)
    )
    setArrayText(newArr)
  }

  const toggleCaretPosition = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCaretPosition(event.target.selectionStart)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      if (event.target instanceof HTMLTextAreaElement) {
        setCaretPosition(event.target.selectionStart)
        event.preventDefault()
        const value = event.target.value
        const newText = value.substring(0, event.target.selectionStart)
        const newArr = [newText, value.substring(event.target.selectionStart)]
        setArrayText((prev) => [...prev, ...newArr])
        setText("")
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  return (
    <div>
      <textarea
        id={id}
        cols={30}
        placeholder={placeholder}
        rows={10}
        value={arrayText.join(" ")}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onInput={toggleCaretPosition}
        contentEditable={false}
        className={styles.textarea}
      />
      <ul>
        {arrayText.map((_, index) => (
          <li key={index}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ marginRight: 5 }}
            >
              <input
                type="text"
                value={arrayText[index]}
                onChange={(event) => updateText(index, event.target.value)}
              />
              <div className="cursor-pointer" onClick={() => insertText(index)}>
                <i className="fa-solid fa-caret-right" />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => arrayText.splice(index, 1)}
              >
                <i className="fa-solid fa-xmark" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
