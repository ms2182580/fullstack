import { Breadcrumbs_D } from "../../ui/breadcrumbs/desktop/Breadcrumbs_D"
import { ST_PageLastUpdated } from "./ST_PageLastUpdated"
import { ST_D_BreadcrumbsAndLastUpdatedWrapper } from './styles/ST_D_BreadcrumbsAndLastUpdatedWrapper.js'


export const ST_D_BreadcrumbsAndLastUpdated = () => {
  return (
    <ST_D_BreadcrumbsAndLastUpdatedWrapper>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          ["Speech Therapist", ""]
        ]}
      />

      <ST_PageLastUpdated />
    </ST_D_BreadcrumbsAndLastUpdatedWrapper>
  )
}