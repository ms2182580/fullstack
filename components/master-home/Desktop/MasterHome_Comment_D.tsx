import React from "react"
import { MasterHome_D_Comment_NWrapper } from "./styles/MasterHome_D_Comment_NWrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Quotation from "@/assets/icons/master-home/master_home_quotation.svg"
import { ButtonSmall } from "@/components/ui/buttons/general"

const Card = () => {
  return (
    <div>
      <div>
        <Quotation />
        <P>
          ...Oddy's online resource guide helped us find a replacement Speech
          therapist as soon as our daughter's SLP left the network.
        </P>
        <Quotation />
      </div>
      <div>
        <P semibold={true}>Jermaine S. DiCaprio</P>
        <P>Parent</P>
      </div>
    </div>
  )
}

const MasterHome_Comment_D = () => {
  return (
    <MasterHome_D_Comment_NWrapper>
      <div>
        <div>
          <P primary_cta={true}>Stories from our families</P>
          <P>Hear from Oddy families.</P>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <ButtonSmall secondary>Read More</ButtonSmall>
      </div>
    </MasterHome_D_Comment_NWrapper>
  )
}

export default MasterHome_Comment_D
