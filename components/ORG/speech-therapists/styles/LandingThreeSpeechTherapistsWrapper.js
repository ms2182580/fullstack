import styled from 'styled-components'

export const LandingThreeSpeechTherapistsWrapper = styled.div`
  & > div{
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 400px));
    justify-content: center;
    gap:23px;
    margin-bottom: 64px;
  }
  
  & > :last-child{
    padding: 19px 42px;
    margin-left: auto;
    
    & > span{
      font-size:16px;
      white-space:pre;
    }
    
    &:hover{
      /* all: unset; */
      background-color: transparent;
    }
  }
  
`