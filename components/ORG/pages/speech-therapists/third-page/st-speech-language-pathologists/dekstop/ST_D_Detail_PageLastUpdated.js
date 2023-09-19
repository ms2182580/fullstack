import { ORG_ST_LastUpdate } from '../../../../../../utils/ORG_ST_Review_D.js'
import { Breadcrumbs_D } from '../../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js'
import { P } from '../../../../../ui/heading_body_text/DesktopMobileFonts.js'
import { ST_D_Detail_PageLastUpdatedWrapper } from './styles/ST_D_Detail_PageLastUpdatedWrapper.js'

export const ST_D_Detail_PageLastUpdated = ({ name, lastName }) => {
  const lastUpdateData = ORG_ST_LastUpdate()
  return (
    <ST_D_Detail_PageLastUpdatedWrapper>
      <div>
        <Breadcrumbs_D
          whichDisplay={[
            ["Resource Directory", "ORG"],
            ["Speech Therapist", "ORG/speech-therapists"],
            [`${name} ${lastName}`, ""]
          ]}
        />
      </div>

      <P>Page last updated on {lastUpdateData}</P>
    </ST_D_Detail_PageLastUpdatedWrapper>
  )
}
