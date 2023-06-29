import Image from "next/image"
import { useRouter } from "next/router"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { useORG_Ctx_STDataThirdpage_D } from "../../../../../context/ORG_Ctx_STDataThirdpageDesktop_Provider"
import { ORG_FILTERS_KEYS_D } from "../../../../../utils/ORG_FiltersCategories"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { H2 } from "../../../../ui/heading_body_text/HeaderFonts"
import { Share } from "../../../share/Share"
import { StarsRatingReview_D } from "../../../stars-rating-review/desktop/StarsRatingReview_D"
import { TooltipDesktop } from "../../../tooltip/TooltipDesktop"
import { Verified } from "../../../verified/Verified"
import { ST_D_CardCity } from "../../ST_D_CardCity"
import { ST_D_CardEmail } from "../../ST_D_CardEmail"
import { ST_D_CardLocation } from "../../ST_D_CardLocation"
import { ST_D_CardPhone } from "../../ST_D_CardPhone"
import { ST_D_CardWebsite } from "../../ST_D_CardWebsite"
import {
  ST_D_CardWrapper,
  ST_D_CardWrapper_Left,
  ST_D_CardWrapper_Left_LeftImage,
  ST_D_CardWrapper_Left_LeftInfo,
  ST_D_CardWrapper_Right
} from "../../styles/ST_D_CardWrapper"
import { ST_D_CardInfo } from "./ST_D_CardInfo"
import { ST_D_CardInfoPayment } from "./ST_D_CardInfoPayment"

export const ST_D_Results_CardNoFilters = () => {
  const router = useRouter()
  /* 
  This is used for move the view of the user to the next page
  */
  const { setSTDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_D({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  const { pagination, userFetched, setData, filtersST, setFilters, actualSort } = useORG_Ctx_FetchNoFiltersDesktop()

  // useEffect(() => {
  //   const { newOrderData, newOrderFilters } = ORG_SortybyFunction_D(actualSort, filtersST, userFetched, "SpeechtherapistList")
  //   setData((prevState) => ({
  //     ...prevState,
  //     allData: newOrderData
  //   }))
  //   setFilters(newOrderFilters)
  // }, [actualSort, pagination])

  return (
    <>
      {userFetched &&
        Array.isArray(filtersST) &&
        userFetched.allData.map((everySingleValue, i) => {
          let insurance = filtersST[i][ORG_FILTERS_KEYS_D.insurance.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )
          let insuranceFormatted = insurance.length > 1 ? insurance : insurance[0]

          let diagnosis = filtersST[i][ORG_FILTERS_KEYS_D.diagnosis.updateState].map((x) => {
            if (x !== "Other") return `${x}`
            return x
          })
          let language = filtersST[i][ORG_FILTERS_KEYS_D.language.updateState].map((x) => x[0].toUpperCase() + x.slice(1))

          let serviceSetting = filtersST[i][ORG_FILTERS_KEYS_D.serviceSetting.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          return (
            <ST_D_CardWrapper key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
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
                  <ST_D_CardPhone phoneNumber={everySingleValue.phone} />
                  <ST_D_CardEmail email={everySingleValue.email} />
                  <ST_D_CardWebsite
                    firstName={everySingleValue.name.first}
                    lastName={everySingleValue.name.last}
                  />

                  <ST_D_CardLocation
                    locationCity={everySingleValue.location.city}
                    locationStreetNumber={everySingleValue.location.street.number}
                    locationStreetName={everySingleValue.location.street.name}
                    locationState={everySingleValue.location.state}
                    howFar={filtersST[i].distance}
                  />
                </ST_D_CardWrapper_Left_LeftInfo>
              </ST_D_CardWrapper_Left>

              <ST_D_CardWrapper_Right>
                <Share />

                <H2 bold>
                  {everySingleValue.name.first} {everySingleValue.name.last}, <span>CCC-SLP</span>
                </H2>

                <TooltipDesktop />

                <ST_D_CardCity city={everySingleValue.location.city} />

                <StarsRatingReview_D
                  rating={filtersST[i].rating}
                  reviews={filtersST[i].reviews}
                />


                <ST_D_CardInfo
                  title={ORG_FILTERS_KEYS_D.diagnosis.titleToShowCard}
                  dataToShow={diagnosis}
                />

                <ST_D_CardInfo
                  title={ORG_FILTERS_KEYS_D.agesServed.titleToShow}
                  dataToShow={filtersST[i][ORG_FILTERS_KEYS_D.agesServed.updateState]}
                />

                <ST_D_CardInfo
                  title={ORG_FILTERS_KEYS_D.language.titleToShow}
                  dataToShow={language}
                />

                <ST_D_CardInfo
                  title={ORG_FILTERS_KEYS_D.yearsOfPractice.titleToShowCard}
                  dataToShow={filtersST[i][ORG_FILTERS_KEYS_D.yearsOfPractice.updateState]}
                />

                <ST_D_CardInfo
                  title={ORG_FILTERS_KEYS_D.serviceSetting.titleToShow}
                  dataToShow={serviceSetting}
                />

                <ST_D_CardInfoPayment
                  title={ORG_FILTERS_KEYS_D.insurance.titleToShowCard}
                  dataToShow={insuranceFormatted}
                />

                <div>
                  <ButtonSmall secondary>Save to list</ButtonSmall>

                  <span onClick={(e) => goToDynamic(e, everySingleValue, filtersST[i])}>
                    <ButtonSmall>See Availability</ButtonSmall>
                  </span>
                </div>
              </ST_D_CardWrapper_Right>
            </ST_D_CardWrapper>
          )
        })}
    </>
  )
}
