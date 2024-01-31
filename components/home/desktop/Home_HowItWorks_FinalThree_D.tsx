import home_how_it_works_3 from "@/assets/icons/home/home_how-it-works_3.svg"
import home_how_it_works_4 from "@/assets/icons/home/home_how-it-works_4.svg"
import Home_4 from "@/assets/images/home/home_4.png"
import Image from "next/image"
import { Home_HowItWorks_Left_D } from "./Home_HowItWorks_Left_D"
import { Home_HowItWorks_FinalThree_DWrapper } from "./styles/Home_HowItWorks_FinalThree_DWrapper"

export const Home_HowItWorks_FinalThree_D = () => {
  return (
    <Home_HowItWorks_FinalThree_DWrapper>
      <div>
        <Home_HowItWorks_Left_D
          iconSVG={home_how_it_works_3}
          h4Title="Define goals & action plan"
          h5Title="Finding the best path forward"
          paragraph="Our care plan generator will create an action plan to help your loved one achieve their unique goals. This plan can be updated at anytime, and is easy to export and share with your care team"
          buttonText="Begin an action plan"
        />
        <Home_HowItWorks_Left_D
          iconSVG={home_how_it_works_4}
          h4Title="Get your care plan"
          h5Title="Transform your loved one’s care with ease"
          paragraph="Your situation is unique. and your care plan should be, too. Inclusive’s platform will guide you through a step-by-step process to create the best plan for your loved one. And since we know that needs can change, your plan can be updated at anytime"
          buttonText="Get started"
        />
      </div>

      <Image
        src={Home_4}
        alt="An image showing a card on how it would be a card with the desired plan: will have a goal, a timeline, desired outcome, support and actions steps  "
      />
    </Home_HowItWorks_FinalThree_DWrapper>
  )
}
