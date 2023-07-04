import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"
import { ST_D_Results_PageLastUpdated } from "./ST_D_Results_PageLastUpdated"
import { ST_D_Results_BreadcrumbsAndLastUpdatedWrapper } from './styles/ST_D_Results_BreadcrumbsAndLastUpdatedWrapper.js'


export const ST_D_Results_BreadcrumbsAndLastUpdated = () => {
  return (
    <ST_D_Results_BreadcrumbsAndLastUpdatedWrapper>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          ["Speech Therapist", ""]
        ]}
      />

      <ST_D_Results_PageLastUpdated />
    </ST_D_Results_BreadcrumbsAndLastUpdatedWrapper>
  )
}