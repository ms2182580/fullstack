import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import ThunderSVG from "@/assets/icons/org/third-page/thunder.svg"
import {
  DropdownElementsToSelect_Type,
  InputTags_Props,
  useInputTagsLogic,
  UseInputTagsLogic_Return,
} from "@/components/ui/input/input-tags"
import { css } from "styled-components"
import { NAME_COMPONENTS } from "./consts"

const NAME_STATES_SBSG2 = {
  GOALS_OF_USER: `stateGoalsOfUser${NAME_COMPONENTS}2`,
  HANDLER_GOALS_OF_USER: `handleGoalsOfUser${NAME_COMPONENTS}2`,
  INPUT_TAGS_LOGIC: `inputTagsLogic${NAME_COMPONENTS}2`,
} as const

type SBSG2Types = {
  [NAME_STATES_SBSG2.GOALS_OF_USER]: UseInputTagsLogic_Return["stateTagsExtractedToOutside"]
  [NAME_STATES_SBSG2.HANDLER_GOALS_OF_USER]: UseInputTagsLogic_Return["handleTagsExtracted"]
  [NAME_STATES_SBSG2.INPUT_TAGS_LOGIC]: UseInputTagsLogic_Return &
    InputTags_Props
}

const useHooksSBSG2 = (): SBSG2Types => {
  const {
    tags: tagsSBSG2,
    handleKeyDown: handleKeyDownSBSG2,
    handleSelectOption: handleSelectOptionSBSG2,
    removeTag: removeTagSBSG2,
    stateTagsExtractedToOutside,
    handleTagsExtracted,
  } = useInputTagsLogic()

  const dropdownElementsCSS = () => css`
    color: ${PRIMARY.PRIMARY_CTA};
    font-weight: 500;

    width: fit-content;
    cursor: default;

    display: grid;

    &::first-letter {
      text-transform: capitalize;
    }
  `

  const dropdownContainerStylesSBSG2 = () => css`
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
  const dropdownElementsToSelectSBSG2: DropdownElementsToSelect_Type = [
    {
      value: (
        <span>
          <ThunderSVG /> <span>Quick Picks:</span>
        </span>
      ),
      shouldBeSelected: false,
    },
    {
      value: "Make new friends",
      elementStyles: dropdownElementsCSS,
    },
    {
      value: "Play on a sport team",
      elementStyles: dropdownElementsCSS,
    },
    {
      value: "Improve mobility",
      elementStyles: dropdownElementsCSS,
    },
  ]

  const inputTagLogic = {
    tags: tagsSBSG2,
    removeTag: removeTagSBSG2,
    handleKeyDown: handleKeyDownSBSG2,
    handleSelectOption: handleSelectOptionSBSG2,
    dropdownElementsToSelect: dropdownElementsToSelectSBSG2,
    dropdownContainerStyles: dropdownContainerStylesSBSG2,
  }

  return {
    stateGoalsOfUserSBSG2: stateTagsExtractedToOutside,
    handleGoalsOfUserSBSG2: handleTagsExtracted,
    inputTagsLogicSBSG2: inputTagLogic,
  }
}

export const SBSG2Props = {
  name: `${NAME_COMPONENTS}2` as const,
  types: {} as SBSG2Types,
  hooks: useHooksSBSG2,
}
