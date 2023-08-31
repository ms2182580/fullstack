import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { SLP_D_Results_BreadcrumbsAndLastUpdated } from "./SLP_D_Results_BreadcrumbsAndLastUpdated"
import { SLP_D_Results_Choisepath } from "./SLP_D_Results_Choisepath"
import { SLP_D_Results_FilterSortbyHeader } from "./SLP_D_Results_FilterSortbyHeader"
import { SLP_D_Results_FinalButton } from "./SLP_D_Results_FinalButton.js"
import { SLP_D_Results_Map } from "./SLP_D_Results_Map"
import { SLP_D_Results_MainEntryWrapper } from "./styles/SLP_D_Results_MainEntryWrapper.js"

export const SLP_D_Results_MainEntry = () => {
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
    <SLP_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <SLP_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <SLP_D_Results_Choisepath />

        <SLP_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <SLP_D_Results_FinalButton />

      <SLP_D_Results_BreadcrumbsAndLastUpdated />
    </SLP_D_Results_MainEntryWrapper>
  )
}
