import { blurEffect } from "@/components/ui/blur/blur"
import styled from "styled-components"
import { PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_StudentDemographicsWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  position: relative;
  ${blurEffect({})}

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

    & > :nth-child(1) {
      margin-bottom: 4px;
    }
  }

  .sectionRow {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }

  .BorderSection {
    border-bottom: 1px solid hsl(0, 0%, 88.6%);
  }

  Table {
    font-size: 16px;
    border-spacing: 0px;
    width: 100%;
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

  .ShadowTable {
    box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
    font-size: 16;
  }

  .ElementsBackground {
    background-color: #fafafa;
    display: flex;
    border-left: 3px solid rgba(217, 217, 217, 0);
    border-radius: 8px;
    padding-left: 24px;
    padding-bottom: 24px;
    padding-top: 24px;
  }
`
