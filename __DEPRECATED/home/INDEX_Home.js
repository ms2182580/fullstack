import {
  KEYS_VALUES_useSessionStorage,
  useSessionStorage_typedFlow,
} from "../modals/context/Ctx_sessionStorage_typedFlow_Provider"
import { INDEX_HomeWrapper } from "./styles/INDEX_HomeWrapper"

export const INDEX_Home = () => {
  let { actualSessionStorage } = useSessionStorage_typedFlow()

  if (
    actualSessionStorage !== KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST
  ) {
    return (
      <INDEX_HomeWrapper>
        {/* <Home_Hero_D />
        <Home_GetServicePlan_D />
        <Home_OurPlatformCarousal_D />
        <Home_IntroducingAI_D />
        <Home_ComingSoonAI_D />
        <Home_PlanWith_D />
        <Home_Pricing_D />
        <Home_Survey_D /> */}
      </INDEX_HomeWrapper>
    )
  }
}
