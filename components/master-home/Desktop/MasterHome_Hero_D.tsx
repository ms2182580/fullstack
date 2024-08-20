import Image from "next/image"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import Master_Home_1 from "@/assets/images/masterHome/Master_Home_1.png"
import Master_Home_2 from "@/assets/images/masterHome/Master_Home_2.png"
import { Signup_N_GoogleSvg } from "@/assets/icons"
import { MasterHome_D_Hero_NWrapper } from "./styles/MasterHome_D_Hero_NWrapper"

export const MasterHome_Hero_D = () => {
  return (
    <MasterHome_D_Hero_NWrapper>
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
    </MasterHome_D_Hero_NWrapper>
  )
}
