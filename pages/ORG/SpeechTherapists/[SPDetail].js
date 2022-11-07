import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { SpeechtherapistComponent, SpeechtherapistDetail } from "../../../components/ORG/speech-therapist-list/RepeatedInformation";
import {useORG_Ctx_IndividualSpeechtherapist} from "../../../context/ORG_Ctx_IndividualSpeechtherapist"


const SPDetail = () => {
  
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if(router.isReady){
      setLoaded(true)
    }
  },[router.isReady])
  
  
  if(!loaded){
    return null
  }
  
  const goBack = () => {
    router.back()
  }
  
  console.log('router:',router, router.query.SPDetail)
  return (
    <div>
      <SpeechtherapistDetail/>
      
    </div>
  );
}

export default SPDetail;