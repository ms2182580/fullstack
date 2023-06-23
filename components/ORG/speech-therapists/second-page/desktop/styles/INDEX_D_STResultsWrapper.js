import styled from "styled-components"

export const INDEX_D_STResultsWrapper = styled.div`
  position: relative;
  padding-left: 40px;

  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};

  .InFront {
    width: 100%;
    margin-left: -40px;
    height: 100%;
    z-index: 4;
    position: absolute;
    background: rgba(44, 42, 42, 0.61);
  }
`
