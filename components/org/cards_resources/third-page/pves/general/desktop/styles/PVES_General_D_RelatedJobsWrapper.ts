import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const PVES_General_D_RelatedJobsWrapper = styled.article`
  border-radius: 8px;

  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);

  header {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    margin-bottom: 24px;
  }

  & > :nth-child(2) {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;

    row-gap: calc(8px * 8);

    padding-inline: 24px;
    padding-bottom: 24px;
  }
`
