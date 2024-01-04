import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ChatAI_ComingSoonWrapper = styled.div`
  position: absolute;
  right: 70%;
  top: -160%;
  white-space: nowrap;

  border-radius: 16px;
  border-bottom-right-radius: 0px;

  background-color: ${NEUTRALS.OFF_WHITE};
  padding: 8px 16px;

  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));

  user-select: none;
  pointer-events: none;

  h2 {
    span {
      color: ${PRIMARY.PRIMARY_CTA};
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 96%;

    border: 10px solid ${NEUTRALS.OFF_WHITE};
    border-color: ${NEUTRALS.OFF_WHITE} ${NEUTRALS.OFF_WHITE} transparent transparent;
  }
`
