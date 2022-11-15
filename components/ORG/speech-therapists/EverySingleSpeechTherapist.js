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
import { BookmarkSaveSTSvg, QuestionTooltip_STSvg } from "../../../assets/Icons"
import { H3, H4 } from "../../ui/heading_body_text/HeaderFonts"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { ButtonSmall } from "../../ui/buttons/general"
import { Fragment } from "react"

export const SpeechtherapistList = ({ userFetched, filtersST, filterData }) => {
  // console.log('filterData:', filterData)
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
        Array.isArray(filtersST) &&
        userFetched.allData.map((everySingleValue, i) => {
          let accepts = filtersST[i].accepts
            .map((x) => x[0].toUpperCase() + x.slice(1))
            .join(", ")
          let agesServed = filtersST[i].agesServed.join(", ")
          let diagnoses = filtersST[i].diagnoses.map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let languages = filtersST[i].languages
            .map((x) => x[0].toUpperCase() + x.slice(1))
            .join(", ")
          let meetingFormat = filtersST[i].meetingFormat.join(", ")
          let serviceSetting = filtersST[i].serviceSetting
            .map((x) => x[0].toUpperCase() + x.slice(1))
            .join(", ")
          let sessionType = filtersST[i].sessionType.join(", ")
          let transportation = filtersST[i].transportation.join(", ")

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
                <BookmarkSaveSTSvg tabIndex={0}  />

                <H3>
                  {everySingleValue.name.first} {everySingleValue.name.last}
                </H3>

                <Tooltip />

                <StarsRating rating={filtersST[i].rating} />

                <FriendlyDiagnoses diagnoses={diagnoses} />

                <div>
                  <P bold>Ages served:</P> {agesServed}
                </div>

                <div>
                  <P bold>Languages: </P> <span>{languages}</span>
                </div>
                
                <div>
                  <P bold>Years of Practice:</P> {filtersST[i].yearsOfPractice}
                </div>
                <div>
                  <P bold>Service Setting:</P> {serviceSetting}
                </div>
                <div>
                  <P bold>Accepts:</P> {accepts}
                </div>

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
