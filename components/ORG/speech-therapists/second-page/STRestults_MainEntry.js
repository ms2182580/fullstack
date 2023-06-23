// import { useEffect, useRef, useState } from "react"
// import { useORG_CtxShowFiltersDesktop } from "../../../../context/ORG_CtxShowFiltersDesktop_Provider"
// import { useORG_Ctx_ShowFiltersMobile } from "../../../../context/ORG_Ctx_ShowFiltersMobile"
// import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
// import { ST_BreadcrumbsAndLastUpdated } from "../ST_BreadcrumbsAndLastUpdated"
// import { STResults_FinalButtons } from "./STResults_FinalButtons.js"
// import { ST_Desktop_Results_Choisepath } from "./ST_Desktop_Results_Choisepath"
// import { ST_Desktop_Results_FilterSortbyHeaderDesktop } from "./desktop/ST_Desktop_Results_FilterSortbyHeaderDesktop"
// import { STResults_Map } from "./desktop/ST_Desktop_Results_Map"
// import { MainEntryWrapper } from "./styles/MainEntryWrapper"

// export const STRestults_MainEntry = ({ widthWindow }) => {
//   const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
//   const { isMobile } = useWidthWindow1024()

//   const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } =
//     useORG_CtxShowFiltersDesktop()

//   const refUserViewShowFullMapButton = useRef(null)
//   const refUserViewShowFullMapFilter = useRef(null)

//   const [scrollPosition, setScrollPosition] = useState(0)

//   useEffect(() => {
//     if (ORGshowFullMapButton === false && ORGShowFullMapFilter === false) {
//       const handleScroll = () => {
//         setScrollPosition(window.pageYOffset)
//       }

//       window.addEventListener("scroll", handleScroll)

//       return () => {
//         window.removeEventListener("scroll", handleScroll)
//       }
//     }
//   }, [ORGshowFullMapButton, ORGShowFullMapFilter])

//   useEffect(() => {
//     if (ORGshowFullMapButton === false && ORGShowFullMapFilter === false) {
//       window.scrollTo({ top: scrollPosition })
//     }
//   }, [ORGshowFullMapButton, ORGShowFullMapFilter])

//   useEffect(() => {
//     if (ORGshowFullMapButton === true || ORGShowFullMapFilter === true) {
//       setORGShowFullMapButton(false)
//       setORGShowFullMapFilter(false)
//     }
//   }, [])




//   return (
//     <MainEntryWrapper ORGshowFullMapButton={ORGshowFullMapButton}>
//       {isMobile === false ? (
//         <>
//           <ST_Desktop_Results_FilterSortbyHeaderDesktop
//             refUserViewShowFullMapButton={refUserViewShowFullMapButton}
//             refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
//           />
//         </>
//       ) : (
//         <>Header mobile</>
//       )}

//       {mustShowFiltersMobile === false ? (
//         <>
//           <div>
//             <ST_Desktop_Results_Choisepath />

//             <STResults_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
//           </div>

//           <STResults_FinalButtons widthWindow={widthWindow} />

//           <ST_BreadcrumbsAndLastUpdated />
//         </>
//       ) : null}
//     </MainEntryWrapper>
//   )
// }
