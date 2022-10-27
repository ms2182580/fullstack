import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const OptionsWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-bottom: ${(x) => (x.landingHere === "true" ? "17.5rem" : "2.5rem")};
  margin-left: 0.75rem;

  & > *:not(:nth-last-child(1)) {
    margin-right: clamp(1px, 3.625rem, 15px);
  }
`

