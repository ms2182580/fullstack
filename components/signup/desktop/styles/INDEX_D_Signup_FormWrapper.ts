import styled, { css } from "styled-components"

type Props = {
  isSignup: boolean
  isBgInFooter: boolean
}
const lastChild = () => css`
  & > :last-child {
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: flex;
    width: 1184px;
    padding-top: 24px;
    padding-bottom: 24px;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 24px;
    border-top: 1px solid #d3ced5;
    background-color: ${(props: Props) =>
      props.isBgInFooter ? "#fff2ed" : "white"};
    & > :nth-child(1) {
      margin-right: 20px;
    }
  }
`
export const INDEX_D_Signup_FormWrapper = styled.div<Props>`
  /* display: flex; */

  /* & > :nth-child(2) {
    width: 100%;
    position: relative;
    ${(props) => props.isSignup && lastChild()}
  } */
`
