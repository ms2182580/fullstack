import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Results_Main_RightWrapper = styled.div`
  grid-area: rightPart;
  border-top-right-radius: inherit;
  padding: 24px;

  & > :nth-child(1) {
    font-weight: 700;
  }

  & > :nth-child(3) {
    color: ${NEUTRALS.DARK_GREY};
  }

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4) {
    margin-bottom: 8px;
  }

  & > :nth-child(5) {
    display: grid;
    gap: 16px;

    .HIGHLIGHTS_PLUS {
      /* border: 2px solid crimson; */
    }

    .HIGHLIGHTS {
      /* border: 2px solid green; */
    }

    .NO_THIRDPAGE_DATA {
      & > :nth-child(1) {
        font-weight: 700;
        color: ${PRIMARY.PRIMARY_HOVER};

        & > :nth-child(1) {
          font-weight: 400;

          color: ${NEUTRALS.BLACK};
        }
      }
    }
  }

  & > p {
    & > * {
      color: ${NEUTRALS.BLACK};
      font-weight: 400;
    }
  }
`
