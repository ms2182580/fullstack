import { BackArrow } from "../assets/Icons";
import { P } from "../components/ui/heading_body_text/DesktopMobileFonts";
import { LinkNoStyle } from "../components/ui/hyperlink/HyperlinkNoStyles";
import { UnderConstruction } from "../components/under-construction/UnderConstruction";
import { Custom404Wrapper } from './styles/Custom404Wrapper.js';


const Custom404 = () => {
  return (
    <Custom404Wrapper>
      <span>
        <LinkNoStyle href="/ORG/SpeechTherapists">
          <BackArrow /> <P semibold>Back</P>
        </LinkNoStyle>
      </span>

      <UnderConstruction />

    </Custom404Wrapper>
  );
}

export default Custom404;