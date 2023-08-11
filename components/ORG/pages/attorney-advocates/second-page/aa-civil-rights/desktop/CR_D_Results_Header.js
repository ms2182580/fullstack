import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { DATA_ORG_D } from "../../../../../../../utils/ORG/DATA_ORG_D.js"
import { Breadcrumbs_D } from "../../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { CR_D_Results_HeaderWrapper } from "./styles/CR_D_Results_HeaderWrapper.js"

export const CR_D_Results_Header = () => {
  const [breadcrumbsState, setBreadcrumbsState] = useState(null)
  const route = useRouter()

  useEffect(() => {
    const theAcronym = route.asPath.split("/")[2]
    let findIndex = DATA_ORG_D.findIndex((x) => x.acronym === theAcronym)

    const toBreadcrumbs = DATA_ORG_D[findIndex].nameJSX
    setBreadcrumbsState(toBreadcrumbs)
  }, [])

  return (
    <CR_D_Results_HeaderWrapper>
      <P bold dark_gray>Search for {breadcrumbsState}</P>

      <Breadcrumbs_D whichDisplay={[
        ["Resource Directory", "ORG"],
        [`${breadcrumbsState}`, ""]
      ]} />
    </CR_D_Results_HeaderWrapper>
  )
}

