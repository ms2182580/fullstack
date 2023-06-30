import styled from "styled-components"

export const ST_D_Detail_CardWebsiteWrapper = styled.div`
  display: flex;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    & > :nth-child(1) {
      margin-right: 14px;
    }
  }

  & > :nth-child(2) {
    margin-left: 4px;

    overflow: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `hidden` : ``)};
    text-overflow: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `ellipsis` : ``)};
    white-space: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `nowrap` : ``)};

    color: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `#3f6ece` : ``)};
    text-decoration-line: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `underline` : ``)};

    cursor: pointer;
  }
`
