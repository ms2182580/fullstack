import {
  DropdownElementsToSelect_Type,
  InputTags,
  UseInputTagsLogic_Return,
} from "@/components/ui/input/input-tags"
import { DropdownWrapper_Props } from "@/components/ui/input/styles/InputTagsWrapper"
import { NameProfileSelected_Type } from "."
import { SBSG_2Wrapper } from "./styles/SBSG_2Wrapper"

/* 
!FH0
Create this next component
https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-8087&t=HT2B1YrJM4dLVKOW-4

*/

type Props = {
  nameProfileSelected?: NameProfileSelected_Type
  dropdownElementsToSelect?: DropdownElementsToSelect_Type
  dropdownContainerStyles?: DropdownWrapper_Props["dropdownStyles"]
}

export const SBSG_2 = ({
  nameProfileSelected,
  dropdownElementsToSelect,
  dropdownContainerStyles,
  ...restOfProps
}: Props) => {
  const {
    tags,
    removeTag,
    handleSelectOption,
    handleKeyDown,
    // tagsShouldReturnToDropdown,
  } = restOfProps as UseInputTagsLogic_Return

  return (
    <SBSG_2Wrapper>
      <header>
        <h5>Goals</h5>
      </header>

      {nameProfileSelected ? (
        <p>
          I’d like to <span>{nameProfileSelected}</span> to work on these goals:
        </p>
      ) : (
        <p>I’d like to work on these goals:</p>
      )}

      <InputTags
        tags={tags}
        removeTag={removeTag}
        handleKeyDown={handleKeyDown}
        dropdownElementsToSelect={dropdownElementsToSelect}
        dropdownContainerStyles={dropdownContainerStyles}
        handleSelectOption={handleSelectOption}
      />
    </SBSG_2Wrapper>
  )
}
