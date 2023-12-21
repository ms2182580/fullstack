import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Results_Breadcrumbs } from "./ORG_D_Results_Breadcrumbs"
import { ORG_D_Results_HeaderWrapper } from "./styles/ORG_D_Results_HeaderWrapper"

type PROPS = {
  titleToFormat?: string
  isTypedFlow?: boolean
}

export const ORG_D_Results_Header = ({ titleToFormat, isTypedFlow = false }: PROPS) => {
  return (
    <ORG_D_Results_HeaderWrapper isTypedFlow={isTypedFlow}>
      {isTypedFlow ? <P>Search for Therapeutic Providers & Services</P> : null}

      <ORG_D_Results_Breadcrumbs
        titleToFormat={titleToFormat}
        isTypedFlow={isTypedFlow}
      />
    </ORG_D_Results_HeaderWrapper>
  )
}
