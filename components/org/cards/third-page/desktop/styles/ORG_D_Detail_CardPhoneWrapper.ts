import styled from "styled-components"

export const ORG_D_Detail_CardPhoneWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :nth-child(1) {
    margin-right: 14px;
  }
  & > :nth-child(2) {
    margin-right: 4px;

    font-weight: 700;
  }
  & > :nth-child(3) {
    color: #3f6ece;
    text-decoration-line: underline;
    cursor: pointer;
  }
`
