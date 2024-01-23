import { Hero_D_Banner } from "./Hero_D_Banner"
import { Home_D_Service_N } from "./Home_D_Services_N"
import { Home_Feature_D_N } from "./Home_Feature_D_N"
import { Home_Hero_D_N } from "./Home_Hero_D_N"
import { INDEX_HomeNWrapper } from "./styles/INDEX_HomeNWrapper"

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
  return (
    <INDEX_HomeNWrapper>
      <Home_Hero_D_N />
      <Home_Feature_D_N />
      <Home_D_Service_N />
      <Hero_D_Banner />
    </INDEX_HomeNWrapper>
  )
}
