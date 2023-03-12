import styled from 'styled-components'

export const LandingThreeSpeechTherapistsWrapper = styled.div`
  border: 2px solid green;
  
  & > div{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:23px;
  }
  
`