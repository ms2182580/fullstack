import { INDEX_D_Dashboard_Header } from "@/components/dashboard/header/INDEX_D_DashboardHeader"
import { INDEX_D_Sidebar } from "@/components/dashboard/sidebar/INDEX_D_Sidebar"
import { useDashboardAIChat_Ctx } from "@/context/Ctx_Dashboard_AIChat"
import { Layout_DashboardWrapper } from "./styles/Layout_DashboardWrapper"

export const Layout_Dashboard = ({ children }) => {
  const { isPlan } = useDashboardAIChat_Ctx()

  return (
    <Layout_DashboardWrapper isCreatePlan={isPlan}>
      <INDEX_D_Sidebar />
      <div>
        <INDEX_D_Dashboard_Header />
        {children}
      </div>
    </Layout_DashboardWrapper>
  )
}
