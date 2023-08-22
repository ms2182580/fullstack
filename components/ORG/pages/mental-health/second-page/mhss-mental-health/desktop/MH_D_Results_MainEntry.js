import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { MH_D_Results_BreadcrumbsAndLastUpdated } from "./MH_D_Results_BreadcrumbsAndLastUpdated"
import { MH_D_Results_Choisepath } from "./MH_D_Results_Choisepath"
import { MH_D_Results_FilterSortbyHeader } from "./MH_D_Results_FilterSortbyHeader"
import { MH_D_Results_FinalButton } from "./MH_D_Results_FinalButton.js"
import { MH_D_Results_Map } from "./MH_D_Results_Map"
import { MH_D_Results_MainEntryWrapper } from "./styles/MH_D_Results_MainEntryWrapper.js"

export const MH_D_Results_MainEntry = () => {
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
    <MH_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <MH_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <MH_D_Results_Choisepath />

        <MH_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <MH_D_Results_FinalButton />

      <MH_D_Results_BreadcrumbsAndLastUpdated />
    </MH_D_Results_MainEntryWrapper>
  )
}
