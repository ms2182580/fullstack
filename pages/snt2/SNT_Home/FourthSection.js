import { SNT_ForthSection } from "../../../assets/images"
import { P } from "../../../components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../components/ui/heading_body_text/HeaderFonts"
import FourthSectionWrapper from "./styles/FourthSection"

const FourthSection = () => {
  return (
    <FourthSectionWrapper>
      <div>
        <H3>What do you get?</H3>
        <ul>
          <li>
            <P>
              Easy-to-follow guide that translates bureaucratic processes into
              simple tasks.
            </P>
          </li>
          <li>
            <P>
              Sample scripts to communicate with your school and insurance to
              save you time.
            </P>
          </li>
          <li>
            <P>
              Useful contacts, lists of providers, and community support along
              the journey.
            </P>
          </li>
        </ul>
      </div>
      
      <SNT_ForthSection/>
      
    </FourthSectionWrapper>
  )
}

export default FourthSection
