import { LeftArrowSvg, RightArrowSvg } from "../../../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../../ui/hyperlink/HyperlinkNoStyles"
import { LT_D_Results_NavigationButtonsNumbers } from "./LT_D_Results_NavigationButtonsNumbers"
import {
  LT_D_Results_FinalButtonWrapper,
  LT_D_Results_FinalButtonsPrevButton_W
} from "./styles/LT_D_Results_FinalButtonWrapper"

export const LT_D_Results_FinalButton = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <LT_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <LT_D_Results_FinalButtonsPrevButton_W onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </LT_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <LT_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <LT_D_Results_FinalButtonsPrevButton_W onClick={() => setPagination(pagination + 1)}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </LT_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>
    </LT_D_Results_FinalButtonWrapper>
  )
}
