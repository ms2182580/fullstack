import Image from "next/image.js"
import ArrowDown from "../../../assets/images/ArrowDown.png"
import { SNT_FirstSection } from "../../../assets/images/index.js"
import { ButtonLarge } from "../../../components/ui/buttons/general/index"
import { Caption } from "../../../components/ui/heading_body_text/DesktopMobileFonts.js"
import { H1, H3, H4 } from "../../../components/ui/heading_body_text/HeaderFonts.js"
import { HyperlinkXS } from "../../../components/ui/hyperlink/HyperlinkFonts.js"
import { LinkNoStyle } from "../../../components/ui/hyperlink/HyperlinkNoStyles.js"
import FirstSectionWrapper, { LeftData, RightData, ScrollDown } from "./styles/FirstSection.js"

const FirstSection = () => {
  return (
    <>
      <FirstSectionWrapper>
        <LeftData>
          <H1
            bold
            cta>
            Your personal guide <br /> to the best services <br /> for your child
          </H1>
          <H3>
            Use our roadmaps to get providers your child <br /> needs through private insurance, Medicaid, and <br />
            the Department of Education
          </H3>
          <H4>This feature is coming soon!</H4>
          <LinkNoStyle href="/SNT/Process/QuestionOne">
            <ButtonLarge>Get Started</ButtonLarge>
          </LinkNoStyle>
          <Caption>
            Already started? {/* //TODO Make this href go to desired route */}
            <HyperlinkXS
              href="/"
              name="Finish your journey with us"
            />
          </Caption>
        </LeftData>
        <RightData>
          <SNT_FirstSection />
        </RightData>
      </FirstSectionWrapper>
      <ScrollDown>
        <H4 darkGrey>Scroll down for more details</H4>
        <LinkNoStyle href="#SecondSection">
          <Image
            alt="Arrow to read more details"
            width={60}
            height={48}
            src={ArrowDown.src}
            className="Image_FS_SNT"
          />
        </LinkNoStyle>
      </ScrollDown>
    </>
  )
}

export default FirstSection
