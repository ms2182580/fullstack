import { Dashboard_D_HeaderSettingSvg } from "@/assets/icons"
import { INDEX_D_DashboardHeaderWrapper } from "./styles/INDEX_D_DashboardHeaderWrapper"

export const INDEX_D_Dashboard_Header = () => {
  return (
    <INDEX_D_DashboardHeaderWrapper>
      <Dashboard_D_HeaderSettingSvg />
      <div>
        <span>PA</span>
        <span>Parent Account</span>
      </div>
    </INDEX_D_DashboardHeaderWrapper>
  )
}
