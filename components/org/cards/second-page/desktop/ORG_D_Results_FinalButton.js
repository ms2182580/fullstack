import { LeftArrowSvg, RightArrowSvg } from "../../../../../assets/icons"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { ORG_D_Results_NavigationButtonsNumbers } from "./ORG_D_Results_NavigationButtonsNumbers"
import {
  ORG_D_Results_FinalButtonWrapper,
  ORG_D_Results_FinalButtonsNextButton_W,
  ORG_D_Results_FinalButtonsPrevButton_W,
} from "./styles/ORG_D_Results_FinalButtonWrapper"

export const ORG_D_Results_FinalButton = () => {
  return (
    <ORG_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
        // as={pathname}
      >
        <ORG_D_Results_FinalButtonsPrevButton_W>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </ORG_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <ORG_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
        // as={pathname}
      >
        <ORG_D_Results_FinalButtonsNextButton_W>
          <P bold>Next</P>
          <RightArrowSvg />
        </ORG_D_Results_FinalButtonsNextButton_W>
      </LinkNoStyle>
    </ORG_D_Results_FinalButtonWrapper>
  )
}
