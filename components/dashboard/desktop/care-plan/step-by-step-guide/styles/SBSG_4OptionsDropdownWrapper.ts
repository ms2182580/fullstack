import styled from "styled-components"

type Props = {
  shouldShow: boolean
}

export const SBSG_4OptionsDropdownWrapper = styled.div<Props>`
  position: relative;

  & > :nth-child(2) {
    position: absolute;

    display: ${({ shouldShow }) => (shouldShow ? "block" : "none")};
  }
`
