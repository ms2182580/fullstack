/* 
!FH0
- This component should have the logic to move the view here

- Same apply to the third-page.tsx, that file should have the logic to move the view there


Caveat, the UI component should take all the parameters as a rest operator to catch all the data and inside the function, handle how that data is going to be use. This thoughts should be implemented on the file «org-cards-first.tsx»

*/

import { getAllData } from "@/utils/org/categories/general/getAllData"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { SPECIFIC_DATA_SECOND_PAGE } from "@/utils/org/second-page/desktop/specificData"
import { useState } from "react"
import { ORG_TABS_FLOW } from "./consts"

const NAME_STATES_ORG_TABS_FLOW_SECOND_PAGE = {
  DATA: `dataToSecondPage`,
  HANDLER_TO_SECOND_PAGE: `handlerToSecondPage`,
} as const

type OrgTabsFlowSecondPageTypes = {
  [NAME_STATES_ORG_TABS_FLOW_SECOND_PAGE.DATA]: object[] | any
  [NAME_STATES_ORG_TABS_FLOW_SECOND_PAGE.HANDLER_TO_SECOND_PAGE]: ({
    category,
    theSubcategory,
    raw,
    thePush,
  }: {
    category: string
    theSubcategory: string
    raw: any
    thePush: () => void
  }) => void
}

const useHooksOrgTabsFlowSecondPage = (): OrgTabsFlowSecondPageTypes => {
  const [secondpageDataORGTabs, setSecondpageDataORGTabs] = useState<
    object[] | null | any
  >(null)

  const handleSecondpageDataORGTabs = ({
    category,
    theSubcategory,
    raw,
    thePush,
  }) => {
    const getSpecificData = getAllData({
      whoToFound: category,
    })

    setSecondpageDataORGTabs({
      [DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]: raw,
      [DATA_ORG_KeyNamesForCards_D_KEYS.CATEGORY]: category,
      [DATA_ORG_KeyNamesForCards_D_KEYS.SUB_CATEGORY]: theSubcategory,
      [SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]:
        getSpecificData?.[SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE] ?? {},
      [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE]:
        getSpecificData?.[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE] ?? {},
    })

    thePush()
  }

  return {
    dataToSecondPage: secondpageDataORGTabs,
    handlerToSecondPage: handleSecondpageDataORGTabs,
  }
}

export const SecondPageProps = {
  name: `${ORG_TABS_FLOW.BASE}_${ORG_TABS_FLOW.SECOND_PAGE}` as const,
  types: {} as OrgTabsFlowSecondPageTypes,
  hooks: useHooksOrgTabsFlowSecondPage,
}
