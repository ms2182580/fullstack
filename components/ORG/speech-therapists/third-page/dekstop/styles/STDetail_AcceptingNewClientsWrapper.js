import styled from "styled-components"
import { SECONDARY_SNT } from "../../../../../../assets/Colors"

export const STDetail_AcceptingNewClientsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${SECONDARY_SNT.YELLOW};
  width: 205px;

  & > span {
    font-size: 14px;
    font-weight: 500;
  }
`
