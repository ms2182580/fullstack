import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const PVES_General_D_RelatedJobs_CardWrapper = styled.article`
  display: grid;
  gap: 16px;

  justify-items: center;

  height: 100%;

  & > :nth-child(1) {
    width: 150px;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    border-radius: 8px;
  }

  & > :nth-child(2) {
    display: grid;
    place-items: center;
    align-self: center;

    border-radius: 8px;
    background: #c4e7fd;

    padding: 5px 16px;

    font-size: 14px;
    font-weight: 500;

    text-transform: capitalize;
  }

  & > :nth-child(3) {
    /* The code of display, -webkit-box-orient, overflow, -webkit-line-clamp and width is for very long text with or without spaces */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    width: 100%;
    text-align: center;
  }

  & > :nth-child(4) {
    color: ${NEUTRALS.DARK_GREY};
  }

  & > :last-child {
    margin-top: auto;

    border-radius: 8px;
    border: 2px solid ${PRIMARY.PRIMARY_CTA};

    background-color: ${NEUTRALS.OFF_WHITE};
    padding: 12px 37px;

    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    color: ${PRIMARY.PRIMARY_CTA};

    &:hover,
    &:focus-visible {
      background-color: ${PRIMARY.PRIMARY_CTA};

      color: ${NEUTRALS.OFF_WHITE};
    }
  }
`
