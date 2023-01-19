import styled from "styled-components"

export const STFilterSortbyMobileWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  margin-bottom: ${x => x.mustShowFiltersMobile ? "32px" : "24px"};

  & > :nth-child(2) {
    margin-right: 29px;
  }
`
