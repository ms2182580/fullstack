import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Results_Main_BottomButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;

  background-color: ${PRIMARY.PRIMARY_CTA};
  color: ${NEUTRALS.OFF_WHITE};

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  p {
    color: ${NEUTRALS.OFF_WHITE};
  }

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    cursor: default;
  }

  & > :nth-child(1) {
    cursor: pointer;
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      fill: white;
    }

    & > :nth-child(2) {
      text-transform: capitalize;
    }
  }
`
