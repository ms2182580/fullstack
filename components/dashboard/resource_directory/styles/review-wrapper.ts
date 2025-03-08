import styled from 'styled-components'

export const ReviewWrappers = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0px 0px 10px 1px #0000000d;
  width: 911px;

  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  & > :nth-child(1) {
    padding: 24px !important;
    & > :nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > :nth-child(1) {
        & > p {
          font-family: Poppins;
          font-weight: 600;
          font-size: 24px;
          line-height: 36px;
          letter-spacing: 3%;
        }
      }

      & > :nth-child(2) {
        & > button {
          width: 198;
          height: 48;

          gap: 8px;
          padding-top: 8px;
          padding-right: 22px;
          padding-bottom: 8px;
          padding-left: 24px;

          border-radius: 8px;
          border: 2px solid #6c6c6c;
          cursor: pointer;
          background-color: transparent;
          display: flex;
          align-items: center;
          font-family: poppins;
          color: #6c6c6c;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 1.5%;
          font-size: 16px;
        }
      }
    }

    // 2 div
    & > :nth-child(2) {
      & > :nth-child(1) {
        font-family: Poppins, sans-serif !important
;
        font-weight: 400 !important
;
        font-size: 16px !important
;
        line-height: 24px !important;
        letter-spacing: 1px !important; /* Fixed */
        margin-top: 30px !important;
        width: 863px !important
;
        color: red;

        & > span {
          font-family: Poppins;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 1%;
          text-decoration: underline;
          text-decoration-style: solid;
          text-decoration-thickness: Auto;
          color: #3366cc;
        }
      }
    }
  }
`

export const StarWrapper = styled.div`
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    & > :nth-child(1) {
      font-family: Poppins;
      font-weight: 400;
      font-size: 18px;
      line-height: 24.43px;
      letter-spacing: 2%;
    }
    & > :nth-child(2) {
      display: flex;
      align-items: center;
    }

    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 400;
      font-size: 13.03px;
      line-height: 24.43px;
      letter-spacing: 2%;

      color: #6c6c6c;
    }
  }
  & > :nth-child(2) {
    margin-top: 22.87px;
    display: flex;
    justify-content: space-between;
    line-height: 0px;

    // first Overall rating
    & > :nth-child(1) {
      display: flex;
      flex: 1;

      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: red;

      & > :nth-child(1) {
        color: black;
        font-weight: 500;
        font-size: 13px;
      }

      & > :nth-child(2) {
        color: black;
        display: flex;
        line-height: 0px;

        gap: 5px;
        align-items: center;
        & > :nth-child(1) {
          font-size: 12px;

          font-weight: 200;
        }

        & > :nth-child(2) {
          border-bottom: 3px solid black;
          width: 100px;
        }
      }
      // first border end
      & > :nth-child(3) {
        color: black;
        display: flex;
        gap: 5px;
        line-height: 0px;
        align-items: center;
        & > :nth-child(1) {
          font-size: 12px;

          font-weight: 200;
        }
        & > :nth-child(2) {
          border-bottom: 3px solid #e0dde0;
          width: 100px;
        }
      }
      //second border end

      & > :nth-child(4) {
        color: black;
        display: flex;
        gap: 5px;
        line-height: 0px;
        align-items: center;
        & > :nth-child(1) {
          font-size: 12px;

          font-weight: 200;
        }
        & > :nth-child(2) {
          border-bottom: 3px solid #e0dde0;
          width: 100px;
        }
      }
      //third border end
      & > :nth-child(5) {
        color: black;
        display: flex;
        gap: 5px;
        line-height: 0px;
        align-items: center;
        & > :nth-child(1) {
          font-size: 13px;
        }
        & > :nth-child(2) {
          border-bottom: 3px solid #e0dde0;
          width: 100px;
        }
      }
      //fourth border end
      & > :nth-child(6) {
        color: black;
        display: flex;
        gap: 5px;
        line-height: 0px;
        align-items: center;

        padding: 0px 0px !important;
        & > :nth-child(1) {
          font-size: 12px;

          font-weight: 200;
        }
        & > :nth-child(2) {
          border-bottom: 3px solid #e0dde0;
          width: 100px;
        }
      }
    }
    // second secduling
    & > :nth-child(2) {
      border-left: 1px solid #6c6c6c;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      gap: 7px;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        letter-spacing: 0%;
        text-align: center;
      }
      & > :nth-child(2) {
        color: black;

        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        letter-spacing: 0%;
      }
    }
    // third customer service

    & > :nth-child(3) {
      border-left: 1px solid #6c6c6c;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      gap: 7px;

      & > :nth-child(1) {
        color: black;

        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        letter-spacing: 0%;
      }
      & > :nth-child(2) {
        color: black;

        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        letter-spacing: 0%;
      }
    }
    // fourth wait times

    & > :nth-child(4) {
      border-left: 1px solid #6c6c6c;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      gap: 7px;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        letter-spacing: 0%;
        text-align: center;
      }
      & > :nth-child(2) {
        color: black;

        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        letter-spacing: 0%;
      }
    }
    //fifth feedback

    & > :nth-child(5) {
      border-left: 1px solid #6c6c6c;
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      gap: 7px;

      & > :nth-child(1) {
        color: black;

        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        letter-spacing: 0%;
      }
      & > :nth-child(2) {
        color: black;
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        letter-spacing: 0%;
      }
    }
  }
