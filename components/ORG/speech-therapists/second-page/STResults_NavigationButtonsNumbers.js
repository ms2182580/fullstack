import { useRouter } from "next/router"
import { Fragment } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../context/ORG_CtxFetchNoFiltersMobile_Provider"
import { useORG_Ctx_FetchNoFilters } from "../../../../context/ORG_CtxFetchNoFilters_Provider"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../ui/hyperlink/HyperlinkNoStyles"
import { NumberPage } from "./styles/SpeechtherapistFinalButtonsWrapper"

export const STResults_NavigationButtonsNumbers = ({ isMobile = false }) => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()
  const { pagination: paginationMobile, setPagination: setPaginationMobile } = useORG_Ctx_FetchNoFiltersMobile()
  let amountOfPagesToClick = Array(3).fill(0)

  const router = useRouter()
  const { pathname } = router

  const shouldTab = useShouldTab()

  if (isMobile === false) {
    if (pagination < 3) {
      return (
        <div>
          {amountOfPagesToClick.map((x, i) => {
            const toMoveToThatPage = i + 1
            if (pagination === i + 1) {
              return (
                <Fragment key={i}>
                  <NumberPage
                    isActive
                    tabIndex={shouldTab}>
                    <P bold> {i + 1}</P>
                  </NumberPage>
                </Fragment>
              )
            }

            return (
              <Fragment key={i}>
                <LinkNoStyle
                  href="#topOfSTL"
                  as={pathname}
                  tabIndex={shouldTab}>
                  <NumberPage
                    onClick={() => setPagination(toMoveToThatPage)}
                    tabIndex={shouldTab}>
                    <P bold> {i + 1}</P>
                  </NumberPage>
                </LinkNoStyle>
              </Fragment>
            )
          })}
        </div>
      )
    } else if (pagination >= 3) {
      return (
        <div>
          {amountOfPagesToClick.map((x, i) => {
            let whereToStart = pagination - 1
            let theNewOrder = Array(3)
              .fill(0)
              .map((x, i) => {
                return i + whereToStart
              })

            if (i === 0) {
              return (
                <Fragment key={i}>
                  <LinkNoStyle
                    href="#topOfSTL"
                    as={pathname}
                    tabIndex={shouldTab}>
                    <NumberPage
                      onClick={() => setPagination(theNewOrder[0])}
                      tabIndex={shouldTab}>
                      <P bold> {theNewOrder[i]}</P>
                    </NumberPage>
                  </LinkNoStyle>
                </Fragment>
              )
            }

            if (i === 1) {
              return (
                <Fragment key={i}>
                  <NumberPage
                    isActive
                    tabIndex={shouldTab}>
                    <P bold> {theNewOrder[i]}</P>
                  </NumberPage>
                </Fragment>
              )
            }

            if (i === 2) {
              return (
                <Fragment key={i}>
                  <LinkNoStyle
                    href="#topOfSTL"
                    as={pathname}
                    tabIndex={shouldTab}>
                    <NumberPage
                      onClick={() => setPagination(theNewOrder[2])}
                      tabIndex={shouldTab}>
                      <P bold> {theNewOrder[i]}</P>
                    </NumberPage>
                  </LinkNoStyle>
                </Fragment>
              )
            }
          })}
        </div>
      )
    }
  }

  if (isMobile) {
    if (paginationMobile < 3) {
      return (
        <div>
          {amountOfPagesToClick.map((x, i) => {
            const toMoveToThatPage = i + 1
            if (paginationMobile === i + 1) {
              return (
                <Fragment key={i}>
                  <NumberPage isActive>
                    <P bold> {i + 1}</P>
                  </NumberPage>
                </Fragment>
              )
            }

            return (
              <Fragment key={i}>
                <LinkNoStyle
                  href="#topOfSTL"
                  as={pathname}>
                  <NumberPage onClick={() => setPaginationMobile(toMoveToThatPage)}>
                    <P bold> {i + 1}</P>
                  </NumberPage>
                </LinkNoStyle>
              </Fragment>
            )
          })}
        </div>
      )
    } else if (paginationMobile >= 3) {
      return (
        <div>
          {amountOfPagesToClick.map((x, i) => {
            let whereToStart = paginationMobile - 1
            let theNewOrder = Array(3)
              .fill(0)
              .map((x, i) => {
                return i + whereToStart
              })

            if (i === 0) {
              return (
                <Fragment key={i}>
                  <LinkNoStyle
                    href="#topOfSTL"
                    as={pathname}>
                    <NumberPage onClick={() => setPaginationMobile(theNewOrder[0])}>
                      <P bold> {theNewOrder[i]}</P>
                    </NumberPage>
                  </LinkNoStyle>
                </Fragment>
              )
            }

            if (i === 1) {
              return (
                <Fragment key={i}>
                  <NumberPage isActive>
                    <P bold> {theNewOrder[i]}</P>
                  </NumberPage>
                </Fragment>
              )
            }

            if (i === 2) {
              return (
                <Fragment key={i}>
                  <LinkNoStyle
                    href="#topOfSTL"
                    as={pathname}>
                    <NumberPage onClick={() => setPaginationMobile(theNewOrder[2])}>
                      <P bold> {theNewOrder[i]}</P>
                    </NumberPage>
                  </LinkNoStyle>
                </Fragment>
              )
            }
          })}
        </div>
      )
    }
  }
}
