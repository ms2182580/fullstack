import { useRouter } from "next/router.js"
import { Fragment, useState } from "react"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { LinkNoStyle } from "../../../../../../ui/hyperlink/HyperlinkNoStyles.js"
import { AT_D_Results_FinalButtonsNumberPage_W, CR_D_Results_FinalButtonsNumberPage_W } from "./styles/CR_D_Results_FinalButtonWrapper.js"

export const CR_D_Results_NavigationButtonsNumbers = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()

  const [amountOfPagesToClick, setAmountOfPagesToClick] = useState(Array(3).fill(0))

  const { pathname } = useRouter()

  if (pagination < 3) {
    return (
      <div>
        {amountOfPagesToClick.map((x, i) => {

          const toMoveToThatPage = i + 1

          if (pagination === i + 1) {
            return (
              <Fragment key={i}>
                <CR_D_Results_FinalButtonsNumberPage_W isActive>
                  <P bold> {i + 1}</P>
                </CR_D_Results_FinalButtonsNumberPage_W>
              </Fragment>
            )
          }

          return (
            <Fragment key={i}>
              <LinkNoStyle
                href="#topOfORG"
              // as={pathname}
              >
                <CR_D_Results_FinalButtonsNumberPage_W
                  onClick={() => setPagination(toMoveToThatPage)}
                // tabIndex={shouldTab}
                >
                  <P bold> {i + 1}</P>
                </CR_D_Results_FinalButtonsNumberPage_W>
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
                  href="#topOfORG"
                // as={pathname}
                // tabIndex={shouldTab}
                >
                  <AT_D_Results_FinalButtonsNumberPage_W
                    onClick={() => setPagination(theNewOrder[0])}
                  // tabIndex={shouldTab}
                  >
                    <P bold> {theNewOrder[i]}</P>
                  </AT_D_Results_FinalButtonsNumberPage_W>
                </LinkNoStyle>
              </Fragment>
            )
          }

          if (i === 1) {
            return (
              <Fragment key={i}>
                <AT_D_Results_FinalButtonsNumberPage_W
                  isActive
                // tabIndex={shouldTab}
                >
                  <P bold> {theNewOrder[i]}</P>
                </AT_D_Results_FinalButtonsNumberPage_W>
              </Fragment>
            )
          }

          if (i === 2) {
            return (
              <Fragment key={i}>
                <LinkNoStyle
                  href="#topOfORG"
                // as={pathname}
                // tabIndex={shouldTab}
                >
                  <AT_D_Results_FinalButtonsNumberPage_W
                    onClick={() => setPagination(theNewOrder[2])}
                  // tabIndex={shouldTab}
                  >
                    <P bold> {theNewOrder[i]}</P>
                  </AT_D_Results_FinalButtonsNumberPage_W>
                </LinkNoStyle>
              </Fragment>
            )
          }
        })}
      </div>
    )
  }
}
