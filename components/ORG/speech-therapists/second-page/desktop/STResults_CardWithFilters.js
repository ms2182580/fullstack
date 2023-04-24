import Image from "next/image"
import { useRouter } from "next/router"
import { BookmarkSaveSTSvg } from "../../../../../assets/Icons"
import { useORG_Ctx_FetchWithFilters } from "../../../../../context/ORG_CtxFetchWithFilters_Provider"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { ORG_FILTERS_KEYS } from "../../../../../utils/ORG_FiltersCategories"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
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
import { ST_CardInfoPayment } from "../ST_CardInfoPayment"

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
          let insurance = filtersF[i][ORG_FILTERS_KEYS.insurance.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let diagnosis = filtersF[i][ORG_FILTERS_KEYS.diagnosis.updateState].map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })

          // console.log('diagnosis:', diagnosis)

          let language = filtersF[i][ORG_FILTERS_KEYS.language.updateState].map((x) => x[0].toUpperCase() + x.slice(1))

          let serviceSetting = filtersF[i][ORG_FILTERS_KEYS.serviceSetting.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

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

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.diagnosis.titleToShowCard}
                  dataToShow={diagnosis}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.agesServed.titleToShow}
                  dataToShow={filtersF[i][ORG_FILTERS_KEYS.agesServed.updateState]}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.language.titleToShow}
                  dataToShow={language}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.yearsOfPractice.titleToShowCard}
                  dataToShow={filtersF[i][ORG_FILTERS_KEYS.yearsOfPractice.updateState]}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.serviceSetting.titleToShow}
                  dataToShow={serviceSetting}
                />

                <ST_CardInfoPayment
                  title={ORG_FILTERS_KEYS.insurance.titleToShowCard}
                  dataToShow={insurance}
                />

                <div>
                  <ButtonSmall secondary>Save to list</ButtonSmall>

                  <span onClick={(e) => goToDynamic(e, everySingleValue, filtersF[i])}>
                    <ButtonSmall>See Availability</ButtonSmall>
                  </span>
                </div>
              </ST_CardWrapper_Right>
            </ST_CardWrapper>
          )
        })}
    </>
  )
}
