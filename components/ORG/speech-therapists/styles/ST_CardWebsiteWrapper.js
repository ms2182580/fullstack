import styled from "styled-components"

export const ST_CardWebsiteWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & > :nth-child(1) {
    margin-right: 14px;
    width: 20px;
    height: 20px;
  }
  & > :nth-child(2) {
    margin-right: 4px;
  }

  & > p:nth-child(3),
  & > span:nth-child(3) {
    overflow: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `hidden` : ``)};
    text-overflow: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `ellipsis` : ``)};
    white-space: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `nowrap` : ``)};
    color: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `#3f6ece` : ``)};

    text-decoration-line: ${(x) => (x.isThirdPageMobile === false && x.isMobile === false ? `underline` : ``)};
    
    cursor: pointer;
    
  }
`
