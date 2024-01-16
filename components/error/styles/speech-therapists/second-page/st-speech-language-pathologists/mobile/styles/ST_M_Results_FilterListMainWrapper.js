import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../../assets/Colors"

export const ST_M_Results_FilterListMainWrapper = styled.div`
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 8px;
    gap: 8px;
    border: 1px solid ${NEUTRALS.DARK_GREY};
    padding: 8px;

    & > :nth-child(1) {
      white-space: nowrap;
    }

    &:hover {
      cursor: pointer;
    }
  }
`
