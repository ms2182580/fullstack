import { Dashboard_D_SunSvg } from "@/assets/icons"
import { INDEX_D_DashboardWrapper } from "./styles/INDEX_D_DashboardWrapper"
import { Dashboard_D_PlatformBox } from "./Dashboard_D_PlatformBox"
import { Dashboard_D_ChatBot } from "./Dashboard_D_ChatBox"
import { Dashboard_D_PlanList } from "./Dashboard_D_PlanList"
import { useDashboardAIChat_Ctx } from "@/context/Ctx_Dashboard_AIChat"
import { Index_D_Editor } from "./editor/INDEX_D_Editor"
export const INDEX_D_Dashboard = () => {
  const { isPlan } = useDashboardAIChat_Ctx()

  return (
    <INDEX_D_DashboardWrapper isCreatePlan={isPlan}>
      {!isPlan ? (
        <>
          <h6>
            Nice to meet you, Jane <Dashboard_D_SunSvg />
          </h6>
          <p>What Would you like to do?</p>
          <Dashboard_D_PlatformBox />
          <Dashboard_D_ChatBot />
          <Dashboard_D_PlanList />
        </>
      ) : (
        <>
          <Index_D_Editor />
        </>
      )}
    </INDEX_D_DashboardWrapper>
  )
}
