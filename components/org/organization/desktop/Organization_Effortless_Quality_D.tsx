import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Organization_D_Effortless_Quality_NWrapper } from "./styles/Organization_D_Effortless_Quality_NWrapper"
import Organization_6 from "@/assets/images/org/organization/organization_6.png"
import CheckCircle from "@/assets/icons/org/organization/checkCircle.svg"

export const Organization_Effortless_Quality_D = () => {
  return (
    <Organization_D_Effortless_Quality_NWrapper>
      <div>
        <div>
          <div>
            <P primary_cta semibold>
              Effortless quality control
            </P>
            <div>Recommend providers with the best track record</div>
          </div>
          <P>
            Save time and use the AI chat to complete forms and paperwork
            required for services. With an uploaded document or user profile,
            you can auto-complete applications and forms, saving valuable time.
          </P>

          <div>
            <div>
              <div>
                <CheckCircle />
                <P>Family rating</P>
              </div>
              <div>
                <CheckCircle />
                <P>DD experience</P>
              </div>
            </div>
            <div>
              <div>
                <CheckCircle />
                <P>Years in business</P>
              </div>
              <div>
                <CheckCircle />
                <P>Specialty</P>
              </div>
            </div>
          </div>
        </div>
        <Image src={Organization_6} alt="Resources image." />
      </div>
    </Organization_D_Effortless_Quality_NWrapper>
  )
}
