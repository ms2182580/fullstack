import Image from "next/image"
import { useRouter } from "next/router"
import { BookmarkSaveSTSvg } from "../../../../../assets/Icons"
import { useORG_Ctx_FetchWithFilters } from "../../../../../context/ORG_CtxFetchWithFilters_Provider"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { StarsRatingReview } from "../../../stars-rating-review/StartsRatingReview"
import { Verified } from "../../../verified/Verified"
import { FriendlyDiagnoses, Tooltip } from "../../SingleSpeechtherapistComponents_Right"
import { STResults_CardEmail } from "../STResults_CardEmail"
import { STResults_CardInfo } from "../STResults_CardInfo"
import { STResults_CardLocation } from "../STResults_CardLocation"
import { STResults_CardPhone } from "../STResults_CardPhone"
import {
  STResults_CardWithFiltersWrapper_Left,
  STResults_CardWithFiltersWrapper_Left_LeftImage,
  STResults_CardWithFiltersWrapper_Left_LeftInfo,
  STResults_CardWithFiltersWrapper_Right
} from "./styles/STResults_CardWithFiltersWrapper"
import { STResults_CardWithFiltersWrapper } from "./styles/STResults_CardWithFiltersWrapper.js"

export const STResults_CardWithFilters = () => {
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSpeechtherapist({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  const { dataF, filtersF } = useORG_Ctx_FetchWithFilters()

  return (
    <>
      {dataF &&
        Array.isArray(filtersF) &&
        dataF.allData.map((everySingleValue, i) => {
          let accepts = filtersF[i].accepts.map((x) => x[0].toUpperCase() + x.slice(1))

          let agesServed = filtersF[i].agesServed
          let diagnoses = filtersF[i].diagnoses.map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let languages = filtersF[i].languages.map((x) => x[0].toUpperCase() + x.slice(1))

          let serviceSetting = filtersF[i].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1))
          return (
            <STResults_CardWithFiltersWrapper key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
              <STResults_CardWithFiltersWrapper_Left>
                <STResults_CardWithFiltersWrapper_Left_LeftImage>
                  <Image
                    src={everySingleValue.picture.large}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                  />
                  <Verified />
                </STResults_CardWithFiltersWrapper_Left_LeftImage>

                <STResults_CardWithFiltersWrapper_Left_LeftInfo>
                  <STResults_CardPhone phoneNumber={everySingleValue.phone} />
                  <STResults_CardEmail email={everySingleValue.email} />
                  <STResults_CardLocation
                    locationCity={everySingleValue.location.city}
                    locationStreetNumber={everySingleValue.location.street.number}
                    locationStreetName={everySingleValue.location.street.name}
                    locationState={everySingleValue.location.state}
                    howFar={filtersF[i].distance}
                  />
                </STResults_CardWithFiltersWrapper_Left_LeftInfo>
              </STResults_CardWithFiltersWrapper_Left>

              <STResults_CardWithFiltersWrapper_Right>
                <BookmarkSaveSTSvg tabIndex={0} />

                <H3>
                  {everySingleValue.name.first} {everySingleValue.name.last}
                </H3>

                <Tooltip />

                <StarsRatingReview
                  rating={filtersF[i].rating}
                  reviews={filtersF[i].reviews}
                />

                <FriendlyDiagnoses diagnoses={diagnoses} />

                <STResults_CardInfo
                  title="Ages served"
                  dataToShow={agesServed}
                />

                <STResults_CardInfo
                  title="Languages"
                  dataToShow={languages}
                />

                <STResults_CardInfo
                  title="Years of Practice"
                  dataToShow={filtersF[i].yearsOfPractice}
                />

                <STResults_CardInfo
                  title="Service Setting"
                  dataToShow={serviceSetting}
                />

                <STResults_CardInfo
                  title="Accepts"
                  dataToShow={accepts}
                />

                <span onClick={(e) => goToDynamic(e, everySingleValue, filtersF[i])}>
                  <ButtonSmall secondary>More details</ButtonSmall>
                </span>
              </STResults_CardWithFiltersWrapper_Right>
            </STResults_CardWithFiltersWrapper>
          )
        })}
    </>
  )
}
