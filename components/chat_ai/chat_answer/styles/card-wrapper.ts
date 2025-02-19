import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const CardWrapper = styled.div`
  padding: calc(8px * 2);
  box-shadow: 0 0 4px ${NEUTRALS.DARK_GREY_3_05};
  border-radius: 4px;

  display: flex;
  gap: calc(8px * 2);

  width: 405px;

  & > div {
    overflow: hidden;
    white-space: nowrap;
    & > :nth-child(1) {
      overflow: hidden;
      text-overflow: ellipsis;

      font-weight: 600;
    }

    & > :nth-child(2) {
      font-size: 12px;
      color: ${NEUTRALS.DARK_GREY_2};
    }
  }
`
