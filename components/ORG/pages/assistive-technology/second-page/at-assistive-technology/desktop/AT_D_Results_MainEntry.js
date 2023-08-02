import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { AT_D_Results_BreadcrumbsAndLastUpdated } from "./AT_D_Results_BreadcrumbsAndLastUpdated"
import { AT_D_Results_Choisepath } from "./AT_D_Results_Choisepath"
import { AT_D_Results_FilterSortbyHeader } from "./AT_D_Results_FilterSortbyHeader"
import { AT_D_Results_FinalButtons } from './AT_D_Results_FinalButtons.js'
import { AT_D_Results_Map } from "./AT_D_Results_Map"
import { AT_D_Results_MainEntryWrapper } from './styles/AT_D_Results_MainEntryWrapper.js'

export const AT_D_Results_MainEntry = () => {
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
    <AT_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfSTL">

      <AT_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <AT_D_Results_Choisepath />

        <AT_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />

      </div>

      <AT_D_Results_FinalButtons />

      <AT_D_Results_BreadcrumbsAndLastUpdated />
    </AT_D_Results_MainEntryWrapper>
  )
}
