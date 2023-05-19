import styled from "styled-components"
import { COLORS } from "../../../../../ui/buttons/variables"

export const STResults_CardsOnMapCardVisibleWrapper = styled.div`
  border: 2px solid ${COLORS.Primary.BgColor};

  background-color: #fcfdfe;
  border-radius: 8px;

  & > div:nth-child(1) {
    height: 192px;

    position: relative;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    & > div {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
  }

  & > div:nth-child(2) {
    padding: 24px;

    & > :nth-child(1){
      display: -webkit-box;
      /* -webkit-line-clamp: 1; */
      -webkit-box-orient: vertical;
      overflow: hidden;
      
    }
    
    & > :nth-child(4) {
      margin-bottom: 24px;
    }

    & > p:nth-child(5) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 24px;
    }

    & > :last-child {
      & > :nth-child(1) {
        /* border: 2px solid crimson; */
        width: 100%;
      }
      /* margin-top: 24px; */

      /* border: 2px solid crimson; */
    }
  }
`
