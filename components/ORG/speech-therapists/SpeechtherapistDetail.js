import { useRouter } from "next/router"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { useWidthWindow } from "../../../utils/useWidthWindow"
import { STDetail_About } from "./STDetail_About"
import { STDetail_Header } from "./STDetail_Header"
import { STDetail_PageLastUpdated } from "./STDetail_PageLastUpdated"
import { STDetail_Reviews } from "./STDetail_Reviews"
import { STDetail_STDetails } from "./STDetail_STDetails"
import { STDetail_MainWrapper } from "./styles/STDetail_MainWrapper"

export const SpeechtherapistDetail = () => {
  const { speechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  const route = useRouter()
  
  const { widthWindow } = useWidthWindow()

  if (speechtherapist === "") {
    route.push("/ORG/SpeechTherapists")
    return 
  }
  
  
  /* 
  
  !FH0
  
  Continue here!
  
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
