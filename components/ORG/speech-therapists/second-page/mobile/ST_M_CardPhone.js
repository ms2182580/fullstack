import { PhoneSvg } from "../../../../../assets/Icons/index.js"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_CardPhoneWrapper } from "./styles/ST_D_CardPhoneWrapper.js"

export const ST_M_CardPhone = ({ phoneNumber, isThirdPageMobile = false }) => {
  return (
    <ST_M_CardPhoneWrapper isThirdPageMobile={isThirdPageMobile}>
      <div>
        <PhoneSvg />

        {isThirdPageMobile ? null : <Caption bold>Phone:</Caption>}
      </div>

      <div>
        {isThirdPageMobile ? (
          <>
            <P>{phoneNumber}</P>
          </>
        ) : (
          <>
            <Caption>{phoneNumber}</Caption>
          </>
        )}
      </div>

      {/* {isMobile === false ? (
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
      )} */}
    </ST_M_CardPhoneWrapper>
  )
}
