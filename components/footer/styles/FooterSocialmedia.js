import styled from "styled-components"

export const FooterSocialmediaWrapper = styled.div`
  grid-area: socialMedia;
  margin-left: 10%;
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: repeat(1, 279px);

  & > div:nth-child(1) {
    & > *:not(:last-child) {
      margin-right: 29px;
    }

    & > * {
      cursor: pointer;
      margin: 6px;
      transition: all 0.1s;
    }
    & > *:hover {
      transform: scale(1.199);
    }
  }
`
