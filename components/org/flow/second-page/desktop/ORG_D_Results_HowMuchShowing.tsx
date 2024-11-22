import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"
import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider.js"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { preferFirstDefaultSecondFn } from "@/utils/org/prefer-first-default-second-fn"
import { ORG_D_Results_HowMuchShowingWrapper } from "./styles/ORG_D_Results_HowMuchShowingWrapper"

type Props = {
  dataComesFromDashboard?: object[] | any
}

export const ORG_D_Results_HowMuchShowing = ({
  dataComesFromDashboard,
}: Props) => {
  const { DATA } = useCtxOrgTabsFlow().ORG_TABS_FLOW_SECOND_PAGE
  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData_Backend()

  const whichFuncUse = preferFirstDefaultSecondFn(DATA, secondpageDataORG)

  return (
    <ORG_D_Results_HowMuchShowingWrapper>
      <p>
        {whichFuncUse?.[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
          ? `Showing ${
              whichFuncUse?.[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA].length
            } results`
          : "Showing 10 of 50 results"}
      </p>
    </ORG_D_Results_HowMuchShowingWrapper>
  )
}
