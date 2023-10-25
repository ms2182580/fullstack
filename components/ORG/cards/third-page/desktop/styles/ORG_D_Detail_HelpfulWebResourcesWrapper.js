import styled from "styled-components";
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors";

export const ORG_D_Detail_HelpfulWebResourcesWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  .AdvocacyGroupsContainer {
    margin-left: 96.72px;
    margin-right: 43.28px;
    padding-bottom: 80px;

    & > :nth-child(1) {
    }
  }

  .HelpfulWebGroupsItems {
    display: flex;
    flex-direction: column;
    gap: 98px;
  }

  .Button {
    display: flex;
    width: 191px;
    height: 48px;
    padding: 8px 40px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 2px solid var(--Dark-Gray, #6c6c6c);
    background: var(--Light-Gray, #d3d6d7);
    //background-color:black;
   
    color: #6C6C6C;

font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 150% */
letter-spacing: 0.24px;

    & > :nth-child(1) {
     

    }

  }

  .ViewAllLink {
    display: flex;
   margin-left:auto;
    //background-color:black;
    //padding-left:120px;
    align-items: flex-start;
  }

.Link{
  overflow: hidden;
color: var(--Hyperlink---Normal, #36C);
text-overflow: ellipsis;
white-space: nowrap;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 32px; /* 200% */
letter-spacing: 0.16px;
text-decoration-line: underline;

}

  .WebDescription {
    display: flex;
    flex-direction: column;
    width: 50%;
    color: var(--Black, #00080B);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 32px;
letter-spacing: 0.16px;
  }

  .HelpfulWebCard {
    display: flex;
    flex-direction: row;
    gap: 80px;

    // display: inline-flex;
    align-items: center;
    // justify-content: center;
    // align-content: flex-start;
  }

  .ImageContainer {
   // display: flex;
    
   
  }

  .Imagen {
    
  }

  .CardsTitle {
    padding-bottom: 32px;
  }

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3),
  & > :last-child {
    padding-left: 32px;
    padding-right: 55px;
  }

  & > :nth-child(1) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    padding: 24px;
    margin-bottom: 24px;

    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  }

  & > :nth-child(2) {
    display: flex;
    position: relative;
    margin-bottom: 80px;
    margin-top: 80px;
    gap: 25%;

    & > :nth-child(1) {
      position: absolute;
      left: 43px;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    & > :nth-child(2) {
      width: 100%;
      padding: 10px 10px 10px 60px;

      background: ${NEUTRALS.OFF_WHITE};
      border: 1px solid ${NEUTRALS.BLACK};
      border-radius: 16px;
      border: 0.5px solid var(--Black, #00080b);

      &[type="text"]:focus {
        border: 1px solid transparent;
      }
    }
  }
  & > :nth-child(3) {
    // margin-bottom: 80px;
  }
  & > :nth-last-child(1) {
    // margin-bottom: 80px;
  }
`;
