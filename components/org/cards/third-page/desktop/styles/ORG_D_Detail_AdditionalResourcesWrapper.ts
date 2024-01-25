import { blurEffect } from "@/components/ui/blur/blur"
import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../../../../assets/Colors"

export const ORG_D_Detail_AdditionalResourcesWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  position: relative;
  ${blurEffect({})}

  .AdvocacyGroupsContainer {
    margin-left: 24px;
    padding-bottom: 80px;

    & > :nth-child(1) {
    }
  }

  .AdvocacyGroupsItems {
    display: flex;
    flex-direction: row;
    gap: 53px;
  }

  .ViewAllLink {
    display: flex;
    align-items: flex-end;

    & > * {
      color: ${SEMANTICS.HYPERLINK_NORMAL};
      font-weight: 600;
      text-decoration: underline;
    }
  }

  .AdvocacyCard {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > :nth-child(2) {
      font-weight: 500;
      font-size: 16px;
    }
  }

  .CardsTitle {
    padding-bottom: 32px;
  }

  .ImageContainer {
    display: flex;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-right: auto;
    flex-wrap: wrap;
    position: relative;
    margin: 0 auto;

    height: 100%;

    position: relative;

    & > :nth-child(2) {
      position: absolute;
      top: 16px;
      right: 16px;

      &:hover,
      &:focus-visible {
        & > * {
          fill: crimson;
          filter: sepia(10%);
        }
      }
    }
  }

  .Imagen {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    margin-top: -2px;
    //position: absolute !important;
    //object-fit: cover;
    //grid-area:overlay;
  }

  .IconoImagen {
    //position: absolute !important;
    bottom: 0;
    left: 0;
    position: relative;
    //grid-area:overlay;
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
`
