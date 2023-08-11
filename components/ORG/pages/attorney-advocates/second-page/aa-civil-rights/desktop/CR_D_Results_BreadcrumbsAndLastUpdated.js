import { useRouter } from 'next/router.js'
import { useEffect, useState } from 'react'
import { DATA_ORG_D } from '../../../../../../../utils/ORG/DATA_ORG_D.js'
import { Breadcrumbs_D } from '../../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js'
import { CR_D_Results_BreadcrumbsAndLastUpdatedWrapper } from './styles/CR_D_Results_BreadcrumbsAndLastUpdatedWrapper.js'

export const CR_D_Results_BreadcrumbsAndLastUpdated = () => {
  const [breadcrumbsState, setBreadcrumbsState] = useState(null)
  const route = useRouter()

  useEffect(() => {
    const theAcronym = route.asPath.split("/")[2]
    let findIndex = DATA_ORG_D.findIndex((x) => x.acronym === theAcronym)

    const toBreadcrumbs = DATA_ORG_D[findIndex].nameJSX
    setBreadcrumbsState(toBreadcrumbs)
  }, [])

  return (
    <CR_D_Results_BreadcrumbsAndLastUpdatedWrapper>
      <Breadcrumbs_D whichDisplay={[
        ["Resource Directory", "ORG"],
        [`${breadcrumbsState}`, ""]
      ]} />
    </CR_D_Results_BreadcrumbsAndLastUpdatedWrapper>
  )
}