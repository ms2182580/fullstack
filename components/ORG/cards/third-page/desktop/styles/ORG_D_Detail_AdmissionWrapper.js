import styled from "styled-components";
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors";
import image2 from "@/assets/images/ORG/attorney-advocates/ORG_AA17.jpg";

export const ORG_D_Detail_AdmissionWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  header {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  //HEADER
  & > :nth-child(1) {
  }

  .BorderSection {
    border-bottom: 1px solid hsl(0, 0%, 88.6%);
  }
  section {
    display: flex;
    flex-direction: column;
    padding-bottom: 38px;
    padding-top: 24px;
    // border-bottom: 1px solid hsl(0, 0%, 88.6%);
    margin-left: 24px;
    margin-right: 24px;
    padding-left: 32px;

    & > :nth-child(1) {
      // height:50px;
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

  .Button {
    padding-top: 24px;
  }
`;
