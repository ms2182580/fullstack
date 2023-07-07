import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_Wrapped = styled.nav`
  box-shadow: ${(x) => (x.isORG ? `0px 4px 4px rgba(0, 0, 0, 0.25)` : `0px 2px 4px rgba(0, 0, 0, 0.25)`)};
  border-bottom: ${(x) => (x.isORG ? `1px solid ${NEUTRALS.LIGHT_GREY}` : ``)};
  background-color: ${(x) => (x.isORG ? `${PRIMARY.PRIMARY_BACKGROUND}` : `#fff`)};
  position: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `fixed` : `relative`)};
  visibility: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `hidden` : `visible`)};

  overflow: hidden;

  padding-top: 28px;

  position: relative;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: clamp(16px, calc(10vw - 80px), 96px);
    position: relative;
    margin-bottom: 28px;
    
    & > :nth-child(1){
      margin-right:50px;
    }
    
    & > :nth-child(2){
      margin-right:80px;
    }
    
    

    &::before {
      content: "";
      height: 4px;
      background-color: ${(x) => (x.isORG ? `${NEUTRALS.OFF_WHITE} ` : `${PRIMARY.PRIMARY_BACKGROUND}`)};
      width: 100vw;
      position: absolute;
      bottom: -28px;
    }
  }

  & > :nth-child(2) {
    display: flex;
    gap: 24px;

    & > :nth-child(2) {
      /* padding: 0; */
      display: flex;
      /* height: 32px; */

      li {
        list-style: none;
        /* margin-right: 36px; Bug N° 1 here */

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-bottom: 4px solid transparent;
      }

      & > li > a {
        font-weight: 600;
        font-size: 20px;
      }

      & > li.active {
        border-bottom: 4px solid ${PRIMARY.PRIMARY_CTA};
      }
    }
  }

  .InFront {
    width: 100%;
    height: 100%;
    z-index: 4;
    position: absolute;
    background: rgba(44, 42, 42, 0.61);
  }
`

export const LoginComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: auto; */
  /* margin-right: 6rem; */

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
`
