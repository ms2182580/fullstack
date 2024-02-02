import HowItWorks_1 from "@/assets/icons/home/home_how-it-works_1.svg"
import HowItWorks_2 from "@/assets/icons/home/home_how-it-works_2.svg"
import Home_3 from "@/assets/images/home/home_3.png"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import { Home_HowItWorks_Left_D } from "./Home_HowItWorks_Left_D"
import { Home_HowItWorks_DWrapper } from "./styles/Home_HowItWorks_DWrapper"

export const Home_HowItWorks_D = () => {
  return (
    <Home_HowItWorks_DWrapper>
      <header>
        <H2>How it works</H2>
        <H3>
          Accelerate care coordination for families through the power of AI
        </H3>
      </header>

      <Home_HowItWorks_Left_D
        iconSVG={HowItWorks_1}
        h4Title="Assess current needs"
        h5Title="Use your existing care plan to get started quickly"
        paragraph="Speed up the process by uploading a recent evaluation or current care
        plan. Your new plan will generate using the provided document and
        anything else you want to add. You will receive an updated care plan
        which includes what your loved one can do, what they want to do, and
        what they need help with, without needing to fill out a lengthy
        questionnaire"
        buttonText="Upload plan"
      />

      <div>
        <Image
          src={Home_3}
          alt="an image showing the component to «Upload file to create a profile» "
        />
      </div>

      <Home_HowItWorks_Left_D
        iconSVG={HowItWorks_2}
        h4Title="Find services & providers"
        h5Title="Life can be unpredictable — find services and providers when you need them"
        paragraph="Conduct a manual or automated search with our online resource platform to locate resources for people with I/DDs. Save the resources you love and our service plan generator will create a customized care plan."
        buttonText="Explore resources"
      />

      <div></div>
    </Home_HowItWorks_DWrapper>
  )
}
