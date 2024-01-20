import styled from "styled-components"

export const Home_D_Chat_NWrapper = styled.div`
  padding: 0px 0px 48px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;

  //div
  & > :nth-child(1) {
    //span
    & > :nth-child(1) {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 20px;

      //chat
      & > :nth-child(2) {
        color: #6e3a82;
        font-feature-settings: "clig" off, "liga" off;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px; /* 110% */
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
    /* h3 */
    & > :nth-child(2) {
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 54px; /* 168.75% */
    }
    /* P */
    & > :nth-child(3) {
      margin-top: 8px;
      margin-bottom: 64px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px; /* 168.75% */
    }
  }
  //image
  & > :nth-child(2) {
    margin-right: -170px;
  }
`
