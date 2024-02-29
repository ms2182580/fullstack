import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const WhoYouAreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  & > * {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 112px;

    max-width: 369px;
    padding: 16px 32px;

    border-radius: 8px;
    border: 2px solid #d3ced5;

    cursor: pointer;

    background-color: ${NEUTRALS.OFF_WHITE};

    &:hover,
    &:focus-visible {
      background-color: hsla(282.9, 41.2%, 93.3%, 0.4);
    }

    h5 {
      color: ${NEUTRALS.DARK_GREY_2};
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      white-space: nowrap;
    }
  }
`

type PropsArticle = {
  isSelected: boolean
}

export const ArticleWrapper = styled.article<PropsArticle>`
  /* background-color: ${({ isSelected }) =>
    isSelected ? `${PRIMARY.PRIMARY_BACKGROUND}` : `${NEUTRALS.OFF_WHITE}`}; */
`
