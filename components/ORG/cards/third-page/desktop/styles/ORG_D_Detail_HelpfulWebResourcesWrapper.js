import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_HelpfulWebResourcesWrapper = styled.section`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

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

    color: #6c6c6c;

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: 0.24px;
  }

  .ViewAllLink {
    display: flex;
    margin-left: auto;
    align-items: flex-start;
    padding-bottom: 30px;
    cursor: pointer;
  }

  .Link {
    overflow: hidden;
    color: var(--Hyperlink---Normal, #36c);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 200% */
    letter-spacing: 0.16px;
    text-decoration-line: underline;
    display: block;
  }

  .WebDescription {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--Black, #00080b);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.16px;
  }

  .CardsTitle {
    padding-bottom: 32px;
  }

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3),
  & > :last-child {
    padding-left: 24px;
    padding-right: 24px;
  }

  & > :nth-child(1) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    flex-direction: row;
    padding: 24px;
    margin-bottom: 24px;

    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  }

  //SearchBar style
  & > :nth-child(2) {
    display: flex;

    position: relative;
    margin-bottom: 59px;
    margin-top: 80px;
    gap: 25%;

    //Icon SearchBar
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
    margin-bottom: 100px;
  }
  & > :nth-last-child(1) {
    // margin-bottom: 80px;
  }

  .HelpfulWebElementsWrapper {
    //margin: 15px;

    // background-color: red;
    // gap:98px;
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    //  width: 100%;
    //  padding-left: 96.72px;
    //  padding-right: 43.28px;
    padding-left: 3.5rem;
    padding-right: 30.28px;
    padding-top: 55px;
    padding-bottom: 43px;
    gap: 40px;
    // position:relative;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    justify-content: center;
    //  align-items: center;
    //width:33%;
    //overflow-wrap:break-word;
    // overflow-x: auto;

    //position:relative;
  }

  .ImageColumn {
    //background-color: blue;
    height: 100%;
    position: relative;
    max-width: 420px;

    // display: inline-block;
  }

  .DescriptionColumn {
    //  background-color: green;
    width: 130%;
    // float:right;
    // padding-left:25px;
  }

  .ButtonColumn {
    // background-color: yellow;
    margin-left: auto;

    // height: 100px; // margin-left:auto;
  }

  .BottomBorderRow {
    border-bottom: 1px solid hsl(0, 0%, 88.6%);

    //border-radius: 0.2px;
  }

  .DesplegateButton {
    display: flex;
    width: 48px;
    height: 48px;
    padding: 8px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 2px solid var(--INCLUSIVE-Purple-Medium, #6e3a82);
    background: #fdfdfd;
    margin-left: auto;
    cursor: pointer;
  }
`