`

export const ReviewMentionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 0px !important;

  // para

  & > :nth-child(1) {
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0%;
  }
  // second service quality

  & > :nth-child(2) {
    color: green;
    margin-top: 33px !important;
    display: flex;
    gap: 24px !important;

    // first service
    & > :nth-child(1) {
      border: 0px !important;
      background-color: #deffdb;
      padding: 9px 9px !important;

      & > :nth-child(1) {
        width: 22px;
        height: 22px;

        border-radius: 50px;
        padding: 4px;
        background-color: #0a760e;
        display: flex;
        align-items: Center;
      }

      & > :nth-child(2) {
        color: #1d1a1e;
        font-family: Poppins;
        font-weight: 600 !important;
        font-size: 14px !important
;
        line-height: 24px !important
;
        letter-spacing: 0px !important
;
      }
    }
    //second wait times

    & > :nth-child(2) {
      border: 0px !important;
      background-color: #deffdb;
      padding: 9px 9px !important;

      & > :nth-child(1) {
        width: 22px;
        height: 22px;

        border-radius: 50px;
        padding: 4px;
        background-color: #d77b27;
        display: flex;
        align-items: Center;
      }

      & > :nth-child(2) {
        color: #1d1a1e;
        font-family: Poppins;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0px;
      }
    }
    // third Negative
    & > :nth-child(3) {
      border: none !important;
      background-color: #f3f1f3;

      padding: 9px 9px !important;

      & > :nth-child(1) {
        color: #1d1a1e;
        font-family: Poppins;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0px;
        padding: 0px !important;
      }
    }
    // fourth Negative
    & > :nth-child(4) {
      border: 0px !important;
      background-color: #f3f1f3;
      padding: 9px 9px !important;

      & > :nth-child(1) {
        color: #1d1a1e;
        font-family: Poppins;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0px;
      }
    }
  }
`

export const PositiveWrapper = styled.div`
  margin-top: 17px;

  display: flex;
  gap: 8px;

  // first positive
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0px !important;
    background-color: #deffdb;
    padding: 9px 9px;
    border-radius: 18px;
    & > :nth-child(1) {
      width: 22px;
      height: 22px;
      border-radius: 50px;
      padding: 4px;
      background-color: #0a760e;
      display: flex;
      align-items: Center;
    }
    & > :nth-child(2) {
      color: #1d1a1e;
      font-family: Poppins;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }
  // second wait times
  & > :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0px !important;
    background-color: #deffdb;
    padding: 9px 9px;
    border-radius: 18px;
    & > :nth-child(1) {
      width: 22px;
      height: 22px;
      border-radius: 50px;
      padding: 4px;
      background-color: #d77b27;
      display: flex;
      align-items: Center;
    }
    & > :nth-child(2) {
      color: #1d1a1e;
      font-family: Poppins;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }

  // third Neutral
  & > :nth-child(3) {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0px !important;
    background-color: #f3f1f3;

    padding: 9px 9px;
    border-radius: 18px;
    & > :nth-child(1) {
      color: #1d1a1e;
      font-family: Poppins;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }

  // fourth Quality

  & > :nth-child(4) {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 0px !important;
    background-color: #f3f1f3;

    padding: 9px 9px;
    border-radius: 18px;
    & > :nth-child(1) {
      color: #1d1a1e;
      font-family: Poppins;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }
`

