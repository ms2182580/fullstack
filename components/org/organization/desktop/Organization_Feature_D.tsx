import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Organization_D_Feature_NWrapper } from "./styles/Organization_D_Feature_NWrapper"
import Organization_4 from "@/assets/images/org/organization/organization_4.png"
import CheckCircle from "@/assets/icons/org/organization/checkCircle.svg"
import { Organization_Support_Type_D } from "./Organization_Support_Type_D"
import { Organization_Effortless_Quality_D } from "./Organization_Effortless_Quality_D"

export const Organization_Feature_D = () => {
  return (
    <Organization_D_Feature_NWrapper>
      <div>
        <div>
          <P primary_cta semibold>
            AI-powered Person-centered planning (whole person wellness)
          </P>
          <div>Our features deliver the best outcomes for DD families</div>
        </div>
        <div>
          <div>
            <div>
              <P primary_cta semibold>
                Advanced filter, refined results
              </P>
              <div>Use one of 15 filters to organize resources </div>
            </div>
            <div>
              <P>Filter by:</P>
              <div>
                <div>
                  <div>
                    <CheckCircle />
                    <P>Location</P>
                  </div>
                  <div>
                    <CheckCircle />
                    <P>Language</P>
                  </div>
                  <div>
                    <CheckCircle />
                    <P>Netowrk</P>
                  </div>
                </div>
                <div>
                  <div>
                    <CheckCircle />
                    <P>Cost</P>
                  </div>
                  <div>
                    <CheckCircle />
                    <P>Language</P>
                  </div>
                  <div>
                    <CheckCircle />
                    <P>Medicaid and insurance policy</P>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src={Organization_4} alt="Filters image" />
        </div>
        <Organization_Support_Type_D />
        <Organization_Effortless_Quality_D />
      </div>
    </Organization_D_Feature_NWrapper>
  )
}
