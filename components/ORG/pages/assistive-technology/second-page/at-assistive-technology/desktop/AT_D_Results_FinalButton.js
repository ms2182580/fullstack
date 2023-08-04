import { useRouter } from "next/router"
import { LeftArrowSvg, RightArrowSvg } from "../../../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../../ui/hyperlink/HyperlinkNoStyles"
import { AT_D_Results_NavigationButtonsNumbers } from "./AT_D_Results_NavigationButtonsNumbers"
import {
  AT_D_Results_FinalButtonWrapper,
  AT_D_Results_FinalButtonsNextButton_W,
  AT_D_Results_FinalButtonsPrevButton_W
} from "./styles/AT_D_Results_FinalButtonWrapper"

export const AT_D_Results_FinalButton = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()
  const { pathname } = useRouter()

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <AT_D_Results_FinalButtonWrapper>
      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <AT_D_Results_FinalButtonsPrevButton_W onClick={() => toPrevious()}>
          <LeftArrowSvg />
          <P bold>Previous</P>
        </AT_D_Results_FinalButtonsPrevButton_W>
      </LinkNoStyle>

      <AT_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfORG"
      // as={pathname}
      >
        <AT_D_Results_FinalButtonsNextButton_W onClick={() => setPagination(pagination + 1)}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </AT_D_Results_FinalButtonsNextButton_W>
      </LinkNoStyle>
    </AT_D_Results_FinalButtonWrapper>
  )
}
