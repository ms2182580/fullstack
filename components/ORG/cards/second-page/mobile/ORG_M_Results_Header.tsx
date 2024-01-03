import { BackSvg } from "@/assets/icons"
import { ORG_M_Results_HeaderWrapper } from "./styles/ORG_M_Results_HeaderWrapper"

type PROPS = {
  titleToFormat?: string
  isTypedFlow?: boolean
}

export const ORG_M_Results_Header = ({ titleToFormat = "noTitleProvide", isTypedFlow = false }: PROPS) => {
  return (
    <ORG_M_Results_HeaderWrapper isTypedFlow={isTypedFlow}>
      <BackSvg />
      <span>Back to search</span>
    </ORG_M_Results_HeaderWrapper>
  )
}
