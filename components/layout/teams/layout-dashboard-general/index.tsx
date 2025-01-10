import { Aside } from "./aside"
import { INDEX_Header } from "./header"
import { IndexWrapper } from "./styles/index-wrapper"

export const INDEX_LayoutDashboardGeneral = ({ children }) => {
  return (
    <IndexWrapper>
      <Aside />
      <INDEX_Header />
      <main>{children}</main>
    </IndexWrapper>
  )
}
