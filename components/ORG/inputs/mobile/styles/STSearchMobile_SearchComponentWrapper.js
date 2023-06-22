import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"
import { COLORS } from "../../../../ui/buttons/variables"

export const STSearchMobile_SearchComponentWrapper = styled.div`
  margin-bottom: 96px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  & > :nth-child(1){
    margin-bottom: 16px;
  }
  
  & > :nth-child(2){
    margin-bottom: 94px;
  }
  
  & > :nth-child(3){
    width:100%;
    & > :nth-child(1){
      width:100%;
    }
  }
  
  
  /* display: grid; */
  /* grid-template-columns: 8fr 8fr 8fr 1fr; */
  /*& > :nth-child(3) {
    margin-right: 2rem;
  }

  & > div {
    position: relative;
  }

  & > div > :nth-child(1) {
    height: 2rem;
  }

  & > div > span {
    display: flex;
    position: relative;
  }

  & > div > span > span {
    position: absolute;
    z-index: 2;
    top: 29px;
    left: 24px;
  }

  & > div > span > input {
    width: 100%;
    height: 76px;
    padding: 0.5rem 3.9rem;

    &::placeholder {
      color: ${NEUTRALS.DARK_GREY};
      font-size: 16px;
    }

    @media (max-width: 888px) {
      padding: 0.5rem 2rem 0.5rem 4rem;
    }
  }
  
  


  & > div > span > input:focus,
  & > div:nth-child(1) > span > input:focus,
  & > div:nth-child(2) > span > input:focus,
  & > div:nth-child(3) > span > input:focus {
    border-radius: 5px;
    outline: 4px solid ${COLORS.FocusOutline};
    border: 1px transparent solid;
    position: absolute;
    z-index: 1;
  }

  & > div:nth-child(1) > span > input {
    border-radius: 5px 0px 0px 5px;
    border: 1px ${NEUTRALS.DARK_GREY} solid;
    border-right-style: none;
  }
  
  & > div:nth-child(1) > span:nth-child(2),
  & > div:nth-child(2) > span:nth-child(2){
    position: relative;
    
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 58px;
      right:0px;
      top:9px;
      background: #000000;
    }
  }
  
  & > :last-child{
    height: 76px;
    
    & > button{
      height:100%;
      width:91px;
    }
    
  }
  
  
  
  & > div:nth-child(2) > span > input {
    border: 1px ${NEUTRALS.DARK_GREY} solid;
    border-left-style: none;
    border-right-style: none;
  }
  & > div:nth-child(3) > span > input {
    border-radius: 0px 5px 5px 0px;
    border: 1px ${NEUTRALS.DARK_GREY} solid;
    border-left-style: none;
  }

  & > a:nth-last-child(1) {
    align-self: end;
  }*/

  /* @media (${device.laptop}) {
    grid-template-columns: 1fr;
    width: 100%;

    & > :nth-child(2) {
      margin-right: 0;
    }

    & > div > :nth-child(1) {
      margin-bottom: 4px;
      height: 16px;
    }
    & > div:nth-child(1) > :nth-child(2) {
      margin-bottom: 16px;
    }

    & > div:nth-child(2) > :nth-child(2) {
      margin-bottom: 94px;
    }

    & > div:nth-child(1) > span > input,
    & > div:nth-child(2) > span > input {
      border-radius: 4px;
      padding: 12px 8px;
    }

    & > div > span > :nth-child(1) {
      display: none;
    }

    & > div > span > input:focus,
    & > div:nth-child(1) > span > input:focus,
    & > div:nth-child(2) > span > input:focus {
      position: relative;
    }

    & > a:nth-last-child(1) {
      width: 100%;
    }

    & > a:nth-last-child(1) > button {
      width: 100%;
    }
  } */
`


