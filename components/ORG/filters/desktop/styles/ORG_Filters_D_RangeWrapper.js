import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../assets/Colors"

const SLICE_WIDTH = "355px"
const THUMB_COLOR = "#151A26"
const THUMB_SIZE = "19px"
const BUTTON_COLOR = "#3B4250"

export const ORG_Filters_D_RangeWrapper = styled.div`
  position: relative;

  .container {
    position: absolute;
    top:150%;
    left: 0;

    z-index: 2;
    background-color: ${NEUTRALS.OFF_WHITE};

    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    
    visibility: ${({ mustShowFilter }) => mustShowFilter ? `visible` : `hidden`};
    padding:48px;
    
    
    & > :nth-child(1){
      position:absolute;
      right:16px;
      top:16px;
      
      cursor: pointer;
      
      display: flex;
      align-items: center;
      justify-content: center;
      
      
    }
    
    

    & > label {
      display: none;
    }

    & > p {
      margin-bottom: 21px;
    }
    
    & > :last-child{
      display: flex;
      align-items: center;
      gap:40px;
      & > * {
        width:100%;
        & > *{
          
          width:100%;
        }
      }
    }
    
  }

  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb:focus {
    outline: none;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0px;
    width: ${SLICE_WIDTH};
  }

  .thumb--left {
    z-index: 3;
  }

  .thumb--right {
    z-index: ${(x) => (x.minVal === 0 && x.maxVal === 0 ? `99` : `4`)};
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    background-color: ${THUMB_COLOR};
    border: none;
    outline: none;
    border-radius: 50%;

    cursor: pointer;
    height: ${THUMB_SIZE};
    width: ${THUMB_SIZE};
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: ${NEUTRALS.BLACK};
    border: none;
    outline: none;
    border-radius: 50%;

    cursor: pointer;
    height: ${THUMB_SIZE};
    width: ${THUMB_SIZE};
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  .slider {
    position: relative;
    width: calc(${SLICE_WIDTH} - 5px);
    margin-left: 2px;
  }

  .slider__track,
  .slider__range {
    position: absolute;
    bottom: -7px; /* Here you move the slice up or down only on any browser that is not firefox */
  }

  @supports (-moz-appearance: none) {
    /* This check if the browser is firefox */
    .slider__track,
    .slider__range {
      bottom: -5px; /* Here you move the slice up or down only on firefox browser */
    }
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 9px; /* Here you define the height of the slice */
  }

  .slider__track {
    background-color: hsl(205, 25%, 75%);
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: #65a6d6;
    z-index: 2;
  }

  .valuesToShow {
    padding-top: 26px;
    width: ${SLICE_WIDTH};

    display: flex;
    justify-content: space-between;
    
    padding-bottom:48px;
    
    /* border: 2px solid crimson; */
    padding-inline:18px;
    

    & > div {
      border: 1px solid ${BUTTON_COLOR};
      border-radius: 7px;
      width: 125px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      padding-bottom: 9px;
      font-size: 12px;

      color: ${PRIMARY.PRIMARY_CTA};
    }

    & > span {
      width: 17px;
      height: 1px;
      background-color: ${THUMB_COLOR};
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`