export const BorderWrapper = styled.div`
  border-bottom: 0.5px solid #686868;
  margin-top: 24px;
`
export const MostRelevantWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;

  & > :nth-child(1) {
    width: 179px;
    height: 24px;

    gap: 8px;
    border-radius: 9999px;
    color: #6e3a82;
    border: 1px solid #6e3a82;
    padding: 16px 16px;
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: 0px;
  }
`
export const StarGorupWrapper = styled.div`
  margin-top: 24px;

  // first group parent

  & > :nth-child(1) {
    display: flex;
    gap: 24px;
    // fist group first parent
    & > :nth-child(1) {
      flex: 1;
      padding: 16px 12px;

      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;

      & > :nth-child(1) {
        display: flex;
        gap: 8px;
      }
      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0%;
        margin-top: 16px;
      }
      & > :nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;

        & > :nth-child(1) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0%;
          display: flex;
          gap: 10px;

          & > :nth-child(1) {
            font-weight: 700;
            font-family: Poppins;
            font-weight: 700;
            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0%;
          }
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
          text-align: right;
          padding-left: 8px;
        }
      }
    }
    // first group second parent
    & > :nth-child(2) {
      flex: 1;
      padding: 16px 12px;
      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;
      & > :nth-child(1) {
        display: flex;
        gap: 8px;
      }
      & > :nth-child(2) {
        color: #00080b;

        margin-top: 8px;
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0%;
        margin-top: 16px;
      }
      & > :nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        & > :nth-child(1) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0%;

          & > :nth-child(1) {
            font-weight: 700;
            font-family: Poppins;

            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0%;
          }
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
          text-align: right;
        }
      }
    }
  }

  // second group parent

  & > :nth-child(2) {
    display: flex;
    gap: 24px;
    margin-top: 24px;

    // second group first parent

    & > :nth-child(1) {
      flex: 1;
      padding: 16px 12px;
      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;

      padding: 16px 12px;
      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;

      & > :nth-child(1) {
        display: flex;
        gap: 8px;
      }
      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0%;
        margin-top: 16px;
      }
      & > :nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;

        & > :nth-child(1) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0%;
          display: flex;
          gap: 10px;

          & > :nth-child(1) {
            font-weight: 700;
            font-family: Poppins;

            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0%;
          }
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
          text-align: right;
        }
      }
    }
    // second group second parent
    & > :nth-child(2) {
      flex: 1;
      padding: 16px 12px;
      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;
      & > :nth-child(1) {
        display: flex;
        gap: 8px;
      }
      & > :nth-child(2) {
        color: #00080b;

        margin-top: 8px;
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0%;
        margin-top: 16px;
      }
      & > :nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;

        & > :nth-child(1) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0%;
          display: flex;
          gap: 8px;

          & > :nth-child(1) {
            font-weight: 700;
            font-family: Poppins;

            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0%;
          }
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
          text-align: right;
        }
      }
    }
  }
  // third group parent
  & > :nth-child(3) {
    display: flex;
    gap: 24px;
    margin-top: 24px;

    // third group first parent

    & > :nth-child(1) {
      flex: 1;
      padding: 16px 12px;
      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;
      flex: 1;
      padding: 16px 12px;
      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;

      & > :nth-child(1) {
        display: flex;
        gap: 8px;
      }
      & > :nth-child(2) {
        color: #00080b;

        margin-top: 8px;
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0%;
        margin-top: 16px;

        margin-top: 8px;
      }
      & > :nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;

        & > :nth-child(1) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0%;

          & > :nth-child(1) {
            font-weight: 700;
            font-family: Poppins;

            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0%;
          }
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
          text-align: right;
        }
      }
    }
    // thrird group second parent
    & > :nth-child(2) {
      flex: 1;
      padding: 16px 12px;
      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;
      flex: 1;
      padding: 16px 12px;
      background: #0069860d;
      border: 1px solid #0069860d;
      border-radius: 8px;

      & > :nth-child(1) {
        display: flex;
        gap: 8px;
      }
      & > :nth-child(2) {
        color: #00080b;

        margin-top: 8px;
        font-family: Poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0%;
        margin-top: 16px;

        margin-top: 8px;
      }
      & > :nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;

        & > :nth-child(1) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 0%;

          & > :nth-child(1) {
            font-weight: 700;
            font-family: Poppins;

            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0%;
          }
        }
        & > :nth-child(2) {
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 27px;
          letter-spacing: 0px;
          text-align: right;
        }
      }
    }
  }
`

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 24px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2%;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-offset: 0%;
  text-decoration-thickness: 0%;
`
