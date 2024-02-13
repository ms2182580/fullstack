import styled from "styled-components"

export const Signup_N_FormWrapper = styled.div`
  display: flex;

  & > :nth-child(2) {
    width: 100%;
    position: relative;
    & > :last-child {
      position: absolute;
      bottom: 0px;
      left: 0px;
      display: flex;
      width: 1174px;
      padding-top: 24px;
      padding-bottom: 24px;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 24px;
      border-top: 1px solid #d3ced5;
    }
    /* & > :nth-child() */
  }
`
