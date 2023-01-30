import { EmailORGSvg, LocationSvg, PhoneSvg } from "../../../assets/Icons/index.js"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import {
  EverySingleSpeechTherapist_EmailWrapper,
  EverySingleSpeechTherapist_LocationWrapper,
  EverySingleSpeechTherapist_PhoneWrapper
} from "./styles/EverySingleSpeechTherapist_PhoneEmailWrapper.js"

export const EverySingleSpeechTherapist_Phone = ({ phoneNumber, isMobile = false }) => {
  return (
    <EverySingleSpeechTherapist_PhoneWrapper>
      <PhoneSvg />
      {isMobile === false ? (
        <>
          <P bold>Phone:</P>
          <P>{phoneNumber}</P>
        </>
      ) : (
        <>
          <Caption bold>Phone:</Caption>
          <Caption>{phoneNumber}</Caption>
        </>
      )}
    </EverySingleSpeechTherapist_PhoneWrapper>
  )
}

export const EverySingleSpeechTherapist_Email = ({ email, isMobile = false }) => {
  return (
    <EverySingleSpeechTherapist_EmailWrapper>
      <div>
        <EmailORGSvg />

        {isMobile === false ? (
          <>
            <P bold>Email:</P>
          </>
        ) : (
          <>
            <Caption bold>Email:</Caption>
          </>
        )}
      </div>

      {isMobile === false ? (
        <>
          <P>{email}</P>
        </>
      ) : (
        <>
          <Caption>{email}</Caption>
        </>
      )}
      
    </EverySingleSpeechTherapist_EmailWrapper>
  )
}

export const EverySingleSpeechTherapist_Location = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  howFar,
  isMobile = false
}) => {
  return (
    <EverySingleSpeechTherapist_LocationWrapper isMobile={isMobile}>
      <div>
        <LocationSvg />
        {isMobile === false ? <P bold>Location: </P> : <Caption bold>Location: </Caption>}
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
    </EverySingleSpeechTherapist_LocationWrapper>
  )
}
