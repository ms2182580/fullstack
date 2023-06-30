import React from "react"
import { ORG_ST_LastUpdate } from "../../../utils/ORG_ST_Review_D"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { ST_D_PageLastUpdatedWrapper } from "./styles/ST_D_PageLastUpdatedWrapper"

export const ST_D_PageLastUpdated = () => {
  const lastUpdateData = ORG_ST_LastUpdate()

  // const route = useRouter()

  return (
    <ST_D_PageLastUpdatedWrapper>
      <P>Page last updated on {lastUpdateData}</P>
    </ST_D_PageLastUpdatedWrapper>
  )
}
