import { useState } from "react"
import { WebsiteSvg } from "../../../../../../assets/Icons/index.js"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Detail_CardWebsiteWrapper } from "./styles/ST_D_Detail_CardWebsiteWrapper.js"

export const ST_D_Detail_CardWebsite = ({ firstName, lastName }) => {
  const [website, setWebsite] = useState(`https://www.${firstName.toLowerCase()}${lastName.toLowerCase()}SLP.com`)

  return (
    <ST_D_Detail_CardWebsiteWrapper>
      <div>
        <WebsiteSvg />

        <P bold>Website:</P>
      </div>

      <P>{website}</P>
    </ST_D_Detail_CardWebsiteWrapper>
  )
}
