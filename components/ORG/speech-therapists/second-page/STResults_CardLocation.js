import { LocationSvg } from '../../../../assets/Icons/index.js'
import { Caption, P } from '../../../ui/heading_body_text/DesktopMobileFonts.js'
import { STResults_CardLocationWrapper } from './styles/STResults_CardLocationWrapper.js'


export const STResults_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  howFar,
  isMobile = false,
  isThirdPageMobile = false
}) => {
  return (
    <STResults_CardLocationWrapper isMobile={isMobile}>
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
            <Caption
              bolder
              primary_cta>
              {" "}
              ({howFar} miles away)
            </Caption>
          </>
        ) : null}
      </div>
    </STResults_CardLocationWrapper>
  )
}