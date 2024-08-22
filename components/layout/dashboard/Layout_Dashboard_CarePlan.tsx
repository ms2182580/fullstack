import { Layout_Dashboard_CarePlanWrapper } from "./styles/Layout_Dashboard_CarePlanWrapper"

export const Layout_Dashboard_CarePlan = ({ children }) => {
  return (
    <Layout_Dashboard_CarePlanWrapper>
      <div>Left side</div>
      <main>{children}</main>
    </Layout_Dashboard_CarePlanWrapper>
  )
}
