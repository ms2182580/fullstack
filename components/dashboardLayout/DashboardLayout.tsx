import { INDEX_D_Dashboard_Header } from "../dashboard/header/INDEX_D_DashboardHeader"
import { INDEX_D_Sidebar } from "../dashboard/sidebar/INDEX_D_Sidebar"
import { INDEX_D_Dashboard_LayoutWrapper } from "./styles/INDEX_D_DashboardWrapper"

export default function Dashboard_D_Layout({ children }) {
  return (
    <INDEX_D_Dashboard_LayoutWrapper>
      <INDEX_D_Sidebar />
      <div>
        <INDEX_D_Dashboard_Header />
        {children}
      </div>
    </INDEX_D_Dashboard_LayoutWrapper>
  )
}
