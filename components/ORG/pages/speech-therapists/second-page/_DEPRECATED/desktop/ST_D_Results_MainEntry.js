import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { ST_D_Results_BreadcrumbsAndLastUpdated } from "./ST_D_Results_BreadcrumbsAndLastUpdated"
import { ST_D_Results_Choisepath } from "./ST_D_Results_Choisepath"
import { ST_D_Results_FilterSortbyHeader } from "./ST_D_Results_FilterSortbyHeader"
import { ST_D_Results_FinalButtons } from "./ST_D_Results_FinalButtons"
import { ST_D_Results_Map } from "./ST_D_Results_Map"
import { ST_D_Results_MainEntryWrapper } from "./styles/ST_D_Results_MainEntryWrapper"

export const ST_D_Results_MainEntry = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } =
    useORG_CtxShowFiltersDesktop()

  const refUserViewShowFullMapButton = useRef(null)
  const refUserViewShowFullMapFilter = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (ORGshowFullMapButton === false && ORGShowFullMapFilter === false) {
      const handleScroll = () => {
        setScrollPosition(window.pageYOffset)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [ORGshowFullMapButton, ORGShowFullMapFilter])

  useEffect(() => {
    if (ORGshowFullMapButton === false && ORGShowFullMapFilter === false) {
      window.scrollTo({ top: scrollPosition })
    }
  }, [ORGshowFullMapButton, ORGShowFullMapFilter])

  useEffect(() => {
    if (ORGshowFullMapButton === true || ORGShowFullMapFilter === true) {
      setORGShowFullMapButton(false)
      setORGShowFullMapFilter(false)
    }
  }, [])

  return (
    <ST_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfSTL">

      <ST_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <ST_D_Results_Choisepath />

        <ST_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <ST_D_Results_FinalButtons />

      <ST_D_Results_BreadcrumbsAndLastUpdated />
    </ST_D_Results_MainEntryWrapper>
  )
}
