import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ORG_D_Results_Breadcrumbs } from "./ORG_D_Results_Breadcrumbs"
import { ORG_D_Results_HeaderWrapper } from "./styles/ORG_D_Results_HeaderWrapper"

type Props = {
  titleToFormat?: string
  isTypedFlow?: boolean
}

export const ORG_D_Results_Header = ({
  titleToFormat = "noTitleProvide",
  isTypedFlow = false,
}: Props) => {
  return (
    <ORG_D_Results_HeaderWrapper isTypedFlow={isTypedFlow}>
      {isTypedFlow ? (
        <P>Search for Therapeutic Providers & Services</P>
      ) : (
        <H1>Explore your results.</H1>
      )}

      <ORG_D_Results_Breadcrumbs
        titleToFormat={titleToFormat}
        isTypedFlow={isTypedFlow}
      />
    </ORG_D_Results_HeaderWrapper>
  )
}
