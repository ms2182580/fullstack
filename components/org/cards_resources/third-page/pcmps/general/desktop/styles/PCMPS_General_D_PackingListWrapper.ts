import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { blurEffect } from "@/components/ui/blur/blur"
import styled from "styled-components"

const enum PCMPS_General_D_PackingList_PROPS {
  INLINE_MARGIN_PADDING = "24px",
  BOTTOMTOP_MARGIN_PADDING = "40px",
}

export const PCMPS_General_D_PackingListWrapper = styled.aside`
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  padding-bottom: ${PCMPS_General_D_PackingList_PROPS.BOTTOMTOP_MARGIN_PADDING};

  position: relative;
  ${blurEffect({})}

  ul {
    list-style: none;
  }

  & > *:not(:first-child):not(:last-child) {
    padding-inline: ${PCMPS_General_D_PackingList_PROPS.INLINE_MARGIN_PADDING};
    padding-bottom: ${PCMPS_General_D_PackingList_PROPS.BOTTOMTOP_MARGIN_PADDING};
  }

  & > :nth-child(1) {
    border-radius: 8px 8px 0 0;

    padding: 24px;
    margin-bottom: ${PCMPS_General_D_PackingList_PROPS.BOTTOMTOP_MARGIN_PADDING};
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};

    display: flex;
    justify-content: space-between;

    & > :nth-child(1) {
      display: grid;
      gap: 8px;
    }

    & > :nth-child(2) {
      display: grid;
      justify-items: center;
      align-self: flex-end;
      gap: 8px;

      p {
        color: ${PRIMARY.PRIMARY_HOVER};
      }
    }
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;

    & > * {
      padding-inline: 32px;
    }

    h4 {
      text-transform: capitalize;
      color: ${PRIMARY.PRIMARY_HOVER};
      font-weight: 700;

      margin-bottom: 8px;
    }

    ul {
      display: grid;
      gap: 6px;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 24px;
      width: calc(
        100% - (${PCMPS_General_D_PackingList_PROPS.INLINE_MARGIN_PADDING} * 2)
      );
      height: 1px;
      background-color: ${NEUTRALS.LIGHT_GREY};
    }
  }

  & > :nth-child(3),
  & > :nth-child(4) {
    margin-top: ${PCMPS_General_D_PackingList_PROPS.BOTTOMTOP_MARGIN_PADDING};
  }

  & > :nth-child(4) {
    font-size: 14px;
  }

  & > :nth-child(5) {
    display: flex;
    margin-left: auto;

    padding: 8px 48px;
    border-radius: 8px;
    border: 2px solid ${PRIMARY.PRIMARY_CTA};
    background-color: ${NEUTRALS.OFF_WHITE};

    color: ${PRIMARY.PRIMARY_CTA};
    font-size: 16px;
    font-weight: 600;

    margin-right: 24px;

    cursor: pointer;

    &:hover,
    &:focus-visible {
      color: ${NEUTRALS.OFF_WHITE};
      background-color: ${PRIMARY.PRIMARY_CTA};
    }
  }
`
