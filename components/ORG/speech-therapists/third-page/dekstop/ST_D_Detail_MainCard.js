import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { ORG_STDetail_Share_Modal_QRCodeIcon } from '../../../../../assets/Icons/ORG_STDetail_Share_Modal_QRCodeIcon.png'
import { ORG_FILTERS_KEYS_D } from "../../../../../utils/ORG_FiltersCategories"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { StarsRatingReview_D } from "../../../stars-rating-review/desktop/StarsRatingReview_D"
import { TooltipDesktop } from "../../../tooltip/TooltipDesktop"
import { Verified } from "../../../verified/Verified"
import { ST_D_Detail_MainCardLeftPhotos } from "./STDetail_CardWrapper_Left_Photos"
import { STDetail_CardWrapper_SecondRow_Info } from "./STDetail_CardWrapper_SecondRow_Info"
import { ST_D_Detail_About } from "./ST_D_Detail_About"
import { ST_D_Detail_AcceptingNewClients } from "./ST_D_Detail_AcceptingNewClients"
import { ST_D_Detail_CardEmail } from "./ST_D_Detail_CardEmail"
import { ST_D_Detail_CardLocation } from "./ST_D_Detail_CardLocation"
import { ST_D_Detail_CardPhone } from "./ST_D_Detail_CardPhone"
import { ST_D_Detail_CardWebsite } from "./ST_D_Detail_CardWebsite"
import { ST_D_Detail_CarePlan } from "./ST_D_Detail_CarePlan"
import { ST_D_Detail_MapComponent } from "./ST_D_Detail_MapComponent"
import { ST_D_Detail_ProviderDetailBox } from "./ST_D_Detail_ProviderDetailBox"
import { ST_D_Detail_Share } from "./ST_D_Detail_Share"
import { ST_D_Detail_TwoButtons } from "./ST_D_Detail_TwoButtons"
import { ST_D_Detail_MainCardLeft, ST_D_Detail_MainCardLeftLeftImage, ST_D_Detail_MainCardLeftLeftInfo, ST_D_Detail_MainCardRight, ST_D_Detail_MainCardRightFirstRow, ST_D_Detail_MainCardRightSecondRow, ST_D_Detail_MainCardWrapper } from "./styles/ST_D_Detail_MainCardWrapper"

export const ST_D_Detail_MainCard = ({ STData }) => {
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
    <>
      {STData.data.map((everySingleValue, i) => {
        let accepts = STData.filters[0].insurance.map((x) => x[0].toUpperCase() + x.slice(1))

        // let diagnosis = STData.filters[0][ORG_FILTERS_KEYS_D.diagnosis.updateState].map((x) => {
        //   if (x !== "Other") return `${x} Friendly`
        //   return x
        // })

        let languages = STData.filters[0].language.map((x) => x[0].toUpperCase() + x.slice(1))
        // let meetingFormat = new Intl.ListFormat("en").format(
        //   STData.filters[0].meetingFormat.map((x) => x[0].toUpperCase() + x.slice(1))
        // )
        let serviceSetting = STData.filters[0].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1))
        return (


          <ST_D_Detail_MainCardWrapper key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
            <ST_D_Detail_MainCardLeft>
              <ST_D_Detail_MainCardLeftLeftImage>
                <Image
                  src={everySingleValue.picture.large}
                  layout="responsive"
                  width="1"
                  height="1"
                  alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                />
                <Verified />
              </ST_D_Detail_MainCardLeftLeftImage>

              <ST_D_Detail_MainCardLeftPhotos
                photo={everySingleValue.picture.large}
                name={everySingleValue.name.first}
                lastName={everySingleValue.name.last}
              />

              <ST_D_Detail_MainCardLeftLeftInfo>
                <ST_D_Detail_CardPhone phoneNumber={everySingleValue.phone} />
                <ST_D_Detail_CardEmail email={everySingleValue.email} />
                <ST_D_Detail_CardWebsite
                  firstName={everySingleValue.name.first}
                  lastName={everySingleValue.name.last}
                />
                <ST_D_Detail_CardLocation
                  locationCity={everySingleValue.location.city}
                  locationStreetNumber={everySingleValue.location.street.number}
                  locationStreetName={everySingleValue.location.street.name}
                  locationState={everySingleValue.location.state}
                  howFar={STData.filters[0].distance}
                />
              </ST_D_Detail_MainCardLeftLeftInfo>

              <ST_D_Detail_TwoButtons />

              <ST_D_Detail_MapComponent />
            </ST_D_Detail_MainCardLeft>

            <ST_D_Detail_MainCardRight>
              <ST_D_Detail_MainCardRightFirstRow>
                <div>
                  <ST_D_Detail_CarePlan />
                  <ST_D_Detail_Share
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

                <StarsRatingReview_D
                  rating={STData.filters[0].rating}
                  reviews={STData.filters[0].reviews}
                />

                <ST_D_Detail_AcceptingNewClients />

                <ST_D_Detail_ProviderDetailBox meetingFormat={STData.filters[0].meetingFormat} />
              </ST_D_Detail_MainCardRightFirstRow>

              <ST_D_Detail_MainCardRightSecondRow>
                <div>
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Practice areas"
                    dataToShow={STData.filters[0][ORG_FILTERS_KEYS_D.diagnosis.updateState]}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Ages served"
                    dataToShow={STData.filters[0][ORG_FILTERS_KEYS_D.agesServed.updateState]}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Languages"
                    dataToShow={languages}
                  />
                  <STDetail_CardWrapper_SecondRow_Info
                    title="Setting"
                    dataToShow={serviceSetting}
                  />
                </div>

                <div>
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
                </div>
              </ST_D_Detail_MainCardRightSecondRow>

              <ST_D_Detail_About
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
            </ST_D_Detail_MainCardRight>
          </ST_D_Detail_MainCardWrapper>
        )
      })}
    </>
  )
}
