import styled from "styled-components"

const HeroImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 0;

  & > span {
    margin-left: auto;
    margin-right: 120px;
    cursor: pointer;

    a {
      all: unset;
    }
  }
`

export default HeroImageWrapper
