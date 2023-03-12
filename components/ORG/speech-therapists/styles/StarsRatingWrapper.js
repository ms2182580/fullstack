import styled from "styled-components";

export const StarsRatingWrapper = styled.div`
 display: flex;
 align-items: center;
 flex-wrap: wrap;
 
 
 & > :nth-child(1) > *:not(:last-child){
  margin-right: 8px;
 }
 
 & > :nth-child(1) > :last-child{
  margin-right: 20px;
 }
 
 & > :nth-child(2){
  margin-right: 4px;
 }

`
