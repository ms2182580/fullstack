import {
  KEYS_VALUES_useSessionStorage,
  useSessionStorage_typedFlow,
} from "@/context/Ctx_sessionStorage_typedFlow_Provider.js"
import { useNavbarHomeHeight } from "../../../context/NavbarHome_Ctx_Height.js"
import { Home_ComingSoonAI_D } from "./Home_ComingSoonAI_D.js"
import { Home_GetServicePlan_D } from "./Home_GetServicePlan_D.js"
import { Home_Hero_D } from "./Home_Hero_D.js"
import { Home_IntroducingAI_D } from "./Home_IntroducingAI_D.js"
import { Home_OurPlatformCarousal_D } from "./Home_OurPlatformCarousal_D"
import { Home_PlanWith_D } from "./Home_PlanWith_D.js"
import { Home_Pricing_D } from "./Home_Pricing_D.js"
import { Home_Survey_D } from "./Home_Survey_D.js"
import { INDEX_HomeWrapper } from "./styles/INDEX_HomeWrapper"
import { Home_D_NavBar_N } from "./Home_D_NavBar_N"
import { INDEX_HomeNWrapper } from "./styles/INDEX_HomeNWrapper"
import { Home_Hero_D_N } from "./Home_Hero_D_N"
import { Home_Feature_D_N } from "./Home_Feature_D_N"
import { Home_D_Service_N } from "./Home_D_Services_N"
import { Hero_D_Banner } from "./Hero_D_Banner"

// export const INDEX_Home = () => {
//   let { height } = useNavbarHomeHeight()

//   let { actualSessionStorage } = useSessionStorage_typedFlow()

//   if (
//     actualSessionStorage !== KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST
//   ) {
//     return (
//       <INDEX_HomeWrapper>
//         <Home_Hero_D />
//         <Home_GetServicePlan_D />
//         <Home_OurPlatformCarousal_D />
//         <Home_IntroducingAI_D />
//         <Home_ComingSoonAI_D />
//         <Home_PlanWith_D />
//         <Home_Pricing_D />
//         <Home_Survey_D />
//       </INDEX_HomeWrapper>
//     )
//   }
// }

export const INDEX_Home = () => {
  let { height } = useNavbarHomeHeight()

  let { actualSessionStorage } = useSessionStorage_typedFlow()

  if (
    actualSessionStorage !== KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST
  ) {
    return (
      <INDEX_HomeNWrapper>
        <Home_Hero_D_N />
        <Home_Feature_D_N />
        <Home_D_Service_N />
        <Hero_D_Banner />
      </INDEX_HomeNWrapper>
    )
  }
}
