import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  isDataInputStateEmpty?: boolean
}

export const InputSearchWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  border: 2px solid gray;
  border-radius: 8px;

  background-color: ${NEUTRALS.OFF_WHITE};

  height: 48px;

  padding: 8px 24px;

  & > :nth-child(1) {
    display: flex;
    gap: calc(8px * 2);
  }

  & > :nth-child(2) {
    flex: 1;

    border: none;
    outline: none;
  }

  & > :nth-child(3) {
    & > * {
      fill: ${({ isDataInputStateEmpty }) =>
        isDataInputStateEmpty && `${NEUTRALS.BLACK_2}`};
    }
  }

  &:has(:nth-child(2):focus) {
    outline: 4px solid #64affb;
  }
`
