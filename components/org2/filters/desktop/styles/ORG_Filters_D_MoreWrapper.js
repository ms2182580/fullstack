import styled from "styled-components"

export const ORG_Filters_D_MoreWrapper = styled.div`
  & > :nth-child(1) {
    & > :nth-child(1) {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-inline: 16px;
    }
  }

  & > :nth-child(2) {
    position: absolute;
    top: calc(88px + 32px + 24px);
    left: clamp(16px, calc(10vw - 80px), 96px);
    right: clamp(16px, calc(10vw - 80px), 96px);

    z-index: 5;
    background-color: white;

    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: 48px;

    visibility: ${({ mustShowFilter }) => (mustShowFilter ? `visible` : `hidden`)};
    
    & > :nth-child(1) {
      cursor: pointer;
      position:absolute;
      top:16px;
      right:13px;
    }

    @media (max-width: 1277px) {
      top: calc(88px + 48px + 32px + 24px);
    }
    
    .rangeMoreFilters{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap:30px;
      column-gap:128px;
      padding-bottom:30px;
    }
    
    .checkboxesMoreFilters{
      display:grid;
      /* grid-template-columns: repeat(4, 1fr); */
      grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
      column-gap:48px;
      row-gap:30px;
    }
    
    
    & > :last-child{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:40px;
    width:fit-content;
    margin-left:auto;
    
    & > *{
      & > *{
        padding:8px 48px;
      }
      
    }
    
    
  }
    
  }
  
  
  
`
