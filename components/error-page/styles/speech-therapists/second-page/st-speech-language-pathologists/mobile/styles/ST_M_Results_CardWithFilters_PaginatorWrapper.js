import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const ST_M_Results_CardWithFilters_PaginatorWrapper = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: absolute;
  bottom: -3rem;
  left: 87%;
  transform: translateX(-50%);

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${NEUTRALS.LIGHT_GREY};
    transition: all 1s;
  }

  .dot:hover {
    cursor: pointer;
    background-color: ${NEUTRALS.DARK_GREY};
  }

  .dot.active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #a461bb;
  }
`
