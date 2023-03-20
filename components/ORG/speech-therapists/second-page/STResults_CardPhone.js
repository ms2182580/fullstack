import { PhoneSvg } from "../../../../assets/Icons"
import { Caption, P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STResults_CardPhoneWrapper } from "./styles/STResults_CardPhoneWrapper.js"

export const STResults_CardPhone = ({ phoneNumber, isMobile = false, isThirdPageMobile = false }) => {
  return (
    <STResults_CardPhoneWrapper>
      <PhoneSvg />
      {isMobile === false ? (
        <>
          <P bold>Phone:</P>
          <P>{phoneNumber}</P>
        </>
      ) : isMobile && isThirdPageMobile ? (
        <>
          <P>{phoneNumber}</P>
        </>
      ) : (
        <>
          <Caption bold>Phone:</Caption>
          <Caption>{phoneNumber}</Caption>
        </>
      )}
    </STResults_CardPhoneWrapper>
  )
}

/* 
import styled from "styled-components"

export const EverySingleSpeechTherapist_PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & > :nth-child(1) {
    margin-right: 14px;
  }
  & > :nth-child(2) {
    margin-right: 4px;
  }
`

*/
