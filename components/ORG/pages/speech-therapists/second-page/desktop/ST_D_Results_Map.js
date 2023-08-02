import Image from "next/image.js"
import { LeftArrowTinySvg, RightArrowTinySvg } from "../../../../../assets/Icons"
import STResults_MapImage from "../../../../../assets/images/STResults_MapImage.png"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"

import { useShouldTab } from "../../../../../utils/ORG_shouldTab"
import { ST_D_Results_CardsOnMap } from "./ST_D_Results_CardsOnMap"
import { ST_D_Results_MapWrapper } from "./styles/ST_D_Results_MapWrapper.js"

export const ST_D_Results_Map = ({ refUserViewShowFullMapButton }) => {
  const { ORGshowFullMapButton, setORGShowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  const handleShowMap = () => {
    setORGShowFullMapButton((prevState) => !prevState)

    if (ORGshowFullMapButton === false) {
      const targetY = refUserViewShowFullMapButton.current.getBoundingClientRect().top + window.pageYOffset + 140

      window.scrollTo({ top: targetY })
    }
  }

  const shouldTab = useShouldTab()

  return (
    <ST_D_Results_MapWrapper
      ORGshowFullMapButton={ORGshowFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <Image
        src={STResults_MapImage}
        layout={ORGshowFullMapButton ? "responsive" : ORGShowFullMapFilter ? "responsive" : "fill"}
        objectFit={ORGshowFullMapButton ? "fill" : ORGShowFullMapFilter ? "contain" : "cover"}
        alt="map"
      />

      <button
        onClick={handleShowMap}
        tabIndex={shouldTab}>
        {ORGshowFullMapButton || ORGShowFullMapFilter ? (
          <>
            <span>Collpase map</span>
            <RightArrowTinySvg />
          </>
        ) : (
          <>
            <LeftArrowTinySvg /> <span>Show map</span>
          </>
        )}
      </button>

      <ST_D_Results_CardsOnMap handleShowMap={handleShowMap} />
    </ST_D_Results_MapWrapper>
  )
}
