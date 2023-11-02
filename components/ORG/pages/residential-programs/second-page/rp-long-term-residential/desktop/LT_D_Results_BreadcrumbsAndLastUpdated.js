import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { DATA_ORG_D } from "../../../../../../../utils/ORG/DATA_ORG_D"
import { Breadcrumbs_D } from "../../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"

export const LT_D_Results_BreadcrumbsAndLastUpdated = () => {
  const [breadcrumbsState, setBreadcrumbsState] = useState(null)
  const route = useRouter()

  useEffect(() => {
    const theAcronym = route.asPath.split("/")[2]
    let findIndex = DATA_ORG_D.findIndex((x) => x.acronym === theAcronym)

    const toBreadcrumbs = DATA_ORG_D[findIndex].nameJSX
    setBreadcrumbsState(toBreadcrumbs)
  }, [])

  return (
    <>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          [`${breadcrumbsState}`, ""],
        ]}
      />
    </>
  )
}
