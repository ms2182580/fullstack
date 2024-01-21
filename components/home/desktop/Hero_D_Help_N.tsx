import { H1, H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import {
  Home_D_Help_NWrapper,
  Input,
  Label,
} from "./styles/Hero_D_Help_NWrapper"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const Hero_D_Help_N = () => {
  return (
    <Home_D_Help_NWrapper>
      <H2>How Can we Help You?</H2>
      <form>
        <div>
          <Label>I'm Seeking help with</Label>
          <Input placeholder="ORG" />
        </div>
        <div>
          <Label>ZIP code</Label>
          <Input placeholder="00000" />
        </div>
      </form>
      <ButtonSmall>View Options</ButtonSmall>
    </Home_D_Help_NWrapper>
  )
}
