import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Organization_D_Dive_Right_NWrapper } from "./styles/Organization_D_Dive_Right_NWrapper"
import Organization_7 from "@/assets/images/org/organization/organization_7.png"
import { Search_Icon_SVG } from "@/assets/icons"
import IdentificationCardSVG from "@/assets/icons/org/search-input/IdentificationCard.svg"
import GlobeHemisphereEastSVG from "@/assets/icons/org/search-input/GlobeHemisphereEast.svg"

export const Organization_Dive_Right_D = () => {
  return (
    <Organization_D_Dive_Right_NWrapper>
      <div>
        <div>
          <P primary_cta semibold>
            Dive right in
          </P>
          <div>
            Find an in-network provider or out-of-network supports that impact
            families.
          </div>
        </div>
        <div>
          <div>
            <P>Type Keyword*</P>
            <div>
              <Search_Icon_SVG />
              <input
                type="email"
                name="email"
                placeholder="speech language pathologist (SLP)"
                required
              />
            </div>
          </div>
          <div>
            <P>Condition</P>
            <div>
              <IdentificationCardSVG />
              <input
                type="text"
                name="location"
                placeholder="autism, cerebral pa..."
                required
              />
            </div>
          </div>
          <div>
            <P>Location*</P>
            <div>
              <GlobeHemisphereEastSVG />
              <input type="text" name="location" placeholder="19130" required />
            </div>
          </div>
          <button>
            <Search_Icon_SVG style={{ width: "24px", height: "24px" }} />
          </button>
        </div>

        <Image src={Organization_7} alt="Search user image" height={180} width={120}/>
      </div>
    </Organization_D_Dive_Right_NWrapper>
  )
}
