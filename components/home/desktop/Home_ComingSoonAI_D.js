import { Home_SecuritySvg } from '../../../assets/Icons/index'
import { H3 } from "../../ui/heading_body_text/HeaderFonts.js"
import { Home_ComingSoonAI_DWrapper } from "./styles/Home_ComingSoonAI_DWrapper.js"

export const Home_ComingSoonAI_D = () => {
  return (
    <Home_ComingSoonAI_DWrapper>
      <div className="LEFT">
        <H3>COMING SOON!</H3>
        <p>
          Use <span>ChatGPT</span> for the <br />
          I/DD community
        </p>
        <p>Ask anything about I/DD life and care and get answers you need using generative natural language processing, AI.</p>
        <button>Talk us now</button>

        <div>
          <span>
            <Home_SecuritySvg />
          </span>
          <div>
            Secure, efficient and accurate. <span tabIndex={0}>Learn More</span>
          </div>
        </div>
      </div>
      {/* 
      //!FH0
      
      Create the rigth part
      */}
      {/* <div className="RIGHT">
        IMAGE

      </div> */}
    </Home_ComingSoonAI_DWrapper>
  )
}
