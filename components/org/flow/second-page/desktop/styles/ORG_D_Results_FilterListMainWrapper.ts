import styled, { css, FlattenSimpleInterpolation } from "styled-components"

export type ORG_D_Results_FilterListMainWrapperProps = {
  someStylesComeFromOutside?: () => FlattenSimpleInterpolation
}

export const ORG_D_Results_FilterListMainWrapper = styled.ul<ORG_D_Results_FilterListMainWrapperProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-right: 45px;

  list-style: none;

  ${({ someStylesComeFromOutside }) =>
    someStylesComeFromOutside &&
    css`
      ${someStylesComeFromOutside()}
    `}
`
