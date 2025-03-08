import styled from 'styled-components'

export const CategoryWrapper = styled.div`
  padding: 33px 57px;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    img {
      margin-top: 25.49px;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  & > :nth-child(2) {
    display: flex;
    gap: 2px;

    & img {
      height: 30.63px;
    }

    & > :nth-child(2) {
      display: flex;
      border: 0.7px solid #e6e780;
      border-radius: 7px;
      padding: 11.2px 39.2px 16.8px 39.2px;
      gap: 11.2px;
      width: 72%;
      max-width: 781px;
      align-items: end;

      & > :nth-child(1) {
        display: flex;
        gap: 2.8px;
        flex-direction: column;
        width: 100%;
        max-width: 307.9px;
        position: relative;

        & > label {
          font-size: 11.2px;
          line-height: 18.9px;
          font-weight: 400;
          font-family: 'Poppins';
          color: 3A343C;
        }
        & > div {
          width: 100%;
          border-radius: 8px;
          border: 0.7px solid #908395;

          overflow: hidden;
          padding: 8.4px 11.2px;
          display: flex;
          align-items: center;
          gap: 7px;

          & > input {
            width: 100%;
            border: none;
            outline: none;
            font-size: 11.2px;
            line-height: 18.9px;
            font-weight: 400;

            overflow: auto;
            padding-left: 0.3rem;

            &::placeholder {
              color: #3a343c;
            }
          }
        }
      }
      // 2
      & > :nth-child(2) {
        display: flex;
        gap: 2.8px;
        flex-direction: column;
        width: 100%;
        max-width: 161px;

        & > label {
          font-size: 11.2px;
          line-height: 18.9px;
          font-weight: 400;
          font-family: 'Poppins';
          color: 3A343C;
        }
        & > div {
          width: 100%;
          border-radius: 8px;
          border: 0.7px solid #908395;

          overflow: hidden;
          padding: 8.4px 11.2px;
          display: flex;
          align-items: center;
          gap: 7px;

          & i {
            width: 20px;
          }

          & > input {
            width: 100%;
            border: none;
            outline: none;
            font-size: 11.2px;
            line-height: 18.9px;
            font-weight: 400;
            padding-left: 0.3rem;
            overflow: auto;

            &::placeholder {
              color: #908395;
            }
          }
        }
      }

      //3
      & > :nth-child(3) {
        display: flex;
        gap: 2.8px;
        flex-direction: column;
        width: 100%;
        max-width: 161px;

        & > label {
          font-size: 11.2px;
          line-height: 18.9px;
          font-weight: 400;
          font-family: 'Poppins';
          color: 3A343C;
        }
        & > div {
          width: 100%;
          border-radius: 8px;
          border: 0.7px solid #908395;
          overflow: hidden;
          padding: 8.4px 11.2px;
          display: flex;
          gap: 7px;
          i {
            margin-top: 0.1rem;
            width: 20px;
          }
          & > input {
            width: 100%;
            border: none;
            outline: none;
            font-size: 11.2px;
            line-height: 18.9px;
            font-weight: 400;
            font-family: 'Poppins';

            overflow: auto;
            &::placeholder {
              color: #3a343c;
            }
          }
        }
      }

      & > :nth-child(4) {
        padding: 10px;
        background-color: #006886;
        border-radius: 8px;
        width: 70px;
        height: 35px;
        margin-bottom: 0.1rem;
      }
    }
  }

  & > :nth-child(3) {
    margin-left: 47px;
    margin-top: 33px;
    & > :nth-child(1) {
      color: yellow;
      display: flex;
      gap: 2px;

      & > button {
        background-color: #f3f1f3;
        // background-color:red;
        padding: 16px 53px;
        height: 51px;
        border: 0px;
        font-size: 18px;
        line-height: 27px;
        font-weight: normal;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-family: 'poppins';

        &:active {
          background-color: white;
          border: 1px solid #0000001a;
          font-weight: 600;
        }
      }
    }
  }

  & > :nth-child(4) {
    margin-left: 47px;
    width: 911px;

    & > :nth-child(1) {
      border: 1px solid #0000001a;

      box-shadow: 0px 0px 10px 1px #0000000d;

      align-items: center;
      padding: 36px 48px;

      & > :nth-child(1) {
        display: flex;
        align-items: center;
        gap: 24px;

        font-family: 'poppins';
        & > :nth-child(2) {
          & > h1 {
            font-family: Poppins;
            font-weight: 600;
            font-size: 32px;
            line-height: 54px;
            letter-spacing: 0px;
          }
          & > p {
            font-family: Lexend;
            font-weight: 400;
            font-size: 20px;
            line-height: 34px;
            letter-spacing: 0px;
          }
        }
      }
      i {
        width: 30px;
      }

      & > :nth-child(2) {
        display: flex;
        align-items: center;

        & > :nth-child(3) {
          & > h1 {
            font-weight: bold;
            line-height: 54px;
          }
          & > p {
            font-size: 20px;
            line-height: 34px;
            font-weight: 400;
          }
        }
      }

      & > :nth-child(2) {
        margin-top: 24px;

        & > p {
          color: #00080b;
          font-weight: 400;
          line-height: 27px;
          font-size: 16px;
          letter-spacing: 0px;
          font-family: 'Poppins';
          width: 815px;
        }
      }

      & > :nth-child(3) {
        margin-top: 24px;
        display: flex;
        flex-direction: column;

        gap: 8px;

        & > :nth-child(1) {
          font-family: Poppins;
          font-weight: 600;
          font-size: 20px;
          line-height: 34px;
          letter-spacing: 0px;
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;

          & > :nth-child(1) {
            font-family: Lexend;
            font-weight: 400;
            font-size: 16px;
            line-height: 27px;
            letter-spacing: 0px;
          }
        }
        & > :nth-child(3) {
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
        & > :nth-child(4) {
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
        & > :nth-child(5) {
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
        & > :nth-child(6) {
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
      }
      & > :nth-child(4) {
        display: flex;
        flex-direction: column;

        margin-top: 36px;

        & > p {
          font-family: Poppins;
          font-weight: 600;
          font-size: 20px;
          line-height: 34px;
          letter-spacing: 0px;
        }
        & > div {
          display: flex;
          gap: 12px;

          margin-top: 12px;

          & > :nth-child(1) {
            border: 1px solid #00000033;

            border-radius: 20px;
            padding: 13px 24px 13px 20px;
            display: flex;
            align-items: center;
            gap: 8px;

            & > p {
              font-family: Poppins;
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: 0px;
              text-wrap: nowrap;
            }
          }

          & > :nth-child(2) {
            border: 1px solid #00000033;

            border-radius: 20px;
            padding: 13px 24px 13px 20px;
            font-size: 12px;
            line-height: 20px;
            font-weight: 400;
            display: flex;
            align-items: center;
            gap: 8px;

            & > a {
              color: #3366cc !important;
              white-space: nowrap;
              font-family: Poppins;
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: 0px;
            }
          }
          & > :nth-child(3) {
            border: 1px solid #00000033;

            border-radius: 20px;
            padding: 13px 24px 13px 16px;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            // width: 217px;

            & > a {
              color: #3366cc !important;
              white-space: nowrap;
              font-family: Poppins;
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: 0px;
            }
          }
          & > :nth-child(4) {
            border: 1px solid #00000033;

            border-radius: 20px;
            padding: 13px 24px 13px 20px;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 8px;

            & > p {
              font-family: Poppins;
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
              letter-spacing: 0px;
            }
          }
        }
      }
    }
  }
`

