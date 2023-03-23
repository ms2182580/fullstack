import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { ORG_Sortyby } from "../../../../../utils/ORG_Sortyby"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { FriendlyDiagnoses } from "../../../friendlyDiagnoses/FriendlyDiagnoses"
import { Share } from "../../../share/Share"
import { StarsRatingReview } from "../../../stars-rating-review/StartsRatingReview"
import { Tooltip } from "../../../tooltip/Tooltip"
import { Verified } from "../../../verified/Verified"
import {
  ST_CardWrapper,
  ST_CardWrapper_Left,
  ST_CardWrapper_Left_LeftImage,
  ST_CardWrapper_Left_LeftInfo,
  ST_CardWrapper_Right
} from "../../styles/ST_CardWrapper"
import { ST_CardEmail } from "../../ST_CardEmail"
import { ST_CardLocation } from "../../ST_CardLocation"
import { ST_CardPhone } from "../../ST_CardPhone"
import { ST_CardWebsite } from "../../ST_CardWebsite"
import { ST_CardInfo } from "../ST_CardInfo"

export const STResults_CardNoFilters = () => {
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSpeechtherapist({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  const { pagination, userFetched, setData, filtersST, setFilters, actualSort } = useORG_Ctx_FetchNoFilters()

  console.log("userFetched:", userFetched)

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
          let accepts = filtersST[i].accepts.map((x) => x[0].toUpperCase() + x.slice(1))

          let agesServed = filtersST[i].agesServed
          let diagnoses = filtersST[i].diagnoses.map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let languages = filtersST[i].languages.map((x) => x[0].toUpperCase() + x.slice(1))

          let serviceSetting = filtersST[i].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1))
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
                <Share/>

                <H3>
                  {everySingleValue.name.first} {everySingleValue.name.last}
                </H3>

                <Tooltip />

                <StarsRatingReview
                  rating={filtersST[i].rating}
                  reviews={filtersST[i].reviews}
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
                  dataToShow={filtersST[i].yearsOfPractice}
                />

                <ST_CardInfo
                  title="Service Setting"
                  dataToShow={serviceSetting}
                />

                <ST_CardInfo
                  title="Accepts"
                  dataToShow={accepts}
                />

                <span onClick={(e) => goToDynamic(e, everySingleValue, filtersST[i])}>
                  <ButtonSmall secondary>More details</ButtonSmall>
                </span>
              </ST_CardWrapper_Right>
            </ST_CardWrapper>
          )
        })}
    </>
  )
}
