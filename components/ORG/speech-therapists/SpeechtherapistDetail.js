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
    /* 
    !FH
    This should just redirect the user to the previous page
    
    */
    return <>You should click in some speech therapist before</>
  }

  /* 
  !FH
  
  Create all the things of this third page of ORG section:
  ✅- Header is already a component
  ✅- Speech therapist card should be already created
  ✅- About is a new component. Maybe use a placeholder
  ✅- Reviews: use the jsonplaceholder api
  */

  return (
    <STDetail_MainWrapper>
      <STDetail_Header STData={speechtherapist} />

      <div>
        <STDetail_STDetails STData={speechtherapist} />

        <STDetail_About
          name={speechtherapist.data[0].name.first}
          lastName={speechtherapist.data[0].name.last}
        />
        <STDetail_Reviews 
          name={speechtherapist.data[0].name.first}
          lastName={speechtherapist.data[0].name.last}
        />
        
        <STDetail_PageLastUpdated />
        
      </div>
    </STDetail_MainWrapper>
  )
}
