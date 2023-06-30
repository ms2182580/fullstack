import { LocationSvg } from "../../../../../assets/Icons/index.js"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Results_CardLocationWrapper } from "./styles/ST_M_Results_CardLocationWrapper.js"

export const ST_M_Results_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  isThirdPageMobile = false,
}) => {
  // const { isMobile } = useWidthWindow1024()

  return (
    <ST_M_Results_CardLocationWrapper >
      <div>
        <LocationSvg />
        {/* {isMobile === false ? (
          <>
            <P bold>Location: </P>{" "}
          </>
        ) : isMobile && isThirdPageMobile ? null : (
          <>
            <Caption bold>Location: </Caption>
          </>
        )} */}

        {isThirdPageMobile ? null : <Caption bold>Location: </Caption>}
      </div>
      <div>
        {isThirdPageMobile ? (
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
          </>)}

        {/* {isMobile === false ? (
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
        )} */}

        {/* {isMobile === false ? (
          <>
            <Caption> ({howFar} miles away)</Caption>
          </>
        ) : null} */}
      </div>
    </ST_M_Results_CardLocationWrapper>
  )
}
