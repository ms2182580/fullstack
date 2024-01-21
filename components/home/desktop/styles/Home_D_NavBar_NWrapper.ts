import styled from "styled-components"
import {
  NEUTRALS,
  PRIMARY,
  SECONDARY_ORG_PLUS,
} from "../../../../assets/Colors"

export const Home_D_NavBar_NWrapper = styled.div`
  display: flex;
  height: 118px;
  padding: 0px 56px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

  //span
  & > :nth-child(1) {
    display: flex;
    gap: 10px;
    cursor: pointer;
    //inclusive
    & > :nth-child(1) {
      color: ${PRIMARY.PRIMARY_LOGO};
    }
  }

  //Div
  & > :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 20px;

    & > a {
      text-decoration: none;
      font-size: 16px;
      color: #312138;
    }
  }
`
