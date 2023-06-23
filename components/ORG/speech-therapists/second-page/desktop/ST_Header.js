import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_SearchComponent } from "../../../inputs/desktop/ST_D_SearchComponent.js"
import { ST_HeaderWrapper } from "./styles/ST_HeaderWrapper.js"

export const ST_Header = ({ isSecondPage = false, isThirdPage = false }) => {
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
      <ST_D_SearchComponent />
    </ST_HeaderWrapper>
  )
}
