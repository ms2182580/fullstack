import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { NavBar_D_WriteAReviewSvg } from "@/assets/icons"
import ThunderSVG from "@/assets/icons/org/third-page/thunder.svg"
import { SBSG3_EditableData_Type } from "@/components/dashboard/desktop/care_plan/step_by_step_guide/sbsg_3-editable-data"
import {
  DropdownElementsToSelect_Type,
  InputTags_Props,
  useInputTagsLogic,
} from "@/components/ui/input/input-tags"
import { Dispatch, SetStateAction, useState } from "react"
import { css } from "styled-components"
import { NAME_COMPONENTS } from "./consts"

const NAME_STATES_SBSG3 = {
  STATE_EDITABLE: `stateEditableData${NAME_COMPONENTS}3`,
  STATE_SET_EDITABLE: `setEditableData${NAME_COMPONENTS}3`,
  HANDLER_CHANGE_EDITABLE: `handleChangeEditableData${NAME_COMPONENTS}3`,
  INPUT_TAGS_LOGIC: `inputTagsLogic${NAME_COMPONENTS}3`,
} as const

const SBSG3DefaultList: SBSG3_EditableData_Type[] = [
  {
    label: "location",
    defaultValue: "19130",
    icon: NavBar_D_WriteAReviewSvg,
  },
  {
    label: "Insurance plan",
    defaultValue: "blue shield",
    icon: NavBar_D_WriteAReviewSvg,
  },
]
type StateSBSG3_Type = SBSG3_EditableData_Type[]

type SBSG3Types = {
  [NAME_STATES_SBSG3.STATE_EDITABLE]: StateSBSG3_Type
  [NAME_STATES_SBSG3.STATE_SET_EDITABLE]: Dispatch<
    SetStateAction<StateSBSG3_Type>
  >
  [NAME_STATES_SBSG3.HANDLER_CHANGE_EDITABLE]: ({ label, defaultValue }) => void
  [NAME_STATES_SBSG3.INPUT_TAGS_LOGIC]: InputTags_Props
}

const useHooksSBSG3 = (): SBSG3Types => {
  const [stateEditableData, setEditableData] =
    useState<StateSBSG3_Type>(SBSG3DefaultList)

  const handleChangeEditableData = ({ label, defaultValue }) => {
    setEditableData((prevState) => {
      return prevState.map((item) =>
        item.label === label ? { ...item, defaultValue } : item
      )
    })
  }

  const {
    tags,
    handleKeyDown,
    handleSelectOption,
    removeTag,
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

  const dropdownContainerStyles = () => css`
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

  const dropdownElementsToSelect: DropdownElementsToSelect_Type = [
    {
      value: (
        <span>
          <ThunderSVG /> <span>Quick Picks:</span>
        </span>
      ),
      shouldBeSelected: false,
    },
    {
      value: "Day camps",
      elementStyles: dropdownElementsCSS,
    },
    {
      value: "Mobility aids",
      elementStyles: dropdownElementsCSS,
    },
    {
      value: "Physical therapy",
      elementStyles: dropdownElementsCSS,
    },
  ]

  const inputTagLogic = {
    tags,
    removeTag,
    handleKeyDown,
    handleSelectOption,
    dropdownElementsToSelect,
    dropdownContainerStyles,
    stateTagsExtractedToOutside,
    handleTagsExtracted,
  }

  return {
    stateEditableDataSBSG3: stateEditableData,
    setEditableDataSBSG3: setEditableData,
    handleChangeEditableDataSBSG3: handleChangeEditableData,
    inputTagsLogicSBSG3: inputTagLogic,
  }
}

export const SBSG3Props = {
  name: `${NAME_COMPONENTS}3` as const,
  types: {} as SBSG3Types,
  hooks: useHooksSBSG3,
}
