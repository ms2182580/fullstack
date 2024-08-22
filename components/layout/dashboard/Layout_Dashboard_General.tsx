import { Layout_Dashboard_General_Aside } from "./Layout_Dashboard_General_Aside"
import { Layout_Dashboard_General_Header } from "./Layout_Dashboard_General_Header"
import { Layout_Dashboard_GeneralWrapper } from "./styles/Layout_Dashboard_GeneralWrapper"

export const Layout_Dashboard_General = ({ children }) => {
  return (
    <Layout_Dashboard_GeneralWrapper>
      <Layout_Dashboard_General_Aside />
      <Layout_Dashboard_General_Header />
      <main>{children}</main>
    </Layout_Dashboard_GeneralWrapper>
  )
}
