import styled from 'styled-components'

export const CC_Karate_D_ReviewsWrapper = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: grid;
  
  
  
  
  & > :nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 37px;
    padding-inline: 32px;
  }

  & > :nth-child(3) {
    margin-left: auto;
    margin-top: 24px;
    margin-right: 16px;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      filter: brightness(120%);
    }
  }
  
`