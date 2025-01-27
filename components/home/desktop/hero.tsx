import { Signup_N_GoogleSvg } from "@/assets/icons"
import Master_Home_1 from "@/assets/images/masterHome/Master_Home_1.png"
import Master_Home_2 from "@/assets/images/masterHome/Master_Home_2.png"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import { Hero_Wrapper } from "./styles/hero-wrapper"

export const Hero = () => {
  return (
    <Hero_Wrapper>
      <div>
        <H1>
          The all-in-one platform for <br />
          families with developmentally <br /> disabilities
        </H1>
        <P>
          Oddy simplifies care coordination, service plans and bureaucracy for
          families navigating the DD healthcare system.
        </P>
        <div>
          <div>
            <P>Type your email below to create a free account:</P>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Ex: jsmith123@gmail.com"
                required
              />
              <button>Get Started</button>
            </div>
          </div>
          <div>
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <ButtonSmall secondary>
            <Signup_N_GoogleSvg data-testid="google-icon" />
            <span>Continue with Google</span>
          </ButtonSmall>
        </div>
      </div>
      <div>
        <Image src={Master_Home_1} alt="Just ask today image." />
        <Image src={Master_Home_2} alt="Trusted by organization image." />
      </div>
    </Hero_Wrapper>
  )
}
