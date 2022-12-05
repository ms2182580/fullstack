import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

const SpeechTherapistListFilterWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  border: 1px solid ${NEUTRALS.DARK_GREY};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 1.5rem 2rem 48px 2rem ;
  width: 21.5rem;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 56px;

    & > :nth-child(2) {
      cursor: pointer;
      border-bottom: 2px transparent solid;
    }
    & > :nth-child(2):hover {
      border-bottom: 2px ${NEUTRALS.DARK_GREY} solid;
    }
    & > :nth-child(2):active {
      border-bottom: 2px ${NEUTRALS.BLACK} solid;
    }
  }

  & > :nth-child(2) {
    border-top: 1px solid ${NEUTRALS.BLACK};
  }

  & > *:not(:first-child) {
    margin-inline: 24px 24px;
    border-bottom: 1px solid ${NEUTRALS.BLACK};
    
    & > ul > li:last-child{
      margin-bottom: 21px;
    }
    
  }
  
  
  
  
`

export default SpeechTherapistListFilterWrapper
