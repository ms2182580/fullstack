import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { ORG_FILTERS_KEYS } from "../../../../../utils/ORG_FiltersCategories"
import { ORG_Sortyby } from "../../../../../utils/ORG_Sortyby"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { H2 } from "../../../../ui/heading_body_text/HeaderFonts"
import { Share } from "../../../share/Share"
import { StarsRatingReview } from "../../../stars-rating-review/StartsRatingReview"
import { Tooltip } from "../../../tooltip/Tooltip"
import { Verified } from "../../../verified/Verified"
import { ST_CardCity } from "../../ST_CardCity"
import { ST_CardEmail } from "../../ST_CardEmail"
import { ST_CardLocation } from "../../ST_CardLocation"
import { ST_CardPhone } from "../../ST_CardPhone"
import { ST_CardWebsite } from "../../ST_CardWebsite"
import {
  ST_CardWrapper,
  ST_CardWrapper_Left,
  ST_CardWrapper_Left_LeftImage,
  ST_CardWrapper_Left_LeftInfo,
  ST_CardWrapper_Right
} from "../../styles/ST_CardWrapper"
import { ST_CardInfo } from "../ST_CardInfo"
import { ST_CardInfoPayment } from "../ST_CardInfoPayment"

export const STResults_CardNoFilters = () => {
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSpeechtherapist({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  const { pagination, userFetched, setData, filtersST, setFilters, actualSort } = useORG_Ctx_FetchNoFilters()

  useEffect(() => {
    const { newOrderData, newOrderFilters } = ORG_Sortyby(actualSort, filtersST, userFetched, "SpeechtherapistList")
    setData((prevState) => ({
      ...prevState,
      allData: newOrderData
    }))
    setFilters(newOrderFilters)
  }, [actualSort, pagination])

  return (
    <>
      {userFetched &&
        Array.isArray(filtersST) &&
        userFetched.allData.map((everySingleValue, i) => {
          let insurance = filtersST[i][ORG_FILTERS_KEYS.insurance.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )
          let insuranceFormatted = insurance.length > 1 ? insurance : insurance[0]

          let diagnosis = filtersST[i][ORG_FILTERS_KEYS.diagnosis.updateState].map((x) => {
            if (x !== "Other") return `${x}`
            return x
          })
          let language = filtersST[i][ORG_FILTERS_KEYS.language.updateState].map((x) => x[0].toUpperCase() + x.slice(1))

          let serviceSetting = filtersST[i][ORG_FILTERS_KEYS.serviceSetting.updateState].map(
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
                  <ST_CardWebsite
                    firstName={everySingleValue.name.first}
                    lastName={everySingleValue.name.last}
                  />

                  <ST_CardLocation
                    locationCity={everySingleValue.location.city}
                    locationStreetNumber={everySingleValue.location.street.number}
                    locationStreetName={everySingleValue.location.street.name}
                    locationState={everySingleValue.location.state}
                    howFar={filtersST[i].distance}
                  />
                </ST_CardWrapper_Left_LeftInfo>
              </ST_CardWrapper_Left>

              <ST_CardWrapper_Right>
                <Share />

                <H2 bold>
                  {everySingleValue.name.first} {everySingleValue.name.last}, <span>CCC-SLP</span>
                </H2>

                <Tooltip />

                <ST_CardCity city={everySingleValue.location.city} />

                <StarsRatingReview
                  rating={filtersST[i].rating}
                  reviews={filtersST[i].reviews}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.diagnosis.titleToShowCard}
                  dataToShow={diagnosis}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.agesServed.titleToShow}
                  dataToShow={filtersST[i][ORG_FILTERS_KEYS.agesServed.updateState]}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.language.titleToShow}
                  dataToShow={language}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.yearsOfPractice.titleToShowCard}
                  dataToShow={filtersST[i][ORG_FILTERS_KEYS.yearsOfPractice.updateState]}
                />

                <ST_CardInfo
                  title={ORG_FILTERS_KEYS.serviceSetting.titleToShow}
                  dataToShow={serviceSetting}
                />

                <ST_CardInfoPayment
                  title={ORG_FILTERS_KEYS.insurance.titleToShowCard}
                  dataToShow={insuranceFormatted}
                />

                <div>
                  <ButtonSmall secondary>Save to list</ButtonSmall>

                  <span onClick={(e) => goToDynamic(e, everySingleValue, filtersST[i])}>
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
