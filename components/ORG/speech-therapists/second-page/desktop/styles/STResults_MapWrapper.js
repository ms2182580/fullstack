import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const STResults_MapWrapper = styled.div`
  max-width: 496px;
  max-width: ${(x) => (x.showFullMap ? `calc(100% - 40px)` : `496px`)};

  height: 100vh;
  position: sticky;
  top: 0;

  & > :nth-child(1) {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: ${(x) => (x.showFullMap ? `8px` : ``)};
    border-bottom-right-radius: ${(x) => (x.showFullMap ? `8px` : ``)};

    overflow: hidden;

    border: 2px solid crimson;
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
