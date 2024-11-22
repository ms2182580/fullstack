import { useFetchData } from "@/utils/org/useFetchData"
import { ORG_TABS_FLOW } from "./consts"

const NAME_STATES_ORG_TABS_FLOW_FIRST_PAGE = {
  THE_FETCH: `FETCHED`,
} as const

type OrgTabsFlowFirstPageTypes = {
  [NAME_STATES_ORG_TABS_FLOW_FIRST_PAGE.THE_FETCH]: object[] | null
}

const useHooksOrgTabsFlowFirstPage = (): OrgTabsFlowFirstPageTypes => {
  const theData = useFetchData()

  return {
    FETCHED: theData,
  }
}

export const FirstPageProps = {
  name: `${ORG_TABS_FLOW.BASE}_${ORG_TABS_FLOW.FIRST_PAGE}` as const,
  types: {} as OrgTabsFlowFirstPageTypes,
  hooks: useHooksOrgTabsFlowFirstPage,
}
