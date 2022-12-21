import Image from "next/image"
import React from "react"
import { BookmarkSaveSTSvg } from "../../../assets/Icons"
import { H2 } from "../../ui/heading_body_text/HeaderFonts"
import { EmailGetDirectionComponent } from "./EmailGetFirectionWrapper"
import { MapComponent } from "./MapWrapper"
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
  EverySingleSpeechTherapistWrapper_Left,
  EverySPT_LeftImage,
  EverySPT_LeftInfo
} from "./styles/EverySingleSpeechTherapistWrapper"
import {
  EverySingleSpeechTherapistWrapper_Card_Detail,
  EverySingleSpeechTherapistWrapper_Right_Detail,
  FirstRow,
  LeftPart,
  RightPart,
  SecondRow,
  STDetail_CardWrapper
} from "./styles/STDetail_CardWrapper"
import { TherapistInfoThirdPage } from "./TherapistInfoThirdPage"
import { Verified } from "./Verified"

export const STDetail_STDetails = ({ STData }) => {
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
        let meetingFormat = new Intl.ListFormat("en").format(
          STData.filters[0].meetingFormat.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )
        )
        let serviceSetting = STData.filters[0].serviceSetting.map(
          (x) => x[0].toUpperCase() + x.slice(1)
        )
        return (
          <EverySingleSpeechTherapistWrapper_Card_Detail
            key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
            <EverySingleSpeechTherapistWrapper_Left STDetail>
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

              <EmailGetDirectionComponent />

              <MapComponent />
            </EverySingleSpeechTherapistWrapper_Left>

            <EverySingleSpeechTherapistWrapper_Right_Detail>
              <FirstRow>
                <BookmarkSaveSTSvg tabIndex={0} />
                <H2>
                  {everySingleValue.name.first} {everySingleValue.name.last}
                </H2>
                <Tooltip />
                <StarsRatingAndReview
                  rating={STData.filters[0].rating}
                  reviews={STData.filters[0].reviews}
                />
                <FriendlyDiagnoses diagnoses={diagnoses} />
              </FirstRow>

              <SecondRow>
                <LeftPart>
                  <TherapistInfoThirdPage
                    title="Ages served"
                    dataToShow={agesServed}
                  />
                  <TherapistInfoThirdPage
                    title="Languages"
                    dataToShow={languages}
                  />
                  <TherapistInfoThirdPage
                    title="Years of Practice"
                    dataToShow={STData.filters[0].yearsOfPractice}
                  />
                  <TherapistInfoThirdPage
                    title="Practice Setting"
                    dataToShow={serviceSetting}
                  />
                  <TherapistInfoThirdPage
                    title="Insurance"
                    dataToShow={accepts}
                  />
                  <TherapistInfoThirdPage
                    title="Meeting Format"
                    dataToShow={meetingFormat}
                  />
                </LeftPart>

                <RightPart>
                  <TherapistInfoThirdPage
                    title="Qualifications"
                    dataToShow={serviceSetting}
                    rightRowQualification
                    rightRowQualification_Data={STData.filters[0].yearsOfPractice}
                    state={everySingleValue.location.state}
                  />
                  <TherapistInfoThirdPage
                    title="Additional Credentials"
                    rightRowCredentials
                    dataToShow={["Lee Silverman Voice Treatment Certification", "SLP, Board Certified Behavior Analyst (BCBA)"]}
                  />
                </RightPart>
              </SecondRow>
            </EverySingleSpeechTherapistWrapper_Right_Detail>
          </EverySingleSpeechTherapistWrapper_Card_Detail>
        )
      })}
    </STDetail_CardWrapper>
  )
}
