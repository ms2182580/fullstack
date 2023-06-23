import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { STDesktop_SearchComponent } from "../../../inputs/desktop/STDesktop_SearchComponent.js"
import { ST_HeaderWrapper } from "./styles/ST_HeaderWrapper.js"

export const ST_Header = () => {
  return (
    <ST_HeaderWrapper>
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
      <STDesktop_SearchComponent />
    </ST_HeaderWrapper>
  )
}
