import styled from 'styled-components'

export const ST_M_Detail_DetailsWrapper = styled.div`
  
  scroll-margin-top: ${({ scrollMarginTopState }) => scrollMarginTopState && `${scrollMarginTopState}`};
  padding:16px;
  
  & > *:not(:nth-child(6)) {
    margin-bottom: 8px;
  }
  
  & > :nth-child(6){
    width:100vw;
    margin-inline: -16px;
  }
  
  & > :nth-child(7){
    padding-top: 16px;
  }
  
  

  /* & > *:not(:nth-child(2)):not(:nth-child(4)):not(:nth-child(6)) {
    margin: 16px;
  }

  & > :nth-child(1),
  & > :nth-child(3),
  & > :nth-child(3) > :nth-child(1),
  & > :nth-child(4) {
    margin-bottom: 24px;
  }

  & > :nth-child(3) > :nth-child(1) > :nth-child(2) > *,
  & > :nth-child(3) > :nth-child(2) > :nth-child(2) > * {
    display: block;
  }

  & > :nth-child(4) {
    & > :nth-child(1) {
      margin-bottom: 24px;

      & > :nth-child(2) > * {
        margin-bottom: 0px;
      }
    }
  } */

`