import Image from "next/image"
import { useRouter } from "next/router"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import {
  EverySingleSpeechTherapistWrapper,
  EverySingleSpeechTherapistWrapper_Card,
  EverySingleSpeechTherapistWrapper_Left,
  EverySingleSpeechTherapistWrapper_Right
} from "./styles/EverySingleSpeechTherapistWrapper"
import { HeaderEverySingleSP } from "./HeaderEverySingleSP.js"
import {
  EverySingleSpeechTherapist_Phone,
  EverySingleSpeechTherapist_Email,
  EverySingleSpeechTherapist_Location,
  EverySingleSpeechTherapist_HowFar
} from "./SingleSpeechtherapistComponents.js"

export const SpeechtherapistList = ({ userFetched, filterData }) => {
  console.log("userFetched:", userFetched)
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()

  const goToDynamic = (e, everySingleValue) => {
    setSpeechtherapist([everySingleValue])
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  return (
    <EverySingleSpeechTherapistWrapper>
      <HeaderEverySingleSP />

      {userFetched &&
        userFetched.allData.map((everySingleValue, i) => {

          let onlyNumbers = userFetched.filters[i].agesServed
            .map((x) => x.match(/[0-9]{1,2}(?=-)|65\+(?=\s)/))
            .map((x) => {
              if (x[0] === "65+") return 65
              return Number(x)
            })

          let correctOrder = onlyNumbers.sort((a, b) => a - b)
          
          let agesServedOrder = []
          for (const y of correctOrder) {
            for (const x of userFetched.filters[i].agesServed) {
              let firstTwo = x
                .match(/[0-9]{1,2}(?=-)|65\+(?=\s)/)
                .map((x) => {
                  if (x === "65+") return "65"
                  return x
                })[0]
              if(firstTwo === String(y)){
                agesServedOrder.push(x)
                break
              }
            }
          }

          return (
            <EverySingleSpeechTherapistWrapper_Card
              key={`${everySingleValue.id.name}${everySingleValue.id.value}`}
            >
              <EverySingleSpeechTherapistWrapper_Left>
                <div>
                  <Image
                    src={everySingleValue.picture.large}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                  />
                </div>
                {/* <div>Phone: {everySingleValue.phone}</div> */}
                <EverySingleSpeechTherapist_Phone
                  phoneNumber={everySingleValue.phone}
                />
                <EverySingleSpeechTherapist_Email
                  email={everySingleValue.email}
                />
                <EverySingleSpeechTherapist_Location
                  location={everySingleValue.location}
                />

                <EverySingleSpeechTherapist_HowFar
                  howFar={userFetched.filters[i].distance}
                />
              </EverySingleSpeechTherapistWrapper_Left>
              <EverySingleSpeechTherapistWrapper_Right>
                <div>Button to save speech therapists</div>

                <p>
                  Name: {everySingleValue.name.first}{" "}
                  {everySingleValue.name.last}
                </p>

                <div>Tool tip</div>

                <div>
                  <strong>Rating :</strong> {userFetched.filters[i].rating}{" "}
                  stars
                </div>
                {/* <div><strong>Ages served:</strong> {userFetched.filters[i].agesServed.map(x => (<>{x}</>))} stars</div> */}

                <button onClick={(e) => goToDynamic(e, everySingleValue)}>
                  Button here
                </button>
              </EverySingleSpeechTherapistWrapper_Right>
            </EverySingleSpeechTherapistWrapper_Card>
          )
        })}
    </EverySingleSpeechTherapistWrapper>
  )
}
