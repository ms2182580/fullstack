import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { Organization_D_Resource_NWrapper } from "./styles/Organization_D_Resource_NWrapper"
import Organization_3 from "@/assets/images/org/organization/organization_3.png"
import UserIcon from "@/assets/icons/org/organization/userCirclePlus.svg"
import LockIcon from "@/assets/icons/org/organization/lock.svg"
import SidebarIcon from "@/assets/icons/org/organization/sidebar.svg"

type CardPropsType = {
  Icon?: React.ReactElement
  heading?: string
  description?: string
}

const Card = ({ Icon, heading, description }: CardPropsType) => {
  return (
    <div>
      {Icon}
      <div>
        <H3>{heading}</H3>
        <div>{description}</div>
      </div>
    </div>
  )
}

export const Organization_Resource_D = () => {
  return (
    <Organization_D_Resource_NWrapper>
      <div>
        <div>
          <P primary_cta semibold>
            In a league of its own
          </P>
          <div>Oddy is the only DD resource directory you’ll ever need</div>
        </div>
        <div>
          <Card
            Icon={<UserIcon />}
            heading="+4 Million resources"
            description="Send and receive applications, documents, files, signatures and even
          payments."
          />
          <Card
            Icon={<LockIcon />}
            heading="HIPAA-compliant"
            description="Use the only  HIPAA compliant platform that always gives you a smooth user experience. "
          />
          <Card
            Icon={<SidebarIcon />}
            heading="Fully-customizable"
            description="Create custom list of providers for each of your caseloads."
          />
        </div>
        <div>
          <div>
            <P primary_cta>Dive right in</P>
            <div>
              Create a forever free account and start building a provider
              network now.
            </div>
            <div>
              <label htmlFor="email">Type your work email below:</label>
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
          </div>
          <Image src={Organization_3} alt="Leadership image." />
        </div>
      </div>
    </Organization_D_Resource_NWrapper>
  )
}
