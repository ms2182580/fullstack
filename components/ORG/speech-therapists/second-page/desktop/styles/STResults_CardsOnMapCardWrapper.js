import styled from "styled-components"

export const STResults_CardsOnMapCardWrapper = styled.div`
  position: absolute;
  top: ${(x) => (x.top ? `${x.top}px` : ``)};
  left: ${(x) => (x.left ? `${x.left}px` : ``)};
  
  & > :nth-child(1) {
    position: relative;

    & div:nth-child(1) {
      cursor: pointer;
    }

    & > :nth-child(2) {
      position: absolute;
      width: 400px;
      height: 513px;
      top: -510px;
      transform: translateX(-45%);
      visibility: ${({ mustShow, ORGshowFullMapButton }) => (mustShow && ORGshowFullMapButton ? `visible` : `hidden`)};
      z-index:2;
    }
  }
`
