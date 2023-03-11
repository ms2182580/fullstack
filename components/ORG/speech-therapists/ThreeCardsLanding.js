import { ORGLanding_CC, ORGLanding_Doctors, ORGLanding_ST } from "../../../assets/Icons/index"
import { SpecificCard } from "./SpecificCard.js"
import { ThreeCardsLandingWrapper } from "./styles/ThreeCardsLandingWrapper.js"

export const ThreeCardsLanding = () => {
  return (
    <ThreeCardsLandingWrapper>
      <SpecificCard
        title="Therapeutic Services"
        icon={ORGLanding_ST}
      />
      <SpecificCard
        inProgress={true}
        title="Doctors"
        icon={ORGLanding_Doctors}
      />
      <SpecificCard
        inProgress={true}
        title="Community Classes"
        icon={ORGLanding_CC}
      />
    </ThreeCardsLandingWrapper>
  )
}
