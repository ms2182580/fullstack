import { useRouter } from "next/router.js"
import { useState } from "react"
import { checkRouteThirdPage } from "../../../../../../../utils/ORG/checkRouteThirdPage.js"
import { useCheckBreadcrumbs } from "../../../../../../../utils/ORG/useCheckBreadcrumbs.js"
import { ORG_ST_LastUpdate } from "../../../../../../../utils/ORG_ST_Review_D.js"
import { capitalizeWords } from "../../../../../../../utils/capitalizeWords.js"
import { Breadcrumbs_D } from "../../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_SLP_D_BreadcrumbsLastUpdatedWrapper } from "./styles/ST_SLP_D_BreadcrumbsLastUpdatedWrapper.js"

export const ST_SLP_D_BreadcrumbsLastUpdated = ({ thirdpageDataORG }) => {
  const { pathname, query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  const [formattedActualRoute, setFormattedActualRoute] = useState(capitalizeWords(thirdpageDataORG.card.rightPart.thirdPageData.folderName))

  let URLFormatted = checkRouteThirdPage(pathname)

  const lastUpdateData = ORG_ST_LastUpdate()

  return (
    <ST_SLP_D_BreadcrumbsLastUpdatedWrapper>
      <div>
        <Breadcrumbs_D
          whichDisplay={[
            ["Resource Directory", "ORG"],
            [`${titleFormatted}`, `${URLFormatted}`],
            [`${formattedActualRoute}`, ""],
          ]}
        />
      </div>

      <div>
        <P>Page last updated on {lastUpdateData}
        </P>
        <P bold>ID #: 36547292</P>
      </div>
    </ST_SLP_D_BreadcrumbsLastUpdatedWrapper>
  )
}
