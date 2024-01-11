import styled from "styled-components"

type Props = {
  clickOnHearth?: boolean
}

export const ORG_D_Results_Card_HearthWrapper = styled.div<Props>`
  & > * {
    & > * {
      fill: ${({ clickOnHearth }) =>
        clickOnHearth ? `#e8675f` : ``};
    }

    &:hover > * {
      fill: ${({ clickOnHearth }) =>
        clickOnHearth ? `` : `hsl(3.5, 74.9%, 54.1%)`};
    }
  }
`
