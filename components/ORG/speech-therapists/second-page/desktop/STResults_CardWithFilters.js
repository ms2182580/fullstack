import Image from "next/image"
import { useRouter } from "next/router"
import { BookmarkSaveSTSvg } from "../../../../../assets/Icons"
import { useORG_Ctx_FetchWithFilters } from "../../../../../context/ORG_CtxFetchWithFilters_Provider"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { FriendlyDiagnoses } from "../../../friendlyDiagnoses/FriendlyDiagnoses"
import { StarsRatingReview } from "../../../stars-rating-review/StartsRatingReview"
import { Tooltip } from "../../../tooltip/Tooltip"
import { Verified } from "../../../verified/Verified"
import { ST_CardEmail } from "../../ST_CardEmail"
import { ST_CardLocation } from "../../ST_CardLocation"
import { ST_CardPhone } from "../../ST_CardPhone"
import {
  ST_CardWrapper,
  ST_CardWrapper_Left,
  ST_CardWrapper_Left_LeftImage,
  ST_CardWrapper_Left_LeftInfo,
  ST_CardWrapper_Right
} from "../../styles/ST_CardWrapper"
import { ST_CardInfo } from "../ST_CardInfo"

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
            <ST_CardWrapper key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
              <ST_CardWrapper_Left>
                <ST_CardWrapper_Left_LeftImage>
                  <Image
                    src={everySingleValue.picture.large}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                  />
                  <Verified />
                </ST_CardWrapper_Left_LeftImage>

                <ST_CardWrapper_Left_LeftInfo>
                  <ST_CardPhone phoneNumber={everySingleValue.phone} />
                  <ST_CardEmail email={everySingleValue.email} />
                  <ST_CardLocation
                  
                    locationCity={everySingleValue.location.city}
                    locationStreetNumber={everySingleValue.location.street.number}
                    locationStreetName={everySingleValue.location.street.name}
                    locationState={everySingleValue.location.state}
                    howFar={filtersF[i].distance}
                  />
                </ST_CardWrapper_Left_LeftInfo>
              </ST_CardWrapper_Left>

              <ST_CardWrapper_Right>
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

                <ST_CardInfo
                  title="Ages served"
                  dataToShow={agesServed}
                />

                <ST_CardInfo
                  title="Languages"
                  dataToShow={languages}
                />

                <ST_CardInfo
                  title="Years of Practice"
                  dataToShow={filtersF[i].yearsOfPractice}
                />

                <ST_CardInfo
                  title="Service Setting"
                  dataToShow={serviceSetting}
                />

                <ST_CardInfo
                  title="Accepts"
                  dataToShow={accepts}
                />

                <span onClick={(e) => goToDynamic(e, everySingleValue, filtersF[i])}>
                  <ButtonSmall secondary>More details</ButtonSmall>
                </span>
              </ST_CardWrapper_Right>
            </ST_CardWrapper>
          )
        })}
    </>
  )
}
