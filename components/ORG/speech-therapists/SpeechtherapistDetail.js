import { useEffect, useState } from "react"
import { Fragment } from "react"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { STDetail_About } from "./STDetail_About"
import { STDetail_Header } from "./STDetail_Header"
import { STDetail_PageLastUpdated } from "./STDetail_PageLastUpdated"
import { STDetail_Reviews } from "./STDetail_Reviews"
import { STDetail_STDetails } from "./STDetail_STDetails"
import { STDetail_MainWrapper } from "./styles/STDetail_MainWrapper"

export const SpeechtherapistDetail = () => {
  const { speechtherapist } = useORG_Ctx_IndividualSpeechtherapist()


  if (speechtherapist === "") {
    return <>You should click in some speech therapist before</>
  }

  /* 
  !FH
  
  Create all the things of this third page of ORG section:
  ✅- Header is already a component
  ✅- Speech therapist card should be already created
    - About is a new component. Maybe use a placeholder
    - Reviews: use the jsonplaceholder api
  */

  return (
    <STDetail_MainWrapper>
      <STDetail_Header STData={speechtherapist}/>
      
      <STDetail_STDetails STData={speechtherapist}/>

      <STDetail_About/>
      <STDetail_Reviews/>
      <STDetail_PageLastUpdated/>
    </STDetail_MainWrapper>
  )
}

