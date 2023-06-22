import styled from "styled-components"
import { SECONDARY_ORG_PLUS, SECONDARY_SNT } from "../../../../../../assets/Colors"

export const ST_Desktop_Search_CardWrapper = styled.div`
  background-color: ${SECONDARY_ORG_PLUS.PINK};
  border-radius: 6px;
  border: 2px solid ${SECONDARY_SNT.PINK};
  height: 100%;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 24px;
  padding-inline: 75px;
  padding-bottom: 57px;

  position: relative;

  & > :nth-child(1) {
    margin-bottom: 33px;
  }

  & > :nth-child(2) {
    white-space: nowrap;
  }
  
  
`
