import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_AdmissionWrapper = styled.article`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  /* background-color: darkgoldenrod; */
  /* background-color: lightcyan; */

  /* background-color: darkmagenta;
  filter: sepia(80%); */

  /* display: flex; */
  /* flex-direction: column; */

  header {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .BorderSection {
    border-bottom: 1px solid hsl(0, 0%, 88.6%);
  }

  section {
    display: flex;
    flex-direction: column;
    padding-bottom: 38px;
    padding-top: 24px;
    margin-left: 24px;
    margin-right: 24px;
    padding-left: 32px;

    & > :nth-child(1) {
      margin-bottom: 4px;
    }

    & > :nth-child(2) {
      padding-left: 16px;
    }
  }

  .ulNoPoint {
    list-style-type: none;
  }
  li {
    height: 32px;
    margin-top: 4px;

    & > :nth-child(1) {
      font-weight: 600;
    }
  }

  Table {
    font-size: 16px;
    border-spacing: 0px;
    width: 50%;
    padding-top: 19px;
    padding-left: 16px;

    & > :last-child {
      text-align: right;
      padding: 13px;
    }
  }
  tr {
    height: 36px;
  }
  tr:nth-child(even) {
    background-color: rgba(211, 214, 215, 0.2);
  }
  th {
    font-size: 18px;
    background-color: rgba(211, 214, 215, 0.2);
    text-align: left;
    padding-left: 26px;
  }
  td {
    width: 100%;
    padding-left: 26px;
    padding-right: 13px;
  }

  & > :last-child {
    & > :nth-child(2) {
      margin-bottom: 24px;
    }

    & > :nth-child(3) {
      border-radius: 8px;
      border: 2px solid ${PRIMARY.PRIMARY_CTA};

      background-color: ${NEUTRALS.OFF_WHITE};

      width: 344px;
      padding: 8px 116px;

      font-weight: 600;
      font-size: 16px;
      color: ${PRIMARY.PRIMARY_CTA};

      display: grid;
      grid-auto-flow: column;
      white-space: nowrap;

      gap: 8px;

      &:hover,
      &:focus-visible {
        color: ${NEUTRALS.OFF_WHITE};
        background-color: ${PRIMARY.PRIMARY_CTA};
      }
    }
  }
`
