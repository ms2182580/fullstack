import { useState } from "react"
import { WebsiteSvg } from "../../../../../assets/icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_CardWebsiteWrapper } from "./styles/ORG_D_Detail_CardWebsiteWrapper"

type Props = {
  firstName?: string
  lastName?: string
  website?: string
  isBackend?: boolean
}

export const ORG_D_Detail_CardWebsite = ({
  firstName = "",
  lastName = "",
  website,
  isBackend = false,
}: Props) => {
  const [websiteState, setWebsite] = useState(
    `https://www.${firstName.toLowerCase()}${lastName.toLowerCase()}.com`
  )

  return (
    <ORG_D_Detail_CardWebsiteWrapper>
      <div>
        <WebsiteSvg />

        <P>Website:</P>
      </div>

      <P tabIndex={0}>{isBackend ? website : websiteState}</P>
    </ORG_D_Detail_CardWebsiteWrapper>
  )
}
