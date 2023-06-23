import { useState } from "react"
import { WebsiteSvg } from "../../../assets/Icons/index.js"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_CardWebsiteWrapper } from "./styles/ST_D_CardWebsiteWrapper.js"

export const ST_D_CardWebsite = ({ firstName, lastName, isMobile = false, isThirdPageMobile = false }) => {
  const [website, setWebsite] = useState(`https://www.${firstName.toLowerCase()}${lastName.toLowerCase()}SLP.com`)

  // const website = `https://www.${firstName.toLowerCase()}${lastName.toLowerCase()}SLP.com`

  return (
    <ST_D_CardWebsiteWrapper
      isThirdPageMobile={isThirdPageMobile}
      isMobile={isMobile}>
      <div>
        <WebsiteSvg />

        {isMobile === false ? (
          <>
            <P bold>Website:</P>
          </>
        ) : isMobile && isThirdPageMobile ? null : (
          <>
            <Caption bold>Website:</Caption>
          </>
        )}
      </div>

      {isMobile === false ? (
        <>
          <P>{website}</P>
        </>
      ) : isMobile && isThirdPageMobile ? (
        <>
          <P>{website}</P>
        </>
      ) : (
        <>
          <Caption>{website}</Caption>
        </>
      )}
    </ST_D_CardWebsiteWrapper>
  )
}
