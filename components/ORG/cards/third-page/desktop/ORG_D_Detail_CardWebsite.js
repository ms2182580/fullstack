import { useState } from "react"
import { WebsiteSvg } from "../../../../../assets/icons2/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_CardWebsiteWrapper } from "./styles/ORG_D_Detail_CardWebsiteWrapper.js"

export const ORG_D_Detail_CardWebsite = ({ firstName, lastName }) => {
  const [website, setWebsite] = useState(`https://www.${firstName.toLowerCase()}${lastName.toLowerCase()}.com`)

  return (
    <ORG_D_Detail_CardWebsiteWrapper>
      <div>
        <WebsiteSvg />

        <P bold>Website:</P>
      </div>

      <P tabIndex={0}>{website}</P>
    </ORG_D_Detail_CardWebsiteWrapper>
  )
}
