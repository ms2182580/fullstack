import { Dashboard_D_SunSvg } from "@/assets/icons"
import { H1, H4 } from "../ui/heading_body_text/HeaderFonts"
import { INDEX_D_DashboardWrapper } from "./styles/INDEX_D_DashboardWrapper"
import { Dashboard_D_PlatformBox } from "./Dashboard_D_PlatformBox"
import { Dashboard_D_ChatBot } from "./Dashboard_D_ChatBox"
import { Dashboard_D_PlanList } from "./Dashboard_D_PlanList"

export const INDEX_D_Dashboard = () => {
  return (
    <INDEX_D_DashboardWrapper>
      <h6>
        Nice to meet you, Jane <Dashboard_D_SunSvg />
      </h6>
      <p>What Would you like to do?</p>
      <Dashboard_D_PlatformBox />
      <Dashboard_D_ChatBot />
      <Dashboard_D_PlanList />
    </INDEX_D_DashboardWrapper>
  )
}
