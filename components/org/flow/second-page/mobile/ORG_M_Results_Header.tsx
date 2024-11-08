import { BackSvg } from "@/assets/icons"
import { ORG_M_Results_HeaderWrapper } from "./styles/ORG_M_Results_HeaderWrapper"
import { useRouter } from "next/router"

type PROPS = {
  titleToFormat?: string
  isTypedFlow?: boolean
}

export const ORG_M_Results_Header = ({
  titleToFormat = "noTitleProvide",
  isTypedFlow = false,
}: PROPS) => {
  const router = useRouter()
  const handleBack = () => router.back()
  return (
    <ORG_M_Results_HeaderWrapper isTypedFlow={isTypedFlow}>
      <BackSvg />
      <span onClick={handleBack}>Back to search</span>
    </ORG_M_Results_HeaderWrapper>
  )
}
