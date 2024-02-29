import Checkbox from "@/assets/icons/home/Home_our_features_checkbox.svg"
import Home_our_features_1 from "@/assets/icons/home/home_our-features_1.svg"
import Home_our_features_2 from "@/assets/icons/home/home_our-features_2.svg"
import Home_5 from "@/assets/images/home/home_5.png"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import { Home_HowItWorks_Left_D } from "./Home_HowItWorks_Left_D"
import { Home_OurFeaturesWrapper } from "./styles/Home_OurFeaturesWrapper"

const listToRender_1: string[] = [
  "Optimize plan for",
  "Cost",
  "Setting",
  "Schedule",
  "Ages of services",
  "Change of service credentials ",
  "Provider availability ",
  "Limited transportation",
]

const listToRender_2: string[] = [
  "Update plan based on",
  "Life changes",
  "New vocations",
  "New service recommendations",
  "Transitions ",
  "Emerging interests",
  "Problematic behaviors",
]

export const Home_OurFeatures = () => {
  return (
    <Home_OurFeaturesWrapper>
      <header>
        <H2>Our features</H2>
        <H3>Innovative technology for the I/DD community</H3>
      </header>

      <Home_HowItWorks_Left_D
        iconSVG={Home_our_features_1}
        h4Title="AI Chat"
        h5Title="Get the answers you need quickly"
        paragraph="Meet your friendly AI guide. It will prompt you with key questions, tailor recommendations, and address your concerns with respect and compassion, all while helping you build your loved one’s care plan."
        buttonText="Explore with AI"
      />

      <Image src={Home_5} alt="An image showing the UI of the chat with UI" />

      <Home_HowItWorks_Left_D
        iconSVG={Home_our_features_2}
        h4Title="the care plan that keeps on giving"
        h5Title="Customization at your fingertips "
        paragraph="AI-powered care plans are self-revising, living documents that can grow and adapt in order to best support a person with an I/DD."
        buttonText="Begin a care plan"
      />

      <div>
        <ul>
          {listToRender_1.map((x, index) => {
            if (index === 0) {
              return <li key={x}>{x}</li>
            }

            return (
              <li key={x}>
                <Checkbox />

                {x}
              </li>
            )
          })}
        </ul>
        <ul>
          {listToRender_2.map((x, index) => {
            if (index === 0) {
              return <li key={x}>{x}</li>
            }

            return (
              <li key={x}>
                <Checkbox />

                {x}
              </li>
            )
          })}
        </ul>
      </div>
    </Home_OurFeaturesWrapper>
  )
}
