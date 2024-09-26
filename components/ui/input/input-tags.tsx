/* 
Reusable component
- All the styles of this component should have a default style but it should be styled from the parent component
- Should be a input that allow to put tags on it (and remove them if the user click on them or make a focus-visible and press the backspace or suppress the focus-visible)
- You should be able to provide a suggested tags (optional)
  * The suggested that should be:
    + A list of options showed below or above the input
    + Or a list of options showed in a dropdown when the user click or focus-visible on the input
      - If the list of options is showed in a dropdown, the user should be able to select an option with arrow keys: up and down
  * The  list of suggested tag should be "raw" of styles by default and should be styled by the parent component
  * The list of suggestion should be the child of the component

*/

import { useRef, useState } from "react"
import { InputTagsWrapper } from "./styles/InputTagsWrapper"

export const InputTags = () => {
  const [tags, setTags] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

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

  function handleContainerClick() {
    if (inputRef.current) {
      inputRef.current.focus() // Focus the input when container is clicked
    }
  }

  function handleFocus() {
    setIsInputFocused(true) // Set focus state to true
  }

  function handleBlur() {
    setIsInputFocused(false) // Set focus state to false
  }

  return (
    <InputTagsWrapper
      onClick={handleContainerClick}
      isInputFocused={isInputFocused}
    >
      {tags.map((tag, index) => (
        <div key={index} onClick={() => removeTag(index)}>
          <span>{tag}</span>
        </div>
      ))}
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Type anything..."
      />
    </InputTagsWrapper>
  )
}
