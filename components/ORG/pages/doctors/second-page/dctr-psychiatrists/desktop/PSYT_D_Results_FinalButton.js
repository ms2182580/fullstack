import { LeftArrowSvg, RightArrowSvg } from "../../../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../../ui/hyperlink/HyperlinkNoStyles"
import { PSYT_D_Results_NavigationButtonsNumbers } from "./PSYT_D_Results_NavigationButtonsNumbers"
import {
  PSYT_D_Results_FinalButtonWrapper,
  PSYT_D_Results_FinalButtonsNextButton_W,
  PSYT_D_Results_FinalButtonsPrevButton_W
} from "./styles/PSYT_D_Results_FinalButtonWrapper"

export const PSYT_D_Results_FinalButton = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <PSYT_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <PSYT_D_Results_FinalButtonsPrevButton_W onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </PSYT_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <PSYT_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <PSYT_D_Results_FinalButtonsNextButton_W onClick={() => setPagination(pagination + 1)}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </PSYT_D_Results_FinalButtonsNextButton_W>
      </LinkNoStyle>
    </PSYT_D_Results_FinalButtonWrapper>
  )
}
