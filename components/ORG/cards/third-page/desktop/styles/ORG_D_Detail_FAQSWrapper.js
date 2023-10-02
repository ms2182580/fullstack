import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_FAQSWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3),
  & > :last-child {
    padding-left: 32px;
    padding-right: 55px;
  }
  
  & > :nth-child(1) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    padding: 24px;
    margin-bottom: 24px;

    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  }

  & > :nth-child(2) {
    display: flex;
    position: relative;
    margin-bottom: 24px;

    & > :nth-child(1) {
      position: absolute;
      left: 43px;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    & > :nth-child(2) {
      width: 100%;
      padding: 10px 10px 10px 60px;

      background: ${NEUTRALS.OFF_WHITE};
      border: 1px solid ${NEUTRALS.BLACK};
      border-radius: 8px;

      &[type="text"]:focus {
        border: 1px solid transparent;
      }
    }
  }

  & > :nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  & > div:not(:nth-child(2)):not(:nth-child(3)) {
    margin-bottom: 40px;
  }

  & > :last-child {
    cursor: pointer;

    width: fit-content;
    margin-left: auto;
    
    &:hover {
      filter: brightness(70%);
    }
  }
`
