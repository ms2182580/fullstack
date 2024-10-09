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

- ✅Centralize the types for all of this
- Create methods for the use of the "sets"
- Dropdown from input
- When dropdown from input exist, the options should selectable with arrow keys
- And the use as a reusable component, should maintain the state on the input already typed

*/

import { useOutsideHide } from "@/utils/useOutsideHide"
import { ReactElement, useCallback, useEffect, useRef, useState } from "react"
import {
  DropdownElementsWrapper,
  DropdownElementsWrapper_Props,
  DropdownShowOnInputWrapper,
  DropdownWrapper,
  DropdownWrapper_Props,
  InputTagsWrapper,
} from "./styles/InputTagsWrapper"

export type UseInputTagsLogic_Return = {
  tags: (ReactElement | string)[]
  removeTag: ({ e, theTag, index }, { setOptions }) => void
  handleKeyDown: (e) => void
  handleSelectOption: (
    { e, shouldReturnToDropdown, elementStyles },
    { setOptions }
  ) => void
  shouldDropdownDisplayOnFocus: boolean
  setShouldDropdownDisplayOnFocus: Function
}

export const useInputTagsLogic = (): UseInputTagsLogic_Return => {
  const [tags, setTags] = useState<(ReactElement | string)[]>([])

  const [tagsShouldReturnToDropdown, setTagsShouldReturnToDropdown] =
    useState<DropdownElementsToSelect_Type>([])

  const [shouldDropdownDisplayOnFocus, setShouldDropdownDisplayOnFocus] =
    useState(false)

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

      const elementToReturnToDropdown = {
        value: selectedValue,
        shouldBeSelected: shouldReturnToDropdown,
        elementStyles,
      }

      const addLikeAReactElement = (
        <span data-should-return={true}>{selectedValue}</span>
      )

      setTags((prevStatus) => {
        return [...prevStatus, addLikeAReactElement]
      })

      setTagsShouldReturnToDropdown((prevStatus) => [
        ...prevStatus,
        elementToReturnToDropdown,
      ])

      setOptions((prevStatus) => {
        return prevStatus.filter((option) => {
          if ("value" in option) {
            return option.value !== selectedValue
          }
          return false
        })
      })
    }
  }

  const removeTag = ({ e, theTag, index }, { setOptions }) => {
    if (e.type === "click" || e.key === "Enter") {
      const dataShouldReturn = theTag.props?.["data-should-return"]

      if (dataShouldReturn) {
        const foundIndex = tagsShouldReturnToDropdown.findIndex(
          (el) => el.value === theTag.props?.children
        )

        const dataFounded = tagsShouldReturnToDropdown[foundIndex]

        setOptions((prevStatus) => [...prevStatus, dataFounded])
        setTagsShouldReturnToDropdown((prevStatus) =>
          prevStatus.filter((el) => el.value !== theTag.props?.children)
        )
      }

      setTags((prevStatus) => prevStatus.filter((el, i) => i !== index))
    }
  }

  return {
    tags,
    handleKeyDown,
    handleSelectOption,
    removeTag,
    shouldDropdownDisplayOnFocus,
    setShouldDropdownDisplayOnFocus,
  }
}

type Tags_Type = ReactElement | string

export type DropdownElementsToSelect_Type = {
  value: Tags_Type
  shouldBeSelected?: boolean
  elementStyles?: DropdownElementsWrapper_Props["elementStyles"]
}[]

export type InputTags_Props = {
  dropdownElementsToSelect?: DropdownElementsToSelect_Type
  dropdownContainerStyles?: DropdownWrapper_Props["dropdownStyles"]
  shouldDropdownDisplayOnFocus?:
    | ShouldDropdownDisplayOnFocus_Type
    | "is not working, do not use this"
} & UseInputTagsLogic_Return

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

const filterOptionsAlreadyOnTags = (
  optionsArr: any[],
  tagArr: any[]
): any[] => {
  // Step 1: Create a set of unique string values from the first array
  const childrenValues = tagArr.map((item) => item.props.children)

  // Step 2 & 3: Filter optionsArr
  const filteredFirstArray = optionsArr.filter((item) => {
    // Check if item.value is a string and if it exists in childrenValues
    return (
      typeof item.value !== "string" || !childrenValues.includes(item.value)
    )
  })

  return filteredFirstArray
}

