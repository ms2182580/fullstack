import styled from "styled-components"

export const INDEX_D_TourIndividualWrapper = styled.div`
  width: 436px;
  & > :nth-child(1) {
    display: flex;
    justify-content: end;
    align-items: end;
    cursor: pointer;
  }
`
export const FirstSreen = styled.div`
  position: fixed;
  top: 460%;
  left: 168%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  padding: 24px;
  width: 436px;
  & > :nth-child(1) {
    display: flex;
    justify-content: end;
    align-items: end;
    cursor: pointer;
  }
  & > :nth-child(2) {
    margin: auto;
  }
  & > :nth-child(3) {
    display: block;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 8px;
  }
  & > :nth-child(4) {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & > :nth-child(5) {
    margin-top: 8px;
    display: block;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  & > :nth-child(6) {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
  }
`
type Props = {
  top: string
  left: string
}
export const DefaultDesign = styled.div<Props>`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  padding: 24px;
  width: 436px;
  & > :nth-child(1) {
    display: flex;
    justify-content: end;
    align-items: end;
    cursor: pointer;
    margin-bottom: 20px;
  }
  & > :nth-child(3) {
    margin-top: 16px;
    display: block;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 8px;
  }
  & > :nth-child(4) {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & > :nth-child(5) {
    margin-top: 8px;
    display: block;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  & > :nth-child(6) {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
  }
`
