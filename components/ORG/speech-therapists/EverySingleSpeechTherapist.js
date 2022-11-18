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
  EverySingleSpeechTherapist_Location
} from "./SingleSpeechtherapistComponents_Left.js"
import {
  FriendlyDiagnoses,
  Tooltip,
  StarsRating
} from "./SingleSpeechtherapistComponents_Right"
import { Verified } from "./Verified"
import { BookmarkSaveSTSvg} from "../../../assets/Icons"
import { H3 } from "../../ui/heading_body_text/HeaderFonts"
import { ButtonSmall } from "../../ui/buttons/general"
import TherapistInfoSecondPage from "./TherapistInfoSecondPage"

export const SpeechtherapistList = ({ userFetched, filtersST, filterData }) => {
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
        Array.isArray(filtersST) &&
        userFetched.allData.map((everySingleValue, i) => {
          let accepts = filtersST[i].accepts.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let agesServed = filtersST[i].agesServed
          let diagnoses = filtersST[i].diagnoses.map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let languages = filtersST[i].languages.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let meetingFormat = filtersST[i].meetingFormat
          let serviceSetting = filtersST[i].serviceSetting.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let sessionType = filtersST[i].sessionType
          let transportation = filtersST[i].transportation

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
                    howFar={filtersST[i].distance}
                  />
                </EverySPT_LeftInfo>
              </EverySingleSpeechTherapistWrapper_Left>

              <EverySingleSpeechTherapistWrapper_Right>
                <BookmarkSaveSTSvg tabIndex={0} />

                <H3>
                  {everySingleValue.name.first} {everySingleValue.name.last}
                </H3>

                <Tooltip />

                <StarsRating rating={filtersST[i].rating} />

                <FriendlyDiagnoses diagnoses={diagnoses} />

                <TherapistInfoSecondPage
                  title="Ages served"
                  dataToShow={agesServed}
                />

                <TherapistInfoSecondPage
                  title="Languages"
                  dataToShow={languages}
                />

                <TherapistInfoSecondPage
                  title="Years of Practice"
                  dataToShow={filtersST[i].yearsOfPractice}
                />

                <TherapistInfoSecondPage
                  title="Service Setting"
                  dataToShow={serviceSetting}
                />

                <TherapistInfoSecondPage title="Accepts" dataToShow={accepts} />

                <span onClick={(e) => goToDynamic(e, everySingleValue)}>
                  <ButtonSmall secondary>More details</ButtonSmall>
                </span>
              </EverySingleSpeechTherapistWrapper_Right>
            </EverySingleSpeechTherapistWrapper_Card>
          )
        })}
    </EverySingleSpeechTherapistWrapper>
  )
}
