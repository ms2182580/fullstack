import { SNT_ThirdSection } from "../../../assets/images"
import { P } from "../../../components/ui/heading_body_text/DesktopMobileFonts"
import { H1, H3 } from "../../../components/ui/heading_body_text/HeaderFonts"
import ThirdSectionWrapper from "./styles/ThirdSection"

const ThirdSection = () => {
  return (
    <ThirdSectionWrapper>
      <H1 cta bold>
        How this tool works
      </H1>
      <SNT_ThirdSection />
      <div>
        <H3>
          We’ll walk you through each required step to get services <br/> for your
          child
        </H3>
        <ul>
          <li>
            <P>
              Follow our roadmaps to get services through the Department of
              Education, <br/> private insurance, Medicaid, and other channels.
              
            </P>
          </li>
          <li>
            <P>Learn what you can do if you face hurdles throughout your journey.</P>
          </li>
          <li>
            <P>Save your progress and return to the roadmap whenever you need it.</P>
          </li>
        </ul>
      </div>
    </ThirdSectionWrapper>
  )
}

export default ThirdSection
