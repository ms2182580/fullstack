import Image from "next/image"
import { useRouter } from "next/router"
import { useORG_Ctx_FetchWithFiltersDesktop } from "../../../../../context/ORG_CtxFetchWithFiltersDesktop_Provider"
import { useORG_Ctx_STDataThirdpage_D } from "../../../../../context/ORG_Ctx_STDataThirdpageDesktop_Provider"
import { ORG_FILTERS_KEYS_D } from "../../../../../utils/ORG_FiltersCategories"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { H2 } from "../../../../ui/heading_body_text/HeaderFonts"
import { Share } from "../../../share/Share"
import { StarsRatingReview_D } from "../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../verified/Verified"
import { ST_D_CardInfoPayment } from "./ST_D_CardInfoPayment"
import { ST_D_Results_CardCity } from "./ST_D_Results_CardCity"
import { ST_D_Results_CardEmail } from "./ST_D_Results_CardEmail"
import { ST_D_Results_CardInfo } from "./ST_D_Results_CardInfo"
import { ST_D_Results_CardLocation } from "./ST_D_Results_CardLocation"
import { ST_D_Results_CardPhone } from "./ST_D_Results_CardPhone"
import { ST_D_Results_CardWebsite } from "./ST_D_Results_CardWebsite"
import {
  ST_D_CardWrapper_Left,
  ST_D_CardWrapper_Left_LeftImage,
  ST_D_CardWrapper_Left_LeftInfo,
  ST_D_CardWrapper_Right,
  ST_D_Results_CardWrapper
} from "./styles/ST_D_Results_CardWrapper"

export const ST_D_Results_CardWithFilters = () => {
  const router = useRouter()
  const { setSTDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()

  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_D({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  const { userFetched: dataF, filtersST: filtersF } = useORG_Ctx_FetchWithFiltersDesktop()

  return (
    <>
      {dataF &&
        Array.isArray(filtersF) &&
        dataF.allData.map((everySingleValue, i) => {
          let insurance = filtersF[i][ORG_FILTERS_KEYS_D.insurance.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let diagnosis = filtersF[i][ORG_FILTERS_KEYS_D.diagnosis.updateState].map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })


          let language = filtersF[i][ORG_FILTERS_KEYS_D.language.updateState].map((x) => x[0].toUpperCase() + x.slice(1))

          let serviceSetting = filtersF[i][ORG_FILTERS_KEYS_D.serviceSetting.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          return (
            <ST_D_Results_CardWrapper
              key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
              <ST_D_CardWrapper_Left>
                <ST_D_CardWrapper_Left_LeftImage>
                  <Image
                    src={everySingleValue.picture.large}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                  />
                  <Verified />
                </ST_D_CardWrapper_Left_LeftImage>

                <ST_D_CardWrapper_Left_LeftInfo>
                  <ST_D_Results_CardPhone phoneNumber={everySingleValue.phone} />
                  <ST_D_Results_CardEmail email={everySingleValue.email} />
                  <ST_D_Results_CardWebsite
                    firstName={everySingleValue.name.first}
                    lastName={everySingleValue.name.last}
                  />
                  <ST_D_Results_CardLocation
                    locationCity={everySingleValue.location.city}
                    locationStreetNumber={everySingleValue.location.street.number}
                    locationStreetName={everySingleValue.location.street.name}
                    locationState={everySingleValue.location.state}
                    howFar={filtersF[i].distance}
                  />
                </ST_D_CardWrapper_Left_LeftInfo>
              </ST_D_CardWrapper_Left>

              <ST_D_CardWrapper_Right>
                <Share />

                <H2 bold>
                  {everySingleValue.name.first} {everySingleValue.name.last}, <span>CCC-SLP</span>
                </H2>



                <ST_D_Results_CardCity city={everySingleValue.location.city} />

                <StarsRatingReview_D
                  rating={filtersF[i].rating}
                  reviews={filtersF[i].reviews}
                />

                <ST_D_Results_CardInfo
                  title={ORG_FILTERS_KEYS_D.diagnosis.titleToShowCard}
                  dataToShow={diagnosis}
                />

                <ST_D_Results_CardInfo
                  title={ORG_FILTERS_KEYS_D.agesServed.titleToShow}
                  dataToShow={filtersF[i][ORG_FILTERS_KEYS_D.agesServed.updateState]}
                />

                <ST_D_Results_CardInfo
                  title={ORG_FILTERS_KEYS_D.language.titleToShow}
                  dataToShow={language}
                />

                <ST_D_Results_CardInfo
                  title={ORG_FILTERS_KEYS_D.yearsOfPractice.titleToShowCard}
                  dataToShow={filtersF[i][ORG_FILTERS_KEYS_D.yearsOfPractice.updateState]}
                />

                <ST_D_Results_CardInfo
                  title={ORG_FILTERS_KEYS_D.serviceSetting.titleToShow}
                  dataToShow={serviceSetting}
                />

                <ST_D_CardInfoPayment
                  title={ORG_FILTERS_KEYS_D.insurance.titleToShowCard}
                  dataToShow={insurance}
                />

                <div>
                  <ButtonSmall secondary>Save to list</ButtonSmall>

                  <span onClick={(e) => goToDynamic(e, everySingleValue, filtersF[i])}>
                    <ButtonSmall>See Availability</ButtonSmall>
                  </span>
                </div>
              </ST_D_CardWrapper_Right>
            </ST_D_Results_CardWrapper>
          )
        })}
    </>
  )
}
