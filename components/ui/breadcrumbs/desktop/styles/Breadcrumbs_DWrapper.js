import styled from "styled-components"
import { SEMANTICS } from "../../../../../assets/Colors"

export const Breadcrumbs_DWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a,
  span {
    text-transform: capitalize;
    color: ${SEMANTICS.HYPERLINK_NORMAL};

    text-decoration: none;

    &:visited {
      color: ${SEMANTICS.HYPERLINK_VISITED};

      &::after {
        background-color: ${SEMANTICS.HYPERLINK_VISITED};
      }
    }
  }

  span {
    cursor: default;
  }

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  & > *:not(svg) {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 0;
      left: 0;
      height: 2px;
      left: 50%;
      bottom: 0;
      background-color: ${SEMANTICS.HYPERLINK_NORMAL};
      transition: all linear 0.2s;
    }

    &:hover::after,
    &:focus::after {
      width: 100%;
      left: 0;
    }
  }

  & > :last-child {
    font-weight: 600;

    &::after {
      all: unset;
    }
  }
`
