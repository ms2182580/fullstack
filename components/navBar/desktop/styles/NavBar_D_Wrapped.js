import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_Wrapped = styled.nav`
  box-shadow: ${(x) => (x.isORG ? `0px 4px 4px rgba(0, 0, 0, 0.25)` : `0px 2px 4px rgba(0, 0, 0, 0.25)`)};
  border-bottom: ${(x) => (x.isORG ? `1px solid ${NEUTRALS.LIGHT_GREY}` : ``)};
  background-color: ${(x) => (x.isORG ? `${PRIMARY.PRIMARY_BACKGROUND}` : `#fff`)};
  /* position: relative; */
  position: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `fixed` : `relative`)};
  visibility: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `hidden` : `visible`)};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "logo search userIcon"
    "secondLevel secondLevel secondLevel";
  overflow: hidden;

  padding-inline: calc(96px / 12vw);
  padding-top:28px;
  padding-bottom:28px;

  & > :nth-child(1) {
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Bug N° 1 here */
    /* margin-left: 96px; */
    /* margin-right: 44px; */
    cursor: pointer;
  }

  & > :nth-child(2) {
    grid-area: search;
  }

  & > :nth-child(3) {
    grid-area: userIcon;
  }

  & > :nth-child(4) {
    grid-area: secondLevel;
    display: flex;
    gap:24px;
    
    

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

export const NavigationLinksWrapper = styled.ul`
  padding: 0;
  display: flex;
  height: 32px;

  li {
    list-style: none;
    margin-right: 36px; /* Bug N° 1 here */

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
`

export const LoginComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 6rem;

  & > :nth-child(2) {
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
`
