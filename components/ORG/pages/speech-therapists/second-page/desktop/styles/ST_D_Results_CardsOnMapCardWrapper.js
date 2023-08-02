import styled from "styled-components"

export const ST_D_Results_CardsOnMapCardWrapper = styled.div`
  position: absolute;
  top: ${(x) => (x.top ? `${x.top}px` : ``)};
  left: ${(x) => (x.left ? `${x.left}px` : ``)};

  & > :nth-child(1) {
    position: relative;

    & > :nth-child(1) {
      cursor: pointer;
    }

    & > :nth-child(2) {
      position: absolute;
      bottom:79px;
      transform: translateX(-45%);
      visibility: ${({ mustShow, ORGshowFullMapButton }) => (mustShow && ORGshowFullMapButton ? `visible` : `hidden`)};
      z-index: 2;
    }
  }
`
