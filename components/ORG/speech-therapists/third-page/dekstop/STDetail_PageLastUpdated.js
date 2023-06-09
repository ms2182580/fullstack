import React from "react"
import { ORG_ST_LastUpdate } from "../../../../../utils/ORG_ST_Review"
import { Breadcrumbs } from "../../../../ui/breadcrumbs/Breadcrumbs"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { STDetail_PageLastUpdatedWrapper } from './styles/STDetail_PageLastUpdatedWrapper.js'

export const STDetail_PageLastUpdated = ({ name, lastName }) => {
  const lastUpdateData = ORG_ST_LastUpdate()
  return (
    <STDetail_PageLastUpdatedWrapper>
      <div>
        <Breadcrumbs
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
