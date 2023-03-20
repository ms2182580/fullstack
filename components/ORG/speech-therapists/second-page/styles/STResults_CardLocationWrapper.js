import styled from "styled-components"

export const EverySingleSpeechTherapist_LocationWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  & > :nth-child(1) {
    display: flex;
  }

  & > :nth-child(1) > :nth-child(1) {
    margin-right: 16.13px;
  }

  & > :nth-child(2) {
    margin-left: 4px;
    display: flex;
    flex-direction: column;
  }

  & > :nth-child(2) > :not(:last-child) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  }
`
