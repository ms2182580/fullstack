import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { NavBar_D_WriteAReviewSvg } from "@/assets/icons"
import ThunderSVG from "@/assets/icons/org/third-page/thunder.svg"
import { SBSG3_EditableData_Type } from "@/components/dashboard/desktop/care-plan/step-by-step-guide/sbsg_3-editable-data"
import {
  DropdownElementsToSelect_Type,
  InputTags_Props,
  useInputTagsLogic,
  UseInputTagsLogic_Return,
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
  [NAME_STATES_SBSG3.INPUT_TAGS_LOGIC]: UseInputTagsLogic_Return &
    InputTags_Props
}

/* 
!FH0
- Make the "useHooksSBSG3" function to be able to extract data from the input-tag
- Make the "ctx-create-plan-data.tsx" for this third part of the component look like the SBSG2 for the names. For that, add the types "SBSG3Types" to the return of the hook "useHooksSBSG3".That should work
- Check the file "components/dashboard/desktop/care-plan/step-by-step-guide/index.tsx" and check how the props are passed on the variable "SBSG2Props" and check if it keep making sense to have those group of variables (because I'm using a context for that)
- Keep with SBSG4
*/

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

  const {
    tags: tagsSBSG3,
    handleKeyDown: handleKeyDownSBSG3,
    handleSelectOption: handleSelectOptionSBSG3,
    removeTag: removeTagSBSG3,
  } = useInputTagsLogic()

  const dropdownContainerStylesSBSG3 = () => css`
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

  const dropdownElementsToSelectSBSG3: DropdownElementsToSelect_Type = [
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
    tags: tagsSBSG3,
    removeTag: removeTagSBSG3,
    handleKeyDown: handleKeyDownSBSG3,
    handleSelectOption: handleSelectOptionSBSG3,
    dropdownElementsToSelect: dropdownElementsToSelectSBSG3,
    dropdownContainerStyles: dropdownContainerStylesSBSG3,
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