export const FocusAreasWrapper = styled.div`
  margin-top: 26px;
  border: 1px solid #00000033;
  box-shadow: 0px 0px 10px 1px #0000000d;

  border-radius: 4px;
  padding: 36px 48px;

  & > p {
    font-family: Poppins;
    font-weight: 600;
    font-size: 24px;
    line-height: 41px;
    letter-spacing: 0px;
  }
  & > :nth-child(2) {
    display: flex;
    gap: 29px;
    margin-top: 24px;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 29px;
      & > :nth-child(1) {
        display: flex;
        gap: 16px;
        align-items: center;

        & > :nth-child(1) {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #6e3a82;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        & > :nth-child(2) {
          font-size: 16px;
          font-weight: 400;
          line-height: 27px;
          color: black;
          white-space: nowrap;
          width: 102px;
          overflow: hidden;
          text-overflow: ellipsis;

          font-family: Poppins;
          letter-spacing: 0px;
        }
      }
      & > :nth-child(2) {
        display: flex;
        align-items: end;
        gap: 9px;
        & > :nth-child(1) {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #6e3a82;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
        }
      }
    }
    // 2
    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > :nth-child(1) {
        display: flex;
        gap: 16px;
        align-items: center;
        & > :nth-child(1) {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #6e3a82;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        & > :nth-child(2) {
          font-size: 16px;
          font-weight: 400;
          line-height: 27px;
          color: black;
          white-space: nowrap;
          width: 102px;
          overflow: hidden;
          text-overflow: ellipsis;

          font-family: Poppins;

          letter-spacing: 0px;
        }
      }
      & > :nth-child(2) {
        display: flex;
        align-items: end;
        gap: 16px;
        & > :nth-child(1) {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #6e3a82;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        & > :nth-child(2) {
          white-space: nowrap;

          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
        }
      }
    }
    & > :nth-child(3) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > :nth-child(1) {
        display: flex;
        gap: 16px;
        align-items: center;
        & > :nth-child(1) {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #6e3a82;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
        }
      }
      & > :nth-child(2) {
        display: flex;
        align-items: end;
        gap: 16px;

        & > :nth-child(1) {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #6e3a82;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
        }
      }
    }
    & > :nth-child(4) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > :nth-child(1) {
        display: flex;
        gap: 16px;
        align-items: center;

        & > :nth-child(1) {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #6e3a82;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
        }
      }
      & > :nth-child(2) {
        display: flex;
        align-items: end;
        gap: 16px;

        & > :nth-child(1) {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #6e3a82;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        & > :nth-child(2) {
          white-space: nowrap;
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
        }
      }
    }
  }
`

