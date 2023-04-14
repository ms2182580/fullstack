import { useEffect, useRef, useState } from "react"
import { useORG_CtxShowFiltersDesktop } from "../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../context/ORG_Ctx_ShowFiltersMobile"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { ST_BreadcrumbsAndLastUpdated } from "../ST_BreadcrumbsAndLastUpdated"
import { STResults_Choisepath } from "./STResults_Choisepath"
import { STResults_FinalButtons } from "./STResults_FinalButtons.js"
import { STResults_FilterSortbyHeaderDesktop } from "./desktop/STResults_FilterSorbyHeaderDesktop"
import { STResults_Map } from "./desktop/STResults_Map"
import { MainEntryWrapper } from "./styles/MainEntryWrapper"

export const MainEntry = ({ widthWindow }) => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  const { isMobile } = useWidthWindow1024()

  const { showFullMapButton, ORGShowFullMapFilter, setShowFullMapButton, setORGShowFullMapFilter } =
    useORG_CtxShowFiltersDesktop()

  const refUserViewShowFullMapButton = useRef(null)
  const refUserViewShowFullMapFilter = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (showFullMapButton === false && ORGShowFullMapFilter === false) {
      const handleScroll = () => {
        setScrollPosition(window.pageYOffset)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [showFullMapButton, ORGShowFullMapFilter])

  useEffect(() => {
    if (showFullMapButton === false && ORGShowFullMapFilter === false) {
      window.scrollTo({ top: scrollPosition })
    }
  }, [showFullMapButton, ORGShowFullMapFilter])

  useEffect(() => {
    if (showFullMapButton === true || ORGShowFullMapFilter === true) {
      setShowFullMapButton(false)
      setORGShowFullMapFilter(false)
    }
  }, [])
  
  return (
    <MainEntryWrapper showFullMapButton={showFullMapButton}>
      {isMobile === false ? (
        <>
          <STResults_FilterSortbyHeaderDesktop
            refUserViewShowFullMapButton={refUserViewShowFullMapButton}
            refUserViewShowFullMapFilter={refUserViewShowFullMapFilter}
          />
        </>
      ) : (
        <>Header mobile</>
      )}

      {mustShowFiltersMobile === false ? (
        <>
          <div>
            <STResults_Choisepath />

            <STResults_Map refUserViewShowFullMapButton={refUserViewShowFullMapButton} />
          </div>

          <STResults_FinalButtons widthWindow={widthWindow} />

          <ST_BreadcrumbsAndLastUpdated />
        </>
      ) : null}
      
      
    </MainEntryWrapper>
  )
}
