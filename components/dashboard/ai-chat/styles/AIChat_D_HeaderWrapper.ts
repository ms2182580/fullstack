import styled from "styled-components"

export const AIChat_D_HeaderWrapper = styled.div`
  > :nth-child(1) {
    display: flex;
    width: 1200px;
    height: 72px;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    flex-shrink: 0;
    & > :nth-child(1) {
      width: 44px;
      height: 44px;
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #474747;
    }
  }
`
