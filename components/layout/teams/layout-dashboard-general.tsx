import { LayoutDashboardGeneralAside } from "./layout-dashboard-general-aside"
import { LayoutDashboardGeneralHeader } from "./layout-dashboard-general-header"
import { LayoutDashboardGeneralWrapper } from "./styles/layout-dashboard-general-wrapper"

export const LayoutDashboardGeneral = ({ children }) => {
  return (
    <LayoutDashboardGeneralWrapper>
      <LayoutDashboardGeneralAside />
      <LayoutDashboardGeneralHeader />
      <main>{children}</main>
    </LayoutDashboardGeneralWrapper>
  )
}
