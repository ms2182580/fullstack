import styled from 'styled-components'

export const SimilarWrappers = styled.div`
  box-shadow: 0px 2px 6px 0px #00000033;
  padding: 72px 59px;
  & > :nth-child(1) {
    border: 0.5px solid black !important;
    border-radius: 8px;
    padding: 1.17px 16px !important;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    & > :nth-child(1) {
      // position: absolute;
      top: 20px;
    }

    & > input {
      border: 0px !important;
      padding-left: 20px;

      width: 100%;
      margin-bottom: 20px;
      outline: none;
    }
  }
`
export const AdvocacyWrapper = styled.div`
  margin-top: 45px;

  & > :nth-child(1) {
    display: flex;
    align-items: Center;
    justify-content: space-between;

    & > :nth-child(1) {
      & > :nth-child(1) {
        color: #006987;
        font-family: Poppins;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }

    & > :nth-child(2) {
      padding: 12px 35.5px;
      border: 2px solid #006987;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      font-faimly: poppins;
      letter-spacing: 1.5%;
      color: #006987;
      cursor: pointer;
    }
  }

  & > :nth-child(2) {
    margin-top: 32px;

    display: flex;
    gap: 32px;

    // card 1 parent
    & > :nth-child(1) {
      flex: 1;
      box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      // first boxes parent
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        border-radius: 8px;

        & > :nth-child(1) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: black;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: black;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // first boxses parent end

      // second boxses parent

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        border-radius: 8px;

        & > :nth-child(1) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: white;
          height: 50px;
          border-radius-right: 8px;
        }
        // second boxses parent end
      }
      // first card body start

      & > :nth-child(3) {
        padding: 24px;

        // title parent div
        & > :nth-child(1) {
          color: green;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 27px;
            letter-spacing: 0px;
            color: black;
          }
          & > :nth-child(2) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
            color: black;
          }
        }
        // title parent div end
        // address div start
        & > :nth-child(2) {
          margin-top: 24px;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
          }
        }
        // address div end

        // view profile child 3 start

        & > :nth-child(3) {
          color: blue;
          display: flex;
          gap: 8px;
          margin-top: 28px;

          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            color: #006987;
          }
        }
        // view profile child 3 end

        // delete child four

        & > :nth-child(4) {
          color: red;
          display: flex;
          justify-content: end;
          margin-top: 7px;
          cursor: pointer;
        }
      }
      // first card body end
    }

    //first line card two parent start

    & > :nth-child(2) {
      flex: 1;
      box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      & > :nth-child(1) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: black;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: black;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // first boxses parent end

      // first line second card second boxses start

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: white;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // first line second card second boxses end
      // first line second card body start
      & > :nth-child(3) {
        padding: 24px;

        // title parent div
        & > :nth-child(1) {
          color: green;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 27px;
            letter-spacing: 0px;
            color: black;
          }
          & > :nth-child(2) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
            color: black;
          }
        }
        // title parent div end
        // address div start
        & > :nth-child(2) {
          margin-top: 24px;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
          }
        }
        // address div end

        // view profile child 3 start

        & > :nth-child(3) {
          color: blue;
          display: flex;
          gap: 8px;
          margin-top: 28px;

          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            color: #006987;
          }
        }
        // view profile child 3 end

        // delete child four

        & > :nth-child(4) {
          color: red;
          display: flex;
          justify-content: end;
          margin-top: 7px;
          cursor: pointer;
        }
      }

      // first line second card body end
    }

    // first line card two parent end

    //first line card 3 parent start

    & > :nth-child(3) {
      flex: 1;
      box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      // first boxes parent start
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: black;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: black;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // first boxses parent end
      & > :nth-child(2) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: white;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // second boxses parent end
      // first card body start

      & > :nth-child(3) {
        padding: 24px;

        // title parent div
        & > :nth-child(1) {
          color: green;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 27px;
            letter-spacing: 0px;
            color: black;
          }
          & > :nth-child(2) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
            color: black;
          }
        }
        // title parent div end
        // address div start
        & > :nth-child(2) {
          margin-top: 24px;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
          }
        }
        // address div end

        // view profile child 3 start

        & > :nth-child(3) {
          color: blue;
          display: flex;
          gap: 8px;
          margin-top: 28px;

          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            color: #006987;
          }
        }
        // view profile child 3 end

        // delete child four

        & > :nth-child(4) {
          color: red;
          display: flex;
          justify-content: end;
          margin-top: 7px;
          cursor: pointer;
        }
      }
      // first card body end
    }
    //first line card 3 parent end
  }
`
export const ShowListWrapper = styled.div`
  color: red;
  margin-top: 52px;
  margin-bottom: 68px;

  & > :nth-child(1) {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 5px;
    & > p {
      color: #006987;

      font-family: Poppins;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: right;
      text-decoration: underline;
      text-decoration-style: solid;
      text-decoration-offset: Auto;
      text-decoration-thickness: Auto;
    }
  }

  //
`

