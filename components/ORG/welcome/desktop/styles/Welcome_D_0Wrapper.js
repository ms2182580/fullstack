import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const Welcome_D_0Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-inline: 16px;

  width: fit-content;

  box-shadow: 0px 4px 5px hsla(0, 0%, 0%, 0.65);
  border-radius: 20px;
  border: 1px solid #fff;
  background: #fff;

  position: absolute;
  top: 53%;
  left: 50vw;
  transform: translate(-50%, -50%);

  @media (max-width: 1195px) {
    width: 70vw;
  }

  @media (max-width: 865px) {
    width: 99vw;
  }
  @media (max-width: 595px) {
    margin-top: 22px;
  }
  @media (max-width: 585px) {
    margin-top: 43px;
  }
  @media (max-width: 546px) {
    margin-top: 58px;
  }
  @media (max-width: 502px) {
    margin-top: 80px;
  }
  @media (max-width: 429px) {
    margin-top: 94px;
  }

  & > :nth-child(1) {
    position: absolute;
    top: -160px;
  }

  & > :nth-child(2) {
    padding-top: 94px;
    padding-bottom: 56px;
    font-size: 64px;
    font-weight: 700;
    line-height: 120%;
    text-transform: capitalize;

    @media (max-width: 350px) {
      font-size: 18vw;
    }
  }

  .HIGHLIGHT_BOLD {
    color: #666;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.28px;
  }

  .HIGHLIGHT_ITALIC {
    font-style: italic;
  }

  & > :nth-child(3) {
    margin-bottom: 32px;
  }

  & > :nth-child(4) {
    list-style-position: inside;
    margin-bottom: 52px;
  }

  & > :nth-child(3),
  & > :nth-child(4) > li {
    color: #666;
    font-size: 28px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.28px;
  }

  & > :nth-child(3),
  & > :nth-child(4) > li,
  .HIGHLIGHT_BOLD {
    @media (max-width: 350px) {
      font-size: 7vw;
    }
  }

  & > :nth-child(5) {
    padding: 11px 72px;
    border-radius: 8px;
    background-color: ${PRIMARY.PRIMARY_CTA};
    color: ${NEUTRALS.OFF_WHITE};

    border: none;

    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.3px;

    cursor: pointer;

    margin-bottom: 52px;
  }

  & > :nth-child(6) {
    width: calc(100% - calc(52px * 2));
    text-align: start;

    & > :nth-child(1) {
      font-family: Poppins;
      font-size: 16px;
      font-style: italic;
      font-weight: 700;
      line-height: 32px;
    }

    & > :nth-child(2) {
      color: #36c;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
