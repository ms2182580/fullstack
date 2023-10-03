import styled from "styled-components"
import { PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_Card_SecondRow_InfoWrapper = styled.div`
  &.withBackground {
    border-radius: 8px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-inline: 16px;

    margin-bottom: 44px;

    width: fit-content;
    display: grid;

    & > :nth-child(2) {
      font-weight: 600;
    }
  }

  .dataObj {
    display: flex;
    gap: 4px;

    & > :nth-child(1) {
      font-weight: 600;
    }
  }
`
