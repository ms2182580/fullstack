import styled, { css } from "styled-components"

const maxDesktopScreenSize = `1440px`

const homeStyles = () => css`
  & > *:not(:nth-child(2)) {
    margin-inline: auto;
    max-width: ${maxDesktopScreenSize};
  }
`

const defaultStyles = () => css`
  max-width: ${maxDesktopScreenSize};
  margin-inline: auto;
`

type Props = {
  isMainInHome?: boolean
}

export const MainWrapper = styled.main<Props>`
  ${({ isMainInHome }) =>
    isMainInHome
      ? css`
          ${homeStyles()}
        `
      : css`
          ${defaultStyles()}
        `};
`
