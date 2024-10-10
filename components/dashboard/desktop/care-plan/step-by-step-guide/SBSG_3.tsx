import {
  DropdownElementsToSelect_Type,
  UseInputTagsLogic_Return,
} from "@/components/ui/input/input-tags"
import { DropdownWrapper_Props } from "@/components/ui/input/styles/InputTagsWrapper"
import { SBSG_3Wrapper } from "./styles/SBSG_3Wrapper"

/* 
!FH0
https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-8354&t=uxkQcuqhgTnPrbHv-4
*/

type Props = {
  dropdownElementsToSelect?: DropdownElementsToSelect_Type
  dropdownContainerStyles?: DropdownWrapper_Props["dropdownStyles"]
}

export const SBSG_3 = ({
  dropdownElementsToSelect,
  dropdownContainerStyles,
  ...allProps
}: Props) => {
  const { tags, removeTag, handleSelectOption, handleKeyDown } =
    allProps as UseInputTagsLogic_Return

  return (
    <SBSG_3Wrapper>
      <header>
        <h5>Services</h5>
      </header>

      <p>What services are you looking for? </p>
      <p>Enter resources, separating each one with a enter key</p>

      {/* <InputTags
        tags={tags}
        removeTag={removeTag}
        handleKeyDown={handleKeyDown}
        dropdownElementsToSelect={dropdownElementsToSelect}
        dropdownContainerStyles={dropdownContainerStyles}
        handleSelectOption={handleSelectOption}
      /> */}
    </SBSG_3Wrapper>
  )
}
