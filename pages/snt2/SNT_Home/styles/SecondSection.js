import styled from "styled-components"
import { P } from "../../../../components/ui/heading_body_text/DesktopMobileFonts"

const SecondSectionWrapper = styled.div`
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  padding-right: 6rem;
  padding-left: 6rem;
  background-color: #f1e7f5;

  display: grid;
  grid-template-areas:
    "title title"
    "text image";

  & > h1 {
    grid-area: title;
    justify-self: center;
    margin-bottom: 5rem;
  }

  & > div {
    grid-area: text;

  }

  & > div > h3 {
    margin-bottom: 2.5rem;
  }
  & > div > ul {
    margin-left: 20px;
  }

  & > svg {
    grid-area: image;
    justify-self: end;
  }
`

export default SecondSectionWrapper

