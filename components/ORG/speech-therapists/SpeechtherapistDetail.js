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
    - Header is already a component
    - Speech therapist card should be already created
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

/* 
Get the usernames: https://jsonplaceholder.typicode.com/users
Get the comments: https://jsonplaceholder.typicode.com/posts/1/comments

This is for the comments. Idea: make some very possitive, possitive, neutral, negative and very negative comments from the chat GPT and save that to show to in the final product. The rating should be coherent with this.
"Write a very short review in first person like you have been take the service of this professional, could be a positive one, negative one or something in between. Omit the details of the professional itself and focus on your own experience.: Elaine Davis have a CCC-SLP Certificate of Clinical Competence in Speech Language Pathology - Nationally recognized professional from the American Speech-Language-Hearing Association (ASHA), accepts medicaid, insurance, DOE approved, serve ages of 0-18 months, 2-3 years, 4-5 years, 6-1 years, 12-21 years, 22-40 years, 41-64 years, 65+ years. Make diagnoses of Autism (ASD), ADHD, Cerebral Palsy, Fragile X, is from +20 miles from the current location of the user, speak english, spanish and tagalog, have a meeting format in virtual and in-person, is a independent provider, have a rating of 1, have 4 reviews, have a service setting of school, it allows individual and group session type, have a tranportation of near bus and have 10+ years of practice"


*/
