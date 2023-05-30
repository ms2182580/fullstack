import { useRouter } from "next/router.js"
import { CarePlanSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { STDetail_CarePlanWrapper } from "./styles/STDetail_CarePlanWrapper.js"

export const STDetail_CarePlan = () => {

  const { push } = useRouter()

  /* 
  !FH
  Is possible to recover the data!!!
  */
  const handleUnderConstruction = () => {
    push({
      pathname: "/404",
      query: { toWhere: "ORG/SpeechTherapists/IndividualProvider" }
    })
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
