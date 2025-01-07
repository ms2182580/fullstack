import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { InlineSuggestionInputWrapper } from "./styles/inline-suggestion-input-wrapper"

export type SuggestionsType = string[]

type InlineSuggestionInputProps = {
  suggestions: SuggestionsType
  placeholder?: string
}

export const InlineSuggestionInput = ({
  suggestions,
  placeholder = "Type something",
}: InlineSuggestionInputProps) => {
  const [inputValue, setInputValue] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    updateSuggestion(inputValue)

    if (inputValue === "") {
      setSuggestion("")
    }
  }, [inputValue])

  const updateSuggestion = (value: string) => {
    const match = suggestions.find((s) =>
      s.toLowerCase().startsWith(value.toLowerCase())
    )
    setSuggestion(match ? match.slice(value.length) : "")
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (suggestion) {
      if (e.key === "Tab") {
        e.preventDefault()
        setInputValue(inputValue + suggestion)
        setSuggestion("")
      }

      if (e.key === "ArrowRight" && e.ctrlKey) {
        e.preventDefault()
        const suggestionOneByOne = suggestion.split(" ")

        const addEmptySpaceOrWord =
          suggestionOneByOne[0] === ""
            ? ` ${suggestionOneByOne[1]}`
            : suggestionOneByOne[0]

        setInputValue(inputValue + addEmptySpaceOrWord)

        if (suggestionOneByOne.length === 1) {
          setSuggestion("")
        }
      }
    }
  }

  return (
    <InlineSuggestionInputWrapper>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div>
        <pre>{inputValue}</pre>
        <pre>{suggestion}</pre>
      </div>
    </InlineSuggestionInputWrapper>
  )
}
