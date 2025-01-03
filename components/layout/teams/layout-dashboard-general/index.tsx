import { Aside } from "./aside"
import { Header } from "./header"
import { IndexWrapper } from "./styles/index-wrapper"

export const INDEX_LayoutDashboardGeneral = ({ children }) => {
  return (
    <IndexWrapper>
      <Aside />
      <Header />
      <main>{children}</main>
    </IndexWrapper>
  )
}
