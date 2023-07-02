import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"
import { ST_M_Results_Cards_TransitionsTime } from "../../../../../../utils/ST_M_Results_Cards_TransitionsTime"

export const ST_M_Results_CardWithFilters_ThreeCardsComponentsWrapper = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  article {
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    cursor: ${(x) => (x.isThirdPage ? `default` : `pointer`)};
    transition: all ${ST_M_Results_Cards_TransitionsTime.time};
  }

  /* .card > :nth-child(1) {
    pointer-events: ${(x) => (x.isThirdPage ? `auto` : `none`)};
  } */

  & > :nth-child(1) {
    position: relative;

    & > :nth-child(1) {
      position: ${(x) => (x.isThirdPage ? `fixed` : `absolute`)};
      z-index: 2;
      right: ${(x) => (x.isThirdPage ? `calc(50vw - 154px)` : `8px`)};
      top: ${(x) => (x.isThirdPage ? `151px` : `-16px`)};

      cursor: pointer;
    }

    .card {
      user-select: ${(x) => (x.isThirdPage ? `auto` : `none`)};
      margin-top: ${(x) => (x.isThirdPage ? `24px` : `0px`)};

      & > :nth-child(1) {
        pointer-events: ${(x) => (x.isThirdPage ? `auto` : `none`)};

        margin-bottom: 8px;
        & > :nth-child(1) {
          & > :nth-child(1) {
            border-radius: ${(x) => (x.isThirdPage ? `8px` : `none`)};
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
        }
      }

      & > :last-child {
        padding-bottom: 16px;
      }
    }

    .FirstPlace {
      width: 100%;
      & > :not(:first-child) {
        padding-inline: 16px;
        margin-bottom: 8px;
      }

      & > :nth-child(1) {
        position: relative;

        & > .thirdPage {
          height: 115px;
          display: inline-block;
          border: 2px solid #d3d6d7;
          filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15));
          border-radius: 8px;
        }

        & > :nth-child(2) {
          position: absolute;
          right: 8px;
          bottom: 14px;
        }
      }

      & > :nth-child(2) {
        display: flex;
        white-space: nowrap;
        & > :nth-child(1) {
          margin-right: 8px;
        }
      }

      & > :nth-child(3) {
        & > :nth-child(2) {
          display: flex;
          gap: 8px;
        }
      }

      & > :nth-child(4) {
        margin-bottom: ${(x) => (x.isThirdPage ? `16px` : `8px`)};
      }

      & > :nth-child(5) {
        padding-right: 0px;
      }
    }

    .SecondPlace {
      padding: 16px 16px 18px 16px;
      width: 100%;
      background-color: ${NEUTRALS.OFF_WHITE};

      & > :not(:last-child) {
        margin-bottom: 8px;
      }
    }

    .ThirdPlace {
      background-color: ${NEUTRALS.OFF_WHITE};
      width: 100%;
      padding: 28px 16px 18px 16px;

      & > * {
        display: grid;
        grid-template-columns: auto 1fr;
        & > :nth-child(2) {
          margin-left: 4px;
        }
      }

      & > :not(:last-child) {
        margin-bottom: 34px;
      }
    }
  }

  .prevCard {
    right: 50px;
    left: -50px;
    opacity: 0;
    z-index: -1;
    position: absolute;
  }

  .activeCard {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .nextCard {
    inset: 0;
    right: -50px;
    left: 50px;
    opacity: 0;
    z-index: -1;
    position: absolute;
    /* width:100%; */
  }
`
