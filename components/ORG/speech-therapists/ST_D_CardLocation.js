import { LocationSvg } from "../../../assets/Icons/index.js"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024.js"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_CardLocationWrapper } from "./styles/ST_D_CardLocationWrapper.js"

export const ST_D_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  howFar,
  isThirdPageMobile = false
}) => {
  const { isMobile } = useWidthWindow1024()

  return (
    <ST_D_CardLocationWrapper isMobile={isMobile}>
      <div>
        <LocationSvg />
        {isMobile === false ? (
          <>
            <P bold>Location: </P>{" "}
          </>
        ) : isMobile && isThirdPageMobile ? null : (
          <>
            <Caption bold>Location: </Caption>
          </>
        )}
      </div>
      <div>
        {isMobile === false ? (
          <>
            <P>{locationCity} Speech Therapy</P>
            <P>
              {locationStreetNumber} {locationStreetName}
            </P>
            <P>{locationState} </P>
          </>
        ) : isMobile && isThirdPageMobile ? (
          <>
            <P>{locationCity} Speech Therapy</P>
            <P>
              {locationStreetNumber} {locationStreetName}
            </P>
            <P>{locationState} </P>
          </>
        ) : (
          <>
            <Caption>{locationCity} Speech Therapy</Caption>
            <Caption>
              {locationStreetNumber} {locationStreetName}
            </Caption>
            <Caption>{locationState} </Caption>
          </>
        )}

        {isMobile === false ? (
          <>
            <Caption> ({howFar} miles away)</Caption>
          </>
        ) : null}
      </div>
    </ST_D_CardLocationWrapper>
  )
}
