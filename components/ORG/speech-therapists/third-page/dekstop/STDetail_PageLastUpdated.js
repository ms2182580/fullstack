import React from "react"
import { ORG_ST_LastUpdate } from "../../../../../utils/ORG_ST_Review_D"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { STDetail_PageLastUpdatedWrapper } from './styles/STDetail_PageLastUpdatedWrapper.js'

export const STDetail_PageLastUpdated = ({ name, lastName }) => {
  const lastUpdateData = ORG_ST_LastUpdate()
  return (
    <STDetail_PageLastUpdatedWrapper>
      <div>
        <Breadcrumbs_D
          whichDisplay={[
            ["Resource Directory", "ORG"],
            ["Speech Therapist", "ORG/SpeechTherapists"],
            [`${name} ${lastName}`, ""]
          ]}
        />
      </div>

      <P>Page last updated on {lastUpdateData}</P>
    </STDetail_PageLastUpdatedWrapper>
  )
}
