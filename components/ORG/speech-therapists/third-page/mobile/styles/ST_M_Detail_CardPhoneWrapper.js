import styled from "styled-components"

export const ST_M_Detail_CardPhoneWrapper = styled.div`
  /* display: flex; */
  /* align-items: center; */

  & > :nth-child(1) {
    & > :nth-child(1){
      margin-right: 14px;
    }
    
  }
  & > :nth-child(2) {
    margin-right: 4px;
  }
  & > :nth-child(3) {
    color: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `#3f6ece` : ``)};
    text-decoration-line: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `underline` : ``)};
    
    cursor: pointer;
    
    
  }
`
