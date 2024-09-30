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

/* 
!FH0
Finish all the features of this component:

- Dropdown from input
- And the use as a reusable component, should maintain the state on the input already typed


- Input typed by user should maintain the state. The state of what was typed by the user should come from outside. In general, what is, and what is not already tagged
- The dropdown options should come from outside. What was selected should be added to the state of the outside parent, maintaining the logic and the state
- The dropdown should be passed and say if is going to be a dropdown when the user focus on the input or it would be a list below or above the input

*/

import { ReactElement, useEffect, useRef, useState } from "react"
import {
  DropdownElementsWrapper,
  DropdownElementsWrapper_Props,
  DropdownWrapper,
  DropdownWrapper_Props,
  InputTagsWrapper,
} from "./styles/InputTagsWrapper"

type Tags_Type = ReactElement | string

export type DropdownElementsToSelect_Type = {
  value: Tags_Type
  shouldBeSelected: boolean
  elementStyles?: DropdownElementsWrapper_Props["elementStyles"]
}[]

type InputTags_Props = {
  tags: Tags_Type[]
  removeTag: ({ e, index }) => void
  handleKeyDown: (e) => void
  dropdownData?: {
    dropdownElementsToSelect: DropdownElementsToSelect_Type
    dropdownContainerStyles?: DropdownWrapper_Props["dropdownStyles"]
  }
  handleSelectOption: (
    { e, shouldReturnToDropdown, elementStyles },
    { setOptions }
  ) => void
  optionsToSelect?: any
}

const optionsToSelect_Default = [
  {
    value: "title 1",
    shouldBeSelected: false,
  },
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

const useInputTagsLogicOnlyFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleFocus = () => {
    setIsInputFocused(true)
  }

  const handleBlur = () => {
    setIsInputFocused(false)
  }

  return {
    inputRef,
    isInputFocused,
    handleContainerClick,
    handleFocus,
    handleBlur,
  }
}

export const InputTags = ({
  tags,
  removeTag,
  handleKeyDown,
  dropdownData = undefined,
  handleSelectOption,
}: InputTags_Props) => {
  const {
    inputRef,
    isInputFocused,
    handleContainerClick,
    handleFocus,
    handleBlur,
  } = useInputTagsLogicOnlyFocus()

  const [options, setOptions] = useState(
    dropdownData?.dropdownElementsToSelect || optionsToSelect_Default
  )

  useEffect(() => {
    /*_codeHere_*/
    console.log("options:", options)
  }, [options])

  return (
    <InputTagsWrapper isInputFocused={isInputFocused}>
      <div onClick={handleContainerClick}>
        {tags.length > 0 && (
          <ul>
            {tags.map((value, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) => removeTag({ e, index })}
                  onKeyDown={(e) => removeTag({ e, index })}
                  tabIndex={0}
                >
                  {value} <span>x</span>
                </li>
              )
            })}
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
        {options.map(({ value, shouldBeSelected, ...props }, index) => {
          const { elementStyles = null } = props

          return (
            <DropdownElementsWrapper
              elementStyles={elementStyles}
              shouldBeSelected={shouldBeSelected}
              key={`${value}_${index}`}
              onClick={
                shouldBeSelected
                  ? (e) => {
                      handleSelectOption(
                        {
                          e,
                          shouldReturnToDropdown: shouldBeSelected,
                          elementStyles,
                        },
                        { setOptions }
                      )
                    }
                  : undefined
              }
              onKeyDown={
                shouldBeSelected
                  ? (e) => {
                      handleSelectOption(
                        {
                          e,
                          shouldReturnToDropdown: shouldBeSelected,
                          elementStyles,
                        },
                        { setOptions }
                      )
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

type UseInputTagsLogic_Return = {
  tags: (ReactElement | string)[]
  removeTag: ({ e, index }) => void
  handleKeyDown: (e) => void
  handleSelectOption: (
    { e, shouldReturnToDropdown, elementStyles },
    { setOptions }
  ) => void
  // options: DropdownElementsToSelect_Type
}

export const useInputTagsLogic = (): UseInputTagsLogic_Return => {
  const [tags, setTags] = useState<(ReactElement | string)[]>([])

  const [tagsShouldReturnToDropdown, setTagsShouldReturnToDropdown] =
    useState<DropdownElementsToSelect_Type>([])

  const handleKeyDown = (e) => {
    const selectedValue = e.target.value
    if (e.key === "Enter" && selectedValue.trim() !== "") {
      const addLikeAReactElement = (
        <span data-should-return={false}>{selectedValue}</span>
      )

      setTags((prevStatus) => [...prevStatus, addLikeAReactElement])
      e.target.value = ""
    }
  }

  const handleSelectOption = (
    { e, shouldReturnToDropdown = false, elementStyles },
    { setOptions }
  ) => {
    if (e.type === "click" || e.key === "Enter") {
      const selectedValue = e.target.textContent

      const addLikeAReactElement = (
        <span data-should-return={true}>{selectedValue}</span>
      )

      setTags((prevStatus) => {
        return [...prevStatus, addLikeAReactElement]
      })

      setOptions((prevStatus) => {
        return prevStatus.filter((option) => {
          console.log("option:", option)
          if ("value" in option) {
            return option.value !== selectedValue
          }
          return false
        })
      })
    }
  }

  const removeTag = ({ e, index }) => {
    if (e.type === "click" || e.key === "Enter") {
      console.log("e:", e)

      // const dataShouldReturn = tag.props?.["data-should-return"]

      /* if (dataShouldReturn) {
        const foundIndex = tagsShouldReturnToDropdown.findIndex(
          (el) => el.value === tag.props?.children
        )

        const dataFounded = tagsShouldReturnToDropdown[foundIndex]

        setOptions((prevStatus) => [...prevStatus, dataFounded])
        setTagsShouldReturnToDropdown((prevStatus) =>
          prevStatus.filter((el) => el.value !== tag.props?.children)
        )
      } */

      setTags((prevStatus) => prevStatus.filter((el, i) => i !== index))
    }
  }

  const useOptionsDropdown = ({
    optionsToSelect = optionsToSelect_Default,
  }) => {
    const [options, setOptions] =
      useState<DropdownElementsToSelect_Type>(optionsToSelect)
    const [tagsShouldReturnToDropdown, setTagsShouldReturnToDropdown] =
      useState<DropdownElementsToSelect_Type>([])

    const removeTagCustomOptions = ({ dataShouldReturn, tag }) => {
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
    }
  }

  return { tags, handleKeyDown, handleSelectOption, removeTag }
}
