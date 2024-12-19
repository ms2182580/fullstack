import { LayoutAuthWrapper } from "./styles/layout-auth-wrapper"

export const LayoutAuth = ({ children }) => {
  return (
    <LayoutAuthWrapper>
      <main>{children}</main>
    </LayoutAuthWrapper>
  )
}
