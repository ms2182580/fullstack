import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const Home_Hero_DWrapper = styled.div`
  /* padding-top: ${({ paddingTop }) => `calc(155px + ${paddingTop}px)`}; */

  
  margin-bottom:41px;
  
  & > :nth-child(1) {
    padding-top: ${({ paddingTop }) => `calc(155px + ${paddingTop}px)`};
    
    background: linear-gradient(180deg, 
      hsl(304.9, 45.7%, 58.1%, 0.9) 11%, 
      hsl(18.8, 100%, 71.2%, 0.5) 69%, 
      hsl(304.9, 45.7%, 64.1%, 0.3) 90%, 
      hsl(0, 0%, 100%) 99%);
    

    & > :nth-child(1) {
      line-height: clamp(130px, 9.7vw, 140px);
      font-weight: 700;
      font-size: clamp(100px, 9vw, 128px);
      text-align: center;

      color: ${NEUTRALS.BLACK};

      margin-bottom: 54px;
      

      & > * {
        display: block;
      }

      & > span {
        & > span {
          color: ${PRIMARY.PRIMARY_CTA};

          &.word-transition {
            transition: opacity 0.5s;
          }

          &.fade-out {
            opacity: 0;
          }

          &.fade-in {
            opacity: 1;
          }
        }
      }
    }

    & > :nth-child(2) {
      margin-inline: clamp(0px, 1vw, 138px);
      margin-bottom: 54px;

      text-align: center;

      font-size: clamp(31px, 3vw, 34px);
      color: ${NEUTRALS.DARK_GREY};
      font-weight: 400;

      & > * {
        display: block;
      }

      & > :nth-child(1) {
        & > :nth-child(1) {
          font-weight: 500;
        }

        & > :nth-child(2) {
          font-weight: 700;
        }
      }
    }
    
    & > :nth-child(3){
      display: flex;
      align-items: center;
      justify-content: center;
      
      & > :nth-child(1){
        padding:16px 80px;
        border-radius:8px;
        background-color:${PRIMARY.PRIMARY_CTA};
        
        color:${NEUTRALS.OFF_WHITE};
        text-decoration:none;
        
        font-size:24px;
        font-weight:600;
        
      }
      
      margin-bottom:24px;
      
    }
  }

  & > :nth-child(2) {
    font-size:18px;
    text-align: center;
    color:#3A3230;
  }
`
