import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { DAY_D_Results_BreadcrumbsAndLastUpdated } from "./DAY_D_Results_BreadcrumbsAndLastUpdated"
import { DAY_D_Results_Choisepath } from "./DAY_D_Results_Choisepath"
import { DAY_D_Results_FilterSortbyHeader } from "./DAY_D_Results_FilterSortbyHeader"
import { DAY_D_Results_FinalButton } from "./DAY_D_Results_FinalButton.js"
import { DAY_D_Results_Map } from "./DAY_D_Results_Map"
import { DAY_D_Results_MainEntryWrapper } from "./styles/DAY_D_Results_MainEntryWrapper.js"

export const DAY_D_Results_MainEntry = () => {
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
    <DAY_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <DAY_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <DAY_D_Results_Choisepath />

        <DAY_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <DAY_D_Results_FinalButton />

      <DAY_D_Results_BreadcrumbsAndLastUpdated />
    </DAY_D_Results_MainEntryWrapper>
  )
}
