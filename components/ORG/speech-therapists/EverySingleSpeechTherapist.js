import Image from "next/image"
import { useRouter } from "next/router"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import {
  EverySingleSpeechTherapistWrapper,
  EverySingleSpeechTherapistWrapper_Card,
  EverySingleSpeechTherapistWrapper_Left,
  EverySingleSpeechTherapistWrapper_Right,
  EverySPT_LeftImage,
  EverySPT_LeftInfo
} from "./styles/EverySingleSpeechTherapistWrapper"
import { HeaderEverySingleSP } from "./HeaderEverySingleSP.js"
import {
  EverySingleSpeechTherapist_Phone,
  EverySingleSpeechTherapist_Email,
  EverySingleSpeechTherapist_Location,
} from "./SingleSpeechtherapistComponents_Left.js"
import { FriendlyDiagnoses } from "./SingleSpeechtherapistComponents_Right"
import { Verified } from "./Verified"

export const SpeechtherapistList = ({ userFetched, filterData }) => {
  // console.log("userFetched:", userFetched)
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
          // console.log("userFetched.filters[i]:", userFetched.filters[i])

          let accepts = userFetched.filters[i].accepts.join(", ")
          let agesServed = userFetched.filters[i].agesServed.join(", ")
          let diagnoses = userFetched.filters[i].diagnoses.map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let languages = userFetched.filters[i].languages.join(", ")
          let meetingFormat = userFetched.filters[i].meetingFormat.join(", ")
          let serviceSetting = userFetched.filters[i].serviceSetting.join(", ")
          let sessionType = userFetched.filters[i].sessionType.join(", ")
          let transportation = userFetched.filters[i].transportation.join(", ")

          return (
            <EverySingleSpeechTherapistWrapper_Card
              key={`${everySingleValue.id.name}${everySingleValue.id.value}`}
            >
              <EverySingleSpeechTherapistWrapper_Left>
                <EverySPT_LeftImage>
                  <Image
                    src={everySingleValue.picture.large}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                  />
                  <Verified />
                </EverySPT_LeftImage>

                <EverySPT_LeftInfo>
                  <EverySingleSpeechTherapist_Phone
                    phoneNumber={everySingleValue.phone}
                  />
                  <EverySingleSpeechTherapist_Email
                    email={everySingleValue.email}
                  />
                  <EverySingleSpeechTherapist_Location
                    location={everySingleValue.location}
                    howFar={userFetched.filters[i].distance}
                  />
                </EverySPT_LeftInfo>
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

                <FriendlyDiagnoses diagnoses={diagnoses} />

                <div>
                  <strong>Ages served:</strong> {agesServed}
                </div>
                <div>
                  <strong>Languages</strong> {languages}
                </div>
                <div>
                  <strong>Years of practice</strong>{" "}
                  {userFetched.filters[i].yearsOfPractice}
                </div>
                <div>
                  <strong>Service Setting:</strong> {serviceSetting}
                </div>
                <div>
                  <strong>Accepts:</strong> {accepts}
                </div>

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
