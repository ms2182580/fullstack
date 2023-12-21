import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const Welcome_D_1_DropdownWrapper = styled.div`
  position: relative;

  & > :nth-child(1) {
    width: 228px;
    height: 35px;
    border-radius: 6.4px;
    padding: 2px 4px 4px 15px;
    border: 1px solid ${NEUTRALS.BLACK};

    ::placeholder {
      font-style: italic;
    }
  }

  & > :nth-child(2) {
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    right: 0;
  }
`
