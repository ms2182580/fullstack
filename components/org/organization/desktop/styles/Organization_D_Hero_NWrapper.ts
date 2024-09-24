import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Organization_D_Hero_NWrapper = styled.section`
  display: grid;
  gap: 56px;
  padding-top: 77px;

  & > :nth-child(1) {
    padding-left: 106px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    & > :nth-child(1) {
      & > :nth-child(1) {
        line-height: 150%;
      }
      & > :nth-child(2) {
        margin-top: 4px;
        margin-bottom: 24px;
        height: 1px;
        width: 100%;
        background: ${NEUTRALS.BORDER};
      }

      p {
        display: grid;
        gap: 32px;
        color: ${NEUTRALS.DARK_GREY_2};
      }

      & > :last-child {
        margin-top: 56px;
        display: flex;
        flex-direction: column;
        gap: 32px;

        & > :nth-child(1) {
          & > :nth-child(1) {
            display: grid;
            grid-template-columns: 5fr 2.4fr 0.6fr;
            gap: 13px;
            align-items: flex-end;

            & > :nth-child(1) {
              & > :nth-child(1) {
                display: flex;
              }
              & > :nth-child(2) {
                position: relative;
                & > :nth-child(1) {
                  position: absolute;
                  top: 50%;
                  left: 16px;
                  transform: translate(-50%, -50%);
                  & > * {
                    fill: black;
                  }
                }
                & > :nth-child(2) {
                  width: 100%;
                  align-self: stretch;
                  padding: 12px 30px;
                  border-radius: 8px;
                  border: 1px solid ${NEUTRALS.DARK_GREY_3};
                  font-style: italic;
                  ::placeholder {
                    color: #8b8a8b;
                  }
                }
              }
            }
            & > :nth-child(2) {
              & > :nth-child(1) {
                display: flex;
              }
              & > :nth-child(2) {
                position: relative;
                & > :nth-child(1) {
                  position: absolute;
                  top: 50%;
                  left: 16px;
                  transform: translate(-50%, -50%);
                  & > * {
                    fill: black;
                  }
                }
                & > :nth-child(2) {
                  width: 100%;
                  align-self: stretch;
                  padding: 12px 30px;
                  border-radius: 8px;
                  border: 1px solid ${NEUTRALS.DARK_GREY_3};
                  ::placeholder {
                    color: #8b8a8b;
                  }
                }
              }
            }
            & > :nth-child(3) {
              width: 100px;
              ${reusableButton({})};
            }
          }
        }
        & > :nth-child(2) {
          display: flex;
          width: 92%;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          & > :nth-child(1) {
            height: 1px;
            width: 100%;
            background: ${NEUTRALS.BORDER};
          }
          & > :nth-child(3) {
            height: 1px;
            width: 100%;
            background: ${NEUTRALS.BORDER};
          }
        }
        & > :nth-child(3) {
          border: 1px solid ${PRIMARY.LIGHT_MAROON};
          background-color: white;
          width: 92%;
          cursor: pointer;
          & > :nth-child(1) {
            display: flex;
            gap: 10px;
            color: ${NEUTRALS.DARK_GREY_2};
            font-weight: 400;
          }
        }
      }
    }
    & > :nth-child(2) {
      margin: auto;
    }
  }
  & > :nth-child(2) {
    position: relative;
    & > :nth-child(2) {
      width: 100% !important;
      margin-top: -4rem;
    }
  }
`
