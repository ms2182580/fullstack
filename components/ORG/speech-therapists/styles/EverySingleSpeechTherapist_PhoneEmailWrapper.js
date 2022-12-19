import styled from "styled-components"

export const EverySingleSpeechTherapist_PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

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
  margin-bottom: 21px;
  display:flex;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
  }
  & > div:nth-child(1) > :nth-child(1) {
    /* display: flex; */
    margin-right: 14px;
  }
  & > :nth-child(2) {
    margin-left: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  /* & > :nth-child(2):before{
    content:"...";
    position:absolute;
    right:2px;
  } */
  
`

export const EverySingleSpeechTherapist_LocationWrapper = styled.div`
  /* background-color: pink; */
  /* width:1000px; */

  /* display: flex; */
  /* align-items: center; */
  /* border: 1px blue solid; */

  & * {
    /* border: 1px blue solid; */
  }

  display: grid;
  grid-template-columns: 1fr 10fr;

  & > :nth-child(1) {
    display: flex;
  }
  
  & > :nth-child(1) > :nth-child(1){
    margin-right: 16.13px;    
  }
  
  & > :nth-child(2){
    margin-left: 4px;
  }
  & > :nth-child(2) > :not(:last-child) {
    /* border: crimson solid 2px; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  }
  
  
  
  
  /* & > :not(:first-child){
    margin-left: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } */
  
  
  
  
`
