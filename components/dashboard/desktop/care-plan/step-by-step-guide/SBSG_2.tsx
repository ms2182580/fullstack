import {
  DropdownElementsToSelect_Type,
  InputTags,
  UseInputTagsLogic_Return,
} from "@/components/ui/input/input-tags"
import { DropdownWrapper_Props } from "@/components/ui/input/styles/InputTagsWrapper"
import { NameProfileSelected_Type } from "."
import { SBSG_2Wrapper } from "./styles/SBSG_2Wrapper"

type Props = {
  nameProfileSelected?: NameProfileSelected_Type
  dropdownElementsToSelectSBSG2?: DropdownElementsToSelect_Type
  dropdownContainerStylesSBSG2?: DropdownWrapper_Props["dropdownStyles"]
}

type UseInputTagsLogic_ReturnSBSG2 = {
  tagsSBSG2: UseInputTagsLogic_Return["tags"]
  removeTagSBSG2: UseInputTagsLogic_Return["removeTag"]
  handleKeyDownSBSG2: UseInputTagsLogic_Return["handleKeyDown"]
  handleSelectOptionSBSG2: UseInputTagsLogic_Return["handleSelectOption"]
}
export const SBSG_2 = ({
  nameProfileSelected,
  dropdownElementsToSelectSBSG2,
  dropdownContainerStylesSBSG2,
  ...restOfProps
}: Props) => {
  const {
    tagsSBSG2,
    removeTagSBSG2,
    handleSelectOptionSBSG2,
    handleKeyDownSBSG2,
  } = restOfProps as UseInputTagsLogic_ReturnSBSG2

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
        tags={tagsSBSG2}
        removeTag={removeTagSBSG2}
        handleKeyDown={handleKeyDownSBSG2}
        handleSelectOption={handleSelectOptionSBSG2}
        dropdownElementsToSelect={dropdownElementsToSelectSBSG2}
        dropdownContainerStyles={dropdownContainerStylesSBSG2}
      />
    </SBSG_2Wrapper>
  )
}
