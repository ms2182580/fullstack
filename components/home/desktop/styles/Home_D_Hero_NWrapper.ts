import styled from "styled-components"

export const Home_D_Hero_NWrapper = styled.section`
  padding: 0px 56px;
  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //div top
    & > :nth-child(1) {
      & > :nth-child(1) {
        margin: 16px 0px;
      }
      //buttons
      & > :nth-child(3) {
        display: flex;
        gap: 20px;
        margin-top: 72px;

        & > :nth-child(2) {
          cursor: pointer;
        }
      }
    }
    & > :nth-child(2) {
      margin-top: -80px;
    }
  }
`
