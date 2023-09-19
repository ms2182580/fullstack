import { P } from '../../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { ST_D_Detail_ProviderDetailBoxWrapper } from './styles/ST_D_Detail_ProviderDetailBoxWrapper.js'

export const ST_D_Detail_ProviderDetailBox = ({ meetingFormat }) => {
  return (
    <ST_D_Detail_ProviderDetailBoxWrapper>
      {meetingFormat.map(x => (
        <div key={x}>
          <P>{x}</P>
        </div>
      ))}
      <P>Referral Required</P>
      <P>Does Evaluations</P>
    </ST_D_Detail_ProviderDetailBoxWrapper>
  )
}