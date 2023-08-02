import { useRouter } from "next/router.js"
import { CarePlanSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Detail_CarePlanWrapper } from "./styles/ST_D_Detail_CarePlanWrapper.js"

export const ST_D_Detail_CarePlan = () => {

  const { push } = useRouter()

  const handleUnderConstruction = () => {
    push({
      pathname: "/404",
      query: { toWhere: "ORG/SpeechTherapists/IndividualProvider" }
    }, "/404")
  }

  return (
    <ST_D_Detail_CarePlanWrapper onClick={handleUnderConstruction}>
      <CarePlanSvg />
      <P primary_hover>
        Add to <br />
        Care Plan
      </P>
    </ST_D_Detail_CarePlanWrapper>
  )
}
