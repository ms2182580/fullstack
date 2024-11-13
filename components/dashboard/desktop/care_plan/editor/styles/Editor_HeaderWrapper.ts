import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const Editor_HeaderWrapper = styled.div`
  border-bottom: 2px solid hsla(0, 0%, 48.2%, 0.3);
  background-color: #fff;

  & > :nth-child(1) {
    border-bottom: 1px solid ${NEUTRALS.BORDER};
  }
`
