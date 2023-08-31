import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../assets/Colors"

export const ST_D_Results_MapWrapper = styled.div`
  width: ${(x) => (x.ORGShowFullMapFilter ? `100vw` : ``)};
  margin-left: ${(x) => (x.ORGShowFullMapFilter ? `-42px` : ``)};
  min-width: ${(x) => (x.ORGshowFullMapButton ? `calc(100% - 40px)` : x.ORGShowFullMapFilter ? `100vw` : `100%`)};
  margin-right: ${(x) => (x.ORGshowFullMapButton ? `42px` : ``)};

  height: ${(x) => (x.ORGshowFullMapButton === false && x.ORGShowFullMapFilter === false ? `100vh` : ``)};

  position: sticky;
  top: 0;

  & > :nth-child(1) {
    border-top-left-radius: ${(x) => (x.ORGShowFullMapFilter ? `0px` : `8px`)};
    border-bottom-left-radius: ${(x) => (x.ORGShowFullMapFilter ? `0px` : `8px`)};
    border-top-right-radius: ${(x) => (x.ORGshowFullMapButton ? `8px` : ``)};
    border-bottom-right-radius: ${(x) => (x.ORGshowFullMapButton ? `8px` : ``)};
    overflow: hidden;
  }

  & > :nth-child(2) {
    position: absolute;
    top: 44px;
    left: 45px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${(x) => (x.ORGshowFullMapButton ? `16px 36px 16px 24px` : `16px 24px 16px 36px`)};

    gap: 31px;

    background: ${NEUTRALS.OFF_WHITE};
    border: 1px solid ${NEUTRALS.BLACK};
    border-radius: 8px;

    & > span {
      font-size: 20px;
    }

    @media (width < 1033px) {
      gap: 23px;
    }
  }

  & > :nth-child(3) {
    position: absolute;

    inset: ${({ ORGshowFullMapButton }) => (ORGshowFullMapButton ? `650px 182px 0` : `auto 0 0`)};
    

    overflow-x: ${({ ORGshowFullMapButton }) => (!ORGshowFullMapButton ? `hidden` : ``)};

    width: ${({ ORGshowFullMapButton }) => (ORGshowFullMapButton ? `` : `100%`)};
    height: ${({ ORGShowFullMapFilter, ORGshowFullMapButton }) =>
    ORGShowFullMapFilter || !ORGshowFullMapButton ? `calc(100% - 110px)` : ``};

    margin-left: ${({ ORGShowFullMapFilter }) => (ORGShowFullMapFilter ? `2px` : ``)};
    
  }
`
