import { LocationResultsSvg } from "../../../../../assets/Icons"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Results_CardLocationWrapper } from './styles/ORG_D_Results_CardLocationWrapper.js'

export const ORG_D_Results_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  howFar
}) => {
  return (
    <ORG_D_Results_CardLocationWrapper>
      <LocationResultsSvg />

      <div>
        <P>
          {locationStreetNumber} {locationStreetName}
        </P>
        <P>
          {locationCity}, {locationState}
        </P>
        <P hyperlink_normal underline> ({howFar} miles away)</P>
      </div>
    </ORG_D_Results_CardLocationWrapper>
  )
}
