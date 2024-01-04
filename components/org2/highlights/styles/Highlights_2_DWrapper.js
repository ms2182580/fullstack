import styled from "styled-components"
import { SECONDARY_SNT } from "../../../../assets/Colors"

export const Highlights_2_DWrapper = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  gap: 8px;

  & > * {
    background-color: ${SECONDARY_SNT.YELLOW};
    border-radius: 8px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap:6px;

    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
`
