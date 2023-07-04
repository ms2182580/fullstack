import styled from "styled-components"

export const ST_M_Detail_ReviewsWrapper = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  padding: 16px;
  scroll-margin-top: ${({ scrollMarginTopState }) => scrollMarginTopState && `${scrollMarginTopState}`};

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  & > :nth-child(2) {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 16px;

    margin-bottom: 16px;
    
    
    & > *{
      /* border: 2px solid green; */
      /* min-width: 232px; */
      
    }
    
  }

  & > :last-child {
    text-align: right;
    margin-right: calc(32px - 16px);
  }
`
