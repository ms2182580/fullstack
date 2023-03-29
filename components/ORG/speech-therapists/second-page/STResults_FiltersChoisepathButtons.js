import { useEffect, useRef, useState } from "react"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../context/ORG_Ctx_ShowFiltersMobile"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { ST_BreadcrumbsAndLastUpdated } from "../ST_BreadcrumbsAndLastUpdated"
import { STResults_FilterSortbyHeaderDesktop } from "./desktop/STResults_FilterSorbyHeaderDesktop"
import { STResults_Map } from "./desktop/STResults_Map"
import { STResults_Choisepath } from "./STResults_Choisepath"
import { STResults_FinalButtons } from "./STResults_FinalButtons.js"
import { STResults_FiltersChoisepathButtonsWrapper } from "./styles/STResults_FiltersChoisepathButtonsWrapper"

export const STResults_FiltersChoisepathButtons = ({ widthWindow }) => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  const { isMobile } = useWidthWindow1024()
  const [showFullMap, setShowFullMap] = useState(false)

  const refToMoveTheViewOfUser = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (showFullMap === false) {
      const handleScroll = () => {
        setScrollPosition(window.pageYOffset)
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [showFullMap])

  useEffect(() => {
    if (showFullMap === false) {
      window.scrollTo({ top: scrollPosition })
    }
  }, [showFullMap])

  return (
    <STResults_FiltersChoisepathButtonsWrapper showFullMap={showFullMap}>
      {isMobile === false ? (
        <>
          <STResults_FilterSortbyHeaderDesktop theRef={refToMoveTheViewOfUser} />
        </>
      ) : (
        <>Header mobile</>
      )}

      {mustShowFiltersMobile === false ? (
        <>
          <div>
            <STResults_Choisepath showFullMap={showFullMap} />

            <STResults_Map
              showFullMap={showFullMap}
              setShowFullMap={setShowFullMap}
              theRef={refToMoveTheViewOfUser}
            />
          </div>

          <STResults_FinalButtons widthWindow={widthWindow} />

          <ST_BreadcrumbsAndLastUpdated />
        </>
      ) : null}
    </STResults_FiltersChoisepathButtonsWrapper>
  )
}
