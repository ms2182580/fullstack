import { useRouter } from "next/router"
import React from "react"
import { ORG_ST_LastUpdate } from "../../../utils/ORG_ST_Review"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { ST_PageLastUpdatedWrapper } from "./styles/ST_PageLastUpdatedWrapper"

export const ST_PageLastUpdated = ({ name, lastName }) => {
  const lastUpdateData = ORG_ST_LastUpdate()

  const route = useRouter()

  return (
    <ST_PageLastUpdatedWrapper>

      <P>Page last updated on {lastUpdateData}</P>
    </ST_PageLastUpdatedWrapper>
  )
}
