import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ST_D_Results_CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftPart rightPart";
  grid-template-rows: auto;
  align-items: stretch;
  border-radius: 8px;
  border: 1px solid ${NEUTRALS.LIGHT_GREY};
`

export const ST_D_CardWrapper_Left = styled.div`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  grid-area: leftPart;
  min-width: 320px;
  display: flex;
  flex-direction: column;
`

export const ST_D_CardWrapper_Left_LeftImage = styled.div`
  position: relative;
  overflow: hidden;
  border-top-left-radius: 8px;
  margin-bottom: 24px;

  & > :nth-child(2) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`

export const ST_D_CardWrapper_Left_LeftInfo = styled.div`
  margin-left: 22px;
  margin-bottom: 16px;
  margin-right: 9px;
  
  

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const ST_D_CardWrapper_Right = styled.div`
  grid-area: rightPart;
  display: grid;
  justify-self: stretch;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${NEUTRALS.OFF_WHITE};
  padding-top: 16px;
  padding-left: 16px;
  position: relative;
  min-width: 394px;

  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4) {
    align-self: center;
  }

  & > :nth-child(3) {
    margin-bottom: 8px;
  }

  & > :nth-child(4),
  & > :nth-child(5),
  & > :nth-child(6),
  & > :nth-child(7),
  & > :nth-child(8),
  & > :nth-child(9) {
    margin-bottom: 16px;
    
  }

  & > :nth-child(10) {
    margin-bottom: 56px;
  }

  & > :nth-child(1) {
    position: absolute;
    right: 18px;
    top: 27px;
    cursor: pointer;
  }

  & > :nth-child(2) {
    margin-right: 75px;
    & > span {
      white-space: pre;
    }
  }

  & > div:nth-child(6),
  & > div:nth-child(7),
  & > div:nth-child(8),
  & > div:nth-child(9),
  & > div:nth-child(10) {
    margin-right: 24px;
  }

  & > :last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 17px;
    margin-bottom: 16px;
    align-self: end;
    
  }
`
