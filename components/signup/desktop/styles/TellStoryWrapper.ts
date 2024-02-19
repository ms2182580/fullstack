import styled from "styled-components"

export const TellStoryWrapper = styled.div`
  width: 1440px;
  padding-top: 56px;
  padding-left: 69px;
  padding-right: 69px;
  background-image: url("/background/background2.svg");
  padding-bottom: 50px;
  & > :nth-child(1) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > :nth-child(1) {
      & > :nth-child(1) {
        color: #1d1a1e;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      & > :nth-child(2) {
        color: #3a343c;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
      }
    }
    & > :nth-child(2) {
      display: flex;
    }
  }

  & > :nth-child(2) {
    display: flex;
    padding: 16px 15px 15px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #f3f1f3;
    gap: 16px;

    & > :nth-child(1) {
      display: flex;
      height: 589px;
      padding: 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      background-color: white;
      width: 356px;

      & > :nth-child(1) {
        display: flex;
        gap: 14px;
        & > :nth-child(1) {
          position: relative;
          display: flex;
          width: 110px;
          height: 110px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          border-radius: 100px;
          background: #f3f1f3;
          & > :nth-child(2) {
            width: 24px;
            height: 24px;
            border-radius: 109px;
            background: #d3ced5;
            position: absolute;
            bottom: 5px;
            right: 5px;
          }
        }
        & > :nth-child(2) {
          display: flex;
          flex-direction: column;

          & > :nth-child(1) {
            color: #1d1a1e;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }

          & > :nth-child(2),
          & > :nth-child(3),
          & > :nth-child(4) {
            color: #3a343c;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            & > :nth-child(1) {
              color: #3a343c;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            }
          }
        }
      }
      & > :nth-child(2) {
        color: #1d1a1e;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
      }
      & > :nth-child(3) {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        & > * {
          & > :nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & > :nth-child(1),
            & > :nth-child(2) {
              color: #3a343c;
              text-align: center;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            }
          }
          & > :nth-child(2) {
            width: 100%;
          }
        }
      }
    }

    & > :nth-child(2) {
      & > :nth-child(1) {
        display: flex;
        width: 899px;
        height: 158px;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        background-color: white;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 0px 4px 0px rgba(144, 131, 149, 0.5);
      }
      & > :nth-child(2) {
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;

        & > * {
          padding: 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          background-color: white;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0px 0px 4px 0px rgba(144, 131, 149, 0.5);
        }
      }
    }
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    background: #f3f1f3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 15px;
    background: #ae79c3;
    cursor: pointer;
    border-radius: 4px;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > :nth-child(1) {
    color: #1d1a1e;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
  }
  & > :nth-child(2) {
    width: 100%;
    border: none;
    outline: none;
  }
  & > :nth-child(3) {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    & > :nth-child(3) {
      width: 24px;
      height: 24px;
      padding: 2px;
      background-color: #f3f1f3;
      border-radius: 100px;
    }
  }
`
