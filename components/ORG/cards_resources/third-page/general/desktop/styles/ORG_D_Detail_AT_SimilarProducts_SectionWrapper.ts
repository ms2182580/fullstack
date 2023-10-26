import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_AT_SimilarProducts_SectionWrapper = styled.div`
  display: grid;

  & > :nth-child(2) {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 16px;
  }

  & > :nth-child(3) {
    font-weight: 500;
    color: ${NEUTRALS.DARK_GREY};
    letter-spacing: 0.16px;
    text-transform: capitalize;
    line-height: normal;

    margin-bottom: 32px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  & > :last-child {
    text-align: center;
    text-decoration: none;
    padding: 12px 33px;
    border: 2px solid ${PRIMARY.PRIMARY_CTA};
    border-radius: 8px;
    color: ${PRIMARY.PRIMARY_CTA};

    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 177px;
    white-space: nowrap;
    margin: auto;

    &:hover,
    &:focus {
      background-color: ${PRIMARY.PRIMARY_CTA};
      color: ${NEUTRALS.OFF_WHITE};
    }
  }
`
