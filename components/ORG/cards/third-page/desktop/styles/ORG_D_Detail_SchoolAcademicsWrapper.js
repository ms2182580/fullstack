import styled from "styled-components";
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors";
import image2 from "@/assets/images/ORG/attorney-advocates/ORG_AA17.jpg";
import Image from "next/image.js"

export const ORG_D_Detail_SchoolAcademicsWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  header {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  }
 
 
  section {
    display: flex;
    flex-direction: column;
    padding-bottom: 38px;
    padding-top: 24px;
   // border-bottom: 1px solid hsl(0, 0%, 88.6%);
    margin-left: 24px;
    margin-right: 24px;
    //padding-left:24px;
    

    & > :nth-child(1) {
      // height:50px;
      margin-bottom: 4px;
    }
    
    
  
  }

  .sectionRow{
    display: flex;
    flex-direction: row;
    gap:25px;
  }
  
  .BorderSection{
    border-bottom: 1px solid hsl(0, 0%, 88.6%);
  }

  li {
    height: 32px;
    margin-top: 4px;
    
    & > :nth-child(1) {
      font-weight: 600;
    }
  }
  
  .ulNoPoint {
    list-style-type: none;
  }

  Table{
font-size:16px;
border-spacing:0px;
width:50%;
padding-top:19px;
padding-left:16px;


& > :last-child{
  //text-align: right;
 // padding:13px;
}

  }
  tr{
    height:36px;
   
    
  }
  tr:nth-child(even) {
      background-color:rgba(211, 214, 215, 0.20);
      
    }
  th{
    font-size:18px;
    background-color:rgba(211, 214, 215, 0.20);
    text-align: left;
    padding-left:26px;
  }
  td{
    width:100%;
    padding-left:26px;
    padding-right:13px;
  }

  .Button{
    padding-top:24px;
  }

  .TestScoresRow{
    gap:200px;
    display:flex;
    flex-direction:row;
    & > :nth-child(1) {
      
      width:200px;
    }

  }

  .ShadowTable{
    box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
  }



`;
