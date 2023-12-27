import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  showDropdownProfile?: boolean
  showDropdownLanguage?: boolean
}

export const NavBar_D_SignComponentWrapper = styled.div<Props>`
  border-radius: 8px;
  border: 2px solid #151a26;
  padding: 0px 16px;

  position: relative;
  z-index: 0;
  display: flex;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    cursor: default;
    position: relative;

    &:hover,
    &:focus-visible {
      opacity: 0.8;
    }
  }

  & > :nth-child(1) {
    opacity: ${({ showDropdownLanguage }) => showDropdownLanguage && "0.8"};
    & > * {
      & > * {
        fill: ${({ showDropdownLanguage }) => showDropdownLanguage && `${PRIMARY.PRIMARY_CTA}`};
      }
    }
  }

  & > :nth-child(2) {
    opacity: ${({ showDropdownProfile }) => showDropdownProfile && "0.8"};

    & > * {
      & > * {
        fill: ${({ showDropdownProfile }) => showDropdownProfile && `${PRIMARY.PRIMARY_CTA}`};
      }
    }
  }
`
