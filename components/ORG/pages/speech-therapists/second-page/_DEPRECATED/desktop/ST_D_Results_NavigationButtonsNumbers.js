import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { useShouldTab } from "../../../../../../utils/ORG_shouldTab"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../ui/hyperlink/HyperlinkNoStyles"
import { ST_D_Results_FinalButtonsNumberPageWrapper } from "./styles/ST_D_Results_FinalButtonsWrapper"

export const ST_D_Results_NavigationButtonsNumbers = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const [amountOfPagesToClick, setAmountOfPagesToClick] = useState(Array(3).fill(0))

  const { pathname } = useRouter()

  const shouldTab = useShouldTab()

  if (pagination < 3) {
    return (
      <div>
        {amountOfPagesToClick.map((x, i) => {
          const toMoveToThatPage = i + 1
          if (pagination === i + 1) {
            return (
              <Fragment key={i}>
                <ST_D_Results_FinalButtonsNumberPageWrapper
                  isActive
                  tabIndex={shouldTab}>
                  <P bold> {i + 1}</P>
                </ST_D_Results_FinalButtonsNumberPageWrapper>
              </Fragment>
            )
          }

          return (
            <Fragment key={i}>
              <LinkNoStyle
                href="#topOfSTL"
                as={pathname}
                tabIndex={shouldTab}>
                <ST_D_Results_FinalButtonsNumberPageWrapper
                  onClick={() => setPagination(toMoveToThatPage)}
                  tabIndex={shouldTab}>
                  <P bold> {i + 1}</P>
                </ST_D_Results_FinalButtonsNumberPageWrapper>
              </LinkNoStyle>
            </Fragment>
          )
        })}
      </div>
    )
  }

  if (pagination >= 3) {
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
                  <ST_D_Results_FinalButtonsNumberPageWrapper
                    onClick={() => setPagination(theNewOrder[0])}
                    tabIndex={shouldTab}>
                    <P bold> {theNewOrder[i]}</P>
                  </ST_D_Results_FinalButtonsNumberPageWrapper>
                </LinkNoStyle>
              </Fragment>
            )
          }

          if (i === 1) {
            return (
              <Fragment key={i}>
                <ST_D_Results_FinalButtonsNumberPageWrapper
                  isActive
                  tabIndex={shouldTab}>
                  <P bold> {theNewOrder[i]}</P>
                </ST_D_Results_FinalButtonsNumberPageWrapper>
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
                  <ST_D_Results_FinalButtonsNumberPageWrapper
                    onClick={() => setPagination(theNewOrder[2])}
                    tabIndex={shouldTab}>
                    <P bold> {theNewOrder[i]}</P>
                  </ST_D_Results_FinalButtonsNumberPageWrapper>
                </LinkNoStyle>
              </Fragment>
            )
          }
        })}
      </div>
    )
  }
}
