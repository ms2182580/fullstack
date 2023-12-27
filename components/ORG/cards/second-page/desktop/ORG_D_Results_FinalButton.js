import { LeftArrowSvg, RightArrowSvg } from "../../../../../assets/icons2"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { ORG_D_Results_NavigationButtonsNumbers } from "./ORG_D_Results_NavigationButtonsNumbers"
import { ORG_D_Results_FinalButtonWrapper, ORG_D_Results_FinalButtonsNextButton_W, ORG_D_Results_FinalButtonsPrevButton_W } from "./styles/ORG_D_Results_FinalButtonWrapper"

export const ORG_D_Results_FinalButton = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <ORG_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
        // as={pathname}
      >
        <ORG_D_Results_FinalButtonsPrevButton_W onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </ORG_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <ORG_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
        // as={pathname}
      >
        <ORG_D_Results_FinalButtonsNextButton_W onClick={() => setPagination(pagination + 1)}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </ORG_D_Results_FinalButtonsNextButton_W>
      </LinkNoStyle>
    </ORG_D_Results_FinalButtonWrapper>
  )
}
