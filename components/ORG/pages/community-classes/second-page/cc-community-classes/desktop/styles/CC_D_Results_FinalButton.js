import { LeftArrowSvg, RightArrowSvg } from "../../../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../../ui/hyperlink/HyperlinkNoStyles"
import { CC_D_Results_NavigationButtonsNumbers } from "./CC_D_Results_NavigationButtonsNumbers"
import {
  CC_D_Results_FinalButtonWrapper,
  CC_D_Results_FinalButtonsNextButton_W,
  CC_D_Results_FinalButtonsPrevButton_W
} from "./styles/CC_D_Results_FinalButtonWrapper"

export const CC_D_Results_FinalButton = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <CC_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <CC_D_Results_FinalButtonsPrevButton_W onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </CC_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <CC_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <CC_D_Results_FinalButtonsNextButton_W onClick={() => setPagination(pagination + 1)}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </CC_D_Results_FinalButtonsNextButton_W>
      </LinkNoStyle>
    </CC_D_Results_FinalButtonWrapper>
  )
}
