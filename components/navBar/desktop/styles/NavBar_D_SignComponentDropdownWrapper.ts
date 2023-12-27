import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

type Props = {
  isORG?: boolean
}

export const NavBar_D_SignComponentDropdownWrapper = styled.div<Props>`
  position: absolute;
  z-index: 4;
  top: ${({ isORG }) => (isORG ? "100%" : "calc(100% - 45px)")};

  background-color: ${NEUTRALS.OFF_WHITE};
  padding: 24px;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 30px;

  & > * {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: default;

    font-weight: 500;

    &:hover,
    &:focus-visible {
      opacity: 0.8;
    }
  }

  & > :nth-child(1) {
    gap: 24px;
  }

  & > *:not(:first-child) {
    gap: 8px;

    & > * {
      color: #6c6c6c;
      font-weight: 500;
    }
  }

  .separator {
    border: 1px solid ${NEUTRALS.DARK_GREY};
    width: 100%;
  }
`
