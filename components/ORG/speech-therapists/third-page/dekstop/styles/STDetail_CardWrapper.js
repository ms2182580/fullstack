import styled from "styled-components"
import { NEUTRALS, SEMANTICS } from "../../../../../../assets/Colors"
import { ST_CardWrapper, ST_CardWrapper_Left, ST_CardWrapper_Left_LeftImage } from "../../../styles/ST_CardWrapper"

export const STDetail_CardWrapper = styled.div`
  margin-bottom: 32px;
  border: 1px solid ${NEUTRALS.LIGHT_GREY};
  border-radius: 8px;
  

  & > :nth-child(1) {
    margin-bottom: 0px;
  }
`

export const STDetail_CardWrapper_Card_Detail = styled(ST_CardWrapper)`
  border: none;
  grid-template-columns: 450px 1fr;

  & > :nth-child(1) {
    /* margin-right: 24px; */
    /* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); */
    /* border-radius: 8px; */
  }

  & > :nth-child(2) {
    /* border-radius: 8px; */
  }
`

export const STDetail_CardWrapper_Left = styled(ST_CardWrapper_Left)`
  /* min-width: 450px; */
  /* width: clamp(439px, 100%, 450px); */
  /* width: 450px; */

  /* border: 2px solid crimson; */
  padding-bottom: 24px;

  & > :nth-child(2) {
    margin-inline: auto;
    font-size: 14px;
    color: ${SEMANTICS.HYPERLINK_NORMAL};
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 24px;
  }

  & > :nth-last-child(1),
  & > :nth-last-child(2) {
    margin-inline: 24px;
  }
`

export const STDetail_CardWrapper_Left_LeftImage = styled(ST_CardWrapper_Left_LeftImage)`
  margin: 24px 24px 8px 24px;
  border-radius: 8px;
`

export const STDetail_CardWrapper_Right_Detail = styled.div`
  display: grid;
  justify-self: stretch;
  grid-template-rows: auto 1fr;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${NEUTRALS.OFF_WHITE};
  padding: 24px;
  position: relative;
  
  & > :last-child{
    display: flex;
    justify-content: end;
    gap:44px;
    
    & > :nth-child(2):hover{
      cursor: pointer;
      filter:brightness(90%)
    }
    
    
  }
  
  
`

export const STDetail_CardWrapper_FirstRow = styled.div`
  margin-bottom: 40px;
  

  & > :nth-child(1) {
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    & > :nth-child(1),
    & > :nth-child(2) {
      text-align: center;
    }

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
    }
  }

  & > :nth-child(2) {
    display: flex;
    gap: 31px;
    align-items: center;
    margin-right: 183px;

    & > :nth-child(1) > span {
      white-space: pre;
    }

    & > :nth-child(2) {
      cursor: pointer;
    }

    @media (max-width: 1300px) {
      flex-direction: column;
      gap: 0;
      align-items: baseline;

      & > :nth-child(1) > span {
        display: block;
      }

      & > :nth-child(2) {
        width: 30px;
      }

      & > :nth-child(2) > :nth-child(2) > :nth-child(2) {
        left: -120px;
      }
    }
  }

  & > :nth-child(4) {
    margin-bottom: 8px;
  }

  & > :nth-child(5) {
    margin-bottom: 16px;
  }

  & > :nth-child(6) {
    margin-bottom: 24px;
  }
`

export const STDetail_CardWrapper_SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftPart rightPart";
  margin-bottom: 32px;
`

export const STDetail_CardWrapper_SecondRow_LeftPart = styled.div`
  grid-area: leftPart;
`
export const STDetail_CardWrapper_SecondRow_RightPart = styled.div`
  grid-area: rightPart;
`
