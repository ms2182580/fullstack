import { PhoneSvg } from "../../../assets/Icons"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { ST_D_CardPhoneWrapper } from "./styles/ST_D_CardPhoneWrapper.js"

export const ST_D_CardPhone = ({ phoneNumber, isMobile = false, isThirdPageMobile = false }) => {
  return (
    <ST_D_CardPhoneWrapper
      isThirdPageMobile={isThirdPageMobile}
      isMobile={isMobile}>
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
    </ST_D_CardPhoneWrapper>
  )
}
