import { WebsiteSvg } from "../../../assets/Icons/index.js"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_CardWebsiteWrapper } from "./styles/ST_CardWebsiteWrapper.js"

/* 
!FH0

Prevent the svg icon get deleted when the text is to much longer
*/

export const ST_CardWebsite = ({ firstName, lastName, isMobile = false, isThirdPageMobile = false }) => {
  const website = `https://www.${firstName.toLowerCase()}${lastName.toLowerCase()}SLP.com`

  return (
    <ST_CardWebsiteWrapper
      isThirdPageMobile={isThirdPageMobile}
      isMobile={isMobile}>
      <WebsiteSvg />
      {isMobile === false ? (
        <>
          <P bold>Website:</P>
          <P>{website}</P>
        </>
      ) : isMobile && isThirdPageMobile ? (
        <>
          <P>{website}</P>
        </>
      ) : (
        <>
          <Caption bold>Website:</Caption>
          <Caption>{website}</Caption>
        </>
      )}
    </ST_CardWebsiteWrapper>
  )
}
