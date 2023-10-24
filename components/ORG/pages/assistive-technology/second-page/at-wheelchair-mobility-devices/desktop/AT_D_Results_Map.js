import Image from "next/image.js"
import { useEffect, useRef, useState } from "react"
import { LeftArrowTinySvg } from "../../../../../../../assets/Icons/index.js"
import ORG_Results_MapImage from "../../../../../../../assets/images/ORG_Results_MapImage.png"
import { AT_D_Results_CardsOnMap } from "./AT_D_Results_CardsOnMap"
import { AT_D_Results_MapWrapper } from "./styles/AT_D_Results_MapWrapper.js"

export const AT_D_Results_Map = ({ refUserViewShowFullMapButton }) => {
  const refOfButton = useRef(null)
  const [bottomOfButton, setBottomOfButton] = useState()

  useEffect(() => {
    if (refOfButton) {
      setBottomOfButton(refOfButton.current.offsetTop + refOfButton.current.offsetHeight)
    }
  }, [refOfButton])

  return (
    <AT_D_Results_MapWrapper>
      <Image
        src={ORG_Results_MapImage}
        layout="fill"
        objectFit="cover"
        alt="map"
      />

      <button
        ref={refOfButton}>
        <LeftArrowTinySvg /> <span>Show map</span>
      </button>

      <AT_D_Results_CardsOnMap bottomOfButton={bottomOfButton} />
    </AT_D_Results_MapWrapper>
  )
}
