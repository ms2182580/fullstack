import { ButtonSmall } from "../../../components/ui/buttons/general";
import { H3 } from "../../../components/ui/heading_body_text/HeaderFonts";
import { LinkNoStyle } from "../../../components/ui/hyperlink/HyperlinkNoStyles";
import SixSectionWrapper from "./styles/SixSection";


const SixSection = () => {
  return (
    <SixSectionWrapper>

      <H3>Get services a new way with our easy-to-use guide</H3>
      <LinkNoStyle href="/SNT/Process/QuestionOne">
        <ButtonSmall>Get Started</ButtonSmall>
      </LinkNoStyle>

    </SixSectionWrapper>

  );
}

export default SixSection;