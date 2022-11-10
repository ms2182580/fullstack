import { Fragment } from "react"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"

export const SpeechtherapistDetail = () => {
  const {speechtherapist} = useORG_Ctx_IndividualSpeechtherapist()
  // console.log('speechtherapist:', speechtherapist)
  
  if(speechtherapist === ""){
    return(
      <>
       You should click in some speech therapist before
      </>
    )
  }
  
  return (
    <>
     {speechtherapist.map(x => (
      <Fragment key={`${x.name.first}${x.name.last}`}>
        Rendering {x.name.first} {x.name.last}
        
        <p>This is a little change</p>
      </Fragment>
     ))}
    </>
  )
  
}