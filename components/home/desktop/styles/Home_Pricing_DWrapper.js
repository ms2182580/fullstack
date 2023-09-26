import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const Home_Pricing_DWrapper = styled.div`
  padding-inline: clamp(8px, 20vw - 180px, 162px);
  padding-top: 160px;
  padding-bottom: 160px;

  background: #fafafa;

  color: ${NEUTRALS.BLACK};

  & > :nth-child(1) {
    text-align: center;

    color: ${NEUTRALS.BLACK};
    font-size: 64px;
    margin-bottom: 66px;
    font-weight: 700;
    line-height: 74px;
    letter-spacing: -2.56px;
  }

  & > :nth-child(2) {
    display: flex;
    gap: 48px;

    & > * {
      width: 100%;

      display: grid;
      grid-auto-rows: auto auto 150px 80px 1fr;

      background: ${NEUTRALS.OFF_WHITE};
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

      padding: 30px clamp(12px, 10vw - 100px, 30px);

      & > * {
        text-align: center;
      }

      &.Free,
      &.Premium,
      &.Enterprise {
        & > :nth-child(3) {
          font-size: 32px;
          font-weight: 700;

          & > span,
          & > p > span {
            font-size: 10.08px;
            font-weight: 500;
            line-height: 15.12px;
            letter-spacing: 0.111px;
            color: ${NEUTRALS.BLACK};

            margin-left: 8px;
          }

          place-self: center;
        }

        & > :nth-child(4) {
          align-self: flex-end;
          width: 100%;

          padding: 12px 56px;
          border-radius: 6px;
          border: 2px solid ${PRIMARY.PRIMARY_CTA};
          background: ${PRIMARY.PRIMARY_CTA};

          color: ${NEUTRALS.OFF_WHITE};

          font-size: 16px;
          font-weight: 600;

          cursor: pointer;

          &:hover,
          &:focus {
            color: ${PRIMARY.PRIMARY_CTA};
            background: ${NEUTRALS.OFF_WHITE};
          }
        }

        & > :nth-child(5) {
          padding-top: 18px;
          border-top: 1px solid #eaeaea;

          & > :nth-child(1),
          & > :nth-child(2) {
            list-style: none;
          }

          & > :not(ul) {
            margin-bottom: 15px;
            & > span {
              font-weight: 700;
            }
          }

          & > ul {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            gap: 16px;
            & > li {
              text-align: left;

              & > :nth-child(1) {
                width: 26px;
              }

              & > span {
                font-weight: 700;
              }
            }
          }
        }
      }

      &.Free {
        & > :nth-child(2) {
          /* margin-bottom: 38px; */
        }
      }

      &.Premium {
        & > :nth-child(2) {
        }

        & > :nth-child(3) {
          & > :nth-child(1) {
            color: ${NEUTRALS.DARK_GREY};
            font-weight: 700;
            text-decoration: line-through;
            text-decoration-thickness: 2px;
          }

          & > :nth-child(2) {
            color: #ff000f;
            font-size: 32px;
            font-weight: 700;

            margin-bottom: 12px;
          }

          & > :nth-child(3) {
            font-weight: 600;
            line-height: 15.12px;
            letter-spacing: 0.176px;
          }
        }
      }

      &.Enterprise {
        position: relative;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: hsl(0, 0%, 42.4%, 0.2);
          z-index: 2;

          cursor: not-allowed;
        }

        & > :nth-child(1) {
          color: ${NEUTRALS.DARK_GREY};
        }

        & > :nth-child(3) {
          & > p {
            font-size: 40px;
            color: ${NEUTRALS.DARK_GREY};
            font-weight: 600;
          }
        }

        & > :nth-child(4) {
          background-color: #fff;
          color: ${NEUTRALS.DARK_GREY};
          border: 2px solid ${NEUTRALS.DARK_GREY};
        }

        & > :nth-child(5) {
          color: ${NEUTRALS.DARK_GREY};
          & > * {
            color: ${NEUTRALS.DARK_GREY};
          }

          & > :nth-child(2) {
            & > * {
              & > :nth-child(1) {
                & > * {
                  fill: ${NEUTRALS.DARK_GREY};
                }
              }
            }
          }
        }
      }

      & > :nth-child(1) {
        font-size: 24px;
        font-weight: 700;
        line-height: 24px;
      }

      & > :nth-child(2) {
        color: ${NEUTRALS.DARK_GREY};
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.198px;
      }

      & > :nth-child(3) {
        & > span {
          font-size: 10.08px;
          font-weight: 500;
          line-height: 15.12px;
          letter-spacing: 0.111px;
          color: ${NEUTRALS.BLACK};

          margin-left: 8px;
          vertical-align: middle;
        }
      }

      & > :nth-child(4) {
        margin-bottom: 26px;
      }
    }
  }
`
