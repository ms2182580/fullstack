import styled from "styled-components";
import { SECONDARY_BG_BIGBLOCKS_TEXT } from "../../../../assets/Colors";

export const FriendlyDiagnosesWrapper = styled.div`

 /* background-color: hotpink; */
 
 display: flex;
 flex-wrap: wrap;
 /* width:100%; */
 
 & > * {
  /* border: black 1px solid; */
  background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.PINK};
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 5px 10px;
  
  
  /* width: 100%; */
  /* width:100%; */
 }

`
