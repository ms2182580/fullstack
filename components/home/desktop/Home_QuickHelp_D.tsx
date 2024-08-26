import React from "react"
import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Home_QuickHelp_NWrapper } from "./styles/Home_QuickHelp_NWrapper"
import Master_Home_3 from "@/assets/images/masterHome/Master_Home_3.png"
import Home_our_features_2 from "@/assets/icons/home/home_our-features_2.svg"
import { ButtonSmall } from "@/components/ui/buttons/general"

type CardType = {
  Svg: any
  title: string
  description: string
  buttonText: string
  buttonOnClick?: () => void
}

const Card = ({
  Svg,
  title,
  description,
  buttonText,
  buttonOnClick,
}: CardType) => {
  return (
    <div>
      <div>
        <Svg />
        <P semibold={true}>{title}</P>
        <P>{description}</P>
      </div>
      <ButtonSmall secondary>{buttonText}</ButtonSmall>
    </div>
  )
}

export const Home_QuickHelp_D = () => {
  return (
    <Home_QuickHelp_NWrapper>
      <div>
        <P semibold={true} primary_cta={true}>
          Dive right in
        </P>
        <P semibold={true}>Quick help for families</P>
        <div>
          <Image src={Master_Home_3} alt="A man riding scooter." />
          <div>
            <Card
              Svg={Home_our_features_2}
              title="Ask a question"
              description="Get answers to questions about I/DD care, files, videos, and pictures."
              buttonText="Get answers"
            />
            <Card
              Svg={Home_our_features_2}
              title="Search our listings"
              description="Find therapists, doctors, attorneys or products for IDDs."
              buttonText="Get resources"
            />
            <Card
              Svg={Home_our_features_2}
              title="Draft service plans"
              description="Create a life plan with services supports and life goals."
              buttonText="Get a service plan"
            />
            <Card
              Svg={Home_our_features_2}
              title="Find a job"
              description="Search for employment and vocational training opportunities."
              buttonText="Get a job"
            />
          </div>
        </div>
      </div>
    </Home_QuickHelp_NWrapper>
  )
}
