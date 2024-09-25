import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { Organization_D_Hero_NWrapper } from "./styles/Organization_D_Hero_NWrapper"
import { Signup_N_GoogleSvg } from "@/assets/icons"
import Organization_1 from "@/assets/images/org/organization/organization_1.png"
import Organization_2 from "@/assets/images/org/organization/organization_2.png"
import { Search_Icon_SVG } from "@/assets/icons"

export const Organization_Hero_D = () => {
  return (
    <Organization_D_Hero_NWrapper>
      <div>
        <div>
          <H1>
            The ultimate guide to <br />
            developmental <br /> disability resources
          </H1>
          <div />
          <P>
            Oddy is the specialized directory of home and community-based
            services (HCBS) for developmentally disabled families.
          </P>
          <div>
            <div>
              <div>
                <div>
                  <P>Type Keyword*</P>
                  <div>
                    <Search_Icon_SVG />
                    <input
                      type="email"
                      name="email"
                      placeholder="Ex: ABC speech therapy LLC,  counseling, etc."
                      required
                    />
                  </div>
                </div>
                <div>
                  <P>Location*</P>
                  <div>
                    <Search_Icon_SVG />
                    <input
                      type="text"
                      name="location"
                      placeholder="19130"
                      required
                    />
                  </div>
                </div>
                <button>Search</button>
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
        <Image src={Organization_1} alt="Oddy laptop image." />
      </div>
      <div>
        <Image src={Organization_2} alt="Trusted by organization image." />
      </div>
    </Organization_D_Hero_NWrapper>
  )
}
