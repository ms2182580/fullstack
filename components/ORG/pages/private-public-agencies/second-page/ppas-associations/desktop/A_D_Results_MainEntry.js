import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { A_D_Results_BreadcrumbsAndLastUpdated } from "./A_D_Results_BreadcrumbsAndLastUpdated"
import { A_D_Results_Choisepath } from "./A_D_Results_Choisepath"
import { A_D_Results_FilterSortbyHeader } from "./A_D_Results_FilterSortbyHeader"
import { A_D_Results_FinalButton } from "./A_D_Results_FinalButton.js"
import { A_D_Results_Map } from "./A_D_Results_Map"
import { A_D_Results_MainEntryWrapper } from "./styles/A_D_Results_MainEntryWrapper.js"

export const A_D_Results_MainEntry = () => {
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
    <A_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <A_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <A_D_Results_Choisepath />

        <A_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <A_D_Results_FinalButton />

      <A_D_Results_BreadcrumbsAndLastUpdated />
    </A_D_Results_MainEntryWrapper>
  )
}
