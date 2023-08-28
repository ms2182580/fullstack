import { LeftArrowSvg, RightArrowSvg } from "../../../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../../ui/hyperlink/HyperlinkNoStyles"
import { A_D_Results_NavigationButtonsNumbers } from "./A_D_Results_NavigationButtonsNumbers"
import {
  A_D_Results_FinalButtonWrapper,
  A_D_Results_FinalButtonsNextButton_W,
  A_D_Results_FinalButtonsPrevButton_W
} from "./styles/A_D_Results_FinalButtonWrapper"

export const A_D_Results_FinalButton = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <A_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <A_D_Results_FinalButtonsPrevButton_W onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </A_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <A_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <A_D_Results_FinalButtonsNextButton_W onClick={() => setPagination(pagination + 1)}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </A_D_Results_FinalButtonsNextButton_W>
      </LinkNoStyle>
    </A_D_Results_FinalButtonWrapper>
  )
}
