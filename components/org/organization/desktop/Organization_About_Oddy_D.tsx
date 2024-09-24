import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Organization_D_About_Oddy_NWrapper } from "./styles/Organization_D_About_Oddy_NWrapper"
import Organization_8 from "@/assets/images/org/organization/organization_8.png"

export const Organization_About_Oddy_D = () => {
  return (
    <Organization_D_About_Oddy_NWrapper>
      <div>
        <div>
          <div>
            <P primary_cta semibold>
              About Oddy
            </P>
            <div>Family founded, family operated.</div>
          </div>
          <div>
            <P>
              Oddy is an organization founded by families, indiviudals, siblings
              and parents. Our journeys to care have been complex, yet we’re
              working through the kinks--We created Oddy to offer the DD
              community the tool we wish we existed as we navigate the DD care
              landscape
            </P>
            <P>
              We have spent a lot of time researching resources, and now it’s
              become our full-time job.
            </P>
            <P>
              We know that agencies, providers, and clinicians want to help, but
              the system is so complex, and Oddy is here to fix that..
            </P>
          </div>
        </div>
        <Image src={Organization_8} alt="System failure image." />
      </div>
    </Organization_D_About_Oddy_NWrapper>
  )
}
