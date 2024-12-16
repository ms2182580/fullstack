import { WebsiteResultsSvg } from "../../../../../assets/icons/index"
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

  if (firstName === "" && lastName === "" && backendData && website === "_") {
    return <></>
  }

  const firstPart = firstName.toLowerCase()
  const secondPart = `${lastName === "" ? "" : `-${lastName.toLowerCase()}`}`

  // let formattedResult = !backendData ? `https://www.${firstPart}${secondPart}.com` : website
  const formattedResult = backendData
    ? website
    : `https://www.${firstPart}${secondPart}.com`

  return (
    <ORG_D_Results_CardWebsiteWrapper title={formattedResult}>
      <WebsiteResultsSvg />
      <P tabIndex={0}>{formattedResult}</P>
    </ORG_D_Results_CardWebsiteWrapper>
  )
}
