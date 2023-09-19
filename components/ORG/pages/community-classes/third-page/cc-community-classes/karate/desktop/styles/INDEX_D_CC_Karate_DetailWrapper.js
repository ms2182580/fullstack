import styled from "styled-components"

export const INDEX_D_CC_Karate_DetailWrapper = styled.div`
  position: relative;
  padding-bottom: 8px;
  
  & > :nth-child(1) {
    margin-inline: clamp(16px, calc(10vw - 80px), 96px);
    padding-top: 56px;
    padding-bottom: 8px;

    position: relative;

    & > :nth-child(1) {
      margin-bottom: 16px;
    }

    & > *:not(:nth-child(1)):not(:nth-last-child(1)):not(:nth-last-child(2)) {
      margin-bottom: 24px;
    }

    & > :nth-last-child(2) {
      margin-bottom: 44px;
    }

    & > :last-child {
      position: sticky;
      top: 0;
      left: 0;
    }
  }
  
  
`
