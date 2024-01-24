import Image from "next/legacy/image"
import Home_PlanWith from "../../../assets/images/Home_PlanWith.png"
import { Home_PlanWithSvg } from "../../assets/icons"
import { H3 } from "../../components/ui/heading_body_text/HeaderFonts"
import { Home_PlanWith_DWrapper } from "./styles/Home_PlanWith_DWrapper.js"

export const Home_PlanWith_D = () => {
  return (
    <Home_PlanWith_DWrapper>
      <div className="LEFT">
        <Image
          src={Home_PlanWith}
          layout="responsive"
          objectFit="contain"
          width={1}
          height={1}
          alt="Image of AI Inclusive dashboard"
        />
      </div>

      <div className="RIGHT">
        <H3>COMING SOON!</H3>
        <p>
          Plan with <span>alternative communication</span>
        </p>
        <p>
          Make audio plans, translated into 6 languages with AAC accessibility.
          Listen to recommendations on your Amazon <span>Echo!</span>
        </p>
        <button>See all integrations</button>

        <div>
          <span>
            <Home_PlanWithSvg />
          </span>
          <div>
            Learn more about service plans & privacy.{" "}
            <span tabIndex={0}>Learn More</span>
          </div>
        </div>
      </div>
    </Home_PlanWith_DWrapper>
  )
}
