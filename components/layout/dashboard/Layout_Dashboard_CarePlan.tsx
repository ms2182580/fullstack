import { Layout_Dashboard_CarePlan_Aside } from "./Layout_Dashboard_CarePlan_Aside"
import { Layout_Dashboard_CarePlanWrapper } from "./styles/Layout_Dashboard_CarePlanWrapper"

export const Layout_Dashboard_CarePlan = ({ children }) => {
  return (
    <Layout_Dashboard_CarePlanWrapper>
      <Layout_Dashboard_CarePlan_Aside />
      <main>{children}</main>
    </Layout_Dashboard_CarePlanWrapper>
  )
}
