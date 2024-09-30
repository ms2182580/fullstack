import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import ThunderSVG from "@/assets/icons/org/third-page/thunder.svg"
import {
  DropdownElementsToSelect_Type,
  InputTags,
} from "@/components/ui/input/input-tags"
import { css } from "styled-components"
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
}

const dropdownElementsCSS = () => css`
  color: ${PRIMARY.PRIMARY_CTA};
  font-weight: 500;

  width: fit-content;
  cursor: default;

  &::first-letter {
    text-transform: capitalize;
  }
`

const dropdownContainerCSS = () => css`
  background-color: ${NEUTRALS.OFF_WHITE_2};
  margin-top: 24px;

  padding: 12px 8px;

  border-radius: 8px;

  display: grid;
  gap: 16px;

  & > li {
    & > span {
      display: flex;
      gap: 10px;

      font-weight: 400;
      color: ${PRIMARY.LIGHT_MAROON};

      & > span {
        text-transform: lowercase;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      &:is(:hover, :focus-visible) {
        filter: unset;
      }
    }
  }
`

const optionsToSelect: DropdownElementsToSelect_Type = [
  {
    value: (
      <span>
        <ThunderSVG /> <span>Quick Picks:</span>
      </span>
    ),
    shouldBeSelected: false,
  },
  {
    value: "make new friends",
    shouldBeSelected: true,
    elementStyles: dropdownElementsCSS,
  },
  {
    value: "play on a sport team",
    shouldBeSelected: true,
    elementStyles: dropdownElementsCSS,
  },
  {
    value: "improve mobility",
    shouldBeSelected: true,
    elementStyles: dropdownElementsCSS,
  },
]

export const SBSG_2 = ({
  nameProfileSelected,
  tags,
  handleKeyDown,
  handleSelectOption,
  removeTag,
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
      - Pass all the flow to styled-components
      - disable the focus-visible of the input here and put the focus-visible on the container instead
      - Make it a re usable component
      
      - Compare the logic with «TagInput.tsx»
      
      */}
      <InputTags
        tags={tags}
        removeTag={removeTag}
        handleKeyDown={handleKeyDown}
        dropdownData={{
          dropdownElementsToSelect: optionsToSelect,
          dropdownContainerStyles: dropdownContainerCSS,
        }}
      />
    </SBSG_2Wrapper>
  )
}
