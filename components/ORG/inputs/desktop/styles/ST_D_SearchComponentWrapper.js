import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"
import { COLORS } from "../../../../ui/buttons/variables"

export const ST_D_SearchComponentWrapper = styled.div`
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 8fr 8fr 8fr 1fr;

  & > :nth-child(1){
    & > span{
      & > input{
        border: 1px ${NEUTRALS.DARK_GREY} solid;
        border-right-style: none;
        border-radius: 5px 0px 0px 5px;
      }
    }
  }

  & > :nth-child(2) {
    & > span {
      & > input {
        border: 1px ${NEUTRALS.DARK_GREY} solid;
        border-left-style: none;
        border-right-style: none;
      }
    }
  }

  & > :nth-child(3) {
    margin-right: 2rem;
    & > span {
      & > input {
        border-radius: 0px 5px 5px 0px;
        border: 1px ${NEUTRALS.DARK_GREY} solid;
        border-left-style: none;
      }
    }
  }

  & > div {
    position: relative;

    & > :nth-child(1) {
      height: 2rem;
    }

    & > span {
      display: flex;
      position: relative;

      & > span {
        position: absolute;
        z-index: 2;
        top: 29px;
        left: 24px;
      }

      & > input {
        width: 100%;
        height: 76px;
        padding: 0.5rem 3.9rem;

        &::placeholder {
          color: ${NEUTRALS.DARK_GREY};
          font-size: 16px;
        }
      }
    }
  }

  & > div > span > input:focus,
  & > :nth-child(1) > span > input:focus,
  & > :nth-child(2) > span > input:focus,
  & > :nth-child(3) > span > input:focus {
    border-radius: 5px;
    outline: 4px solid ${COLORS.FocusOutline};
    border: 1px transparent solid;
    position: absolute;
    z-index: 1;
  }

  & > :nth-child(1) > :nth-child(2),
  & > :nth-child(2) > :nth-child(2) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 58px;
      right: 0px;
      top: 9px;
      background: #000000;
    }
  }

  & > :last-child {
    height: 76px;
    
    align-self: end;
    /* height:100%; */

    & > button {
      height: 100%;
      width: 91px;
    }
  }
  
`
