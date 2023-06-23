import styled from "styled-components"

export const ST_D_Results_FilterSortbyHeaderDesktopWrapper = styled.div`
  margin-right: 40px;

  margin-bottom: ${(x) => x.ORGShowFullMapFilter ? `112px` : `48px`};

  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
`
