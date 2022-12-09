import { Fragment, useEffect } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { ORG_Sortyby } from "../../../utils/ORG_Sortyby"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { NumberPage } from "./styles/SpeechtherapistFinalButtonsWrapper"

export const NavigationButtonsNumbers = () => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFilters()

  let amountOfPagesToClick = Array(3).fill(0)

  if (pagination <= 3) {
    return (
      <div>
        {amountOfPagesToClick.map((x, i) => {
          const toMoveToThatPage = i + 1
          if (pagination === i + 1) {
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
              <LinkNoStyle href="#topOfSTL">
                <NumberPage onClick={() => setPagination(toMoveToThatPage)}>
                  <P bold> {i + 1}</P>
                </NumberPage>
              </LinkNoStyle>
            </Fragment>
          )
        })}
      </div>
    )
  }

  if (pagination > 3) {
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
                <LinkNoStyle href="#topOfSTL">
                  <NumberPage onClick={() => setPagination(theNewOrder[0])}>
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
                <LinkNoStyle href="#topOfSTL">
                  <NumberPage onClick={() => setPagination(theNewOrder[2])}>
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
