import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { SES_D_Results_BreadcrumbsAndLastUpdated } from "./SES_D_Results_BreadcrumbsAndLastUpdated"
import { SES_D_Results_Choisepath } from "./SES_D_Results_Choisepath"
import { SES_D_Results_FilterSortbyHeader } from "./SES_D_Results_FilterSortbyHeader"
import { SES_D_Results_FinalButton } from "./SES_D_Results_FinalButton"
import { SES_D_Results_Map } from "./SES_D_Results_Map"
import { SES_D_Results_MainEntryWrapper } from "./styles/SES_D_Results_MainEntryWrapper.js"

export const SES_D_Results_MainEntry = () => {
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
    <SES_D_Results_MainEntryWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      id="topOfORG">
      <SES_D_Results_FilterSortbyHeader
        refUserViewShowFullMapButton={refUserViewShowFullMapButton}
        refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
      />

      <div>
        <SES_D_Results_Choisepath />

        <SES_D_Results_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
      </div>

      <SES_D_Results_FinalButton />

      <SES_D_Results_BreadcrumbsAndLastUpdated />
    </SES_D_Results_MainEntryWrapper>
  )
}
