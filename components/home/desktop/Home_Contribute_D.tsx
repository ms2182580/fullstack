import React from "react"
import { Home_D_Contribute_NWrapper } from "./styles/Home_D_Contribute_NWrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"

const Card = ({ title, paymentType }: any) => {
  return (
    <div>
      <div>
        <P>{title}</P>
        <P>{paymentType}</P>
      </div>
      <P primary_cta={true}>
        $7.99 <span>USD /month</span>
      </P>
      <ButtonSmall secondary>Learn More</ButtonSmall>
    </div>
  )
}

const Home_Contribute_D = () => {
  return (
    <Home_D_Contribute_NWrapper>
      <div>
        <P primary_cta={true}>Consider supporting Oddy</P>
        <P>Ways to contribute to and improve Oddy..</P>
        <div>
          <Card
            title="Oddy Family Subscription"
            paymentType="Monthly subscription"
          />
          <Card
            title={"Oddy Family Subscription"}
            paymentType={"One-time contribution"}
          />
          <Card
            title={"Oddy Family Development"}
            paymentType={"Help improve Oddy"}
          />
        </div>
        <P>
          *Subscriptions and contributions are NOT required for families using
          Oddy.
        </P>
      </div>
    </Home_D_Contribute_NWrapper>
  )
}

export default Home_Contribute_D
