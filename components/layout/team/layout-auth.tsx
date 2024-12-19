import { INDEX_Logo } from "@/components/logo"
import { LayoutAuthWrapper } from "./styles/layout-auth-wrapper"

export const LayoutAuth = ({ children }) => {
  return (
    <LayoutAuthWrapper>
      <aside>
        <INDEX_Logo whichOneShouldDisplay="dark-beta" />

        <p>texthere</p>
      </aside>
      <main>{children}</main>
    </LayoutAuthWrapper>
  )
}
