import { NEUTRALS } from "@/assets/Colors"
import { CreatePlanVisibility_Types } from "@/context/dashboard/care_plan/ctx-create-plan-visibility"
import styled, { css } from "styled-components"

type Props = {
  isCreatePlanVisibible: CreatePlanVisibility_Types["isCreatePlanVisibible"]
}

export const INDEX_D_CarePlanWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: clamp(290px, 26.506vw - 18.32px, 400px) auto;

  grid-template-areas:
    "editorHeader editorHeader"
    "steper tabs";

  row-gap: calc(8px * 3);
  column-gap: clamp(2px, 5.301vw - 53px, 24px);

  background-color: ${NEUTRALS.OFF_WHITE_2};

  & > :nth-child(1) {
    grid-area: editorHeader;
    position: sticky;
    inset: 0;

    z-index: 99;
  }

  & > :nth-child(2) {
    grid-area: tabs;
    min-height: 100dvh;

    overflow-x: hidden;
  }

  & > :nth-child(3) {
    grid-area: steper;
    /* 
    This will allow to make the editor sticky in the same spot
    If the editor should be sticky, consider to pass a prop using the styled-components approach to know how much height have the header here. And with that, use it in the "top" property
    */
    /* position: sticky;
    top: 163px; */
  }

  ${({ isCreatePlanVisibible }) =>
    !isCreatePlanVisibible &&
    css`
      grid-template-columns: auto;

      grid-template-areas:
        "editorHeader"
        "tabs";

      & > :nth-child(3) {
        display: none;
      }
    `}
`
