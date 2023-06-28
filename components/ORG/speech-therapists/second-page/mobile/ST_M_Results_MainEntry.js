import { ST_M_Results_Choisepath } from './ST_M_Results_Choisepath.js'
import { ST_M_Results_FinalButtons } from './ST_M_Results_FinalButtons.js'


import {
  ST_M_Results_FilterSortbyHeader
} from "./ST_M_Results_FilterSortbyHeader.js"
import { ST_M_Results_MainEntryWrapper } from './styles/ST_M_Results_MainEntryWrapper.js'

export const ST_M_Results_MainEntry = () => {
  // const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  // const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } =
  // useORG_CtxShowFiltersDesktop()

  // const refUserViewShowFullMapButton = useRef(null)
  // const refUserViewShowFullMapFilter = useRef(null)

  // const [scrollPosition, setScrollPosition] = useState(0)

  // useEffect(() => {
  //   if (ORGshowFullMapButton === false && ORGShowFullMapFilter === false) {
  //     const handleScroll = () => {
  //       setScrollPosition(window.pageYOffset)
  //     }

  //     window.addEventListener("scroll", handleScroll)

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll)
  //     }
  //   }
  // }, [ORGshowFullMapButton, ORGShowFullMapFilter])

  // useEffect(() => {
  //   if (ORGshowFullMapButton === false && ORGShowFullMapFilter === false) {
  //     window.scrollTo({ top: scrollPosition })
  //   }
  // }, [ORGshowFullMapButton, ORGShowFullMapFilter])

  // useEffect(() => {
  //   if (ORGshowFullMapButton === true || ORGShowFullMapFilter === true) {
  //     setORGShowFullMapButton(false)
  //     setORGShowFullMapFilter(false)
  //   }
  // }, [])

  return (
    <ST_M_Results_MainEntryWrapper
    // ORGshowFullMapButton={ORGshowFullMapButton}
    // id="topOfSTL"
    >
      <ST_M_Results_FilterSortbyHeader />

      <ST_M_Results_Choisepath />

      {/* <div>
      <ST_D_Results_Choisepath />

        <ST_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div> */}

      <ST_M_Results_FinalButtons />

      {/* <ST_D_BreadcrumbsAndLastUpdated /> */}

      {/* {mustShowFiltersMobile === false ? (
        <>
          <div>
            <ST_D_Results_Choisepath />

            <ST_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
          </div>

          <ST_D_Results_FinalButtons widthWindow={1500} />

          <ST_D_BreadcrumbsAndLastUpdated />
        </>
      ) : null} */}
    </ST_M_Results_MainEntryWrapper>
  )
}
