import { SNT_SecondSection } from "../../../assets/images"
import { P } from "../../../components/ui/heading_body_text/DesktopMobileFonts"
import { H1, H3 } from "../../../components/ui/heading_body_text/HeaderFonts"
import SecondSectionWrapper from "./styles/SecondSection"

const SecondSection = () => {
  return (
    <SecondSectionWrapper id="SecondSection">
      <H1 bold cta>
        Who this tool is for
      </H1>
      <div>
        <H3>Anyone looking for specialists to help their child</H3>
        <ul>
          <li>
            <P>
              Our guide will lead you to the best possible providers of speech
              therapy, occupational therapy, <br /> and other services.
            </P>
          </li>
        </ul>
      </div>
      <SNT_SecondSection />
    </SecondSectionWrapper>
  )
}

export default SecondSection
