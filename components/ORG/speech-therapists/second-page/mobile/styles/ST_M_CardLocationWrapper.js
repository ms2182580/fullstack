import styled from "styled-components"

export const ST_M_CardLocationWrapper = styled.div`
  display: grid;
  grid-template-columns: 110px minmax(150px, auto);
  /* grid-template-columns: repeat(2, auto); */
  /* gap: 8px; */

  & > * {
    /* border: 2px solid crimson; */
  }

  & > :nth-child(1) {
    display: flex;
    
    & > :nth-child(1) {
      margin-right: 16.13px;
    }
  }

  /* & > :nth-child(1) > :nth-child(1) {
    margin-right: 16.13px;
  } */

  & > :nth-child(2) {
    /* margin-left: 4px; */
    
    /* border: 2px solid crimson; */
    & > * {
      display: block;
    }
    
    
    & > :not(:last-child) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 8px;
    }
  }

  /* & > :nth-child(2) > :not(:last-child) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  } */

  & > :last-child > :last-child {
    font-weight: ${(x) => (x.isMobile === false ? `500` : `400`)};
  }
`
