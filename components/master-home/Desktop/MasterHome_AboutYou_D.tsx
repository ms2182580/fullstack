import React from "react"
import Image from "next/image"
import { MasterHome_D_AboutYou_NWrapper } from "./styles/MasterHome_D_AboutYou_NWrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import Master_Home_5 from "@/assets/images/masterHome/Master_Home_5.png"

const MasterHome_AboutYou_D = () => {
  return (
    <MasterHome_D_AboutYou_NWrapper>
      <div>
        <div>
          <P primary_cta={true}>Tell Us About You</P>
          <P>
            Agencies and Organizations reach more families with a free Oddy
            profile.
          </P>
          <div>
            <P semibold={true}>Enter your business name:</P>
            <input
              type="email"
              name="email"
              placeholder="Ex: Your Organization Name, Inc."
              required
            />
          </div>
          <ButtonSmall>See my Oddy Profile</ButtonSmall>
        </div>
        <Image src={Master_Home_5} alt="Success." width={554} height={554} />
      </div>
    </MasterHome_D_AboutYou_NWrapper>
  )
}

export default MasterHome_AboutYou_D
