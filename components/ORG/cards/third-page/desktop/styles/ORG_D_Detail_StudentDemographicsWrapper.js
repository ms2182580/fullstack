import styled from "styled-components";
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors";
import image2 from "@/assets/images/ORG/attorney-advocates/ORG_AA17.jpg";
import Image from "next/image.js";

export const ORG_D_Detail_StudentDemographicsWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  header {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  }

  section {
    display: flex;
    flex-direction: column;
    padding-bottom: 38px;
    padding-top: 24px;
    // border-bottom: 1px solid hsl(0, 0%, 88.6%);
    margin-left: 24px;
    margin-right: 24px;
    //padding-left:24px;

    & > :nth-child(1) {
      // height:50px;
      margin-bottom: 4px;
    }
  }

  .sectionRow {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items:center;
  }

  .BorderSection {
    border-bottom: 1px solid hsl(0, 0%, 88.6%);
  }

  Table {
    font-size: 16px;
    border-spacing: 0px;
    width: 100%;
    
    //height:100%;
    
    //margin-top: px;
    // margin-left: 16px;
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
    font-size:16;
  }

  .ElementsBackground {
    background-color: #fafafa;
//width: 100%;
    display: flex;
    border-left: 3px solid rgba(217, 217, 217, 0);
    border-radius: 8px;
    //padding: 24px;
    padding-left:24px;
    padding-bottom:24px;
    padding-top:24px;
    //width: fit-content;
    //height:fill;
    
    
  }
`;
