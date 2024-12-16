import { ORG_D_Results_Main_BottomButtons } from "@/components/org/flow/second-page/desktop/ORG_D_Results_Main_BottomButtons"
import { ORG_D_Results_Main_Left } from "@/components/org/flow/second-page/desktop/ORG_D_Results_Main_Left"
import { ORG_D_Results_Main_Right } from "@/components/org/flow/second-page/desktop/ORG_D_Results_Main_Right"
import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { OrgOnTabsInheritWrapper } from "./styles/org-on-tabs-second-page-card-no-filters-wrapper"

export const OrgOnTabsSecondPageCardNoFilters = () => {
  const { dataToSecondPage } = useCtxOrgTabsFlow().ORG_TABS_FLOW_SECOND_PAGE

  return (
    <div>
      {dataToSecondPage[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA].map(
        (x, index) => {
          const theKey = `${x.recordSubtype}_${x.recordName}_${index}`
          return (
            <OrgOnTabsInheritWrapper key={theKey}>
              <ORG_D_Results_Main_Left backendData={x} theIndex={index} />
              <ORG_D_Results_Main_Right backendData={x} theIndex={index} />
              <ORG_D_Results_Main_BottomButtons
                backendData={x}
                indexBackendToDisplayDummyImage={index}
              />
            </OrgOnTabsInheritWrapper>
          )
        }
      )}
    </div>
  )
}
