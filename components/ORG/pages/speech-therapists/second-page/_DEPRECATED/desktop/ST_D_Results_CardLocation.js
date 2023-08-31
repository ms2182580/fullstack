// import { LocationSvg } from "../../../../../assets/Icons/index.js"
// import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { LocationSvg } from "../../../../../../assets/Icons/index.js"
import { Caption, P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Results_CardLocationWrapper } from "./styles/ST_D_Results_CardLocationWrapper.js"

export const ST_D_Results_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  howFar
}) => {
  return (
    <ST_D_Results_CardLocationWrapper>
      <div>
        <LocationSvg />
      </div>

      <div>
        <P>{locationCity} Speech Therapy</P>
        <P>
          {locationStreetNumber} {locationStreetName}
        </P>
        <P>{locationState} </P>

        <Caption> ({howFar} miles away)</Caption>
      </div>
    </ST_D_Results_CardLocationWrapper>
  )
}
