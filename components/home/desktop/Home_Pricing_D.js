import { Home_CheckSvg } from "../../../assets/images/index.js"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "../../ui/heading_body_text/HeaderFonts"
import { Home_Pricing_DWrapper } from "./styles/Home_Pricing_DWrapper.js"

export const Home_Pricing_D = () => {
  return (
    <Home_Pricing_DWrapper>
      <H2>
        Solutions for all of the
        <br /> support circles
      </H2>
      <div>
        <div className="Free">
          <H3>Family Plan</H3>
          <H4>Best for Individuals & families</H4>
          <P>
            Free<span>/Lifetime</span>
          </P>
          <button>Sign up</button>
          <div>
            <ul>
              <li>
                <Home_CheckSvg /> Support up to <span>5 Individuals</span>{" "}
              </li>
              <li>
                <Home_CheckSvg /> <span>Unlimited</span> plan revisions
              </li>
              <li>
                <Home_CheckSvg /> <span>Unlimited</span> answers from our
                community
              </li>
            </ul>
          </div>
        </div>

        <div className="Premium">
          <H3>Premium Plan </H3>
          <H4>Best for coordinators, brokers</H4>
          <div>
            <P>$24.99</P>
            <P>
              $7.99<span>/month</span>
            </P>
            <P>Offer valid until 12/01/2023*</P>
          </div>
          <button>Sign up</button>
          <div>
            <P>
              Everything from <span>Family Plan + </span>
            </P>
            <ul>
              <li>
                {" "}
                <Home_CheckSvg /> Support up <span>50 Individuals</span>{" "}
              </li>
              <li>
                <Home_CheckSvg />
                One-click intake, referrals
              </li>
              <li>
                <Home_CheckSvg />
                Book Appointments{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="Enterprise">
          <H3>Enterprise</H3>
          <H4>Agencies & Organizations</H4>
          <div>
            <P>Contact us</P>
          </div>
          <button tabIndex={-1}>Contact</button>
          <div>
            <P>
              {" "}
              Everything from <span>Premium Plan + </span>
            </P>
            <ul>
              <li>
                <Home_CheckSvg />
                White label software
              </li>
              <li>
                <Home_CheckSvg />
                API & custom machines
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Home_Pricing_DWrapper>
  )
}
