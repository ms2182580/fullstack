import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const PaginatorWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1rem);
  gap: 8px;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: -3rem;
  left: 87%;
  transform: translateX(-50%);


  .dot {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${NEUTRALS.LIGHT_GREY};
    transition: all 1s;
  }

  .dot:hover {
    cursor: pointer;
    background-color: ${NEUTRALS.DARK_GREY};
  }

  .dot.active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #A461BB;
  }
`
