import styled from "styled-components"
import { PRIMARY } from "../../../../../../assets/Colors"

export const ST_D_Detail_AppointmentsWrapper = styled.div`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  border-radius: 8px;
  padding-top: 24px;
  padding-bottom: 83px;
  display: grid;

  & > :nth-child(1) {
    margin-left: 41px;
    margin-bottom: 32px;
    margin-right: auto;
  }

  & > :nth-child(2) {
    margin-inline: 106px;
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 37px;

    
    
  }

  & > :nth-child(3) {
    cursor: pointer;
    width: 188px;
    margin-right: 106px;
    justify-self: flex-end;
    /* border: 2px solid crimson; */

    & > :nth-child(1) {
      width: 100%;
      font-size: 20px;
      font-weight: 600;
      
    }
  }
`
