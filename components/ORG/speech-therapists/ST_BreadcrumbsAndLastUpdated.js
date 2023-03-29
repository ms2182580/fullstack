import { Breadcrumbs } from "../../ui/breadcrumbs/Breadcrumbs"
import { ST_BreadcrumbsAndLastUpdatedWrapper } from './styles/ST_BreadcrumbsAndLastUpdatedWrapper.js'
import { ST_PageLastUpdated } from "./ST_PageLastUpdated"


export const ST_BreadcrumbsAndLastUpdated = () => {
  return (
    <ST_BreadcrumbsAndLastUpdatedWrapper>
      <Breadcrumbs
        whichDisplay={[
          ["Resource Directory", "ORG"],
          ["Speech Therapist", ""]
        ]}
      />
      
      <ST_PageLastUpdated/>
    </ST_BreadcrumbsAndLastUpdatedWrapper>
  )
}