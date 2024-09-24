import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Organization_D_Subscription_NWrapper } from "./styles/Organization_D_Subscription_NWrapper"
import Organization_5 from "@/assets/images/org/organization/organization_5.png"
import CheckCircle from "@/assets/icons/org/organization/checkCircle.svg"
import { ButtonSmall } from "@/components/ui/buttons/general"

type CardTypes = {
  title: string
  description: string
  isBeta?: boolean
  price: string
  isDiscountGap?: boolean
  discount?: string
  showUsd?: boolean
  services: string[]
}

const Card = ({
  title,
  description,
  isBeta = false,
  price,
  isDiscountGap = true,
  discount,
  showUsd = false,
  services,
}: CardTypes) => {
  return (
    <div>
      <div>
        <div>
          <P>{title}</P>
          {isBeta && <P>Beta</P>}
        </div>
        <P>{description}</P>
      </div>
      <div>
        <P primary_cta={true}>
          {price} {showUsd && <span>USD /month</span>}
        </P>
        {discount && (
          <P style={!isDiscountGap ? { paddingTop: "0px" } : {}}>{discount}</P>
        )}
      </div>
      <div>
        <P>Best For</P>
        <div>
          {services.map((service: string) => (
            <div>
              <CheckCircle />
              <P>{service}</P>
            </div>
          ))}
        </div>
      </div>

      <ButtonSmall>Learn More</ButtonSmall>
    </div>
  )
}

export const Organization_Subscription_D = () => {
  return (
    <Organization_D_Subscription_NWrapper>
      <div>
        <P primary_cta={true}>Subscription options</P>
        <P>Ways to contribute to and improve Oddy..</P>
        <div>
          <Card
            title="Oddy Guide"
            description="Use Oddy to improve outcomes for families worldwide."
            price="$17.99"
            discount={"$39.99 /mo"}
            isBeta={true}
            services={[
              "Service coordinators",
              "Care managers",
              "Provider relations teams",
            ]}
          />
          <Card
            title="Oddy Data Insights"
            description="Use Oddy to improve outcomes for families worldwide."
            price="Contact us"
            services={[
              "Government organizations",
              "Medical insurers",
              "Large organizations",
            ]}
          />

          <Card
            title="Oddy AI Chat"
            description="Give your whole team access to Oddy and extra features."
            price="$10.99"
            showUsd={true}
            discount="$39.99  USD"
            services={[
              "Agencies",
              "Special education schools",
              "Small businesses",
              "Clinics or private practices",
            ]}
            isDiscountGap={false}
          />
        </div>
        <P>*Price per user.</P>
      </div>
    </Organization_D_Subscription_NWrapper>
  )
}
