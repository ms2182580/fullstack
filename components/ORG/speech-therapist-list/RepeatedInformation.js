import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import LoadingSpeechTherapists from "./LoadingSpeechTherapists"
import EverySingleSpeechTherapistWrapper from "./styles/EverySingleSpeechTherapistWrapper_Right"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import EverySingleSpeechTherapistWrapper_Right from "./styles/EverySingleSpeechTherapistWrapper_Right"
import EverySingleSpeechTherapistWrapper_Left from "./styles/EverySingleSpeechTherapistWrapper_Left"
import Image from "next/image"

export const SpeechtherapistList = ({ userFetched, ORG_Filterdata_Distance, filterData }) => {
  // console.log('filterData:', filterData)
  // console.log("userFetched:", userFetched)
  
  
  
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()

  if (Object.keys(userFetched).length === 0) {
    return <LoadingSpeechTherapists />
  }

  const goToDinamyc = (e, everySingleValue) => {
    setSpeechtherapist([everySingleValue])
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }


  return (
    <EverySingleSpeechTherapistWrapper>
      Speech Therapist in list
      {userFetched.allData.map((everySingleValue) => {
        // console.log('everySingleValue:', everySingleValue)
        // const distance = ORG_Filterdata_Distance()
        // console.log('distance:', distance)
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
            <button onClick={(e) => goToDinamyc(e, everySingleValue)}>
              Button here
            </button>
            </div>
          </div>
        )
      })}
    </EverySingleSpeechTherapistWrapper>
  )

  // const leftPart =

  // return (
  //   <>
  //     <EverySingleSpeechTherapistWrapper>
  //       <div>Actual page: {userFetched.actualPage}</div>
  //       {userFetched.allData.map((x) => (
  //         <div key={`${x.id.name}${x.id.value}`}>
  //           <div>
  //             Name: {x.name.first} {x.name.last}
  //           </div>
  //           <div>Phone: {x.phone}</div>
  //         </div>
  //       ))}

  //     </EverySingleSpeechTherapistWrapper>
  //   </>
  // )
}

export const SpeechtherapistDetail = () => {
  const {speechtherapist} = useORG_Ctx_IndividualSpeechtherapist()
  console.log('speechtherapist:', speechtherapist)
  
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
      </Fragment>
     ))}
    </>
  )
  
}

export const LeftPartST = ({ userFetched }) => {
  console.log("userFetched:", userFetched)
  if (Object.keys(userFetched).length === 0) {
    return <LoadingSpeechTherapists />
  }

  return (
    <EverySingleSpeechTherapistWrapper_Left>
      {userFetched.allData.map((everySingleValue) => {
        return (
          <div key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
            <div>
              <Image
                src={everySingleValue.picture.large}
                layout="responsive"
                width="500"
                height="500"
                alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
              />
            </div>
            <div>Phone: {everySingleValue.phone}</div>
            <div>Some data here</div>
          </div>
        )
      })}
    </EverySingleSpeechTherapistWrapper_Left>
  )
}

export const RightPartST = ({ userFetched }) => {
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  // console.log("router:", router)

  // console.log("userFetched:", userFetched)
  if (Object.keys(userFetched).length === 0) {
    return <LoadingSpeechTherapists />
  }

  const goToDinamyc = (e, everySingleValue) => {
    setSpeechtherapist(everySingleValue)
    const toWhere = `${router.pathname}/${everySingleValue.name.first}${everySingleValue.name.last}`
    router.push(toWhere)
  }

  return (
    <>
      <EverySingleSpeechTherapistWrapper_Right>
        {userFetched.allData.map((everySingleValue) => {
          return (
            <div
              key={`${everySingleValue.id.name}${everySingleValue.id.value}`}
            >
              <div>
                Name: {everySingleValue.name.first} {everySingleValue.name.last}
              </div>
              <div>Phone: {everySingleValue.phone}</div>
              <div>Some data here</div>
              <button onClick={(e) => goToDinamyc(e, everySingleValue)}>
                Button here
              </button>
            </div>
          )
        })}
      </EverySingleSpeechTherapistWrapper_Right>
    </>
  )
}
