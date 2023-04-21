import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { LeftArrowSvg, RightArrowSvg } from "../../../../assets/Icons/index.js"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { useORG_Ctx_FetchNoFilters } from "../../../../context/ORG_CtxFetchNoFilters_Provider.js"
import { useShouldTab } from "../../../../utils/ORG_shouldTab.js"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { LinkNoStyle } from "../../../ui/hyperlink/HyperlinkNoStyles.js"
import { STResults_NavigationButtonsNumbers } from "./STResults_NavigationButtonsNumbers.js"
import { NextButton, PrevButton, STResults_FinalButtonsWrapper } from "./styles/SpeechtherapistFinalButtonsWrapper.js"

export const STResults_FinalButtons = ({ widthWindow }) => {
  const [isMobile, setIsMobile] = useState(false)
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()
  const { pagination: paginationMobile, setPagination: setPaginationMobile } = useORG_Ctx_FetchNoFiltersMobile()
  const router = useRouter()
  const { pathname } = router

  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  const toPreviousMobile = () => {
    setPaginationMobile((prevState) => {
      if (paginationMobile > 1) return paginationMobile - 1
      else return prevState
    })
  }

  useEffect(() => {
    if (widthWindow <= 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [widthWindow])

  const shouldTab = useShouldTab()

  return (
    <STResults_FinalButtonsWrapper isMobile={isMobile}>
      {isMobile === false ? (
        <>
          {pagination === 1 ? (
            <PrevButton
              onClick={() => toPrevious()}
              isMobile={isMobile}
              tabIndex={shouldTab}>
              <>
                <LeftArrowSvg />
                <P bold>Previous</P>
              </>
            </PrevButton>
          ) : (
            <LinkNoStyle
              href="#topOfSTL"
              as={pathname}>
              <PrevButton
                onClick={() => toPrevious()}
                isMobile={isMobile}
                tabIndex={shouldTab}>
                <>
                  <LeftArrowSvg />
                  <P bold>Previous</P>
                </>
              </PrevButton>
            </LinkNoStyle>
          )}
        </>
      ) : (
        <>
          {" "}
          {pagination === 1 ? (
            <PrevButton
              onClick={() => toPreviousMobile()}
              isMobile={isMobile}
              tabIndex={shouldTab}>
              <>
                <LeftArrowSvg />
              </>
            </PrevButton>
          ) : (
            <LinkNoStyle
              href="#topOfSTL"
              as={pathname}
              tabIndex={shouldTab}>
              <PrevButton
                onClick={() => toPreviousMobile()}
                isMobile={isMobile}
                tabIndex={shouldTab}>
                <>
                  <LeftArrowSvg />
                </>
              </PrevButton>
            </LinkNoStyle>
          )}
        </>
      )}

      <STResults_NavigationButtonsNumbers isMobile={isMobile} />

      {isMobile === false ? (
        <>
          <LinkNoStyle
            href="#topOfSTL"
            as={pathname}
            tabIndex={shouldTab}>
            <NextButton
              onClick={() => setPagination(pagination + 1)}
              isMobile={isMobile}
              tabIndex={shouldTab}>
              <>
                <P bold>Next</P>
                <RightArrowSvg />
              </>
            </NextButton>
          </LinkNoStyle>
        </>
      ) : (
        <>
          <LinkNoStyle
            href="#topOfSTL"
            as={pathname}
            tabIndex={shouldTab}>
            <NextButton
              onClick={() => setPaginationMobile(paginationMobile + 1)}
              isMobile={isMobile}
              tabIndex={shouldTab}>
              <>
                <RightArrowSvg />
              </>
            </NextButton>
          </LinkNoStyle>
        </>
      )}
    </STResults_FinalButtonsWrapper>
  )
}
