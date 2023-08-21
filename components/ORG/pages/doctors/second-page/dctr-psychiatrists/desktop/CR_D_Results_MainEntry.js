import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { CR_D_Results_BreadcrumbsAndLastUpdated } from "./CR_D_Results_BreadcrumbsAndLastUpdated"
import { CR_D_Results_Choisepath } from "./CR_D_Results_Choisepath"
import { CR_D_Results_FilterSortbyHeader } from "./CR_D_Results_FilterSortbyHeader"
import { CR_D_Results_FinalButton } from "./CR_D_Results_FinalButton.js"
import { CR_D_Results_Map } from "./CR_D_Results_Map"
import { CR_D_Results_MainEntryWrapper } from "./styles/CR_D_Results_MainEntryWrapper.js"

export const CR_D_Results_MainEntry = () => {
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
    <CR_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <CR_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <CR_D_Results_Choisepath />

        <CR_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <CR_D_Results_FinalButton />

      <CR_D_Results_BreadcrumbsAndLastUpdated />
    </CR_D_Results_MainEntryWrapper>
  )
}
