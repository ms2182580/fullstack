import { P } from '../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { STDetail_ProviderDetailBoxWrapper } from './styles/STDetail_ProviderDetailBoxWrapper.js'

export const STDetail_ProviderDetailBox = ({ meetingFormat }) => {
  return (
    <STDetail_ProviderDetailBoxWrapper>
      {meetingFormat.map(x => (
        <div key={x}>
          <P>{x}</P>
        </div>
      ))}
      <P>Referral Required</P>
      <P>Does Evaluations</P>
    </STDetail_ProviderDetailBoxWrapper>
  )
}