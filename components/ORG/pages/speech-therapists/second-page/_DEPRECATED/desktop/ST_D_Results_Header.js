import { Breadcrumbs_D } from "../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_SearchComponent } from "../../../../inputs/desktop/ORG_D_SearchComponent.js"
import { ST_D_Results_HeaderWrapper } from "./styles/ST_D_Results_HeaderWrapper.js"

export const ST_D_Results_Header = () => {
  return (
    <ST_D_Results_HeaderWrapper>
      <P
        bold
        dark_gray>
        Search for Providers
      </P>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          ["Speech Therapist", ""]
        ]}
      />
      <ORG_D_SearchComponent />
    </ST_D_Results_HeaderWrapper>
  )
}
