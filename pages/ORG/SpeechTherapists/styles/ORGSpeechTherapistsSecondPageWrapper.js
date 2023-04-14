import styled from "styled-components"

const ORGSpeechTherapistsSecondPageWrapper = styled.div`
  overflow: ${(x) => (x.isMobile ? `hidden clip` : ``)};
  position: relative;
  padding-left: 40px;

  pointer-events: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};

  .InFront {
    width: 100%;
    margin-left: -40px;
    height: 100%;
    z-index: 4;
    position: absolute;
    background: rgba(44, 42, 42, 0.61);
  }
`

export default ORGSpeechTherapistsSecondPageWrapper
