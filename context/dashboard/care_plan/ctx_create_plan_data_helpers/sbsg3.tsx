import { NavBar_D_WriteAReviewSvg } from "@/assets/icons"
import { SBSG3_EditableData_Type } from "@/components/dashboard/desktop/care-plan/step-by-step-guide/sbsg_3-editable-data"
import { Dispatch, SetStateAction, useState } from "react"
import { NAME_COMPONENTS } from "./consts"

const NAME_STATES_SBSG3 = {
  STATE_EDITABLE: `stateEditableData${NAME_COMPONENTS}3`,
  STATE_SET_EDITABLE: `setEditableData${NAME_COMPONENTS}3`,
  HANDLER_CHANGE_EDITABLE: `handleChangeEditableData${NAME_COMPONENTS}3`,
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
}

const useHooksSBSG3 = () => {
  const [stateEditableDataSBSG3, setEditableDataSBSG3] =
    useState<StateSBSG3_Type>(SBSG3DefaultList)

  const handleChangeEditableDataSBSG3 = ({ label, defaultValue }) => {
    setEditableDataSBSG3((prevState) => {
      return prevState.map((item) =>
        item.label === label ? { ...item, defaultValue } : item
      )
    })
  }

  return {
    stateEditableDataSBSG3,
    setEditableDataSBSG3,
    handleChangeEditableDataSBSG3,
  }
}

export const SBSG3Props = {
  name: `${NAME_COMPONENTS}3` as const,
  types: {} as SBSG3Types,
  hooks: useHooksSBSG3,
}
