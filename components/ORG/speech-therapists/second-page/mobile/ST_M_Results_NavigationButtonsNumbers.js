import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider"
import { useShouldTab } from "../../../../../utils/ORG_shouldTab"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Results_FinalButtonsNumberPageWrapper } from "./styles/ST_M_Results_FinalButtonsWrapper.js"

export const ST_M_Results_NavigationButtonsNumbers = ({ isMobile = false }) => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersMobile()
  // const { pagination: paginationMobile, setPagination: setPaginationMobile } = useORG_Ctx_FetchNoFiltersMobile()
  const [amountOfPagesToClick, setAmountOfPagesToClick] = useState(Array(3).fill(0))

  // const router = useRouter()
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

  // if (isMobile === false) {
  //   if (pagination < 3) {
  //     return (
  //       <div>
  //         {amountOfPagesToClick.map((x, i) => {
  //           const toMoveToThatPage = i + 1
  //           if (pagination === i + 1) {
  //             return (
  //               <Fragment key={i}>
  //                 <ST_M_Results_FinalButtonsNumberPageWrapper
  //                   isActive
  //                   tabIndex={shouldTab}>
  //                   <P bold> {i + 1}</P>
  //                 </ST_M_Results_FinalButtonsNumberPageWrapper>
  //               </Fragment>
  //             )
  //           }

  //           return (
  //             <Fragment key={i}>
  //               <LinkNoStyle
  //                 href="#topOfSTL"
  //                 as={pathname}
  //                 tabIndex={shouldTab}>
  //                 <ST_M_Results_FinalButtonsNumberPageWrapper
  //                   onClick={() => setPagination(toMoveToThatPage)}
  //                   tabIndex={shouldTab}>
  //                   <P bold> {i + 1}</P>
  //                 </ST_M_Results_FinalButtonsNumberPageWrapper>
  //               </LinkNoStyle>
  //             </Fragment>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (pagination >= 3) {
  //     return (
  //       <div>
  //         {amountOfPagesToClick.map((x, i) => {
  //           let whereToStart = pagination - 1
  //           let theNewOrder = Array(3)
  //             .fill(0)
  //             .map((x, i) => {
  //               return i + whereToStart
  //             })

  //           if (i === 0) {
  //             return (
  //               <Fragment key={i}>
  //                 <LinkNoStyle
  //                   href="#topOfSTL"
  //                   as={pathname}
  //                   tabIndex={shouldTab}>
  //                   <ST_M_Results_FinalButtonsNumberPageWrapper
  //                     onClick={() => setPagination(theNewOrder[0])}
  //                     tabIndex={shouldTab}>
  //                     <P bold> {theNewOrder[i]}</P>
  //                   </ST_M_Results_FinalButtonsNumberPageWrapper>
  //                 </LinkNoStyle>
  //               </Fragment>
  //             )
  //           }

  //           if (i === 1) {
  //             return (
  //               <Fragment key={i}>
  //                 <ST_M_Results_FinalButtonsNumberPageWrapper
  //                   isActive
  //                   tabIndex={shouldTab}>
  //                   <P bold> {theNewOrder[i]}</P>
  //                 </ST_M_Results_FinalButtonsNumberPageWrapper>
  //               </Fragment>
  //             )
  //           }

  //           if (i === 2) {
  //             return (
  //               <Fragment key={i}>
  //                 <LinkNoStyle
  //                   href="#topOfSTL"
  //                   as={pathname}
  //                   tabIndex={shouldTab}>
  //                   <ST_M_Results_FinalButtonsNumberPageWrapper
  //                     onClick={() => setPagination(theNewOrder[2])}
  //                     tabIndex={shouldTab}>
  //                     <P bold> {theNewOrder[i]}</P>
  //                   </ST_M_Results_FinalButtonsNumberPageWrapper>
  //                 </LinkNoStyle>
  //               </Fragment>
  //             )
  //           }
  //         })}
  //       </div>
  //     )
  //   }
  // }

  // if (isMobile) {
  //   if (paginationMobile < 3) {
  //     return (
  //       <div>
  //         {amountOfPagesToClick.map((x, i) => {
  //           const toMoveToThatPage = i + 1
  //           if (paginationMobile === i + 1) {
  //             return (
  //               <Fragment key={i}>
  //                 <ST_M_Results_FinalButtonsNumberPageWrapper isActive>
  //                   <P bold> {i + 1}</P>
  //                 </ST_M_Results_FinalButtonsNumberPageWrapper>
  //               </Fragment>
  //             )
  //           }

  //           return (
  //             <Fragment key={i}>
  //               <LinkNoStyle
  //                 href="#topOfSTL"
  //                 as={pathname}>
  //                 <ST_M_Results_FinalButtonsNumberPageWrapper onClick={() => setPaginationMobile(toMoveToThatPage)}>
  //                   <P bold> {i + 1}</P>
  //                 </ST_M_Results_FinalButtonsNumberPageWrapper>
  //               </LinkNoStyle>
  //             </Fragment>
  //           )
  //         })}
  //       </div>
  //     )
  //   } else if (paginationMobile >= 3) {
  //     return (
  //       <div>
  //         {amountOfPagesToClick.map((x, i) => {
  //           let whereToStart = paginationMobile - 1
  //           let theNewOrder = Array(3)
  //             .fill(0)
  //             .map((x, i) => {
  //               return i + whereToStart
  //             })

  //           if (i === 0) {
  //             return (
  //               <Fragment key={i}>
  //                 <LinkNoStyle
  //                   href="#topOfSTL"
  //                   as={pathname}>
  //                   <ST_M_Results_FinalButtonsNumberPageWrapper onClick={() => setPaginationMobile(theNewOrder[0])}>
  //                     <P bold> {theNewOrder[i]}</P>
  //                   </ST_M_Results_FinalButtonsNumberPageWrapper>
  //                 </LinkNoStyle>
  //               </Fragment>
  //             )
  //           }

  //           if (i === 1) {
  //             return (
  //               <Fragment key={i}>
  //                 <ST_M_Results_FinalButtonsNumberPageWrapper isActive>
  //                   <P bold> {theNewOrder[i]}</P>
  //                 </ST_M_Results_FinalButtonsNumberPageWrapper>
  //               </Fragment>
  //             )
  //           }

  //           if (i === 2) {
  //             return (
  //               <Fragment key={i}>
  //                 <LinkNoStyle
  //                   href="#topOfSTL"
  //                   as={pathname}>
  //                   <ST_M_Results_FinalButtonsNumberPageWrapper onClick={() => setPaginationMobile(theNewOrder[2])}>
  //                     <P bold> {theNewOrder[i]}</P>
  //                   </ST_M_Results_FinalButtonsNumberPageWrapper>
  //                 </LinkNoStyle>
  //               </Fragment>
  //             )
  //           }
  //         })}
  //       </div>
  //     )
  //   }
  // }
}
