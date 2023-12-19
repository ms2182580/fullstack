import { LocationSvg } from "../../../../../../../assets/Icons/index.js"
import { Caption } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Results_CardLocationWrapper } from "./styles/ST_M_Results_CardLocationWrapper.js"

export const ST_M_Results_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
}) => {
  return (
    <ST_M_Results_CardLocationWrapper>
      <div>
        <LocationSvg />
        <Caption bold>Location: </Caption>
      </div>
      <div>
        <Caption>{locationCity} Speech Therapy</Caption>
        <Caption>
          {locationStreetNumber} {locationStreetName}
        </Caption>
        <Caption>{locationState} </Caption>
      </div>
    </ST_M_Results_CardLocationWrapper>
  )
}
