import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { LeftArrowSvg, RightArrowSvg } from "../../../../../assets/Icons/index.js"
import { useORG_Ctx_FetchNoFilters } from "../../../../../context/ORG_CtxFetchNoFilters_Provider.js"
import { useShouldTab } from "../../../../../utils/ORG_shouldTab.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles.js"
import { ST_D_Results_NavigationButtonsNumbers } from "./ST_D_Results_NavigationButtonsNumbers.js"
import {
  ST_D_Results_FinalButtonsNextButton,
  ST_D_Results_FinalButtonsPrevButton,
  ST_D_Results_FinalButtonsWrapper
} from "./styles/ST_D_Results_FinalButtonsWrapper.js"


export const ST_D_Results_FinalButtons = ({ widthWindow }) => {
  const [isMobile, setIsMobile] = useState(false)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()
  // const { pagination: paginationMobile, setPagination: setPaginationMobile } = useORG_Ctx_FetchNoFiltersMobile()
  const router = useRouter()
  const { pathname } = router

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  // const toPreviousMobile = () => {
  //   setPaginationMobile((prevState) => {
  //     if (paginationMobile > 1) return paginationMobile - 1
  //     else return prevState
  //   })
  // }

  useEffect(() => {
    if (widthWindow <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [widthWindow])

  const shouldTab = useShouldTab()

  return (
    <ST_D_Results_FinalButtonsWrapper isMobile={isMobile}>
      {isMobile === false ? (
        <>
          {pagination === 1 ? (
            <ST_D_Results_FinalButtonsPrevButton
              onClick={() => toPrevious()}
              isMobile={isMobile}
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
                isMobile={isMobile}
                tabIndex={shouldTab}>
                <>
                  <LeftArrowSvg />
                  <P bold>Previous</P>
                </>
              </ST_D_Results_FinalButtonsPrevButton>
            </LinkNoStyle>
          )}
        </>
      ) : (
        <>
          {" "}
          {pagination === 1 ? (
            <ST_D_Results_FinalButtonsPrevButton
              onClick={() => toPreviousMobile()}
              isMobile={isMobile}
              tabIndex={shouldTab}>
              <>
                <LeftArrowSvg />
              </>
            </ST_D_Results_FinalButtonsPrevButton>
          ) : (
            <LinkNoStyle
              href="#topOfSTL"
              as={pathname}
              tabIndex={shouldTab}>
              <ST_D_Results_FinalButtonsPrevButton
                onClick={() => toPreviousMobile()}
                isMobile={isMobile}
                tabIndex={shouldTab}>
                <>
                  <LeftArrowSvg />
                </>
              </ST_D_Results_FinalButtonsPrevButton>
            </LinkNoStyle>
          )}
        </>
      )}

      <ST_D_Results_NavigationButtonsNumbers isMobile={isMobile} />

      <LinkNoStyle
        href="#topOfSTL"
        as={pathname}
        tabIndex={shouldTab}>
        <ST_D_Results_FinalButtonsNextButton
          onClick={() => setPagination(pagination + 1)}
          isMobile={isMobile}
          tabIndex={shouldTab}>
          <>
            <P bold>Next</P>
            <RightArrowSvg />
          </>
        </ST_D_Results_FinalButtonsNextButton>
      </LinkNoStyle>

      {/* {isMobile === false ? (
        <>
          <LinkNoStyle
            href="#topOfSTL"
            as={pathname}
            tabIndex={shouldTab}>
            <ST_D_Results_FinalButtonsNextButton
              onClick={() => setPagination(pagination + 1)}
              isMobile={isMobile}
              tabIndex={shouldTab}>
              <>
                <P bold>Next</P>
                <RightArrowSvg />
              </>
            </ST_D_Results_FinalButtonsNextButton>
          </LinkNoStyle>
        </>
      ) : (
        <>
          <LinkNoStyle
            href="#topOfSTL"
            as={pathname}
            tabIndex={shouldTab}>
            <ST_D_Results_FinalButtonsNextButton
              onClick={() => setPaginationMobile(paginationMobile + 1)}
              isMobile={isMobile}
              tabIndex={shouldTab}>
              <>
                <RightArrowSvg />
              </>
            </ST_D_Results_FinalButtonsNextButton>
          </LinkNoStyle>
        </>
      )} */}
    </ST_D_Results_FinalButtonsWrapper>
  )
}