/* The functions useRoveFocus, DropdownArrowKeysItem and DropdownArrowKeysContainer doesnt work for the dropdown options on the last element. It's buggy right now. Because of this, only use the visible dropdown options for the input  */
function useRoveFocus(size, arrSelectable) {
  const [currentFocus, setCurrentFocus] = useState(0)
  const atLeastOneElementIsSelectable = arrSelectable.some((x) => x === true)

  const moveToNextFocusable = (startIndex, direction) => {
    // console.log(`Moving focus from ${startIndex} in direction ${direction}`)
    let newIndex = startIndex

    do {
      newIndex = (newIndex + direction + size) % size
      console.log(
        `Trying index: ${newIndex}, selectable: ${arrSelectable[newIndex]}`,
        direction
      )

      if (newIndex === startIndex && arrSelectable[newIndex]) {
        // If so, return the index of the last selectable element
        console.log(
          "arrSelectable.lastIndexOf(true):",
          arrSelectable.lastIndexOf(true)
        )
        newIndex = arrSelectable.lastIndexOf(true)
        return
      }
    } while (
      !arrSelectable[newIndex] &&
      newIndex !== startIndex &&
      atLeastOneElementIsSelectable
    )

    console.log(`Final focus index: ${newIndex}`)

    return newIndex
  }

  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === "ArrowDown") {
        /* Prevent page scroll */
        e.preventDefault()

        // Move focus to next selectable item
        setCurrentFocus((prevIndex) => moveToNextFocusable(prevIndex, 1))
      }

      if (e.code === "ArrowUp") {
        /* Prevent page scroll */
        e.preventDefault()

        // Move focus to previous selectable item
        setCurrentFocus((prevIndex) => moveToNextFocusable(prevIndex, -1))
      }
    },
    [size, arrSelectable]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return [currentFocus, setCurrentFocus]
}

const DropdownArrowKeysItem = ({
  // setFocus,
  index,
  // focus,
  character,

  elementStyles,
  shouldBeSelected,
  handleSelectOption,
  setOptions,
  // handleNameChange,
}) => {
  const theRef = useRef<HTMLLIElement>(null)

  // useEffect(() => {
  //   if (focus && theRef?.current && shouldBeSelected) {
  //     // Move element into view when it is focused
  //     theRef.current.focus()
  //   }
  // }, [focus, shouldBeSelected])

  // const handleSelect = useCallback(() => {
  //   // Setting focus to that element when it is selected
  //   if (shouldBeSelected) {
  //     setFocus(index)
  //   }
  // }, [character, index, setFocus, shouldBeSelected])

  return (
    <DropdownElementsWrapper
      key={`${character}_${index}`}
      tabIndex={shouldBeSelected ? 0 : -1}
      // role="button"
      ref={theRef}
      onClick={(e) => {
        // handleSelect()
        shouldBeSelected &&
          handleSelectOption(
            {
              e,
              shouldReturnToDropdown: shouldBeSelected,
              elementStyles,
            },
            { setOptions }
          )
      }}
      elementStyles={elementStyles}
      shouldBeSelected={shouldBeSelected}
      onKeyDown={(e) => {
        shouldBeSelected &&
          handleSelectOption(
            {
              e,
              shouldReturnToDropdown: shouldBeSelected,
              elementStyles,
            },
            { setOptions }
          )
      }}
    >
      {character}
    </DropdownElementsWrapper>
  )
}

const DropdownArrowKeysContainer = ({
  listToDisplay,
  dropdownStyles,
  shouldDropdownDisplayOnFocus,
  handleSelectOption,
  setOptions,
  theRefDropdown,
  setShouldDropdownDisplayOnFocus,
}) => {
  const arraySelectable = listToDisplay.map(
    (x) =>
      x.shouldBeSelected ||
      x.shouldBeSelected === undefined ||
      x.shouldBeSelected !== false
  )

  // const [focus, setFocus] = useRoveFocus(listToDisplay.length, arraySelectable)

  return (
    <DropdownShowOnInputWrapper
      dropdownStyles={dropdownStyles}
      shouldDropdownDisplayOnFocus={shouldDropdownDisplayOnFocus}
      onClick={(e) => {
        setShouldDropdownDisplayOnFocus(true)
      }}
      onFocus={() => setShouldDropdownDisplayOnFocus(true)}
      ref={theRefDropdown}
    >
      {shouldDropdownDisplayOnFocus &&
        listToDisplay.map(
          ({ value, shouldBeSelected = true, ...props }, index) => {
            const { elementStyles = null } = props

            return (
              <DropdownArrowKeysItem
                // setFocus={setFocus}
                index={index}
                // focus={focus === index}
                character={value}
                elementStyles={elementStyles}
                shouldBeSelected={shouldBeSelected}
                handleSelectOption={handleSelectOption}
                setOptions={setOptions}
              />
            )
          }
        )}
    </DropdownShowOnInputWrapper>
  )
}

