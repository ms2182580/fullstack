import { useRouter } from "next/router"
import { Fragment } from "react"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { useShouldTab } from "../../../../../utils/ORG_shouldTab"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { ST_D_Results_FinalButtonsNumberPage } from "./styles/ST_D_Results_FinalButtonsWrapper"

export const ST_D_Results_NavigationButtonsNumbers = ({ isMobile = false }) => {
  const { pagination, setPagination } = useORG_Ctx_FetchNoFiltersDesktop()
  // const { pagination: paginationMobile, setPagination: setPaginationMobile } = useORG_Ctx_FetchNoFiltersMobile()
  let amountOfPagesToClick = Array(3).fill(0)

  const router = useRouter()
  const { pathname } = router

  const shouldTab = useShouldTab()

  if (pagination < 3) {
    return (
      <div>
        {amountOfPagesToClick.map((x, i) => {
          const toMoveToThatPage = i + 1
          if (pagination === i + 1) {
            return (
              <Fragment key={i}>
                <ST_D_Results_FinalButtonsNumberPage
                  isActive
                  tabIndex={shouldTab}>
                  <P bold> {i + 1}</P>
                </ST_D_Results_FinalButtonsNumberPage>
              </Fragment>
            )
          }

          return (
            <Fragment key={i}>
              <LinkNoStyle
                href="#topOfSTL"
                as={pathname}
                tabIndex={shouldTab}>
                <ST_D_Results_FinalButtonsNumberPage
                  onClick={() => setPagination(toMoveToThatPage)}
                  tabIndex={shouldTab}>
                  <P bold> {i + 1}</P>
                </ST_D_Results_FinalButtonsNumberPage>
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
                  <ST_D_Results_FinalButtonsNumberPage
                    onClick={() => setPagination(theNewOrder[0])}
                    tabIndex={shouldTab}>
                    <P bold> {theNewOrder[i]}</P>
                  </ST_D_Results_FinalButtonsNumberPage>
                </LinkNoStyle>
              </Fragment>
            )
          }

          if (i === 1) {
            return (
              <Fragment key={i}>
                <ST_D_Results_FinalButtonsNumberPage
                  isActive
                  tabIndex={shouldTab}>
                  <P bold> {theNewOrder[i]}</P>
                </ST_D_Results_FinalButtonsNumberPage>
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
                  <ST_D_Results_FinalButtonsNumberPage
                    onClick={() => setPagination(theNewOrder[2])}
                    tabIndex={shouldTab}>
                    <P bold> {theNewOrder[i]}</P>
                  </ST_D_Results_FinalButtonsNumberPage>
                </LinkNoStyle>
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
  //                 <ST_D_Results_FinalButtonsNumberPage
  //                   isActive
  //                   tabIndex={shouldTab}>
  //                   <P bold> {i + 1}</P>
  //                 </ST_D_Results_FinalButtonsNumberPage>
  //               </Fragment>
  //             )
  //           }

  //           return (
  //             <Fragment key={i}>
  //               <LinkNoStyle
  //                 href="#topOfSTL"
  //                 as={pathname}
  //                 tabIndex={shouldTab}>
  //                 <ST_D_Results_FinalButtonsNumberPage
  //                   onClick={() => setPagination(toMoveToThatPage)}
  //                   tabIndex={shouldTab}>
  //                   <P bold> {i + 1}</P>
  //                 </ST_D_Results_FinalButtonsNumberPage>
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
  //                   <ST_D_Results_FinalButtonsNumberPage
  //                     onClick={() => setPagination(theNewOrder[0])}
  //                     tabIndex={shouldTab}>
  //                     <P bold> {theNewOrder[i]}</P>
  //                   </ST_D_Results_FinalButtonsNumberPage>
  //                 </LinkNoStyle>
  //               </Fragment>
  //             )
  //           }

  //           if (i === 1) {
  //             return (
  //               <Fragment key={i}>
  //                 <ST_D_Results_FinalButtonsNumberPage
  //                   isActive
  //                   tabIndex={shouldTab}>
  //                   <P bold> {theNewOrder[i]}</P>
  //                 </ST_D_Results_FinalButtonsNumberPage>
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
  //                   <ST_D_Results_FinalButtonsNumberPage
  //                     onClick={() => setPagination(theNewOrder[2])}
  //                     tabIndex={shouldTab}>
  //                     <P bold> {theNewOrder[i]}</P>
  //                   </ST_D_Results_FinalButtonsNumberPage>
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
  //                 <ST_D_Results_FinalButtonsNumberPage isActive>
  //                   <P bold> {i + 1}</P>
  //                 </ST_D_Results_FinalButtonsNumberPage>
  //               </Fragment>
  //             )
  //           }

  //           return (
  //             <Fragment key={i}>
  //               <LinkNoStyle
  //                 href="#topOfSTL"
  //                 as={pathname}>
  //                 <ST_D_Results_FinalButtonsNumberPage onClick={() => setPaginationMobile(toMoveToThatPage)}>
  //                   <P bold> {i + 1}</P>
  //                 </ST_D_Results_FinalButtonsNumberPage>
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
  //                   <ST_D_Results_FinalButtonsNumberPage onClick={() => setPaginationMobile(theNewOrder[0])}>
  //                     <P bold> {theNewOrder[i]}</P>
  //                   </ST_D_Results_FinalButtonsNumberPage>
  //                 </LinkNoStyle>
  //               </Fragment>
  //             )
  //           }

  //           if (i === 1) {
  //             return (
  //               <Fragment key={i}>
  //                 <ST_D_Results_FinalButtonsNumberPage isActive>
  //                   <P bold> {theNewOrder[i]}</P>
  //                 </ST_D_Results_FinalButtonsNumberPage>
  //               </Fragment>
  //             )
  //           }

  //           if (i === 2) {
  //             return (
  //               <Fragment key={i}>
  //                 <LinkNoStyle
  //                   href="#topOfSTL"
  //                   as={pathname}>
  //                   <ST_D_Results_FinalButtonsNumberPage onClick={() => setPaginationMobile(theNewOrder[2])}>
  //                     <P bold> {theNewOrder[i]}</P>
  //                   </ST_D_Results_FinalButtonsNumberPage>
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
