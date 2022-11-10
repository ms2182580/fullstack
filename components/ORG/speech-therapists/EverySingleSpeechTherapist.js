import Image from "next/image"
import { useRouter } from "next/router"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import {EverySingleSpeechTherapistWrapper} from "./styles/Ever"


export const SpeechtherapistList = ({ userFetched, filterData }) => {
  console.log('userFetched:', userFetched)
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()

  const goToDynamic = (e, everySingleValue) => {
    setSpeechtherapist([everySingleValue])
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }


  return (
    <EverySingleSpeechTherapistWrapper>
      Speech Therapist in list
      {userFetched && userFetched.allData.map((everySingleValue, i) => {
        return (
          <div
            key={`${everySingleValue.id.name}${everySingleValue.id.value}`}
          >
            <div>
              <Image
                src={everySingleValue.picture.large}
                layout="responsive"
                width="500"
                height="500"
                alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
              />
            </div>
            <div>
              <p>Name: {everySingleValue.name.first} {everySingleValue.name.last}</p>
            
            <div>Phone: {everySingleValue.phone}</div>
            <div>Some data here</div>
            <button onClick={(e) => goToDynamic(e, everySingleValue)}>
              Button here
            </button>
            </div>
          </div>
        )
      })}
    </EverySingleSpeechTherapistWrapper>
  )

}