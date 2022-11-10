import { useRouter } from "next/router"
import LoadingSpeechTherapists from "./LoadingSpeechTherapists"
import EverySingleSpeechTherapistWrapper from "./styles/EverySingleSpeechTherapistWrapper_Right"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import Image from "next/image"

export const SpeechtherapistList = ({ userFetched, filterData }) => {
  console.log('userFetched:', userFetched)
  // console.log('filterData:', filterData)
  // console.dir('filterData:', filterData, userFetched)
  
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()

  // console.log('userFetched:', userFetched)
  // if (Object.keys(userFetched).length === 0) {
  //   return <LoadingSpeechTherapists />
  // }

  const goToDynamic = (e, everySingleValue) => {
    setSpeechtherapist([everySingleValue])
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }


  return (
    <EverySingleSpeechTherapistWrapper>
      Speech Therapist in list
      {userFetched && userFetched.allData.map((everySingleValue, i) => {
        // console.log('everySingleValue:', everySingleValue, userFetched.filters[i])
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

// export const SpeechtherapistDetail = () => {
//   const {speechtherapist} = useORG_Ctx_IndividualSpeechtherapist()
//   // console.log('speechtherapist:', speechtherapist)
  
//   if(speechtherapist === ""){
//     return(
//       <>
//        You should click in some speech therapist before
//       </>
//     )
//   }
  
//   return (
//     <>
//      {speechtherapist.map(x => (
//       <Fragment key={`${x.name.first}${x.name.last}`}>
//         Rendering {x.name.first} {x.name.last}
//       </Fragment>
//      ))}
//     </>
//   )
  
// }

// export const LeftPartST = ({ userFetched }) => {
//   console.log('LeftPartST:', LeftPartST)
//   // console.log("userFetched:", userFetched)
//   if (Object.keys(userFetched).length === 0) {
//     return <LoadingSpeechTherapists />
//   }

//   return (
//     <EverySingleSpeechTherapistWrapper_Left>
//       {userFetched.allData.map((everySingleValue) => {
//         return (
//           <div key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
//             <div>
//               <Image
//                 src={everySingleValue.picture.large}
//                 layout="responsive"
//                 width="500"
//                 height="500"
//                 alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
//               />
//             </div>
//             <div>Phone: {everySingleValue.phone}</div>
//             <div>Some data here</div>
//           </div>
//         )
//       })}
//     </EverySingleSpeechTherapistWrapper_Left>
//   )
// }

// export const RightPartST = ({ userFetched }) => {
//   console.log('RightPartST:', RightPartST)
//   const router = useRouter()
//   const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
//   // console.log("router:", router)

//   // console.log("userFetched:", userFetched)
//   if (Object.keys(userFetched).length === 0) {
//     return <LoadingSpeechTherapists />
//   }

//   const goToDynamic = (e, everySingleValue) => {
//     setSpeechtherapist(everySingleValue)
//     const toWhere = `${router.pathname}/${everySingleValue.name.first}${everySingleValue.name.last}`
//     router.push(toWhere)
//   }

//   return (
//     <>
//       <EverySingleSpeechTherapistWrapper_Right>
//         {userFetched.allData.map((everySingleValue) => {
//           return (
//             <div
//               key={`${everySingleValue.id.name}${everySingleValue.id.value}`}
//             >
//               <div>
//                 Name: {everySingleValue.name.first} {everySingleValue.name.last}
//               </div>
//               <div>Phone: {everySingleValue.phone}</div>
//               <div>Some data here</div>
//               <button onClick={(e) => goToDynamic(e, everySingleValue)}>
//                 Button here
//               </button>
//             </div>
//           )
//         })}
//       </EverySingleSpeechTherapistWrapper_Right>
//     </>
//   )
// }
