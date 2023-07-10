import { useRouter } from "next/router.js"
import { LeftArrowSvg, RightArrowSvg } from "../../../../../assets/Icons/index.js"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
import { useShouldTab } from "../../../../../utils/ORG_shouldTab.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles.js"
import { ST_D_Results_NavigationButtonsNumbers } from "./ST_D_Results_NavigationButtonsNumbers.js"
import {
  ST_D_Results_FinalButtonsNextButton,
  ST_D_Results_FinalButtonsPrevButton,
  ST_D_Results_FinalButtonsWrapper
} from "./styles/ST_D_Results_FinalButtonsWrapper.js"

export const ST_D_Results_FinalButtons = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()
  const { pathname } = useRouter()
  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  const shouldTab = useShouldTab()

  return (
    <ST_D_Results_FinalButtonsWrapper>
      {pagination === 1 ? (
        <ST_D_Results_FinalButtonsPrevButton
          onClick={() => toPrevious()}
          tabIndex={shouldTab}>
          <>
            <LeftArrowSvg />
            <P bold>Previous</P>
          </>
        </ST_D_Results_FinalButtonsPrevButton>
      ) : (
        <LinkNoStyle
          href="#topOfSTL"
          as={pathname}>
          <ST_D_Results_FinalButtonsPrevButton
            onClick={() => toPrevious()}
            tabIndex={shouldTab}>
            <>
              <LeftArrowSvg />
              <P bold>Previous</P>
            </>
          </ST_D_Results_FinalButtonsPrevButton>
        </LinkNoStyle>
      )}

      <ST_D_Results_NavigationButtonsNumbers />

      <LinkNoStyle
        href="#topOfSTL"
        as={pathname}
        tabIndex={shouldTab}>
        <ST_D_Results_FinalButtonsNextButton
          onClick={() => setPagination(pagination + 1)}
          tabIndex={shouldTab}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </ST_D_Results_FinalButtonsNextButton>
      </LinkNoStyle>
    </ST_D_Results_FinalButtonsWrapper>
  )
}
