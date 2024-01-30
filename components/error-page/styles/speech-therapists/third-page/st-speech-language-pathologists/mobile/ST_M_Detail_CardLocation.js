import { LocationSvg } from "../../../../../../assets/icons/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Detail_CardLocationWrapper } from "./styles/ST_M_Detail_CardLocationWrapper.js"

export const ST_M_Detail_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
}) => {
  return (
    <ST_M_Detail_CardLocationWrapper>
      <LocationSvg />
      <div>
        <P>{locationCity} Speech Therapy</P>
        <P>
          {locationStreetNumber} {locationStreetName}
        </P>
        <P>{locationState} </P>
      </div>
    </ST_M_Detail_CardLocationWrapper>
  )
}
