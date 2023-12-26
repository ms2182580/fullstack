import { Welcome_0Svg } from "@/assets/icons/index"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Welcome_D_0Wrapper } from "./styles/Welcome_D_0Wrapper.js"

export const Welcome_D_0 = ({ handleNextComponent }) => {
  return (
    <Welcome_D_0Wrapper>
      <Welcome_0Svg />

      <H1>welcome!</H1>

      <P>
        You’re using <span className="HIGHLIGHT_BOLD">The Inclusive Guide</span> <span className="HIGHLIGHT_ITALIC">beta.</span>
      </P>
      <ul>
        <li>
          Any I/DD resource in <span className="HIGHLIGHT_BOLD">Bronx, NY</span>
        </li>
        <li>
          Any I/DD agency in the <span className="HIGHLIGHT_BOLD">United States</span>
        </li>
      </ul>

      <button
        onClick={handleNextComponent}
        onKeyDown={handleNextComponent}
        tabIndex={0}>
        Get Started!
      </button>

      <P>
        By using <span>The Online Resource Guide</span>, I agree to the terms of the following <span tabIndex={0}>confidentiality agreement.</span>
      </P>
    </Welcome_D_0Wrapper>
  )
}
