import { createContext, ReactNode, useContext } from "react"
import { AllDataType } from "./ctx_create_plan_data_helpers/all-types"
import { SBSG1Props } from "./ctx_create_plan_data_helpers/sbsg1"
import { SBSG3Props } from "./ctx_create_plan_data_helpers/sbsg3"

const CtxDataCreatePlan = createContext<AllDataType | null>(null)

export const CtxCreatePlanData_Provider = ({
  children,
}: {
  children: ReactNode
}) => {
  const {
    nameProfileSelected,
    handleNameProfileSelected,
    handleNoProfileSelected,
  } = SBSG1Props.hooks()

  const {
    stateEditableDataSBSG3,
    setEditableDataSBSG3,
    handleChangeEditableDataSBSG3,
  } = SBSG3Props.hooks()

  return (
    <CtxDataCreatePlan.Provider
      value={{
        SBSG1: {
          stateProfileSelectedSBSG1: nameProfileSelected,
          handleProfileSelectedSBSG1: handleNameProfileSelected,
          handleNoProfileSelectedSBSG1: handleNoProfileSelected,
        },

        SBSG3: {
          stateEditableDataSBSG3: stateEditableDataSBSG3,
          setEditableDataSBSG3: setEditableDataSBSG3,
          handleChangeEditableDataSBSG3: handleChangeEditableDataSBSG3,
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
