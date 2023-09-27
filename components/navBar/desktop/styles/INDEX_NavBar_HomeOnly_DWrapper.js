import { NEUTRALS, SECONDARY_SNT } from "@/assets/Colors"
import styled from "styled-components"

export const INDEX_NavBar_HomeOnly_DWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: clamp(16px, calc(15vw - 80px), 126px);
  padding-top: 50px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  & > :nth-child(1) {
    display: flex;
    gap: 8px;

    & > :nth-child(1) {
      font-size: 56px;
      font-weight: 900;
      color: ${NEUTRALS.OFF_WHITE};
    }
  }

  & > :nth-child(2) {
    padding: 16px 100px;
    border-radius: 8px;
    background-color: ${SECONDARY_SNT.YELLOW};

    color: ${NEUTRALS.BLACK};
    font-size: 18px;
    text-decoration: none;
    font-weight: 700;
  }
`
