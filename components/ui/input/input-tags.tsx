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
    + The list of options should have the function add be added to the input
    + The list of options should have the function to be added only on the desired elements, because it can have some sort of "titles" for every category option
  * 

  
      
      
*/

import { ReactElement, useRef, useState } from "react"
import {
  DropdownElementsWrapper,
  DropdownElementsWrapper_Props,
  DropdownWrapper,
  DropdownWrapper_Props,
  InputTagsWrapper,
} from "./styles/InputTagsWrapper"

export type dropdownElementsToSelect_Type = {
  value: ReactElement | string
  shouldBeSelected: boolean
  elementStyles?: DropdownElementsWrapper_Props["elementStyles"]
}[]

type InputTags_Props = {
  dropdownData?: {
    dropdownElementsToSelect: dropdownElementsToSelect_Type
    dropdownContainerStyles?: DropdownWrapper_Props["dropdownStyles"]
  }
}

const optionsToSelect_Default = [
  {
    value: "option one",
    shouldBeSelected: true,
  },
  {
    value: "option two",
    shouldBeSelected: true,
  },
  {
    value: "option three",
    shouldBeSelected: true,
  },
]

export const InputTags = ({ dropdownData }: InputTags_Props) => {
  const [tags, setTags] = useState<(ReactElement | string)[]>([])
  const [tagsShouldReturnToDropdown, setTagsShouldReturnToDropdown] =
    useState<dropdownElementsToSelect_Type>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)
  const [options, setOptions] = useState(
    dropdownData?.dropdownElementsToSelect || optionsToSelect_Default
  )

  function handleKeyDown(e) {
    const selectedValue = e.target.value
    if (e.key === "Enter" && selectedValue.trim() !== "") {
      const addLikeAReactElement = (
        <span data-should-return={false}>{selectedValue}</span>
      )

      setTags((prevStatus) => [...prevStatus, addLikeAReactElement])
      e.target.value = ""
    }
  }

  const handleSelectOption = ({
    e,
    shouldReturnToDropdown = false,
    elementStyles,
  }) => {
    if (e.type === "click" || e.key === "Enter") {
      const selectedValue = e.target.textContent

      const elementToReturnToDropdown = {
        value: selectedValue,
        shouldBeSelected: shouldReturnToDropdown,
        elementStyles,
      }

      const addLikeAReactElement = (
        <span data-should-return={true}>{selectedValue}</span>
      )

      setTags((prevStatus) => [...prevStatus, addLikeAReactElement])
      setTagsShouldReturnToDropdown((prevStatus) => [
        ...prevStatus,
        elementToReturnToDropdown,
      ])

      setOptions((prevStatus: dropdownElementsToSelect_Type) =>
        prevStatus.filter((option) => {
          if ("value" in option) {
            return option.value !== selectedValue
          }
          return false
        })
      )
    }
  }

  function removeTag({ e, tag, index }) {
    if (e.type === "click" || e.key === "Enter") {
      const dataShouldReturn = tag.props?.["data-should-return"]

      if (dataShouldReturn) {
        const foundIndex = tagsShouldReturnToDropdown.findIndex(
          (el) => el.value === tag.props?.children
        )

        const dataFounded = tagsShouldReturnToDropdown[foundIndex]

        setOptions((prevStatus) => [...prevStatus, dataFounded])
        setTagsShouldReturnToDropdown((prevStatus) =>
          prevStatus.filter((el) => el.value !== tag.props?.children)
        )
      }

      setTags((prevStatus) => prevStatus.filter((el, i) => i !== index))
    }
  }

  function handleContainerClick() {
    if (inputRef.current) {
      inputRef.current.focus() // Focus the input when container is clicked
    }
  }

  function handleFocus() {
    setIsInputFocused(true)
  }

  function handleBlur() {
    setIsInputFocused(false)
  }

  return (
    <InputTagsWrapper isInputFocused={isInputFocused}>
      <div onClick={handleContainerClick}>
        {tags.length > 0 && (
          <ul>
            {tags.map((tag, index) => (
              <li
                key={index}
                onClick={(e) => removeTag({ e, tag, index })}
                onKeyDown={(e) => removeTag({ e, tag, index })}
                tabIndex={0}
              >
                {tag} <span>x</span>
              </li>
            ))}
          </ul>
        )}
        <input
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Type anything..."
        />
      </div>

      <DropdownWrapper dropdownStyles={dropdownData?.dropdownContainerStyles}>
        {options?.map(({ value, shouldBeSelected, ...props }, index) => {
          const { elementStyles = false } = props

          return (
            <DropdownElementsWrapper
              elementStyles={elementStyles}
              shouldBeSelected={shouldBeSelected}
              key={`${value}_${index}`}
              onClick={
                shouldBeSelected
                  ? (e) => {
                      handleSelectOption({
                        e,
                        shouldReturnToDropdown: shouldBeSelected,
                        elementStyles,
                      })
                    }
                  : undefined
              }
              onKeyDown={
                shouldBeSelected
                  ? (e) => {
                      handleSelectOption({
                        e,
                        shouldReturnToDropdown: shouldBeSelected,
                        elementStyles,
                      })
                    }
                  : undefined
              }
              tabIndex={shouldBeSelected ? 0 : -1}
            >
              {value}
            </DropdownElementsWrapper>
          )
        })}
      </DropdownWrapper>
    </InputTagsWrapper>
  )
}
