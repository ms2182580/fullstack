import React from "react"
import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { MasterHome_D_Organization_NWrapper } from "./styles/MasterHome_D_Organization_NWrapper"
import HowItWorkIcon from "@/assets/icons/home/home_how-it-works_3.svg"
import Magic_Wand from "@/assets/icons/home/home_magic_wand.svg"
import Flash from "@/assets/icons/master-home/master_home_flash.svg"
import Master_Home_4 from "@/assets/images/masterHome/Master_Home_4.png"

const Card = ({ title, description }: any) => {
  return (
    <div>
      <div>
        <HowItWorkIcon />
        <P>{title}</P>
      </div>
      <P>{description}</P>
    </div>
  )
}

const MasterHome_Organization_D = () => {
  return (
    <MasterHome_D_Organization_NWrapper>
      <div>
        <P primary_cta={true}>
          Oddy for professionals, businesses, and organizations
        </P>
        <P>Do you work with families with DDs?</P>
        <P>
          Try Oddy's organization solutions. Save money, save time, and increase
          your impact.
        </P>
        <div>
          <Image src={Master_Home_4} alt="Park." />
          <div>
            <div>
              <Card
                title="Public and Private Organizations"
                description="The Oddy platform can support your team and help better serve your clients, constituents or caseload."
              />
              <Card
                title="Government"
                description="Organize data, documents, and streamline how you support families with developmental disabilities. "
              />
              <Card
                title="DD Advocates  & councils"
                description="Solutions that connect individuals with schools, assistive technology or residences all from the Oddy all-in-one user dashboard."
              />
              <Card
                title="Customized  data insights"
                description="Oddy's custom data insights allows for a $4T increase in disposable dollats in the US economy."
              />
            </div>
            {/* <div></div> */}
            <ButtonSmall>See Oddy for organizations</ButtonSmall>
          </div>
        </div>
      </div>
      <P>
        <Magic_Wand />
        Learn about Oddy's AI-powered data insights
        <Flash />
      </P>
    </MasterHome_D_Organization_NWrapper>
  )
}

export default MasterHome_Organization_D
