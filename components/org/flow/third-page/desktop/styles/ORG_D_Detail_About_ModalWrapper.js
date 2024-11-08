import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_About_ModalWrapper = styled.div`
  cursor: default;
  padding: 73px;
  border-radius: 8px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 112px;

  & > * {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 30px;
  }

  & > :nth-child(2) {
    & > :nth-child(2) {
      width: 100%;
      height: 100%;

      border-bottom-left-radius: 24px;
      border-top-right-radius: 24px;

      background: linear-gradient(
        45deg,
        ${PRIMARY.DARK_MAROON} 35%,
        ${PRIMARY.LIGHT_MAROON} 88%
      );
    }
  }
`
