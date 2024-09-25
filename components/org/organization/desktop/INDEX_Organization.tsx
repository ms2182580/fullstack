import { Organization_Hero_D } from "./Organization_Hero_D"
import { INDEX_OrganizationNWrapper } from "./styles/INDEX_OrganizationNWrapper"
import { Organization_Resource_D } from "./Organization_Resource_D"
import { Organization_Feature_D } from "./Organization_Feature_D"
import { Organization_Dive_Right_D } from "./Organization_Dive_Right_D"
import { Organization_About_Oddy_D } from "./Organization_About_Oddy_D"
import { Organization_Subscription_D } from "./Organization_Subscription_D"

export const INDEX_Organization = () => {
  return (
    <INDEX_OrganizationNWrapper>
      <Organization_Hero_D />
      <Organization_Resource_D />
      <Organization_Feature_D />
      <Organization_Dive_Right_D />
      <Organization_About_Oddy_D />
      <Organization_Subscription_D />
    </INDEX_OrganizationNWrapper>
  )
}
