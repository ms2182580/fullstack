import styled from "styled-components"

export const Signup_D_Steps_CreateProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > * {
    padding-inline: clamp(16px, 10vw - 80px, 150px);

    width: 100%;
  }

  & > header {
    margin-bottom: 40px;

    p {
      display: flex;
      gap: 6px;
      white-space: nowrap;
    }
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;

    & > :nth-child(1) {
      & > :nth-child(1) {
        display: flex;
        width: 544px;
        padding: 24px 16px;
        flex-direction: column;
        border-radius: 16px;
        border: 2px solid #d3ced5;
        background: #fff;
        & > :nth-child(2) {
          color: #1d1a1e;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 27px;
        }
        & > :nth-child(3) {
          color: #746779;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 27px;
        }
      }

      & > :nth-child(2),
      & > :nth-child(3),
      & > :nth-child(4) {
        width: 100%;
        margin-top: 16px;
        display: flex;
        width: 545px;
        padding: 16px;
        justify-content: space-between;
        gap: 113px;
        flex-shrink: 0;
        border-radius: 16px;
        border: 1px solid #d3ced5;
        background: #f3f1f3;
        & > :nth-child(1) {
          & > :nth-child(1) {
            margin-bottom: 20px;
            display: flex;
          }
        }
        & > :nth-child(2) {
          display: flex;
          padding: 4px 8px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          background: #ffea80;
          height: 35px;
          color: #3a343c;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 27px;
        }
      }
    }

    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > :nth-child(2) {
        display: flex;
        flex-direction: column;
        padding: 0px 40px;

        & > :nth-child(1) {
          margin-top: 24px;
        }
      }
    }
  }
`
