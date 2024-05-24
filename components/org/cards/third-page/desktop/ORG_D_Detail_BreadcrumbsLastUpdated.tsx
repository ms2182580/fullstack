import { Breadcrumbs_D } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { ORG_ST_LastUpdate } from "@/utils/ORG_ST_Review_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ORG_D_Detail_BreadcrumbsLastUpdatedWrapper } from "./styles/ORG_D_Detail_BreadcrumbsLastUpdatedWrapper"

export const ORG_D_Detail_BreadcrumbsLastUpdated = () => {
  const lastUpdateData = ORG_ST_LastUpdate()

  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData_Backend()

  return (
    <ORG_D_Detail_BreadcrumbsLastUpdatedWrapper>
      <div>
        <Breadcrumbs_D
          whichDisplay={[
            ["Resource Directory", `${ALL_ROUTES.ORG}`],
            [
              `${
                thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.SUB_CATEGORY]
              }`,
              ``,
            ],
            [
              `${
                thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
                  .recordName
              }`,
              "",
            ],
          ]}
        />
      </div>

      <div>
        <P>Page last updated on {lastUpdateData}</P>
        <P bold>ID #: 36547292</P>
      </div>
    </ORG_D_Detail_BreadcrumbsLastUpdatedWrapper>
  )
}
