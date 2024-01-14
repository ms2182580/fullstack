import styled from "styled-components"
import { PRIMARY } from "../../../../../../assets/Colors"

type Props = {
  alreadyVoteDown: boolean
  alreadyVoteUp: boolean
}
export const ORG_M_Detail_FAQS_VoteQuestionsAnswersWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr 9fr;
  gap: 5px;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    & > span:nth-child(1),
    & > span:nth-child(3) {
      cursor: pointer;
      &:hover {
        filter: brightness(150%);
      }
    }

    & > span:nth-child(1) {
      filter: ${({ alreadyVoteUp }) =>
        alreadyVoteUp ? `brightness(150%)` : ``};
    }

    & > :nth-child(3) {
      filter: ${({ alreadyVoteDown }) =>
        alreadyVoteDown ? `brightness(150%)` : ``};
    }

    & > :nth-child(2) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      & > :nth-child(2) {
        margin-top: -15px;
      }
      & > p {
        font-size: 12px;
        font-weight: 600;
      }
      width: 100%;
    }
  }

  & > :nth-child(2) {
    // Q
    & > :nth-child(1) {
      & > p {
        font-size: 12px;
        font-weight: 600;
      }
    }
    // A
    & > :nth-child(2) {
      & > :nth-child(1) {
        font-size: 12px;
        font-weight: 600;
      }
      & > :nth-child(2) {
        & > :nth-child(1) {
          font-size: 12px;
        }
        & > :nth-child(2) {
          & > :nth-child(1) {
            font-size: 12px;
          }
        }
      }
    }
    & > * {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 16px;
    }

    /* & > :nth-child(1) {
      margin-bottom: 24px;
    } */

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

      /* & > :nth-child(2) > :nth-child(2) {
        margin-top: 15px;

        display: flex;
        & > :nth-child(1) > span {
          font-weight: 400;
        }
      } */

      .shouldIndent {
        margin-left: 28px;
      }
      .shouldIndent p {
        font-size: 12px;
      }
    }
  }
`
