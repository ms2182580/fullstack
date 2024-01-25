import { blurEffect } from "@/components/ui/blur/blur"
import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_SchoolAcademicsWrapper = styled.section`
  background-color: ${NEUTRALS.OFF_WHITE};

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

  & > :nth-child(2) {
    & > :nth-child(1) {
      margin-bottom: 16px;
    }

    & > :nth-child(2) {
      margin-left: 8px;

      position: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: -49px;
        left: 0;
        right: 0;

        height: 2px;

        background: linear-gradient(
          90deg,
          hsla(195, 4.8%, 83.5%, 0.9) 1%,
          ${NEUTRALS.LIGHT_GREY} 50%,
          hsla(195, 4.8%, 83.5%, 0.9) 99%
        );

        border-radius: 50%;
      }
    }
  }

  section {
    display: grid;

    padding-bottom: 38px;
    padding-top: 24px;

    margin-left: 24px;

    width: clamp(500px, 80vw, 1200px);
  }
`
