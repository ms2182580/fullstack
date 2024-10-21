import { createContext, ReactNode, useContext } from "react"
import { AllDataType } from "./ctx_create_plan_data_helpers/all-types"
import { SBSG1Props } from "./ctx_create_plan_data_helpers/sbsg1"
import { SBSG2Props } from "./ctx_create_plan_data_helpers/sbsg2"
import { SBSG3Props } from "./ctx_create_plan_data_helpers/sbsg3"

const CtxDataCreatePlan = createContext<AllDataType | null>(null)

export const CtxCreatePlanData_Provider = ({
  children,
}: {
  children: ReactNode
}) => {
  const {
    stateProfileSelectedSBSG1,
    handleProfileSelectedSBSG1,
    handleNoProfileSelectedSBSG1,
  } = SBSG1Props.hooks()

  const { stateGoalsOfUserSBSG2, handleGoalsOfUserSBSG2 } = SBSG2Props.hooks()

  const {
    stateEditableDataSBSG3,
    setEditableDataSBSG3,
    handleChangeEditableDataSBSG3,
  } = SBSG3Props.hooks()

  return (
    <CtxDataCreatePlan.Provider
      value={{
        SBSG1: {
          stateProfileSelectedSBSG1,
          handleProfileSelectedSBSG1,
          handleNoProfileSelectedSBSG1,
        },

        SBSG2: {
          stateGoalsOfUserSBSG2,
          handleGoalsOfUserSBSG2,
        },

        SBSG3: {
          stateEditableDataSBSG3,
          setEditableDataSBSG3,
          handleChangeEditableDataSBSG3,
        },
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
