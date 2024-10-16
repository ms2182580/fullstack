import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

export type CreatePlanVisibility_Types = {
  isCreatePlanVisibible: boolean
  handleShowCreateCarePlan: () => void
  handleHideCreateCarePlan: () => void
  useSetInitialState: () => void
}

const CtxCreatePlanVisibility =
  createContext<CreatePlanVisibility_Types | null>(null)

export const CtxCreatePlanVisibility_Provider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isCreatePlanVisibible, setIsCreatePlanVisibible] =
    useState<boolean>(true)

  const handleShowCreateCarePlan = () => {
    setIsCreatePlanVisibible(true)
  }
  const handleHideCreateCarePlan = () => {
    setIsCreatePlanVisibible(false)
  }

  const useSetInitialState = () => {
    useEffect(() => {
      handleShowCreateCarePlan()
    }, [])
  }

  return (
    <CtxCreatePlanVisibility.Provider
      value={{
        isCreatePlanVisibible,
        handleShowCreateCarePlan,
        handleHideCreateCarePlan,
        useSetInitialState,
      }}
    >
      {children}
    </CtxCreatePlanVisibility.Provider>
  )
}

export const useCtxCreatePlanVisibility = () => {
  const context = useContext(CtxCreatePlanVisibility)
  if (!context) {
    throw new Error(
      `${useCtxCreatePlanVisibility.name} must be used within a ${CtxCreatePlanVisibility_Provider.name}`
    )
  }
  return context
}
