import {
  Dashboard_CreatePlanHomeSvg,
  Dashboard_D_HeaderSettingSvg,
} from "@/assets/icons"
import { INDEX_D_DashboardHeaderWrapper } from "./styles/INDEX_D_DashboardHeaderWrapper"
import { useDashboardAIChat_Ctx } from "@/context/Ctx_Dashboard_AIChat"

export const INDEX_D_Dashboard_Header = () => {
  const { isPlan } = useDashboardAIChat_Ctx()

  return (
    <INDEX_D_DashboardHeaderWrapper>
      {!isPlan ? (
        <>
          <Dashboard_D_HeaderSettingSvg />
          <div>
            <span>PA</span>
            <span>Parent Account</span>
          </div>
        </>
      ) : (
        <div>
          <Dashboard_CreatePlanHomeSvg />
        </div>
      )}
    </INDEX_D_DashboardHeaderWrapper>
  )
}
