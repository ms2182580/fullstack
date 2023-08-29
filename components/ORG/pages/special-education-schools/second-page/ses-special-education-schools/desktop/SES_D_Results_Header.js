import { useRouter } from "next/router.js"
import { useCheckBreadcrumbs } from "../../../../../../../utils/ORG/useCheckBreadcrumbs.js"
import { Breadcrumbs_D } from "../../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { SES_D_Results_HeaderWrapper } from "./styles/SES_D_Results_HeaderWrapper.js"

export const SES_D_Results_Header = () => {
  const { query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  return (
    <SES_D_Results_HeaderWrapper>
      <P bold dark_gray>Search for {titleFormatted}</P>

      <Breadcrumbs_D whichDisplay={[
        ["Resource Directory", "ORG"],
        [`${titleFormatted}`, ""]
      ]} />
    </SES_D_Results_HeaderWrapper>
  )
}

