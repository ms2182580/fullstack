import { EmailORGSvg } from '../../../../assets/Icons/index.js'
import { Caption, P } from '../../../ui/heading_body_text/DesktopMobileFonts.js'
import { STResults_CardEmailWrapper } from './styles/STResults_CardEmailWrapper.js'


export const STResults_CardEmail = ({ email, isMobile = false, isThirdPageMobile = false }) => {
  return (
    <STResults_CardEmailWrapper>
      <div>
        <EmailORGSvg />

        {isMobile === false ? (
          <>
            <P bold>Email:</P>
          </>
        ) : isMobile && isThirdPageMobile ? null : (
          <>
            <Caption bold>Email:</Caption>
          </>
        )}
      </div>

      {isMobile === false ? (
        <>
          <P>{email}</P>
        </>
      ) : isMobile && isThirdPageMobile ? (
        <>
          <P>{email}</P>
        </>
      ) : (
        <>
          <Caption>{email}</Caption>
        </>
      )}
    </STResults_CardEmailWrapper>
  )
}