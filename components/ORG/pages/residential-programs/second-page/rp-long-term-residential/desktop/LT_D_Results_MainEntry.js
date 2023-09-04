import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { LT_D_Results_BreadcrumbsAndLastUpdated } from "./LT_D_Results_BreadcrumbsAndLastUpdated"
import { LT_D_Results_Choisepath } from "./LT_D_Results_Choisepath"
import { LT_D_Results_FilterSortbyHeader } from "./LT_D_Results_FilterSortbyHeader"
import { LT_D_Results_FinalButton } from "./LT_D_Results_FinalButton"
import { LT_D_Results_Map } from "./LT_D_Results_Map"
import { LT_D_Results_MainEntryWrapper } from "./styles/LT_D_Results_MainEntryWrapper.js"

export const LT_D_Results_MainEntry = () => {
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
    <LT_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <LT_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <LT_D_Results_Choisepath />

        <LT_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <LT_D_Results_FinalButton />

      <LT_D_Results_BreadcrumbsAndLastUpdated />
    </LT_D_Results_MainEntryWrapper>
  )
}
