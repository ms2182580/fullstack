import styled from "styled-components";
import { NEUTRALS } from "../../../../assets/Colors";

export const FiltersMobileWrapper = styled.div`
  border: 1px solid ${NEUTRALS.DARK_GREY};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  cursor: pointer;
  width: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  
  & > :nth-child(2){
    margin-top: auto;
    margin-bottom: 8px;
  }
  
`
