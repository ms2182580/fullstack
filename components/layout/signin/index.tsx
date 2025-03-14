import { INDEX_Logo } from "@/components/logo"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Layout_SigninWrapper } from "./styles/Layout_SigninWrapper"

export const Layout_Signin = ({ children }) => {
  return (
    <Layout_SigninWrapper>
      <aside>
        <INDEX_Logo whichOneShouldDisplay="white" />
        <H3>Welcome back to Inclusive!</H3>
        <P>Sign in to access your saved resources and care plan(s).</P>
      </aside>

      <main>{children}</main>
    </Layout_SigninWrapper>
  )
}
