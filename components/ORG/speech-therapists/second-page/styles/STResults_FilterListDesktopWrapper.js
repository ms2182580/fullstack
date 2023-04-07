import styled from "styled-components"

export const STResults_FilterListDesktopWrapper = styled.div`
  margin-bottom: ${(x) => (x.mustShowFiltersDesktop ? `112px` : ``)};

  & > :nth-child(1) > button {
    padding: 12px 73px;
  }
`
