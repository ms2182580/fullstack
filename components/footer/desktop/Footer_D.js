import {
  Facebook3Svg,
  Footer_D_AccessibilityModeSvg,
  Instagram2Svg,
  LanguageIconSvg,
  LinkedinSvg,
  Twitter2Svg
} from "../../../assets/Icons/index.js"
import { Caption, P } from "../../../components/ui/heading_body_text/DesktopMobileFonts.js"
import { useCtx_ShowModal } from "../../../context/Ctx_ShowModal.js"
import { InFrontModal_D_Wrapper } from "../../inFront_D/styles/InFrontModal_D_Wrapper.js"
import { H2, H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import { Footer_DWrapper } from "./styles/Footer_DWrapper.js"

export const Footer_D = () => {
  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <Footer_DWrapper>
      <div>
        <div>
          <H4>INCLUSIVE</H4>
          <p>About us</p>
          <p>Contact us</p>
          <p>Submit Feedback </p>
        </div>

        <div>
          <H4>Resource directory</H4>
          <p>Find resources</p>
          <p>Write a review</p>
          <p>Add a listing </p>
          <p>Get listed </p>
        </div>

        <div>
          <H4>Ask a question</H4>
          <p>Get answers</p>
          <p>Help families with I/DDs</p>
          <p>Explore dashboard </p>
        </div>

        <div>
          <H4>Create a plan</H4>
          <p>Service Plan</p>
          <p>Habilitation Plan</p>
          <span>Sign in</span>
        </div>
      </div>

      <div>
        <button>
          {/* 
          !FH!
          Bug here: the avg only render in landing page and 2° page of ORG. Doesn't render on 1° page of ORG or 3° page
          */}

          <Footer_D_AccessibilityModeSvg /> <P semibold>Accessibility Mode</P>
        </button>
        <button>
          <P semibold>Try Premium</P>
        </button>
      </div>

      <div />

      <div>
        <H2
          bold
          logo>
          INCLUSIVE
        </H2>
        <Caption>The public benefit company connecting parents with the I/DD community.</Caption>
      </div>

      <div>
        <Caption>© 2023 The INCLUSIVE Group, All rights reserved.</Caption>

        <span>
          <div>
            <LanguageIconSvg /> <Caption>English (US)</Caption>
          </div>
          <div>
            <Twitter2Svg /> <Facebook3Svg /> <Instagram2Svg /> <LinkedinSvg />{" "}
          </div>
        </span>
      </div>

      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </Footer_DWrapper>
  )
}
