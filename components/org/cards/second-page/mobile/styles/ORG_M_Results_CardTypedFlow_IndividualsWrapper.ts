import { NEUTRALS, PRIMARY, SECONDARY_ORG_PLUS } from "@/assets/Colors"
import styled from "styled-components"
export const ORG_M_Results_CardTypedFlow_Card = styled.article`
  border: 1px solid ${NEUTRALS.LIGHT_GREY} !important;
  overflow: hidden;
  width: 287px;
  background: ${PRIMARY.PRIMARY_BACKGROUND};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  margin: 10px 0px;
  max-height: 386px;

  & > :nth-child(1) {
    position: relative;
    & > :nth-child(1) {
      height: 115.775px !important;
      width: 100% !important;
    }

    & > :nth-child(2) {
      position: absolute;
      top: 21px;
      left: 21px;
    }

    & > :nth-child(3) {
      position: absolute;
      bottom: 4px;
      right: 2px;
      width: 64.8px;
      height: 19.493px;
      border-radius: 19.44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.81px solid ${SECONDARY_ORG_PLUS.YELLOW};
      background: ${SECONDARY_ORG_PLUS.YELLOW};

      & > :nth-child(2) {
        font-size: 9.72px;
        font-style: normal;
        font-weight: 400;
        line-height: 19.44px; /* 200% */
        letter-spacing: 0.097px;
        margin-left: 3px;
      }
    }
  }
  & > :nth-child(2) {
    height: 200px;
    padding: 15px;
    cursor: pointer;
    //first span
    & > :nth-child(1) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      // first span
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        & > :nth-child(2) {
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px; /* 150% */
          letter-spacing: 0.16px;
          margin-top: 3px;
        }
      }
      // second span
      & > :nth-child(2) {
        display: flex;
        gap: 2.4px;
        & > :nth-child(1) {
          color: var(--Inclusive-Purple-Medium, #6e3a82);

          /* Caption/Bold */
          font-family: Poppins;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px; /* 200% */
          letter-spacing: 0.12px;
        }
      }
    }

    //second span
    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      // first span
      & > :nth-child(1) {
        margin-top: 10px;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 200% */
        letter-spacing: 0.12px;
      }
      & > :nth-child(2) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: #6c6c6c;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 200% */

        //svg icon
        & > :nth-child(1) {
          margin-top: -25px;
          margin-right: 33px;
        }
      }
      // buttons
      & > :nth-child(4) {
        display: flex;
        margin-top: 4px;
        gap: 8px;
        & > :nth-child(1) {
          border-radius: 8px;
          border: none;
          background: var(--Pink-V3, #fff3ed);
          padding: 5px 10px;
          //span
          & > :nth-child(1) {
            color: var(--Black, #00080b);
            /* Caption/Regular */
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 200% */
            letter-spacing: 0.12px;
          }
        }
        & > :nth-child(2) {
          border-radius: 8px;
          border: none;
          background: var(--Pink-V3, #fff3ed);
          padding: 5px 10px;
          //span
          & > :nth-child(1) {
            color: var(--Black, #00080b);
            /* Caption/Regular */
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 200% */
            letter-spacing: 0.12px;
          }
        }
      }
    }
  }

  & > :nth-child(3) {
    background: white;
    // margin-top: 100%;
    display: inline-flex;
    width: 100%;
    padding: 8px 32px;
    justify-content: space-between;
    align-items: center;
    gap: 5.6px;
    height: 64px;
    border-radius: 0px 0px 5.6px 5.6px;
    border-right: 0.7px solid var(--Light-Gray, #d3d6d7);
    border-bottom: 0.7px solid var(--Light-Gray, #d3d6d7);
    border-left: 0.7px solid var(--Light-Gray, #d3d6d7);
    background: var(--Off-White, #fcfdfe);
    & > :nth-child(1) {
      border-radius: 5.6px;
      border: 1.4px solid var(--Inclusive-Purple-Medium, #6e3a82);
      display: inline-flex;
      height: 39px;
      padding: 8px 32px;
      justify-content: center;
      align-items: center;
      gap: 5.6px;
      flex-shrink: 0;
      background: white;
      & > :nth-child(2) {
        color: #6e3a82;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 16.8px; /* 105% */
      }
    }
  }
`
export const ORG_M_Results_CardTypedFlow_IndividualsWrapper = styled.section`
  display: block;
  & > :nth-child(1) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    // justify-content: center;
  }
  // width: 100%;
`
