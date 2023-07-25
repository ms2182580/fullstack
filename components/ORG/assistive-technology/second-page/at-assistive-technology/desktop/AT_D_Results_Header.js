import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { DATA_ORG_D } from "../../../../../../utils/DATA_ORG_D.js"
import { Breadcrumbs_D } from "../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { AT_D_Results_HeaderWrapper } from "./styles/AT_D_Results_HeaderWrapper.js"

export const AT_D_Results_Header = () => {
  const [breadcrumbsState, setBreadcrumbsState] = useState(null)
  const route = useRouter()

  useEffect(() => {
    const theAcronym = route.asPath.split("/")[2]
    let findIndex = DATA_ORG_D.findIndex((x) => x.acronym === theAcronym)

    const toBreadcrumbs = DATA_ORG_D[findIndex].nameJSX
    setBreadcrumbsState(toBreadcrumbs)
  }, [])

  return (
    <AT_D_Results_HeaderWrapper>
      <P bold dark_gray>Search for {breadcrumbsState}</P>

      <Breadcrumbs_D whichDisplay={[
        ["Resource Directory", "ORG"],
        [`${breadcrumbsState}`, ""]
      ]} />
    </AT_D_Results_HeaderWrapper>
  )
}

