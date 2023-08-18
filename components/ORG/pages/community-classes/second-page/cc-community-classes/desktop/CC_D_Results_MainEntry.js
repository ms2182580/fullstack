import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { CC_D_Results_BreadcrumbsAndLastUpdated } from "./CC_D_Results_BreadcrumbsAndLastUpdated"
import { CC_D_Results_Choisepath } from "./CC_D_Results_Choisepath"
import { CC_D_Results_FilterSortbyHeader } from "./CC_D_Results_FilterSortbyHeader"
import { CC_D_Results_FinalButton } from "./CC_D_Results_FinalButton"
import { CC_D_Results_Map } from "./CC_D_Results_Map"
import { CC_D_Results_MainEntryWrapper } from "./styles/CC_D_Results_MainEntryWrapper.js"

export const CC_D_Results_MainEntry = () => {
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
    <CC_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <CC_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <CC_D_Results_Choisepath />

        <CC_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <CC_D_Results_FinalButton />

      <CC_D_Results_BreadcrumbsAndLastUpdated />
    </CC_D_Results_MainEntryWrapper>
  )
}
