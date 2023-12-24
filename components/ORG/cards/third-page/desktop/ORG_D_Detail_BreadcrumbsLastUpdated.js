import { ALL_ROUTES } from "@/utils/ORG/useCheckSlug_ORG"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { checkRouteThirdPage } from "../../../../../utils/ORG/checkRouteThirdPage"
import { useCheckBreadcrumbs } from "../../../../../utils/ORG/useCheckBreadcrumbs"
import { ORG_ST_LastUpdate } from "../../../../../utils/ORG_ST_Review_D"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_BreadcrumbsLastUpdatedWrapper } from "./styles/ORG_D_Detail_BreadcrumbsLastUpdatedWrapper"

export const ORG_D_Detail_BreadcrumbsLastUpdated = ({ thirdpageDataORG }) => {
  const { pathname, query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  const formattedActualRoute = useMemo(() => {
    return `${thirdpageDataORG.fullName.first} ${thirdpageDataORG.fullName.last}`
  }, [])

  let { theURLFormatted } = checkRouteThirdPage(pathname)

  const lastUpdateData = ORG_ST_LastUpdate()

  return (
    <ORG_D_Detail_BreadcrumbsLastUpdatedWrapper>
      <div>
        <Breadcrumbs_D
          whichDisplay={[
            ["Resource Directory", `${ALL_ROUTES.ORG}`],
            [`${titleFormatted}`, `${theURLFormatted}`],
            [`${formattedActualRoute}`, ""],
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
