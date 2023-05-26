import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const STDetail_Share_Modal_ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 16px 28px;
  border-radius: 8px;
  border: 2px solid ${PRIMARY.PRIMARY_HOVER};
  cursor: pointer;

  &:hover {
    background-color: ${PRIMARY.PRIMARY_HOVER};
    
    & > :nth-child(2) {
      color: ${NEUTRALS.OFF_WHITE};
    }
  }
`
