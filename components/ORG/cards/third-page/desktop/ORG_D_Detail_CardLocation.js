import { LocationSvg } from "../../../../../assets/Icons/index.js"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_CardLocationWrapper } from "./styles/ORG_D_Detail_CardLocationWrapper.js"

export const ORG_D_Detail_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  howFar
}) => {
  return (
    <ORG_D_Detail_CardLocationWrapper>
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
    </ORG_D_Detail_CardLocationWrapper>
  )
}
