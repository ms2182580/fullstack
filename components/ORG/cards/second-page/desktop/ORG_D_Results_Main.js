import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { ORG_D_Results_BreadcrumbsAndLastUpdated } from "./ORG_D_Results_BreadcrumbsAndLastUpdated.js"
import { ORG_D_Results_Choisepath } from "./ORG_D_Results_Choisepath.js"
import { ORG_D_Results_FilterSortbyHeader } from "./ORG_D_Results_FilterSortbyHeader.js"
import { ORG_D_Results_FinalButton } from "./ORG_D_Results_FinalButton.js"
import { ORG_D_Results_Map } from "./ORG_D_Results_Map.js"
import { ORG_D_Results_MainWrapper } from "./styles/ORG_D_Results_MainWrapper.js"

export const ORG_D_Results_Main = () => {
  const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

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
    <ORG_D_Results_MainWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <ORG_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <ORG_D_Results_Choisepath />

        <ORG_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <ORG_D_Results_FinalButton />

      <ORG_D_Results_BreadcrumbsAndLastUpdated />
    </ORG_D_Results_MainWrapper>
  )
}
