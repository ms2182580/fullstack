import Image from "next/image.js"
import { LeftArrowTinySvg, RightArrowTinySvg } from "../../../../../assets/Icons"
import STResults_MapImage from "../../../../../assets/images/STResults_MapImage.png"
import { STResults_MapWrapper } from "./styles/STResults_MapWrapper.js"

export const STResults_Map = ({ showFullMap, setShowFullMap, theRef }) => {
  // const { pagination, userFetched, setData, filtersST, setFilters, actualSort } = useORG_Ctx_FetchNoFilters()

  // console.log('⌛ IN MAP ⌛ userFetched, filtersST:', userFetched, filtersST)

  const handleShowMap = () => {
    setShowFullMap((prevState) => !prevState)
    
    const targetY = theRef.current.getBoundingClientRect().top + window.pageYOffset + 140;
    window.scrollTo({ top: targetY });
    
    
  }

  return (
    <STResults_MapWrapper showFullMap={showFullMap}>
      <Image
        src={STResults_MapImage}
        layout={showFullMap ? "responsive" : "fill"}
        objectFit={showFullMap ? "fill" : "cover"}
        alt="map"
      />

      <button onClick={handleShowMap}>
        {showFullMap === false ? (
          <>
            <LeftArrowTinySvg /> <span>Show map</span>
          </>
        ) : (
          <>
            <span>Collpase map</span>
            <RightArrowTinySvg />
          </>
        )}
      </button>
    </STResults_MapWrapper>
  )
}
