import styled from 'styled-components'

export const FooterSignupLoginButtonsWrapper = styled.div`
  grid-area:buttons;
  align-self: flex-end;
  justify-self: end;
  margin-right: 38px;
  display: flex;
  
  & > :first-child{
    margin-right: 21px;
  }
  
  & > a > button{
    width:197px;
    height:71px;
    
  }
  
`