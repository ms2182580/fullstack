import styled from "styled-components"

export const FooterWrapper = styled.footer`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "logo ."
    "mainContent mainContent"
    ". buttons"
    "socialMedia finalSentence";

  pointer-events: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};

  overflow-x: hidden;
  position:${({ mustShowFiltersMobile }) => mustShowFiltersMobile ? `fixed` : `relative`};
  visibility:${({ mustShowFiltersMobile }) => mustShowFiltersMobile ? `hidden` : `visible`};

  & > :nth-child(1) {
    margin-top: 12px;
    margin-left: 60px;
    grid-area: logo;
  }

  & > div:nth-child(2) {
    margin-top: 17px;
    margin-inline: auto;
    grid-area: mainContent;
  }

  & > div:nth-child(2) > div > :not(:last-child):not(.InFront) {
    margin-right: 20px;
  }

  & > div:nth-child(2) > div > * > a {
    white-space: nowrap;
  }

  & > div:nth-child(2) > :nth-child(1),
  & > div:nth-child(2) > :nth-child(2) {
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-inline: 27px;
  }
  & > div:nth-child(2) > :nth-child(1) > * > *:not(:last-child):not(.InFront),
  & > div:nth-child(2) > :nth-child(2) > * > *:not(:last-child):not(.InFront) {
    margin-bottom: 18px;
  }

  & > :nth-last-child(2):not(.InFront) {
    justify-self: end;
    align-self: flex-end;
    margin-bottom: 8px;
    margin-right: 10%;
    margin-left: 16px;
    grid-area: finalSentence;
  }

  & > :last-child.InFront {
    width: 100%;
    height: 100%;
    z-index: 4;
    position: absolute;
    background: rgba(44, 42, 42, 0.61);
  }
`
