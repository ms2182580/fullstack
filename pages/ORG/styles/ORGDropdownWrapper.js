import styled from "styled-components"

const ORGDropdownWrapper = styled.div`
  /* border: 1px red solid; */
  cursor: pointer;

  display: flex;
  align-items: center;

  & > * {
    display: flex;
    align-items: center;
  }

  & > div {
    margin-right: 1.374rem;
  }
  & > span > p {
    margin-right: 1.25rem;
  }
`

export default ORGDropdownWrapper
