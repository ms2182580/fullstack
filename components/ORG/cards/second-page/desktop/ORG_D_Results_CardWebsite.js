import { WebsiteResultsSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Results_CardWebsiteWrapper } from "./styles/ORG_D_Results_CardWebsiteWrapper.js"

export const ORG_D_Results_CardWebsite = ({ firstName, lastName = "" }) => {
  let firstPart = firstName.toLowerCase()
  let secondPart = `${lastName === "" ? "" : `-${lastName.toLowerCase()}`}`

  let formattedResult = `https://www.${firstPart}${secondPart}.com`

  return (
    <ORG_D_Results_CardWebsiteWrapper>
      <WebsiteResultsSvg />

      <P>{formattedResult}</P>
    </ORG_D_Results_CardWebsiteWrapper>
  )
}