export const SecondWrapper = styled.div`
  margin-top: 45px;

  & > :nth-child(1) {
    display: flex;
    align-items: Center;
    justify-content: space-between;

    & > :nth-child(1) {
      & > :nth-child(1) {
        color: #006987;
        font-family: Poppins;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 1%;
      }
    }

    & > :nth-child(2) {
      padding: 12px 35.5px;
      border: 2px solid #006987;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      font-faimly: poppins;
      letter-spacing: 1.5%;
      color: #006987;
      cursor: pointer;
    }
  }

  & > :nth-child(2) {
    margin-top: 32px;

    display: flex;
    gap: 32px;

    // card 1 parent
    & > :nth-child(1) {
      flex: 1;
      box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      // first boxes parent
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: black;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: black;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // first boxses parent end

      // second boxses parent

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: white;
          height: 50px;
          border-radius-right: 8px;
        }
        // second boxses parent end
      }
      // first card body start

      & > :nth-child(3) {
        padding: 24px;

        // title parent div
        & > :nth-child(1) {
          color: green;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 27px;
            letter-spacing: 0px;
            color: black;
          }
          & > :nth-child(2) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
            color: black;
          }
        }
        // title parent div end
        // address div start
        & > :nth-child(2) {
          margin-top: 24px;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
          }
        }
        // address div end

        // view profile child 3 start

        & > :nth-child(3) {
          color: blue;
          display: flex;
          gap: 8px;
          margin-top: 28px;

          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            color: #006987;
          }
        }
        // view profile child 3 end

        // delete child four

        & > :nth-child(4) {
          color: red;
          display: flex;
          justify-content: end;
          margin-top: 7px;
          cursor: pointer;
        }
      }
      // first card body end
    }

    //first line card two parent start

    & > :nth-child(2) {
      flex: 1;

      box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: black;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: black;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // first boxses parent end

      // first line second card second boxses start

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: white;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // first line second card second boxses end
      // first line second card body start
      & > :nth-child(3) {
        padding: 24px;

        // title parent div
        & > :nth-child(1) {
          color: green;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 27px;
            letter-spacing: 0px;
            color: black;
          }
          & > :nth-child(2) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
            color: black;
          }
        }
        // title parent div end
        // address div start
        & > :nth-child(2) {
          margin-top: 24px;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
          }
        }
        // address div end

        // view profile child 3 start

        & > :nth-child(3) {
          color: blue;
          display: flex;
          gap: 8px;
          margin-top: 28px;

          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            color: #006987;
          }
        }
        // view profile child 3 end

        // delete child four

        & > :nth-child(4) {
          color: red;
          display: flex;
          justify-content: end;
          margin-top: 7px;
          cursor: pointer;
        }
      }

      // first line second card body end
    }

    // first line card two parent end

    //first line card 3 parent start

    & > :nth-child(3) {
      flex: 1;

      box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      // first boxes parent start
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: black;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: black;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // first boxses parent end
      & > :nth-child(2) {
        display: flex;
        align-items: center;
        border-radius: 8px;
        & > :nth-child(1) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(2) {
          flex: 1;
          background-color: white;
          height: 50px;
        }
        & > :nth-child(3) {
          flex: 1;

          background-color: black;
          height: 50px;
        }
        & > :nth-child(4) {
          flex: 1;
          background-color: white;
          height: 50px;
          border-radius-right: 8px;
        }
      }
      // second boxses parent end
      // first card body start

      & > :nth-child(3) {
        padding: 24px;

        // title parent div
        & > :nth-child(1) {
          color: green;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 27px;
            letter-spacing: 0px;
            color: black;
          }
          & > :nth-child(2) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
            color: black;
          }
        }
        // title parent div end
        // address div start
        & > :nth-child(2) {
          margin-top: 24px;
          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0px;
          }
        }
        // address div end

        // view profile child 3 start

        & > :nth-child(3) {
          color: blue;
          display: flex;
          gap: 8px;
          margin-top: 28px;

          & > :nth-child(1) {
            font-family: Poppins;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            color: #006987;
          }
        }
        // view profile child 3 end

        // delete child four

        & > :nth-child(4) {
          color: red;
          display: flex;
          justify-content: end;
          margin-top: 7px;
          cursor: pointer;
        }
      }
      // first card body end
    }
    //first line card 3 parent end
  }
`