export type ShouldDropdownDisplayOnFocus_Type = boolean

export const InputTags = ({
  tags,
  removeTag,
  handleKeyDown,
  dropdownElementsToSelect,
  dropdownContainerStyles,
  handleSelectOption,
  shouldDropdownDisplayOnFocus = false,
  setShouldDropdownDisplayOnFocus,
}: InputTags_Props) => {
  const {
    inputRef,
    isInputFocused,
    handleContainerClick,
    handleFocus,
    handleBlur,
  } = useInputTagsLogicOnlyFocus()

  const [options, setOptions] = useState(dropdownElementsToSelect)

  const [checkingOptionDone, setCheckingOptionDone] = useState<boolean>(false)

  useEffect(() => {
    if (tags.length > 0 && options && options.length > 0) {
      const result = filterOptionsAlreadyOnTags(options, tags)
      setOptions(result)
    }
    setCheckingOptionDone(true)
  }, [])

  const theRefInput = useRef<HTMLDivElement>(null)
  const theRefDropdown = useRef<HTMLDivElement>(null)

  const [showDopdownInFocusInput, setShowDopdownInFocusInput] = useState(false)

  console.log("showDopdownInFocusInput:", showDopdownInFocusInput)

  useOutsideHide(
    [theRefInput, theRefDropdown],
    shouldDropdownDisplayOnFocus ? setShowDopdownInFocusInput : () => {}
  )

  console.log("options:", shouldDropdownDisplayOnFocus)

  return (
    <InputTagsWrapper
      isInputFocused={isInputFocused}
      shouldDropdownDisplayOnFocus={shouldDropdownDisplayOnFocus}
    >
      <div
        onClick={(e) => {
          handleContainerClick()
          shouldDropdownDisplayOnFocus && setShowDopdownInFocusInput(true)
        }}
        onFocus={() =>
          shouldDropdownDisplayOnFocus && setShowDopdownInFocusInput(true)
        }
        ref={theRefInput}
      >
        {tags.length > 0 && (
          <ul>
            {tags.map((theTag, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) =>
                    removeTag({ e, theTag, index }, { setOptions })
                  }
                  onKeyDown={(e) =>
                    removeTag({ e, theTag, index }, { setOptions })
                  }
                  tabIndex={0}
                >
                  {theTag} <span>x</span>
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
        <div ref={theRefDropdown}>
          {checkingOptionDone && shouldDropdownDisplayOnFocus && (
            <DropdownArrowKeysContainer
              listToDisplay={options}
              dropdownStyles={
                dropdownElementsToSelect && dropdownContainerStyles
                  ? dropdownContainerStyles
                  : null
              }
              shouldDropdownDisplayOnFocus={showDopdownInFocusInput}
              handleSelectOption={handleSelectOption}
              setOptions={setOptions}
              theRefDropdown={theRefDropdown}
              setShouldDropdownDisplayOnFocus={setShowDopdownInFocusInput}
            />
          )}

          {/* {checkingOptionDone && shouldDropdownDisplayOnFocus && (
            <DropdownArrowKeysContainer
              listToDisplay={options}
              dropdownStyles={
                dropdownElementsToSelect && dropdownContainerStyles
                  ? dropdownContainerStyles
                  : null
              }
              shouldDropdownDisplayOnFocus={shouldDropdownDisplayOnFocus}
              handleSelectOption={handleSelectOption}
              setOptions={setOptions}
              theRefDropdown={theRefDropdown}
              setShouldDropdownDisplayOnFocus={setShouldDropdownDisplayOnFocus}
            />
          )} */}
        </div>
      </div>

      {checkingOptionDone && shouldDropdownDisplayOnFocus === false && (
        <DropdownWrapper
          dropdownStyles={
            dropdownElementsToSelect && dropdownContainerStyles
              ? dropdownContainerStyles
              : null
          }
        >
          {options?.map(
            ({ value, shouldBeSelected = true, ...props }, index) => {
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
            }
          )}
        </DropdownWrapper>
      )}
    </InputTagsWrapper>
  )
}
