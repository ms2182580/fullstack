import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Home_D_Service_NWrapper } from "./styles/Home_D_Service_NWrapper"
import { Hero_D_MeneSearchCircle, Hero_D_MenuSearchSvg } from "@/assets/icons"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { Home_D_Chat_N } from "./Home_D_Chat_N"

export const Home_D_Service_N = () => {
  return (
    <Home_D_Service_NWrapper>
      <div>
        <span>
          <Hero_D_MeneSearchCircle />
          <Hero_D_MenuSearchSvg />
          <P>Find PROVIDERS & SERVICES</P>
        </span>
        <H3>Our System Adapts To Your Everchanging Circumstances </H3>
        <P>Browse and connect with:</P>
        <ul>
          <li>A team of medical specialists,</li>
          <li>Educational support,</li>
          <li>Recreational and social programs and more!</li>
        </ul>
        <ButtonSmall>Explore All Resources</ButtonSmall>
      </div>
      <Home_D_Chat_N />
    </Home_D_Service_NWrapper>
  )
}
