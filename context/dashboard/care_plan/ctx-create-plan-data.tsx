import { NavBar_D_WriteAReviewSvg } from "@/assets/icons"
import { SBSG3_EditableData_Type } from "@/components/dashboard/desktop/care-plan/step-by-step-guide/sbsg_3-editable-data"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

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
type SBSG3 = {
  stateEditableDataSBSG3: StateSBSG3_Type
  setEditableDataSBSG3: Dispatch<SetStateAction<StateSBSG3_Type>>
  handleChangeEditableDataSBSG3: ({ label, defaultValue }) => void
}

// Define context type properly
const CtxDataCreatePlan = createContext<SBSG3 | null>(null)

export const CtxCreatePlanData_Provider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [stateEditableDataSBSG3, setEditableDataSBSG3] =
    useState<StateSBSG3_Type>(SBSG3DefaultList)

  const handleChangeEditableDataSBSG3 = ({ label, defaultValue }) => {
    setEditableDataSBSG3((prevState) => {
      return prevState.map((item) =>
        item.label === label ? { ...item, defaultValue } : item
      )
    })
  }

  return (
    <CtxDataCreatePlan.Provider
      value={{
        stateEditableDataSBSG3,
        setEditableDataSBSG3,
        handleChangeEditableDataSBSG3,
      }}
    >
      {children}
    </CtxDataCreatePlan.Provider>
  )
}

export const useCtxDataCreatePlan = () => {
  const context = useContext(CtxDataCreatePlan)
  if (!context) {
    throw new Error(
      "useCtxDataCreatePlan must be used within a CtxCreatePlanData_Provider"
    )
  }
  return context
}
