import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { Dashboard_D_PlanListWrapper } from "./styles/Dashboard_D_PlanListWrapper"

export const Dashboard_D_PlanList = () => {
  return (
    <Dashboard_D_PlanListWrapper>
      <div>
        <input type="checkbox" />
        <span>Document Name</span>
        <span>Created For</span>
        <span>Last Modified</span>
        <span>Status</span>
      </div>
      <div>
        <h5>You haven't created any plans yet!</h5>
        <P>Your AI-generated plans will appear here</P>
      </div>
    </Dashboard_D_PlanListWrapper>
  )
}
