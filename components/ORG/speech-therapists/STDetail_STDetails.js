import Image from "next/image"
import React from "react"
import { BookmarkSaveSTSvg } from "../../../assets/Icons"
import { ButtonSmall } from "../../ui/buttons/general"
import { H3 } from "../../ui/heading_body_text/HeaderFonts"
import {
  EverySingleSpeechTherapist_Email,
  EverySingleSpeechTherapist_Location,
  EverySingleSpeechTherapist_Phone
} from "./SingleSpeechtherapistComponents_Left"
import {
  FriendlyDiagnoses,
  StarsRatingAndReview,
  Tooltip
} from "./SingleSpeechtherapistComponents_Right"
import {
  EverySingleSpeechTherapistWrapper_Card,
  EverySingleSpeechTherapistWrapper_Left,
  EverySingleSpeechTherapistWrapper_Right,
  EverySPT_LeftImage,
  EverySPT_LeftInfo
} from "./styles/EverySingleSpeechTherapistWrapper"
import { STDetail_CardWrapper } from "./styles/STDetail_CardWrapper"
import TherapistInfoSecondPage from "./TherapistInfoSecondPage"
import { Verified } from "./Verified"

export const STDetail_STDetails = ({ STData }) => {
  // console.log("STData:", STData)
  return (
    <STDetail_CardWrapper>
      {STData.data.map((everySingleValue, i) => {
        let accepts = STData.filters[0].accepts.map(
          (x) => x[0].toUpperCase() + x.slice(1)
        )

        let agesServed = STData.filters[0].agesServed
        let diagnoses = STData.filters[0].diagnoses.map((x) => {
          if (x !== "Other") return `${x} Friendly`
          return x
        })
        let languages = STData.filters[0].languages.map(
          (x) => x[0].toUpperCase() + x.slice(1)
        )

        let meetingFormat = STData.filters[0].meetingFormat
        let serviceSetting = STData.filters[0].serviceSetting.map(
          (x) => x[0].toUpperCase() + x.slice(1)
        )

        let sessionType = STData.filters[0].sessionType
        let transportation = STData.filters[0].transportation

        return (
          <EverySingleSpeechTherapistWrapper_Card
            key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
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
                  howFar={STData.filters[0].distance}
                />
              </EverySPT_LeftInfo>
            </EverySingleSpeechTherapistWrapper_Left>

            <EverySingleSpeechTherapistWrapper_Right>
              <BookmarkSaveSTSvg tabIndex={0} />

              <H3>
                {everySingleValue.name.first} {everySingleValue.name.last}
              </H3>

              <Tooltip />

              <StarsRatingAndReview
                rating={STData.filters[0].rating}
                reviews={STData.filters[0].reviews}
              />

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
                dataToShow={STData.filters[0].yearsOfPractice}
              />

              <TherapistInfoSecondPage
                title="Service Setting"
                dataToShow={serviceSetting}
              />

              <TherapistInfoSecondPage title="Accepts" dataToShow={accepts} />

              <span>
                <ButtonSmall secondary>Nothing</ButtonSmall>
              </span>
            </EverySingleSpeechTherapistWrapper_Right>
          </EverySingleSpeechTherapistWrapper_Card>
        )
      })}
    </STDetail_CardWrapper>
  )
}
