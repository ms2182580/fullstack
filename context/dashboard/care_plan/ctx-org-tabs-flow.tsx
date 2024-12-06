import { createContext, ReactNode, useContext } from "react"
import { AllDataTypeOrgTabsFlow } from "./ctx-org-tabs-flow_helpers/all-types"
import { FirstPageProps } from "./ctx-org-tabs-flow_helpers/first-page"
import { SecondPageProps } from "./ctx-org-tabs-flow_helpers/second-page"

const CtxOrgTabsFlow = createContext<AllDataTypeOrgTabsFlow | null>(null)

export const CtxOrgTabsFlow_Provider = ({
  children,
}: {
  children: ReactNode
}) => {
  const { fetchedData } = FirstPageProps.hooks()

  const { dataToSecondPage, handlerToSecondPage } = SecondPageProps.hooks()

  return (
    <CtxOrgTabsFlow.Provider
      value={{
        ORG_TABS_FLOW_FIRST_PAGE: {
          fetchedData,
        },

        ORG_TABS_FLOW_SECOND_PAGE: {
          dataToSecondPage,
          handlerToSecondPage,
        },
      }}
    >
      {children}
    </CtxOrgTabsFlow.Provider>
  )
}

export const useCtxOrgTabsFlow = () => {
  const context = useContext(CtxOrgTabsFlow)
  if (!context) {
    throw new Error(
      `${useCtxOrgTabsFlow.name} must be used within a ${CtxOrgTabsFlow_Provider.name}`
    )
  }
  return context
}
