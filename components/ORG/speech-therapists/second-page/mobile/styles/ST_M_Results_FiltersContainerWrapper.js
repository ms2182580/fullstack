import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const ST_M_Results_FiltersContainerWrapper = styled.div`
  padding: 50px 16px;
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */

  visibility: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `visible` : `hidden`)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${NEUTRALS.OFF_WHITE};
  width: 100%;

  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    gap: 26px;
    margin-inline: calc(53px - 16px);
    padding-bottom: 52px;
    position: relative;

    cursor: pointer;
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      border-top: 1px solid ${NEUTRALS.BLACK};
    }

    & > * {
      margin-inline: calc(44px - 16px);
      border-bottom: 1px solid ${NEUTRALS.BLACK};
    }

    & > :last-child {
      margin-bottom: 40px;
    }
  }

  & > :nth-child(3) {
    /* border: 2px solid crimson; */

    display: flex;
    flex-direction: column;
    gap: 16px;

    & > * > * {
      width: 100%;
      /* border: 2px solid green; */
    }
  }
`
