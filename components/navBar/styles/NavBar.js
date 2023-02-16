import styled from "styled-components"

export const NavBarStyled = styled.nav`
  height: 72px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  position: relative;
  z-index: 999;
  
  overflow: hidden;
  

  & > h2 > a,
  & > ul > li > a,
  & > button > a {
    all: unset;
  }
  
  & > button > a{
    /* padding: 11px 16px; */ /* Maybe not */
  }
`

/* Spotted bug: when the size of the screen are at 989 and below, the nav bar break the page. This happend for absolute units used in «Bug N° 1 here» in Logo, NavigationLinks and Login  */

export const Logo = styled.h2`
  /* width: 252px; Bug N° 1 here */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Bug N° 1 here */
  margin-left: 96px; 
  margin-right: 44px;
  cursor: pointer;
`

export const NavigationLinks = styled.ul`
  padding: 0;
  display: flex;
  height: 32px;
  /* border:1px black solid; */

  li {
    list-style: none;
    margin-right: 36px; /* Bug N° 1 here */
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  }
`

export const LoginComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 6rem;
  
  & > :nth-child(2){
    margin-left: 34px;
  }
  
  & > a {
    all: unset;
  }
  
  & > a > p {
    text-decoration: underline;
    cursor: pointer;
  }
  
  & > span {
    cursor: pointer;
    text-decoration: underline;
  }

  /* width: 76px; Bug N° 1 here */
  /* height: 36px; */

  /* background: #000000;
  border: 1px solid #000000;
  border-radius: 8px;

  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  margin-left: auto;
  margin-right: 63px;
  cursor: pointer; */
  
  
  

`
