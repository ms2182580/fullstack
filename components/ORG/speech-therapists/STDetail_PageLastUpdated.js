import React from "react"
import { ORG_ST_LastUpdate } from "../../../utils/ORG_ST_Review"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { STDetail_PageLastUpdatedWrapper } from "./styles/STDetail_PageLastUpdatedWrapper"

export const STDetail_PageLastUpdated = () => {
  const lastUpdateData = ORG_ST_LastUpdate()

  return (
    <STDetail_PageLastUpdatedWrapper>
      <Caption>Page last updated on {lastUpdateData}</Caption>
    </STDetail_PageLastUpdatedWrapper>
  )
}
