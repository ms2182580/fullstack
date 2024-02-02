import {
  Dashboard_CreatePlanHomeSvg,
  Dashboard_CreatePlanShareSvg,
  Dashboard_D_HeaderSettingSvg,
} from "@/assets/icons"
import { INDEX_D_DashboardHeaderWrapper } from "./styles/INDEX_D_DashboardHeaderWrapper"
import { useDashboardAIChat_Ctx } from "@/context/Ctx_Dashboard_AIChat"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { useState } from "react"

export const INDEX_D_Dashboard_Header = () => {
  const { isPlan, setIsPlan } = useDashboardAIChat_Ctx()
  const [value, setValue] = useState("Unittle Document")
  return (
    <INDEX_D_DashboardHeaderWrapper isCreatePlan={isPlan}>
      {!isPlan ? (
        <>
          <Dashboard_D_HeaderSettingSvg />
          <div>
            <span>PA</span>
            <span>Parent Account</span>
          </div>
        </>
      ) : (
        <div className="plan">
          <span>
            <Dashboard_CreatePlanHomeSvg onClick={() => setIsPlan(!isPlan)} />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Untitled Plan"
            />
          </span>
          <ButtonSmall secondary>
            <Dashboard_CreatePlanShareSvg />
            <span> Share</span>
          </ButtonSmall>
        </div>
      )}
    </INDEX_D_DashboardHeaderWrapper>
  )
}
