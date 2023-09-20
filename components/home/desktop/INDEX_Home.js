import { useNavbarHomeHeight } from "../../../context/NavbarHome_Ctx_Height.js"
import { Home_ComingSoonAI_D } from "./Home_ComingSoonAI_D.js"
import { Home_GetServicePlan_D } from "./Home_GetServicePlan_D.js"
import { Home_Hero_D } from "./Home_Hero_D.js"
import { Home_IntroducingAI_D } from "./Home_IntroducingAI_D.js"
import { Home_OurPlatformCarousal_D } from "./Home_OurPlatformCarousal_D.js"
import { Home_PlanWith_D } from "./Home_PlanWith_D.js"
import { Home_Pricing_D } from "./Home_Pricing_D.js"
import { Home_Survey_D } from "./Home_Survey_D.js"
import { INDEX_HomeWrapper } from "./styles/INDEX_HomeWrapper.js"

export const INDEX_Home = () => {
  let { height } = useNavbarHomeHeight()

  return (
    <>
      {height !== null && (
        <>
          <INDEX_HomeWrapper paddingTop={height.height}>
            <Home_Hero_D />
            <Home_GetServicePlan_D />
            <Home_OurPlatformCarousal_D />
            <Home_IntroducingAI_D />
            <Home_ComingSoonAI_D />
            <Home_PlanWith_D />
            <Home_Pricing_D />
            <Home_Survey_D />
          </INDEX_HomeWrapper>
        </>
      )}
      {/* <INDEX_HomeWrapper paddingTop={height !== null && height}>
        <h2>HERO</h2>
        <h2>Get Services Plan</h2>
        <h2>Our Platform (carousal)</h2>
        <h2>Introducing AI</h2>
        <h2>Coming soon: AI</h2>
        <h2>Coming soon: Plan with</h2>
        <h2>Suscription for all</h2>
        <h2>Survey</h2>
      </INDEX_HomeWrapper> */}
    </>
  )
}
