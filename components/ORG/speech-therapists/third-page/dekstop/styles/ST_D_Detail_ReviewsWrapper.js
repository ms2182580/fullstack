import styled from "styled-components"

export const ST_D_Detail_ReviewsWrapper = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 32px 32px 40px 32px;
  display: grid;

  /* & > :nth-child(2) {
    margin-top: 32px;
    border: 1px solid hsl(0, 0%, 88.6%);
  } */

  & > :nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 37px;
  }

  & > :nth-child(3) {
    margin-left: auto;
    margin-top: 24px;
    margin-right: 16px;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      filter: brightness(120%);
    }
  }

  /* @media (${device.laptop}) {
    padding: 16px;
    border-radius: 0px;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
    }

    & > :last-child {
      margin-top: 16px;
    }
  } */
`
