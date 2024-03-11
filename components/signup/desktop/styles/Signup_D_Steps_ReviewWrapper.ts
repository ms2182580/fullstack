import styled from "styled-components"

type Props = {
  checkModalIsOpen: boolean
}

export const Signup_D_Steps_ReviewWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background-image: url("/background/background2.svg");

  border: ${({ checkModalIsOpen }) =>
    checkModalIsOpen ? "2px solid green" : "2px solid red"};

  & > * {
    width: 596px;

    h6 {
      font-size: 20px;
      font-weight: 600;
    }
  }

  & > :nth-child(1) {
    margin-left: 120px;
    display: flex;

    padding: 40px 32px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 2px solid #d3ced5;
    background: #fff;

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      gap: 10px;
      & > :nth-child(1) {
        background-color: #f3f1f3;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  & > :nth-child(2) {
    margin-left: 120px;
    display: flex;
    padding: 24px 32px;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    border: 2px solid #d3ced5;
    background: #f2eaf6;

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`
