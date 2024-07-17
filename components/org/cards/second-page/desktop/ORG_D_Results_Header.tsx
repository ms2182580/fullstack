import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { ORG_D_Results_Breadcrumbs } from "./ORG_D_Results_Breadcrumbs"
import { ORG_D_Results_HeaderWrapper } from "./styles/ORG_D_Results_HeaderWrapper"

type Props = {
  titleToFormat?: string
  isTypedFlow?: boolean
}

export const ORG_D_Results_Header = () => {
  const { reachTypedFlow }: any = useSessionStorage_typedFlow()

  return (
    <ORG_D_Results_HeaderWrapper isTypedFlow={reachTypedFlow}>
      {reachTypedFlow ? (
        <P>Search for Therapeutic Providers & Services</P>
      ) : (
        <H1>Explore your results.</H1>
      )}

      <ORG_D_Results_Breadcrumbs />
    </ORG_D_Results_HeaderWrapper>
  )
}
