import { useCheckBreadcrumbsProps } from "@/utils/ORG/useCheckBreadcrumbsProps"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Results_Header_PropsWrapper } from "./styles/ORG_D_Results_Header_PropsWrapper"

export const ORG_D_Results_Header_Props = ({ titleToFormat = "", typedFlow = false }) => {
  const { titleFormatted } = useCheckBreadcrumbsProps(titleToFormat, typedFlow)

  return (
    <ORG_D_Results_Header_PropsWrapper>
      <P>Search for Therapeutic Providers & Services</P>

      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          [`${titleFormatted}`, ""],
        ]}
        typedFlow={typedFlow}
      />
    </ORG_D_Results_Header_PropsWrapper>
  )
}
