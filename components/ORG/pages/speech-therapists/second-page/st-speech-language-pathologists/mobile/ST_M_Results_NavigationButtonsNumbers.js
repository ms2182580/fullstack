import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { useShouldTab } from "../../../../../../../utils/ORG_shouldTab.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Results_FinalButtonsNumberPageWrapper } from "./styles/ST_M_Results_FinalButtonsWrapper.js"

export const ST_M_Results_NavigationButtonsNumbers = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersMobile()

  const [amountOfPagesToClick, setAmountOfPagesToClick] = useState(Array(3).fill(0))

  const { pathname, push } = useRouter()
  const shouldTab = useShouldTab()

  const toTop = () => {
    push(`${pathname}#topOfSTL`)
  }

  if (pagination < 3) {
    return (
      <div>
        {amountOfPagesToClick.map((x, i) => {
          const toMoveToThatPage = i + 1
          if (pagination === i + 1) {
            return (
              <Fragment key={i}>
                <ST_M_Results_FinalButtonsNumberPageWrapper
                  isActive
                  tabIndex={shouldTab}>
                  <P bold> {i + 1}</P>
                </ST_M_Results_FinalButtonsNumberPageWrapper>
              </Fragment>
            )
          }

          return (
            <Fragment key={i}>
              <ST_M_Results_FinalButtonsNumberPageWrapper
                onClick={() => {
                  setPagination(toMoveToThatPage)
                  toTop()
                }}
                tabIndex={shouldTab}>
                <P bold> {i + 1}</P>
              </ST_M_Results_FinalButtonsNumberPageWrapper>
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
                <ST_M_Results_FinalButtonsNumberPageWrapper
                  onClick={() => {
                    setPagination(theNewOrder[0])
                    toTop()
                  }}
                  tabIndex={shouldTab}>
                  <P bold> {theNewOrder[i]}</P>
                </ST_M_Results_FinalButtonsNumberPageWrapper>
              </Fragment>
            )
          }

          if (i === 1) {
            return (
              <Fragment key={i}>
                <ST_M_Results_FinalButtonsNumberPageWrapper
                  isActive
                  tabIndex={shouldTab}>
                  <P bold> {theNewOrder[i]}</P>
                </ST_M_Results_FinalButtonsNumberPageWrapper>
              </Fragment>
            )
          }

          if (i === 2) {
            return (
              <Fragment key={i}>
                <ST_M_Results_FinalButtonsNumberPageWrapper
                  onClick={() => {
                    setPagination(theNewOrder[2])
                    toTop()
                  }}
                  tabIndex={shouldTab}>
                  <P bold> {theNewOrder[i]}</P>
                </ST_M_Results_FinalButtonsNumberPageWrapper>
              </Fragment>
            )
          }
        })}
      </div>
    )
  }
}
