import { Tooltip } from "@/components/tooltip/Tooltip"
import { useCtxCreatePlanVisibility } from "@/context/dashboard/care_plan/ctx-create-plan-visibility"
import { SBSGContentSkipWrapper } from "./styles/SBSGContentSkipWrapper"

export const SBSGContentSkip = () => {
  const { handleHideCreateCarePlan, isCreatePlanVisibible } =
    useCtxCreatePlanVisibility()

  const handleHideCreateCarePlanLocal = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      handleHideCreateCarePlan()
      window.scrollTo({
        top: 0,
      })
    }
  }

  return (
    <SBSGContentSkipWrapper>
      <p
        onClick={handleHideCreateCarePlanLocal}
        onKeyDown={handleHideCreateCarePlanLocal}
        tabIndex={0}
      >
        skip
      </p>

      <Tooltip dataOnTooltip={<div>Tooltip Content</div>} />
    </SBSGContentSkipWrapper>
  )
}
