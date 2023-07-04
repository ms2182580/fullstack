import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ST_D_Detail_MainCardWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "leftPart rightPart";
  align-items: stretch;

  border: 1px solid ${NEUTRALS.LIGHT_GREY};
  border-radius: 8px;

  grid-template-columns: 450px 1fr;

  /* border: 2px solid green; */

  & > :nth-child(1) {
    /* margin-bottom: 0px; */
  }
`

// export const STDetail_CardWrapper_Card_Detail = styled(ST_D_Results_CardWrapper)`
//   display:grid;
//   border: none;
//   grid-template-columns: 450px 1fr;

//   border: 2px solid crimson;
// `

export const ST_D_Detail_MainCardLeft = styled.div`
  /* border: 2px solid crimson; */
  /* padding-inline: 24px; */
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  grid-area: leftPart;
  min-width: 320px;
  display: flex;
  flex-direction: column;

  padding: 24px;

  /* border: 2px solid crimson; */

  /* padding-bottom: 24px; */

  & > :nth-last-child(1),
  & > :nth-last-child(2) {
    /* margin-inline: 24px; */
  }
`

export const ST_D_Detail_MainCardLeftLeftImage = styled.div`
  /* margin: 24px 24px 8px 24px; */

  position: relative;
  overflow: hidden;
  border-top-left-radius: 8px;
  margin-bottom: 24px;

  & > :nth-child(2) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  margin-bottom: 8px;
  border-radius: 8px;
  border: none;

  /* border: 2px solid crimson; */
`

export const ST_D_Detail_MainCardLeftLeftInfo = styled.div`
  margin-left: 22px;
  margin-bottom: 16px;
  margin-right: 9px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const ST_D_Detail_MainCardRight = styled.div`
  display: grid;
  justify-self: stretch;
  grid-template-rows: auto 1fr;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${NEUTRALS.OFF_WHITE};
  padding: 24px;
  position: relative;

  & > :last-child {
    display: flex;
    justify-content: end;
    gap: 44px;

    & > :nth-child(2):hover {
      cursor: pointer;
      filter: brightness(90%);
    }
  }
`

export const ST_D_Detail_MainCardRightFirstRow = styled.div`
  margin-bottom: 40px;

  & > :nth-child(1) {
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    & > :nth-child(1),
    & > :nth-child(2) {
      text-align: center;
    }

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
    }
  }

  & > :nth-child(2) {
    display: flex;
    gap: 31px;
    align-items: center;
    margin-right: 183px;

    & > :nth-child(1) > span {
      white-space: pre;
    }

    & > :nth-child(2) {
      cursor: pointer;
    }

    @media (max-width: 1300px) {
      flex-direction: column;
      gap: 0;
      align-items: baseline;

      & > :nth-child(1) > span {
        display: block;
      }

      & > :nth-child(2) {
        width: 30px;
      }

      & > :nth-child(2) > :nth-child(2) > :nth-child(2) {
        left: -120px;
      }
    }
  }

  & > :nth-child(4) {
    margin-bottom: 8px;
  }

  & > :nth-child(5) {
    margin-bottom: 16px;
  }

  & > :nth-child(6) {
    margin-bottom: 24px;
  }
`

export const ST_D_Detail_MainCardRightSecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftPart rightPart";
  margin-bottom: 32px;
  gap:16px;

  & > :nth-child(1) {
    grid-area: leftPart;
    & > * {
      & > :not(:first-child) {
        display: inline;
      }
    }
  }

  & > :nth-child(2) {
    grid-area: rightPart;

    & > :nth-child(1){
      & > :not(:first-child) {
        display: inline;
      }
    }
    
    & > :nth-child(2){
      & > :not(:first-child){
        
        display: flex;
        flex-wrap: wrap;
        /* gap:8px; */
        
        & > span{
          font-weight: 600;
          margin-right: 8px;
        }
        
      }
      
    }
    
    & > *{
    /* border: 2px solid green; */
      
    }
    
  }

  & > :nth-child(1),
  & > :nth-child(2) {
    & > *:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`

// export const ST_D_Detail_MainCardRightSecondRowLeft = styled.div`
//   grid-area: leftPart;
// `
// export const STDetail_CardWrapper_SecondRow_RightPart = styled.div`
//   grid-area: rightPart;
// `
