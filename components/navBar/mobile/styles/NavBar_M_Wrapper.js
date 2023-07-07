import styled from 'styled-components'

export const NavBar_M_Wrapper = styled.div`
  /* border: 20px solid crimson; */
  
  position: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `fixed` : `relative`)};
  visibility: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `hidden` : `visible`)};
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap:16px;
  
  & > :nth-child(1){
    cursor: pointer;
  }
  
  
  
  & > :nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    gap:16px;
    
    & > li{
      list-style:none;
      
      
    }
  }
  
  
`