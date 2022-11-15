import {
  EmailORGSvg,
  LocationSvg,
  PhoneSvg
} from "../../../assets/Icons/index.js"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import {
  EverySingleSpeechTherapist_EmailWrapper,
  EverySingleSpeechTherapist_LocationWrapper,
  EverySingleSpeechTherapist_PhoneWrapper
} from "./styles/EverySingleSpeechTherapist_PhoneEmailWrapper.js"

export const EverySingleSpeechTherapist_Phone = ({ phoneNumber }) => {
  return (
    <EverySingleSpeechTherapist_PhoneWrapper>
      <PhoneSvg />
      <P bold>Phone:</P>
      <P>{phoneNumber}</P>
    </EverySingleSpeechTherapist_PhoneWrapper>
  )
}

export const EverySingleSpeechTherapist_Email = ({ email }) => {
  return (
    <EverySingleSpeechTherapist_EmailWrapper>
      <div>
        <EmailORGSvg />
        <P bold>Email:</P>
      </div>
      <P>{email}</P>
    </EverySingleSpeechTherapist_EmailWrapper>
  )
}

export const EverySingleSpeechTherapist_Location = ({ location, howFar }) => {
  return (
    <EverySingleSpeechTherapist_LocationWrapper>
      <div>
        <LocationSvg />
        <P bold>Location: </P>
      </div>
      <P>{location.city} Speech Therapy</P>
      <P>{location.street.number} {location.street.name}</P>
      <P>{location.state} </P>
      
      <Caption bolder primary_cta>
        {" "}
        ({howFar} miles away)
      </Caption>
    </EverySingleSpeechTherapist_LocationWrapper>
  )
}
