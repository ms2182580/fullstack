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

/* 
!FH0
- Make the "useHooksSBSG3" function to be able to extract data from the input-tag
- Make the "ctx-create-plan-data.tsx" for this third part of the component look like the SBSG2 for the names. For that, add the types "SBSG3Types" to the return of the hook "useHooksSBSG3".That should work
- Check the file "components/dashboard/desktop/care-plan/step-by-step-guide/index.tsx" and check how the props are passed on the variable "SBSG2Props" and check if it keep making sense to have those group of variables (because I'm using a context for that)
- Keep with SBSG4
*/

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
