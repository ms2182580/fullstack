import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { PSYT_D_Results_BreadcrumbsAndLastUpdated } from "./PSYT_D_Results_BreadcrumbsAndLastUpdated"
import { PSYT_D_Results_Choisepath } from "./PSYT_D_Results_Choisepath"
import { PSYT_D_Results_FilterSortbyHeader } from "./PSYT_D_Results_FilterSortbyHeader"
import { PSYT_D_Results_FinalButton } from "./PSYT_D_Results_FinalButton.js"
import { PSYT_D_Results_Map } from "./PSYT_D_Results_Map"
import { PSYT_D_Results_MainEntryWrapper } from "./styles/PSYT_D_Results_MainEntryWrapper.js"

export const PSYT_D_Results_MainEntry = () => {
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
    <PSYT_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <PSYT_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <PSYT_D_Results_Choisepath />

        <PSYT_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <PSYT_D_Results_FinalButton />

      <PSYT_D_Results_BreadcrumbsAndLastUpdated />
    </PSYT_D_Results_MainEntryWrapper>
  )
}
