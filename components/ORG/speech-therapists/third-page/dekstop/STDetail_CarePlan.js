import { useRouter } from "next/router.js"
import { CarePlanSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { STDetail_CarePlanWrapper } from "./styles/STDetail_CarePlanWrapper.js"

export const STDetail_CarePlan = () => {

  const { push } = useRouter()

  const handleUnderConstruction = () => {
    push("/404")
  }

  return (
    <STDetail_CarePlanWrapper onClick={handleUnderConstruction}>
      <CarePlanSvg />
      <P primary_hover>
        Add to <br />
        Care Plan
      </P>
    </STDetail_CarePlanWrapper>
  )
}
