import Image from "next/image"
import { useRouter } from "next/router"
import { BookmarkSaveSTSvg } from "../../../assets/Icons"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_filtersLeft } from "../../../context/ORG_CtxFiltersLeft_Provider"
import { useORG_Ctx_FetchWithFilters } from "../../../context/ORG_CtxFetchWithFilters_Provider"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
// import { FetchFiltered } from "../../../utils/ORG_dummydataFiltered_speechtherapists"
import { ButtonSmall } from "../../ui/buttons/general"
import { H3 } from "../../ui/heading_body_text/HeaderFonts"
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
  EverySingleSpeechTherapistWrapper_Card,
  EverySingleSpeechTherapistWrapper_Left,
  EverySingleSpeechTherapistWrapper_Right,
  EverySPT_LeftImage,
  EverySPT_LeftInfo
} from "./styles/EverySingleSpeechTherapistWrapper"
import TherapistInfoSecondPage from "./TherapistInfoSecondPage"
import { Verified } from "./Verified"

export const SpeechTherapistsCardWithFilter = (
  {
    // filterData
  }
) => {
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()
  const goToDynamic = (e, everySingleValue) => {
    setSpeechtherapist([everySingleValue])
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  // const { pagination } = useORG_Ctx_FetchNoFilters()

  // const {userFetched:dataF, filtersST:filtersF} = useORG_Ctx_FetchWithFilters()
  // const {
  //   filtersLeftContext: filterData,
  //   setFiltersLeftContext: setFilterData
  // } = useORG_Ctx_filtersLeft()

  // console.log("filterData:", filterData)

  // const {
  //   dataF,
  //   filtersF,
  //   setDataF,
  //   setFiltersF,
  //   actualSortF,
  //   setActualSortF
  // } = FetchFiltered(
  //   "https://randomuser.me/api/?results=10&nat=us",
  //   filterData,
  //   pagination
  // )

  const {
    dataF,
    filtersF,
  } = useORG_Ctx_FetchWithFilters()

  // !FH Make this a context to use in "CustomDropdownFilters"

  // return null

  return (
    <>
      {dataF &&
        Array.isArray(filtersF) &&
        dataF.allData.map((everySingleValue, i) => {
          let accepts = filtersF[i].accepts.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let agesServed = filtersF[i].agesServed
          let diagnoses = filtersF[i].diagnoses.map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let languages = filtersF[i].languages.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let meetingFormat = filtersF[i].meetingFormat
          let serviceSetting = filtersF[i].serviceSetting.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let sessionType = filtersF[i].sessionType
          let transportation = filtersF[i].transportation

          return (
            <EverySingleSpeechTherapistWrapper_Card
              key={`${everySingleValue.id.name}${everySingleValue.id.value}`}>
              <EverySingleSpeechTherapistWrapper_Left>
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
                    howFar={filtersF[i].distance}
                  />
                </EverySPT_LeftInfo>
              </EverySingleSpeechTherapistWrapper_Left>

              <EverySingleSpeechTherapistWrapper_Right>
                <BookmarkSaveSTSvg tabIndex={0} />

                <H3>
                  {everySingleValue.name.first} {everySingleValue.name.last}
                </H3>

                <Tooltip />

                <StarsRatingAndReview
                  rating={filtersF[i].rating}
                  reviews={filtersF[i].reviews}
                />

                <FriendlyDiagnoses diagnoses={diagnoses} />

                <TherapistInfoSecondPage
                  title="Ages served"
                  dataToShow={agesServed}
                />

                <TherapistInfoSecondPage
                  title="Languages"
                  dataToShow={languages}
                />

                <TherapistInfoSecondPage
                  title="Years of Practice"
                  dataToShow={filtersF[i].yearsOfPractice}
                />

                <TherapistInfoSecondPage
                  title="Service Setting"
                  dataToShow={serviceSetting}
                />

                <TherapistInfoSecondPage title="Accepts" dataToShow={accepts} />

                <span onClick={(e) => goToDynamic(e, everySingleValue)}>
                  <ButtonSmall secondary>More details</ButtonSmall>
                </span>
              </EverySingleSpeechTherapistWrapper_Right>
            </EverySingleSpeechTherapistWrapper_Card>
          )
        })}
    </>
  )
}
