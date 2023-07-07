import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_Wrapped = styled.nav`
  box-shadow: ${(x) => (x.isORG ? `0px 4px 4px rgba(0, 0, 0, 0.25)` : `0px 2px 4px rgba(0, 0, 0, 0.25)`)};
  border-bottom: ${(x) => (x.isORG ? `1px solid ${NEUTRALS.LIGHT_GREY}` : ``)};
  background-color: ${(x) => (x.isORG ? `${PRIMARY.PRIMARY_BACKGROUND}` : `#fff`)};
  /* position: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `fixed` : `relative`)}; */
  /* visibility: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `hidden` : `visible`)}; */

  padding-top: 28px;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: clamp(16px, calc(10vw - 80px), 96px);
    position: relative;
    margin-bottom: 28px;

    & > :nth-child(1) {
      margin-right: 50px;
      cursor: pointer;
    }

    & > :nth-child(2) {
      margin-right: 80px;
    }
  }

  & > :nth-child(2) {
    content: "";
    height: 4px;
    background-color: ${(x) => (x.isORG ? `${NEUTRALS.OFF_WHITE} ` : `${PRIMARY.PRIMARY_BACKGROUND}`)};
    width: 100%;
    position: absolute;
  }

  & > :nth-child(3) {
    display: flex;
    /* gap: 24px; */
    justify-content: space-between;
    padding-top:33px;
    padding-bottom:33px;
    margin-left: clamp(16px, calc(10vw - 80px), 90px);
    margin-right: clamp(16px, calc(10vw - 80px), 66px);

    & > :nth-child(1) {
      /* padding: 0; */
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 21px;

      /* height: 32px; */
      
      & > :nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        
        
      }
      

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 21px;

        li {
          list-style: none;
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
    
    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      
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
