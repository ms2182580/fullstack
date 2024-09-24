import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Organization_D_Support_Type_NWrapper } from "./styles/Organization_D_Support_Type_NWrapper"
import Organization_5 from "@/assets/images/org/organization/organization_5.png"
import CheckCircle from "@/assets/icons/org/organization/checkCircle.svg"

export const Organization_Support_Type_D = () => {
  return (
    <Organization_D_Support_Type_NWrapper>
      <div>
        <Image src={Organization_5} alt="What are you looking for image" />
        <div>
          <div>
            <P primary_cta semibold>
              Any support type, anywhere, any time
            </P>
            <div>
              Coordinate whole person care with HCBS and inclusive listings
            </div>
          </div>
          <P>
            I/DD services are full of specialized terms and acronyms, treatment
            specialties, and ever-changing rules and regulations. Now, make the
            system more accessible.
          </P>

          <div>
            <div>
              <div>
                <CheckCircle />
                <P>Medical help</P>
              </div>
              <div>
                <CheckCircle />
                <P>Therapeutic</P>
              </div>
              <div>
                <CheckCircle />
                <P>Community</P>
              </div>
            </div>
            <div>
              <div>
                <CheckCircle />
                <P>Social and inclusion</P>
              </div>
              <div>
                <CheckCircle />
                <P>Legal</P>
              </div>
              <div>
                <CheckCircle />
                <P>Educational</P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Organization_D_Support_Type_NWrapper>
  )
}
