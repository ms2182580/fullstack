import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Home_D_Banner_NWrapper = styled.div`
  background-color: ${PRIMARY.PRIMARY_LOGO};
  display: flex;
  padding: 64px;
  align-items: center;
  justify-content: center;
  gap: 32px;

  & > :nth-child(1) {
    color: #f6f6f6;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px; /* 171.429% */
  }
  & > :nth-child(2) {
    /* background-color: white;
    border: white;
    padding: 0px 48px; */

    ${reusableButton({ secondary: true })}

    border-color: ${NEUTRALS.OFF_WHITE};

    &:hover,
    &:focus-visible {
      border-color: ${PRIMARY.PRIMARY_HOVER};
    }
  }
`
