import { useState } from "react"
import styles from "./AI_1CSS.module.css"

export const AI_1 = () => {
  const [tags, setTags] = useState<string[]>([])

  function handleKeyDown(e) {
    if (e.key !== "Enter") return
    const value = e.target.value
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ""
  }
  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index))
  }

  return (
    <div className={styles.tags_input_container}>
      {tags.map((tag, index) => (
        <div
          className={styles.tag_item}
          key={index}
          onClick={() => removeTag(index)}
        >
          <span className={styles.text}>{tag}</span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className={styles.tags_input}
        placeholder="Type somthing"
      />
    </div>
  )
}
