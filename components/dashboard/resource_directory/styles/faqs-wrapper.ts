import styled from 'styled-components'

export const FaqsWrapper = styled.div`
  padding: 72px 55px;
  box-shadow: 0px 2px 6px 0px #00000033;

  & > :nth-child(1) {
    padding: 0px 13px !important;
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid black !important;
    border-radius: 8px;

    & > :nth-child(2) {
      width: 100%;
      margin-bottom: 20px;
      border: 0px;
      outline: none;
    }
  }
`

export const AskQuestionWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > :nth-child(1) {
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 1%;
    color: #4b348b;
  }
  & > :nth-child(2) {
    width: 178;
    height: 48;
    top: 134px;
    left: 661px;
    gap: 8px;
    border-color: #4b348b;
    border-radius: 8px;
    border-width: 2px;
    padding-top: 8px;
    padding-right: 48px;
    padding-bottom: 8px;
    padding-left: 48px;
    color: #4b348b;
    background-color: transparent;
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1.5%;
    cursor: pointer;
  }
`
export const QueOneWrapper = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 53px;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;

    justify-content: start;

    align-items: center;

    & > :nth-child(2) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
  }
  // question 1 question answer

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      display: flex;
      gap: 10px;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }

      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }
    & > :nth-child(2) {
      display: flex;
      gap: 10px;
      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }

    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 400;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0%;
      color: #7a7c7c;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 0%;
        color: #7a7c7c;

        & > :nth-child(1) {
          color: #7a7c7c;

          font-family: Poppins;
          font-weight: 400;
          font-size: 17px;
          line-height: 32px;
          letter-spacing: 0%;
        }
      }
    }
  }
`
export const SecOneWrapper = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 53px;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    & > :nth-child(2) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
  }
  // question 1 question answer

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      display: flex;
      gap: 10px;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }

      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }
    & > :nth-child(2) {
      display: flex;
      gap: 10px;
      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }

    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 400;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0%;
      color: #7a7c7c;
    }
  }
`
export const ThirdQueWrapper = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 53px;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;

    align-items: center;

    & > :nth-child(2) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
  }
  // question 1 question answer

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      display: flex;
      gap: 10px;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }

      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }
    & > :nth-child(2) {
      display: flex;
      gap: 10px;
      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }

    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 400;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0%;
      color: #7a7c7c;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 0%;
        color: #7a7c7c;

        & > :nth-child(1) {
          color: #7a7c7c;

          font-family: Poppins;
          font-weight: 400;
          font-size: 17px;
          line-height: 32px;
          letter-spacing: 0%;
        }
      }
    }
  }
`
export const FourthQueWrapper = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 53px;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;

    align-items: center;

    & > :nth-child(2) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
  }
  // question 1 question answer

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      display: flex;
      gap: 10px;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }

      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }
    & > :nth-child(2) {
      display: flex;
      gap: 10px;
      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }

    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 400;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0%;
      color: #7a7c7c;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 0%;
        color: #7a7c7c;

        & > :nth-child(1) {
          color: #7a7c7c;

          font-family: Poppins;
          font-weight: 400;
          font-size: 17px;
          line-height: 32px;
          letter-spacing: 0%;
        }
      }
    }
  }
`
export const FifthQueWrapper = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 53px;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;

    align-items: center;

    justify-content: center;

    & > :nth-child(2) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1%;
      text-align: center;
      color: black;
    }
  }
  // question 1 question answer

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      display: flex;
      gap: 10px;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }

      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }
    & > :nth-child(2) {
      display: flex;
      gap: 10px;
      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
      & > :nth-child(2) {
        font-family: Poppins;
        font-weight: 400;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }

    & > :nth-child(3) {
      font-family: Poppins;
      font-weight: 400;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0%;
      color: #7a7c7c;

      & > :nth-child(1) {
        font-family: Poppins;
        font-weight: 600;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 0%;
        color: #7a7c7c;

        & > :nth-child(1) {
          color: #7a7c7c;

          font-family: Poppins;
          font-weight: 400;
          font-size: 17px;
          line-height: 32px;
          letter-spacing: 0%;
        }
      }
    }
  }
`
export const LessWrapper = styled.div`
  display: flex;
  margin-top: 140px;
  justify-content: end;

  & > :nth-child(1) {
    color: #3366cc;
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0%;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-offset: Auto;
    text-decoration-thickness: Auto;
  }
`
