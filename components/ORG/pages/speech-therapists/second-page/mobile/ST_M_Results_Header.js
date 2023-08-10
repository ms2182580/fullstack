import { BackArrow } from "../../../../../../assets/Icons/index.js"
import { Caption } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { LinkNoStyle } from "../../../../../ui/hyperlink/HyperlinkNoStyles.js"
import { ST_M_Results_HeaderWrapper } from "./styles/ST_M_Results_HeaderWrapper.js"

export const ST_M_Results_Header = () => {
  return (
    <ST_M_Results_HeaderWrapper>
      <LinkNoStyle href="/ORG/">
        <BackArrow />
        <Caption bolder>Back to Search</Caption>
      </LinkNoStyle>
    </ST_M_Results_HeaderWrapper>
  )
}
