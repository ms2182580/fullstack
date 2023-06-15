import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import ORG_STDetail_Share_Modal_QRCodeIcon from "../../../../../assets/Icons/ORG_STDetail_Share_Modal_QRCodeIcon.png"
import { ORG_FILTERS_KEYS } from "../../../../../utils/ORG_FiltersCategories"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { StarsRatingReview } from "../../../stars-rating-review/StartsRatingReview"
import { TooltipDesktop } from "../../../tooltip/TooltipDesktop"
import { Verified } from "../../../verified/Verified"
import { ST_CardEmail } from "../../ST_CardEmail"
import { ST_CardLocation } from "../../ST_CardLocation"
import { ST_CardPhone } from "../../ST_CardPhone"
import { ST_CardWebsite } from "../../ST_CardWebsite"
import { STDetail_TwoButtons } from "../../ST_TwoButtons"
import { ST_CardWrapper_Left_LeftInfo } from "../../styles/ST_CardWrapper"
import { STDetail_About } from "../STDetail_About"
import { STDetail_AcceptingNewClients } from "./STDetail_AcceptingNewClients.js"
import { STDetail_CardWrapper_Left_Photos } from "./STDetail_CardWrapper_Left_Photos"
import { STDetail_CardWrapper_SecondRow_Info } from "./STDetail_CardWrapper_SecondRow_Info"
import { STDetail_CarePlan } from "./STDetail_CarePlan"
import { STDetail_MapComponent } from "./STDetail_MapComponent"
import { STDetail_ProviderDetailBox } from "./STDetail_ProviderDetailBox"
import { STDetail_Share } from "./STDetail_Share"
import {
  STDetail_CardWrapper,
  STDetail_CardWrapper_Card_Detail,
  STDetail_CardWrapper_FirstRow,
  STDetail_CardWrapper_Left,
  STDetail_CardWrapper_Left_LeftImage,
  STDetail_CardWrapper_Right_Detail,
  STDetail_CardWrapper_SecondRow,
  STDetail_CardWrapper_SecondRow_LeftPart,
  STDetail_CardWrapper_SecondRow_RightPart
} from "./styles/STDetail_CardWrapper"

export const STDetail_STDetails = ({ STData }) => {
  const { push } = useRouter()
  const handlePush404 = () => {
    push(
      {
        pathname: "/404",
        query: { toWhere: "ORG/SpeechTherapists/IndividualProvider" }
      },
      "/404"
    )
  }

  return (
    <STDetail_CardWrapper>
      {STData.data.map((everySingleValue, i) => {
        let accepts = STData.filters[0].insurance.map((x) => x[0].toUpperCase() + x.slice(1))

        let diagnosis = STData.filters[0][ORG_FILTERS_KEYS.diagnosis.updateState].map((x) => {
          if (x !== "Other") return `${x} Friendly`
          return x
        })

        let languages = STData.filters[0].language.map((x) => x[0].toUpperCase() + x.slice(1))
        let meetingFormat = new Intl.ListFormat("en").format(
          STData.filters[0].meetingFormat.map((x) => x[0].toUpperCase() + x.slice(1))
        )
        let serviceSetting = STData.filters[0].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1))
        return (
          <STDetail_CardWrapper_Card_Detail key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
            <STDetail_CardWrapper_Left>
              <STDetail_CardWrapper_Left_LeftImage>
                <Image
                  src={everySingleValue.picture.large}
                  layout="responsive"
                  width="1"
                  height="1"
                  alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                />
                <Verified />
              </STDetail_CardWrapper_Left_LeftImage>

              <STDetail_CardWrapper_Left_Photos
                photo={everySingleValue.picture.large}
                name={everySingleValue.name.first}
                lastName={everySingleValue.name.last}
              />

              <ST_CardWrapper_Left_LeftInfo>
                <ST_CardPhone phoneNumber={everySingleValue.phone} />
                <ST_CardEmail email={everySingleValue.email} />
                <ST_CardWebsite
                  firstName={everySingleValue.name.first}
                  lastName={everySingleValue.name.last}
                />
                <ST_CardLocation
                  locationCity={everySingleValue.location.city}
                  locationStreetNumber={everySingleValue.location.street.number}
                  locationStreetName={everySingleValue.location.street.name}
                  locationState={everySingleValue.location.state}
                  howFar={STData.filters[0].distance}
                />
              </ST_CardWrapper_Left_LeftInfo>

              <STDetail_TwoButtons />

              <STDetail_MapComponent />
            </STDetail_CardWrapper_Left>

            <STDetail_CardWrapper_Right_Detail>
              <STDetail_CardWrapper_FirstRow>
                <div>
                  <STDetail_CarePlan />
                  <STDetail_Share
                    picture={everySingleValue.picture.large}
                    name={everySingleValue.name.first}
                    lastName={everySingleValue.name.last}
                  />
                </div>
                <div>
                  <H2 bold>
                    {everySingleValue.name.first} {everySingleValue.name.last} <span>CCC-SLP</span>
                  </H2>
                  <TooltipDesktop />
                </div>
                <H3>Speech Language Pathologist</H3>
                <P dark_gray>{everySingleValue.location.city}</P>

                <StarsRatingReview
                  rating={STData.filters[0].rating}
                  reviews={STData.filters[0].reviews}
                />

                <STDetail_AcceptingNewClients />

                <STDetail_ProviderDetailBox meetingFormat={STData.filters[0].meetingFormat} />
              </STDetail_CardWrapper_FirstRow>

              <STDetail_CardWrapper_SecondRow>
                <STDetail_CardWrapper_SecondRow_LeftPart>
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Practice areas"
                    dataToShow={STData.filters[0][ORG_FILTERS_KEYS.diagnosis.updateState]}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Ages served"
                    dataToShow={STData.filters[0][ORG_FILTERS_KEYS.agesServed.updateState]}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Languages"
                    dataToShow={languages}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Setting"
                    dataToShow={serviceSetting}
                  />
                </STDetail_CardWrapper_SecondRow_LeftPart>

                <STDetail_CardWrapper_SecondRow_RightPart>
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Payment options"
                    dataToShow={accepts}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Qualifications"
                    dataToShow={serviceSetting}
                    rightRowQualification
                    rightRowQualification_Data={STData.filters[0].yearsOfPractice}
                    state={everySingleValue.location.state}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Additional Credentials"
                    rightRowCredentials
                    dataToShow={[
                      "Lee Silverman Voice Treatment Certification",
                      "SLP, Board Certified Behavior Analyst (BCBA)"
                    ]}
                  />
                </STDetail_CardWrapper_SecondRow_RightPart>
              </STDetail_CardWrapper_SecondRow>

              <STDetail_About
                name={STData.data[0].name.first}
                lastName={STData.data[0].name.last}
                aboutRef={null}
              />

              <div>
                <span onClick={handlePush404}>
                  <ButtonSmall>Learn how to get these services</ButtonSmall>
                </span>

                <Image
                  src={ORG_STDetail_Share_Modal_QRCodeIcon}
                  layout="fixed"
                  width={48}
                  height={48}
                />
              </div>
            </STDetail_CardWrapper_Right_Detail>
          </STDetail_CardWrapper_Card_Detail>
        )
      })}
    </STDetail_CardWrapper>
  )
}
