import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { LeftSide_N_Wrapper } from "./styles/LeftSide_N_Wrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"

export const LeftSide_N = () => {
  return (
    <LeftSide_N_Wrapper>
      <div>
        <span>Inclusive</span>
        <span>BETA</span>
      </div>
      <H3>Sign up here for free access to all of our resources.</H3>
      <P>
        With a free account, you’ll be able to create your care plan(s) and get
        full access to resources and providers near you.
      </P>
    </LeftSide_N_Wrapper>
  )
}
