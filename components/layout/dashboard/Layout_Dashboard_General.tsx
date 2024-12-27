import { useCtxCreatePlanVisibility } from "@/context/dashboard/care_plan/ctx-create-plan-visibility"
import { LayoutDashboardGeneralAside } from "./layout-dashboard-general-aside"
import { Layout_Dashboard_General_Header } from "./Layout_Dashboard_General_Header"
import { Layout_Dashboard_GeneralWrapper } from "./styles/Layout_Dashboard_GeneralWrapper"

export const Layout_Dashboard_General = ({ children }) => {
  const { useSetInitialState } = useCtxCreatePlanVisibility()

  useSetInitialState()

  return (
    <Layout_Dashboard_GeneralWrapper>
      <LayoutDashboardGeneralAside />
      <Layout_Dashboard_General_Header />
      <main>{children}</main>
    </Layout_Dashboard_GeneralWrapper>
  )
}
