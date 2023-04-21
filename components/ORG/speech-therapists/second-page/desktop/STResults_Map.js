import Image from "next/image.js"
import { LeftArrowTinySvg, RightArrowTinySvg } from "../../../../../assets/Icons"
import STResults_MapImage from "../../../../../assets/images/STResults_MapImage.png"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useShouldTab } from "../../../../../utils/ORG_shouldTab"
import { STResults_MapWrapper } from "./styles/STResults_MapWrapper.js"

export const STResults_Map = ({ refUserViewShowFullMapButton }) => {
  // console.log("💫showFullMap:", showFullMap)
  // const { pagination, userFetched, setData, filtersST, setFilters, actualSort } = useORG_Ctx_FetchNoFilters()

  // console.log('⌛ IN MAP ⌛ userFetched, filtersST:', userFetched, filtersST)

  // console.log('💖showFullMapButton:', showFullMapButton)

  const { showFullMapButton, setShowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  const handleShowMap = () => {
    setShowFullMapButton((prevState) => !prevState)

    if (showFullMapButton === false) {
      const targetY = refUserViewShowFullMapButton.current.getBoundingClientRect().top + window.pageYOffset + 140

      window.scrollTo({ top: targetY })
    }
  }
  
  const shouldTab = useShouldTab()

  return (
    <STResults_MapWrapper
      showFullMapButton={showFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <Image
        src={STResults_MapImage}
        layout={showFullMapButton ? "responsive" : ORGShowFullMapFilter ? "responsive" : "fill"}
        objectFit={showFullMapButton ? "fill" : ORGShowFullMapFilter ? "contain" : "cover"}
        alt="map"
      />

      <button onClick={handleShowMap} tabIndex={shouldTab}>
        {showFullMapButton || ORGShowFullMapFilter ? (
          <>
            <span >Collpase map</span>
            <RightArrowTinySvg />
          </>
        ) : (
          <>
            <LeftArrowTinySvg /> <span>Show map</span>
          </>
        )}
      </button>
    </STResults_MapWrapper>
  )
}
