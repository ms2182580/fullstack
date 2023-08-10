import styled from "styled-components"
import { PRIMARY } from "../../../../../../../assets/Colors"

export const ST_D_Detail_FAQS_VoteQuestionsAnswersWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 80px;
  align-items: center;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    & > span:nth-child(1),
    & > span:nth-child(4) {
      cursor: pointer;
      &:hover {
        filter: brightness(150%);
      }
    }

    & > span:nth-child(1) {
      filter: ${({ alreadyVoteUp }) => (alreadyVoteUp ? `brightness(150%)` : ``)};
    }

    & > :nth-child(4) {
      filter: ${({ alreadyVoteDown }) => (alreadyVoteDown ? `brightness(150%)` : ``)};
    }

    & > p {
      line-height: 17px;
    }
  }

  & > :nth-child(2) {
    & > * {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 16px;
    }

    & > :nth-child(1) {
      margin-bottom: 24px;
    }

    & > :nth-child(2) {
      & > :nth-child(1) {
        & > p > span {
          font-weight: 600;
          color: ${PRIMARY.PRIMARY_CTA};
          cursor: pointer;

          &:hover {
            filter: brightness(80%);
          }
        }
      }

      & > :nth-child(2) > :nth-child(2) {
        margin-top: 15px;

        display: flex;
        & > :nth-child(1) > span {
          font-weight: 400;
        }
      }

      .shouldIndent {
        margin-left: 40px;
      }
    }
  }
`
