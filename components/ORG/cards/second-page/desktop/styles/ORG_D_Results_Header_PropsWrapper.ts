import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Results_Header_PropsWrapper = styled.div`
  padding-top: 56px;
  padding-bottom: 40px;
  padding-inline: clamp(16px, calc(10vw - 80px), 96px);

  & > :nth-child(1) {
    font-weight: 700;
    color: ${NEUTRALS.DARK_GREY};
  }
`
