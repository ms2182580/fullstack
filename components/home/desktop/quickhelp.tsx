import Home_our_features_2 from "@/assets/icons/home/home_our-features_2.svg"
import Master_Home_3 from "@/assets/images/masterHome/Master_Home_3.png"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Image from "next/image"
import { QuickhelpWrapper } from "./styles/quickhelp-wrapper"

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

export const Quickhelp = () => {
  return (
    <QuickhelpWrapper>
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
    </QuickhelpWrapper>
  )
}
