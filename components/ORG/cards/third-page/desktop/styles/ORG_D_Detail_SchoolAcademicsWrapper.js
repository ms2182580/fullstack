import styled from "styled-components"
import { PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_SchoolAcademicsWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  /* background-color: yellow;
  filter: sepia(80%);
  border: 20px solid black; */

  header {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  section {
    display: flex;
    flex-direction: column;
    padding-bottom: 38px;
    padding-top: 24px;
    margin-left: 24px;
    margin-right: 24px;

    display: grid;
    grid-template-columns: repeat(10, 1fr);

    & > * {
      grid-column: span 7;
    }

    & > :nth-child(1) {
      margin-bottom: 4px;
    }
  }

  .sectionRow {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }

  .BorderSection {
    border-bottom: 1px solid hsl(0, 0%, 88.6%);

    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 70%;
    }
  }

  li {
    height: 32px;
    margin-top: 4px;

    & > :nth-child(1) {
      font-weight: 600;
    }
  }

  .ulNoPoint {
    list-style-type: none;
  }

  Table {
    font-size: 16px;
    border-spacing: 0px;
    width: 50%;
    margin-top: 19px;
    margin-left: 16px;
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

  .Button {
    padding-top: 24px;
  }

  .TestScoresRow {
    gap: 200px;
    display: flex;
    flex-direction: row;
    & > :nth-child(1) {
      width: 200px;
    }
  }

  .ShadowTable {
    box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
  }
`
