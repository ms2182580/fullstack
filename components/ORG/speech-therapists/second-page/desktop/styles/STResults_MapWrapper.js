import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const STResults_MapWrapper = styled.div`
  width: ${(x) => (x.ORGShowFullMapFilter ? `100vw` : ``)};
  margin-left: ${(x) => (x.ORGShowFullMapFilter ? `-42px` : ``)};
  max-width: ${(x) => (x.showFullMapButton ? `calc(100% - 40px)` : x.ORGShowFullMapFilter ? `100vw` : `496px`)};

  height: ${(x) => (x.showFullMapButton === false && x.ORGShowFullMapFilter === false ? `100vh` : ``)};

  position: sticky;
  top: 0;

  & > :nth-child(1) {
    border-top-left-radius: ${(x) => (x.ORGShowFullMapFilter ? `0px` : `8px`)};
    border-bottom-left-radius: ${(x) => (x.ORGShowFullMapFilter ? `0px` : `8px`)};
    border-top-right-radius: ${(x) => (x.showFullMapButton ? `8px` : ``)};
    border-bottom-right-radius: ${(x) => (x.showFullMapButton ? `8px` : ``)};

    /* width:100vw; */

    overflow: hidden;
  }

  & > :nth-child(2) {
    position: absolute;
    top: 44px;
    left: 45px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 24px 16px 36px;
    padding: ${(x) => (x.showFullMap ? `16px 36px 16px 24px  ` : `16px 24px 16px 36px`)};

    gap: 31px;

    background: ${NEUTRALS.OFF_WHITE};
    border: 1px solid ${NEUTRALS.BLACK};
    border-radius: 8px;

    & > span {
      font-size: 20px;
    }
  }
`
