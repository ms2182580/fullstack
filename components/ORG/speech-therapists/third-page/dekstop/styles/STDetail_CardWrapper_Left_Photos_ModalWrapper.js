import styled from "styled-components"
import { NEUTRALS, PRIMARY, SECONDARY_BG_BIGBLOCKS_TEXT } from "../../../../../../assets/Colors"

export const STDetail_CardWrapper_Left_Photos_ModalWrapper = styled.div`
  visibility: ${({ showModal }) => (showModal ? `visible` : `hidden`)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(932px, 91%, 1196px);
  background-color: ${NEUTRALS.OFF_WHITE};
  z-index: 2;
  cursor: default;
  padding-top: 28px;
  padding-inline: 85px;
  padding-bottom: 27px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > :nth-child(1) {
    position: absolute;
    right: 29px;
    top: 26px;
    cursor: pointer;

    & > :nth-child(1) > path {
      fill: ${NEUTRALS.BLACK};
      border: 2px solid crimson;
    }
  }

  & > :nth-child(2) {
    margin-bottom: 13px;
  }

  & > :nth-child(3) {
    position: relative;
    width: 100%;
    height: 537px;
    margin-bottom: 25px;
    border-radius:8px;
    overflow:hidden;
    
    .slide {
      display: none;
      width: 100%;
      height: 100%;
    }

    .fade {
      animation-name: fade;
      animation-duration: 1.5s;
      
      & > :nth-child(2){
        position:absolute;
        right:16px;
        bottom:16px;
        
        border-radius:50%;
        background-color:${PRIMARY.PRIMARY_CTA};
        color:${NEUTRALS.OFF_WHITE};
        width:45px;
        height:45px;
        display: flex;
        align-items: center;
        justify-content: center;
        
      }
      
    }

    @keyframes fade {
      from {
        opacity: 0.3;
      }
      to {
        opacity: 1;
      }
    }
  }

  & > :nth-child(4) {
      & > :nth-child(1),
      & > :nth-child(2) {
        position: absolute;
        cursor: pointer;
        top: 0;
        bottom: 0;
        height: 50px;
        margin-top: auto;
        margin-bottom: auto;

        display: flex;
        align-items: center;
        justify-content: center;
        
        & > svg > path{
          fill: ${PRIMARY.PRIMARY_HOVER};
        }
        
        &:hover > svg > path{
          fill: ${PRIMARY.PRIMARY_CTA};
        }
        
        
      }
      
      & > :nth-child(1){
        left:45px;
        
      }
      
      & > :nth-child(2){
        right:45px;
      }
      
      
    
  }

  & > :nth-child(5) {
    width: 100%;
    display: flex;
    justify-content:space-between;
    gap:8px;

    .styling {
      cursor: pointer;
      overflow:hidden;
      border-radius:8px;
      padding: 8px;
      transition: 0.5s;
      width: 138px;
      height: 126px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      
      
      
      & > :nth-child(2){
        position:absolute;
        z-index:3;
        background-color:${SECONDARY_BG_BIGBLOCKS_TEXT.PINK};
        width:24px;
        height:24px;
        
        border-radius:50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        right:8px;
        bottom:8px;
      }
      
    }

    .active,
    .styling:hover {
      & > :nth-child(2){
        color:${NEUTRALS.OFF_WHITE};
        background-color:${PRIMARY.PRIMARY_CTA};
      }
      
      
    }
  }
`
