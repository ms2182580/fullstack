import { LeftArrowSvg, RightArrowSvg } from "../../../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../../ui/hyperlink/HyperlinkNoStyles"
import { SES_D_Results_NavigationButtonsNumbers } from "./SES_D_Results_NavigationButtonsNumbers"
import {
  SES_D_Results_FinalButtonWrapper,
  SES_D_Results_FinalButtonsNextButton_W,
  SES_D_Results_FinalButtonsPrevButton_W
} from "./styles/SES_D_Results_FinalButtonWrapper"


export const SES_D_Results_FinalButton = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <SES_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <SES_D_Results_FinalButtonsPrevButton_W onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </SES_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <SES_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <SES_D_Results_FinalButtonsNextButton_W onClick={() => setPagination(pagination + 1)}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </SES_D_Results_FinalButtonsNextButton_W>
      </LinkNoStyle>
    </SES_D_Results_FinalButtonWrapper>
  )
}
