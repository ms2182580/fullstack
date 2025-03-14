import styled from "styled-components"

type Props = {
  endProgressBar: boolean
}

export const Layout_Signup_ProgressWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;

  margin-top: 56px;

  progress {
    width: 100%;
    height: 10px;
    border-radius: 0px;
    border: none;

    background: linear-gradient(90deg, #f3f1f3 88%, transparent 95%);
  }

  progress::-moz-progress-bar {
    background-color: #ae79c3;
  }

  progress::-webkit-progress-value {
    background-color: #ae79c3;
  }
  progress::-webkit-progress-bar {
    background-color: #f3f1f3;
  }

  & > :nth-child(2) {
    display: grid;
    grid-auto-flow: column;

    justify-items: center;

    li,
    p {
      font-weight: 600;
    }

    p {
      text-transform: lowercase;
      white-space: nowrap;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
`
