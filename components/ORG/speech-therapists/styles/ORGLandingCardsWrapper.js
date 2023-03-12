import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const ORGLandingCardsWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${NEUTRALS.LIGHT_GREY};
  position: relative;
  display: flex;
  flex-direction: column;
  
  /* width:clamp(300px, calc(100vw - 300px), 400px); */
  /* width:300px; */
  
  /* border: 2px solid crimson; */
  
  
  

  & > div:nth-child(1) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    height: 119px;
  }

  & > :nth-child(2) {
    margin-top: 24px;
  }

  & > * + * {
    margin-inline: 24px;
  }

  & > :nth-last-child(2) {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  & > :last-child {
    margin-top: auto;
    margin-bottom: 24px;

    & > button {
      width: 100%;
    }
  }
`
