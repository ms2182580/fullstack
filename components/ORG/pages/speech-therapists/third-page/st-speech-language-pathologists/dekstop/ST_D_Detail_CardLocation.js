import { LocationSvg } from "../../../../../../assets/Icons/index.js"
import { Caption, P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Detail_CardLocationWrapper } from "./styles/ST_D_Detail_CardLocationWrapper.js"

export const ST_D_Detail_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  howFar
}) => {
  return (
    <ST_D_Detail_CardLocationWrapper>
      <div>
        <LocationSvg />
        <P bold>Location: </P>{" "}
      </div>
      <div>
        <P>{locationCity} Speech Therapy</P>
        <P>
          {locationStreetNumber} {locationStreetName}
        </P>
        <P>{locationState} </P>

        <Caption> ({howFar} miles away)</Caption>
      </div>
    </ST_D_Detail_CardLocationWrapper>
  )
}
