import styled from "styled-components"

export const EverySingleSpeechTherapist_PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 34px;

  & > :nth-child(1) {
    /* margin-left: 14px; */
    margin-right: 14px;
    /* width:200px; */
    /* border:1px red solid; */
  }
  & > :nth-child(2) {
    margin-right: 4px;
  }
`

export const EverySingleSpeechTherapist_EmailWrapper = styled.div`
  margin-bottom: 34px;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
  }
  & > div:nth-child(1) > :nth-child(1) {
    /* display: flex; */
    margin-right: 14px;
  }
  & > :nth-child(2) {
    margin-left: 34px;
  }
`

export const EverySingleSpeechTherapist_LocationWrapper = styled.div`
  /* background-color: pink; */
  /* width:1000px; */

  /* display: flex; */
  /* align-items: center; */

  & * {
    /* border: 1px blue solid; */
  }

  /* display: flex; */

  & > :nth-child(1) {
    display: flex;
    align-items: center;
  }
  
  & > :nth-child(1) > :nth-child(1){
    margin-right: 16.13px;    
  }
  
  & > :not(:first-child){
    /* background-color: peru; */
    margin-left: 34px;
  }
  
`