export const InformationWrapper = styled.div`
  margin-top: 26px;
  border: 1px solid #00000033;

  box-shadow: 0px 0px 10px 1px #0000000d;
  padding: 36px;
  font-family: poppins;
  border-radius: 4px;

  & > p {
    font-family: Poppins;
    font-weight: 600;
    font-size: 24px;
    line-height: 41px;
    letter-spacing: 0px;
  }

  // information below section parent
  & > :nth-child(2) {
    display: flex;
    gap: 36px;
    margin-top: 24px;

    align-items: center;

    // left parent
    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 24px;

      // left child start
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        gap: 16px;

        & > p {
          font-family: Lexend;
          font-weight: 400;
          font-size: 20px;
          line-height: 34px;
          letter-spacing: 0px;
        }
      }
      & > :nth-child(2) {
        display: flex;
        align-items: center;
        gap: 16px;
        & > p {
          font-family: Lexend;
          font-weight: 400;
          font-size: 20px;
          line-height: 34px;
          letter-spacing: 0px;
        }
      }
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      & > :nth-child(3) {
        display: flex;

        align-items: center;
        gap: 16px;
        & > p {
          font-family: Lexend;
          font-weight: 400;
          font-size: 20px;
          line-height: 34px;
          letter-spacing: 0px;
        }
      }
      & > :nth-child(4) {
        display: flex;
        align-items: Center;
        gap: 16px;

        & > p {
          font-family: Lexend;
          font-weight: 400;
          font-size: 20px;
          line-height: 34px;
          letter-spacing: 0px;
        }
      }
    }

    //right parent

    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 24px;

      & > :nth-child(1) {
        & > :nth-child(1) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 2%;

          & > :nth-child(1) {
            color: #3366cc;
            text-decoration: underline;
            text-decoration-style: solid;
            text-decoration-offset: 0%;
            text-decoration-thickness: 0%;
          }
        }
      }
      //child 2
      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        letter-spacing: 0px;
      }
    }
  }
`

export const LocationWrapper = styled.div`
  border: 1px solid #00000033;

  box-shadow: 0px 0px 10px 1px #0000000d;
  margin-top: 26px;
  border-radius: 4px;
  padding: 36px;

  & > :nth-child(1) {
    color: black;
    font-family: Poppins;
    font-weight: 600;
    font-size: 24px;
    line-height: 41px;
    letter-spacing: 0px;
  }

  & > :nth-child(2) {
    width: 179px;
    margin-top: 24px;
    font-size: 16px;
    line-height: 27px;
    font-weight: 400;
    font-family: poppins;
    color: #00080b;

    & > :nth-child(1) {
      font-family: Lexend;
      font-weight: 400;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0px;
    }
  }

  & > :nth-child(3) {
    margin-top: 24px;
  }
`
