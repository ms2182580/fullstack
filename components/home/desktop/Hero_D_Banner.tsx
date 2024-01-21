import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Home_D_Banner_NWrapper } from "./styles/Hero_D_Banner_NWrapper"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const Hero_D_Banner = () => {
  return (
    <Home_D_Banner_NWrapper>
      <H1>Join today and get started with your free forever account!</H1>
      <ButtonSmall secondary>Sign Up</ButtonSmall>
    </Home_D_Banner_NWrapper>
  )
}
