import Image from "next/image.js"
import Home_IntroduccingAI from "../../../assets/images/Home_IntroduccingAI.png"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { Home_IntroducingAI_DWrapper } from "./styles/Home_IntroducingAI_DWrapper.js"

export const Home_IntroducingAI_D = () => {
  return (
    <Home_IntroducingAI_DWrapper>
      <div className="LEFT">
        <Image
          src={Home_IntroduccingAI}
          // layout="responsive"
          // objectFit="contain"
          // width={1200}
          // height={600}

          // width={1}
          // height={0.988}
          alt="Dashboard of AI Inclusive"
        />
      </div>

      <div className="RIGHT">
        <h2 tabIndex={0}>
          Introducing AI to <br />
          care coordination.
        </h2>
        <P>
          We are <span>transforming the health system for I/DDs</span>. <br />
          Get guidance, set goals & plan a rewarding life in a few clicks.{" "}
        </P>
        <button>
          <span>See more</span>
        </button>
      </div>
    </Home_IntroducingAI_DWrapper>
  )
}
