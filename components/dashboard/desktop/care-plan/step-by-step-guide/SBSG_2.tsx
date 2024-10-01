import { InputTags } from "@/components/ui/input/input-tags"
import { NameProfileSelected_Type } from "."
import { SBSG_2Wrapper } from "./styles/SBSG_2Wrapper"

/* 
!FH0
Create this next component
https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-8087&t=HT2B1YrJM4dLVKOW-4

*/

type Props = {
  nameProfileSelected?: NameProfileSelected_Type
  tags?: any
  handleKeyDown?: any
  handleSelectOption?: any
  removeTag?: any
  optionsToSelect?: any
  dropdownContainerCSS?: any
}

export const SBSG_2 = ({
  nameProfileSelected,
  tags,
  handleKeyDown,
  handleSelectOption,
  removeTag,
  optionsToSelect,
  dropdownContainerCSS,
}: Props) => {
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

      {/* 
      //!FH0
      AI_1 component work. Next steps:
      - Make it a re usable component
      
      - Compare the logic with «TagInput.tsx» for dropdown options when it comes from the input focus
      
      */}
      <InputTags
        tags={tags}
        removeTag={removeTag}
        handleKeyDown={handleKeyDown}
        dropdownData={{
          dropdownElementsToSelect: optionsToSelect,
          dropdownContainerStyles: dropdownContainerCSS,
        }}
        handleSelectOption={handleSelectOption}
      />
    </SBSG_2Wrapper>
  )
}
