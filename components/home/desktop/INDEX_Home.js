import { useNavbarHomeHeight } from "../../../context/NavbarHome_Ctx_Height.js"
import { Home_GetServicePlan_D } from './Home_GetServicePlan_D.js'
import { Home_Hero_D } from "./Home_Hero_D.js"
import { Home_OurPlatformCarousal_D } from './Home_OurPlatformCarousal_D'
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
            {/* >
            <Home_OurPlatformCarousal_D />
            <Home_IntroducingAI_D />
            <Home_ComingSoonAI_D />
            <Home_PlanWith_D />
            <Home_Pricing_D />
            <Home_Survey_D /> */}
          </INDEX_HomeWrapper>
        </>
      )}
    </>
  )
}
