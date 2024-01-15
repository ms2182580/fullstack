import { WebsiteResultsSvg } from "../../../../../assets/icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Results_CardWebsiteWrapper } from "./styles/ORG_D_Results_CardWebsiteWrapper"

type Props = {
  firstName?: string
  lastName?: string
  backendData?: boolean
  website?: string
}

export const ORG_D_Results_CardWebsite = ({
  firstName = "",
  lastName = "",
  backendData = false,
  website = "_",
}: Props) => {
  if (firstName === "" && lastName === "" && !backendData) {
    return <></>
  }
  let firstPart = firstName.toLowerCase()
  let secondPart = `${lastName === "" ? "" : `-${lastName.toLowerCase()}`}`

  // let formattedResult = !backendData ? `https://www.${firstPart}${secondPart}.com` : website
  let formattedResult = backendData
    ? website
    : `https://www.${firstPart}${secondPart}.com`

  return (
    <ORG_D_Results_CardWebsiteWrapper>
      <WebsiteResultsSvg />
      {/* !FH Add the feature of copy the formattedResult with Enter key */}
      <P tabIndex={0}>{formattedResult}</P>
    </ORG_D_Results_CardWebsiteWrapper>
  )
}
