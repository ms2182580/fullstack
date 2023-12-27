import Image from "next/image.js"
import { useEffect, useRef, useState } from "react"
import { LeftArrowTinySvg } from "../../../../../assets/icons/index.js"
import ORG_Results_MapImage from "../../../../../assets/images/ORG_Results_MapImage.png"
import { ORG_D_Results_CardsOnMap } from "./ORG_D_Results_CardsOnMap.js"
import { ORG_D_Results_MapWrapper } from "./styles/ORG_D_Results_MapWrapper.js"

export const ORG_D_Results_Map = ({ refUserViewShowFullMapButton }) => {
  const refOfButton = useRef(null)
  const [bottomOfButton, setBottomOfButton] = useState()

  useEffect(() => {
    if (refOfButton) {
      setBottomOfButton(refOfButton.current.offsetTop + refOfButton.current.offsetHeight)
    }
  }, [refOfButton])

  return (
    <ORG_D_Results_MapWrapper>
      <Image
        src={ORG_Results_MapImage}
        layout="fill"
        objectFit="cover"
        alt="map"
      />

      <button ref={refOfButton}>
        <LeftArrowTinySvg /> <span>Show map</span>
      </button>

      <ORG_D_Results_CardsOnMap bottomOfButton={bottomOfButton} />
    </ORG_D_Results_MapWrapper>
  )
}
