import { Fragment } from "react"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { NumberPage } from "./styles/SpeechtherapistFinalButtonsWrapper"

/* 
!FH 3

°) When the user click in some number of pagination, that actual pagination should be retrieved. Maybe use setPagination([INDEX-HERE])

°) When the user click in next and the pagination is three or more, the number should change to the respective number, being the central button the active one


°) After every click on the numbers, the view of the user will have to move to the top of the speech therapists
*/

export const NavigationButtonsNumbers = ({ pagination, setPagination }) => {
  let amountOfPagesToClick = Array(3).fill(0)

  const moveToTop = () => {}

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

  // return (
  //   <div>
  //     {amountOfPagesToClick.map((x, i) => {
  //       const toMoveToThatPage = i + 1
  //       console.log('toMoveToThatPage:', toMoveToThatPage)
  //       console.log('pagination:', pagination)

  //       if (pagination === i + 1) {
  //         return (
  //           <Fragment key={i}>
  //             <NumberPage isActive>
  //               <P bold> {i + 1}</P>
  //             </NumberPage>
  //           </Fragment>
  //         )
  //       }

  //       return (
  //         <Fragment key={i}>
  //           <NumberPage onClick={() => setPagination(toMoveToThatPage)}>
  //             <P bold> {i + 1}</P>
  //           </NumberPage>
  //         </Fragment>
  //       )
  //     })}
  //   </div>
  // )
}
