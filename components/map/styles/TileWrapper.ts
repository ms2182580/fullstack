import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const TileWrapper = styled.div``
export const CardContainer = styled.article`
  /* width: 310px; */
  background-color: white;
  overflow: hidden;
  border-radius: 2px;

  & > :nth-child(1) {
    overflow: hidden;
    border-radius: 2px;
    width: 300px;
    object-fit: cover;
  }
  & > :nth-child(4) {
    margin-top: -15px;
    margin-bottom: -25px;
  }
  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5) {
    padding: 0px 10px;
  }
  & > :nth-child(6) {
    margin-top: auto;
    margin-inline: 24px;
    width: 14.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 16px;

    font-size: 16px;
    font-weight: 600;
    color: hsl(210, 50%, 99.2%);
    line-height: 19.2px;
    letter-spacing: 0.256px;

    background-color: ${PRIMARY.PRIMARY_CTA};
    padding-top: 9px;
    padding-bottom: 9px;

    border-radius: 6.2px;
    border: medium;

    cursor: pointer;

    white-space: nowrap;

    &:hover,
    &:focus-visible {
      background-color: ${PRIMARY.PRIMARY_HOVER};
    }
    margin-bottom: 10px;
  }
  /* & > * {
    & > :nth-child(2) {
      text-transform: capitalize;
    }

    & > :nth-child(4) {
      color: ${NEUTRALS.DARK_GREY};
    }
    & > :nth-child(5) {
      margin: 32px 0px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0.32px;
    }
  } */
`
