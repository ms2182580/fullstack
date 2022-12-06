import Image from "next/image"
import { useRouter } from "next/router"
import { useORG_Ctx_IndividualSpeechtherapist } from "../../../context/ORG_Ctx_IndividualSpeechtherapist"
import {
  EverySingleSpeechTherapistWrapper,
  EverySingleSpeechTherapistWrapper_Card,
  EverySingleSpeechTherapistWrapper_Left,
  EverySingleSpeechTherapistWrapper_Right,
  EverySPT_LeftImage,
  EverySPT_LeftInfo
} from "./styles/EverySingleSpeechTherapistWrapper"
import { HeaderSPList } from "./HeaderSPList.js"
import {
  EverySingleSpeechTherapist_Phone,
  EverySingleSpeechTherapist_Email,
  EverySingleSpeechTherapist_Location
} from "./SingleSpeechtherapistComponents_Left.js"
import {
  FriendlyDiagnoses,
  Tooltip,
  StarsRatingAndReview
} from "./SingleSpeechtherapistComponents_Right"
import { Verified } from "./Verified"
import { BookmarkSaveSTSvg } from "../../../assets/Icons"
import { H3 } from "../../ui/heading_body_text/HeaderFonts"
import { ButtonSmall } from "../../ui/buttons/general"
import TherapistInfoSecondPage from "./TherapistInfoSecondPage"
import { useEffect, useState } from "react"
import { useORG_Ctx_PaginationAndHowMuchShow } from "../../../context/ORG_Ctx_PaginationAndHowMuchShow"
import { ORG_Sortyby } from "../../../utils/ORG_Sortyby"
import { useFetchFiltered } from "../../../utils/ORG_dummydataFiltered_speechtherapists"

export const SpeechtherapistList = ({ filterData, setFilterData }) => {
  // console.log('👌 filterData:', filterData)
  const [filtersLeft, setFiltersLeft] = useState()
  const router = useRouter()
  const { setSpeechtherapist } = useORG_Ctx_IndividualSpeechtherapist()

  const {
    pagination,
    userFetched,
    setData,
    filtersST,
    setFilters,
    actualSort
  } = useORG_Ctx_PaginationAndHowMuchShow()

  const goToDynamic = (e, everySingleValue) => {
    setSpeechtherapist([everySingleValue])
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }
  useEffect(() => {
    const { newOrderData, newOrderFilters } = ORG_Sortyby(
      actualSort,
      filtersST,
      userFetched,
      "SpeechtherapistList"
    )
    setData((prevState) => ({
      ...prevState,
      allData: newOrderData
    }))
    setFilters(newOrderFilters)
  }, [actualSort, pagination])

  // console.log('filterData:', filterData)
  const {
    dataF,
    filtersF,
    setDataF,
    setFiltersF,
    actualSortF,
    setActualSortF
  } = useFetchFiltered(
    "https://randomuser.me/api/?results=10&nat=us",
    filterData
  )
  console.log(
    // setDataF,
    // dataF,
    // filtersF
    // actualSortF,
    // setFiltersF,
    // setActualSortF
    )
    

  useEffect(() => {
    // console.log("Filter data change", filterData)
    console.log(dataF, filtersF)

    setFiltersLeft(filterData)

    /* 
    Simulate the request to the API with the data used
    */
  }, [dataF, filtersF, setDataF, setFiltersF])

  return (
    <EverySingleSpeechTherapistWrapper>
      <HeaderSPList />

      {userFetched &&
        Array.isArray(filtersST) &&
        userFetched.allData.map((everySingleValue, i) => {
          let accepts = filtersST[i].accepts.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let agesServed = filtersST[i].agesServed
          let diagnoses = filtersST[i].diagnoses.map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let languages = filtersST[i].languages.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let meetingFormat = filtersST[i].meetingFormat
          let serviceSetting = filtersST[i].serviceSetting.map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let sessionType = filtersST[i].sessionType
          let transportation = filtersST[i].transportation

          return (
            <EverySingleSpeechTherapistWrapper_Card
              key={`${everySingleValue.id.name}${everySingleValue.id.value}`}
            >
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
                    howFar={filtersST[i].distance}
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
                  rating={filtersST[i].rating}
                  reviews={filtersST[i].reviews}
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
                  dataToShow={filtersST[i].yearsOfPractice}
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
    </EverySingleSpeechTherapistWrapper>
  )
}
