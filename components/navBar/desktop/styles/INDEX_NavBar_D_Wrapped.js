import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const INDEX_NavBar_D_Wrapped = styled.nav`
  box-shadow: ${(x) => (x.isORG ? `0px 4px 15px 0px rgba(0, 0, 0, 0.15);` : `0px 2px 4px rgba(0, 0, 0, 0.25)`)};
  
  background-color:${PRIMARY.OFF_WHITE};
  
  position: relative;

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
    /* background-color: ${(x) => (x.isORG ? `${NEUTRALS.OFF_WHITE} ` : `${PRIMARY.PRIMARY_BACKGROUND}`)}; */
    background-color:${PRIMARY.PRIMARY_BACKGROUND};
    width: 100%;
    position: absolute;
  }

  & > :nth-child(3) {
    display: flex;
    justify-content: space-between;
    padding-top: 33px;
    padding-bottom: 33px;
    margin-left: clamp(16px, calc(10vw - 80px), 90px);
    margin-right: clamp(16px, calc(10vw - 80px), 66px);

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 49px;

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 51px;

        li {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-bottom: 4px solid transparent;

          &.active {
            border-bottom: 4px solid ${PRIMARY.PRIMARY_CTA};
          }
        }

        & > :nth-child(3) {
          position: relative;
        }
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    
    & > :last-child{
      display: flex;
      align-items: center;
      justify-content: center;
      gap:8px;
      
      padding:6px 16px;
      
      border: 2px solid ${PRIMARY.PRIMARY_CTA};
      border-radius:16px;
      
      cursor: pointer;
      
      & > :nth-child(2){
        font-size:18px;
        font-weight: 600; 
        color:${PRIMARY.PRIMARY_CTA}
      }
      
      
    }
    
    
  }
`
