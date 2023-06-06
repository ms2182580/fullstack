import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const STDetail_Review_Modal_DetailReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 300px;
  padding-right: 8px;
  margin-bottom: 8px;

  scrollbar-color: #b7b7b7 transparent;
  scrollbar-width: thin;



  & > :nth-child(1) {
    position: relative;
    margin-bottom: 25px;

    display: flex;
    /* flex-direction: column; */

    & > :nth-child(1) {
      position: absolute;
      left: 28px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }

    & > :nth-child(2) {
      margin-top: 4px;
      margin-left: 4px;
      padding: 8px 8px 8px 55px;
      width: 100%;

      background: #fbfbfb;
      border: 1px solid ${NEUTRALS.BLACK};
      border-radius: 8px;

      /* outline: none; */

      &[type="text"]:focus {
        border: 1px solid transparent;
      }
    }
  }

  & > *:not(:first-child) {
    margin-bottom: 24px;
  }
`
