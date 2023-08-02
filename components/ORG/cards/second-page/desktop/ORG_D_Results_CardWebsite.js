import { WebsiteResultsSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Results_CardWebsiteWrapper } from './styles/ORG_D_Results_CardWebsiteWrapper.js'

export const ORG_D_Results_CardWebsite = ({ firstName, lastName }) => {
  return (
    <ORG_D_Results_CardWebsiteWrapper>
      <WebsiteResultsSvg />

      <P>{`https://www.${firstName.toLowerCase()}-${lastName.toLowerCase()}.com`}</P>
    </ORG_D_Results_CardWebsiteWrapper>
  )
}
