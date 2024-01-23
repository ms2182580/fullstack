import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const Welcome_D_1Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 65px 115px 15px;

  width: fit-content;

  box-shadow: 0px 4px 5px hsla(0, 0%, 0%, 0.65);
  border-radius: 20px;
  border: 1px solid #fff;
  background: #fff;

  position: absolute;
  top: 53%;
  left: 50vw;
  transform: translate(-50%, -50%);

  white-space: nowrap;

  @media (max-width: 635px) {
    width: 100vw;
    white-space: normal;
    text-align: center;
    font-size: 1vw;
  }

  @media (max-width: 617px) {
    margin-top: 40px;
  }

  @media (max-width: 588px) {
    margin-top: 60px;
  }

  @media (max-width: 463px) {
    margin-top: 72px;
  }

  @media (max-width: 430px) {
    margin-top: 93px;
  }

  @media (max-width: 426px) {
    margin-top: 131px;
  }

  @media (max-width: 346px) {
    margin-top: 151px;
  }

  @media (max-width: 331px) {
    margin-top: 161px;
  }
  @media (max-width: 323px) {
    margin-top: 183px;
  }

  & > :nth-child(1) {
    position: absolute;
    top: -160px;
  }

  & > :nth-child(2) {
    position: absolute;
    right: 43px;
    top: 39px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > :nth-child(3) {
    padding-bottom: 43px;
    font-size: 64px;
    font-weight: 700;
    line-height: 120%;
    text-transform: capitalize;

    @media (max-width: 350px) {
      /* font-size: 18vw; */
    }
  }

  & > :nth-child(4),
  & > :nth-child(5) {
    color: #666;
    font-size: 28px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.28px;
  }

  & > :nth-child(5) {
    margin-bottom: 43px;
  }

  & > :nth-child(6) {
    margin-bottom: 20px;
  }

  & > :nth-child(7) {
    margin-bottom: 43px;
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > :nth-child(1) {
      visibility: ${({ showMessageToUserByEmptyInput }) =>
        showMessageToUserByEmptyInput ? `visible` : `hidden`};

      color: crimson;
      filter: sepia(30%);
    }

    & > button {
      border: none;
      border-radius: 5.12px;
      background-color: ${PRIMARY.PRIMARY_CTA};

      color: ${NEUTRALS.OFF_WHITE};
      font-size: 12.8px;
      font-style: normal;
      font-weight: 600;
      line-height: 15.36px; /* 120% */
      letter-spacing: 0.192px;

      width: 182.4px;
      height: 35.84px;

      cursor: pointer;
    }
  }

  & > :nth-child(8) {
    /* justify-self: start; */
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    cursor: pointer;

    & > :nth-child(2) {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */
      letter-spacing: 0.16px;

      color: ${SEMANTICS.HYPERLINK_NORMAL};
    }
  }
`
