import { useRouter } from "next/router.js"
import { useCheckBreadcrumbs } from "../../../../../../../utils/ORG/useCheckBreadcrumbs.js"
import { Breadcrumbs_D } from "../../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { DAY_D_Results_HeaderWrapper } from "./styles/DAY_D_Results_HeaderWrapper.js"

export const DAY_D_Results_Header = () => {
  const { query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  return (
    <DAY_D_Results_HeaderWrapper>
      <P
        bold
        dark_gray>
        Search for {titleFormatted}
      </P>

      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          [`${titleFormatted}`, ""],
        ]}
      />
    </DAY_D_Results_HeaderWrapper>
  )
}
