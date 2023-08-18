import { LeftArrowSvg, RightArrowSvg } from "../../../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../../ui/hyperlink/HyperlinkNoStyles"
import { DAY_D_Results_NavigationButtonsNumbers } from "./DAY_D_Results_NavigationButtonsNumbers"
import {
  DAY_D_Results_FinalButtonWrapper,
  DAY_D_Results_FinalButtonsNextButton_W,
  DAY_D_Results_FinalButtonsPrevButton_W
} from "./styles/DAY_D_Results_FinalButtonWrapper"

export const DAY_D_Results_FinalButton = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <DAY_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <DAY_D_Results_FinalButtonsPrevButton_W onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </DAY_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <DAY_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <DAY_D_Results_FinalButtonsNextButton_W onClick={() => setPagination(pagination + 1)}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </DAY_D_Results_FinalButtonsNextButton_W>
      </LinkNoStyle>
    </DAY_D_Results_FinalButtonWrapper>
  )
}
