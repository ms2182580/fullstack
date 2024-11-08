import { NEUTRALS, PRIMARY, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_MainCardLeftPhotosModalWrapper = styled.div`
  padding-top: 28px;
  padding-inline: calc(8px * 6);
  padding-bottom: 27px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > :nth-child(1) {
  }

  & > :nth-child(2) {
    margin-top: 16px;

    position: relative;
    width: 100%;
    height: 537px;
    margin-bottom: 25px;
    border-radius: 8px;
    overflow: hidden;

    & > * {
      width: inherit;
      height: inherit;
      border-radius: inherit;
      border-radius: 8px;

      & > :nth-child(1) {
        width: inherit;
        height: inherit;
        border-radius: inherit;
        border-radius: 8px;
        img {
          object-fit: cover;
          width: inherit;
          height: inherit;

          border-radius: inherit;
        }
      }
    }

    .slide {
      display: none;
      width: 100%;
      height: 100%;
    }

    .fade {
      animation-name: fade;
      animation-duration: 1.5s;

      & > :nth-child(2) {
        position: absolute;
        right: 16px;
        bottom: 16px;

        border-radius: 50%;
        background-color: ${PRIMARY.PRIMARY_CTA};
        color: ${NEUTRALS.OFF_WHITE};
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @keyframes fade {
      from {
        opacity: 0.3;
      }
      to {
        opacity: 1;
      }
    }
  }

  & > :nth-child(3) {
    & > :nth-child(1),
    & > :nth-child(2) {
      position: absolute;
      cursor: default;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 45px;
      margin-top: auto;
      margin-bottom: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      & > svg > path {
        fill: ${PRIMARY.PRIMARY_HOVER};
      }

      &:hover > svg > path {
        fill: ${PRIMARY.PRIMARY_CTA};
      }
    }

    & > :nth-child(1) {
      left: 0px;
    }

    & > :nth-child(2) {
      right: 0px;
    }
  }

  & > :nth-child(4) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;

    .styling {
      cursor: default;

      overflow: hidden;
      border-radius: 8px;
      padding: 8px;
      transition: 0.5s;

      width: 138px;
      height: 126px;

      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      & > :nth-child(1) {
        width: inherit;
        height: inherit;

        img {
          width: inherit;
          height: inherit;

          border-radius: 8px;

          object-fit: cover;
        }
      }

      & > :nth-child(2) {
        position: absolute;
        z-index: 3;
        background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.PINK};
        width: 24px;
        height: 24px;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        right: 8px;
        bottom: 8px;
      }

      &:focus-visible {
        transition: 0s;
      }
    }

    .active {
      & > :nth-child(2) {
        color: ${NEUTRALS.OFF_WHITE};
        background-color: ${PRIMARY.PRIMARY_CTA};
      }
    }

    .styling:hover {
      & > :nth-child(2) {
        color: ${NEUTRALS.OFF_WHITE};
        background-color: ${PRIMARY.PRIMARY_HOVER};
      }
    }
  }
`
