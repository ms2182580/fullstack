import { useEffect, useState } from "react"
import { ORGLanding_CC, ORGLanding_Doctors, ORGLanding_ST } from "../../../../../assets/Icons/index"
import { useORG_Ctx_FetchNoFilters } from "../../../../../context/ORG_CtxFetchNoFilters_Provider"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review"
import { useFetchNoFilters } from "../../../../../utils/ORG_useFetchNoFilters"
import { SpecificCard } from "./SpecificCard.js"
import { ThreeCardsLandingWrapper } from "./styles/ThreeCardsLandingWrapper"

export const ThreeCardsLanding = ({
  setMustShowResults,
  dispatch,
  mustShowResults
}) => {
  const { shouldFetchDesktopNoFilters, setShouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFilters()

  useEffect(() => {
    setShouldFetchDesktopNoFilters(true)
  }, [])

  const { data: userFetched, filters: filtersST } = useFetchNoFilters(1, 3, "landingThreeCardsHere → 3", shouldFetchDesktopNoFilters)

  const [reviews, setReviews] = useState({})
  const [dataToShare, setDataToShare] = useState({})

  useEffect(() => {
    if (userFetched !== undefined) {
      const theReview_one = ORG_ST_Review(userFetched.allData[0].name.first, userFetched.allData[0].name.last, 1)
      const theReview_two = ORG_ST_Review(userFetched.allData[1].name.first, userFetched.allData[1].name.last, 1)
      const theReview_three = ORG_ST_Review(userFetched.allData[2].name.first, userFetched.allData[2].name.last, 1)

      setReviews(() => ({ first: theReview_one, second: theReview_two, third: theReview_three }))

      const data_one = {
        name: {
          first: userFetched.allData[0].name.first,
          last: userFetched.allData[0].name.last
        },

        location: {
          city: userFetched.allData[0].location.city,
          state: userFetched.allData[0].location.state,
          street: {
            number: userFetched.allData[0].location.street.number,
            name: userFetched.allData[0].location.street.name
          }
        },
        picture: {
          large: userFetched.allData[0].picture.large
        },
        phone: userFetched.allData[0].cell,
        email: userFetched.allData[0].email,
        id: {
          name: userFetched.allData[0].id.name,
          value: userFetched.allData[0].id.value
        },
        stars: filtersST[0].rating,
        reviewsCount: filtersST[0].reviews,
        filters: filtersST[0]
      }

      const data_two = {
        name: {
          first: userFetched.allData[1].name.first,
          last: userFetched.allData[1].name.last
        },
        location: {
          city: userFetched.allData[1].location.city,
          state: userFetched.allData[1].location.state,
          street: {
            number: userFetched.allData[1].location.street.number,
            name: userFetched.allData[1].location.street.name
          }
        },
        picture: {
          large: userFetched.allData[1].picture.large
        },
        phone: userFetched.allData[1].cell,
        email: userFetched.allData[1].email,
        id: {
          name: userFetched.allData[1].id.name,
          value: userFetched.allData[1].id.value
        },
        stars: filtersST[1].rating,
        reviewsCount: filtersST[1].reviews,
        filters: filtersST[1]
      }
      const data_three = {
        name: {
          first: userFetched.allData[2].name.first,
          last: userFetched.allData[2].name.last
        },
        location: {
          city: userFetched.allData[2].location.city,
          state: userFetched.allData[2].location.state,
          street: {
            number: userFetched.allData[2].location.street.number,
            name: userFetched.allData[2].location.street.name
          }
        },
        picture: {
          large: userFetched.allData[2].picture.large
        },
        phone: userFetched.allData[2].cell,
        email: userFetched.allData[2].email,
        id: {
          name: userFetched.allData[2].id.name,
          value: userFetched.allData[2].id.value
        },
        stars: filtersST[2].rating,
        reviewsCount: filtersST[2].reviews,
        filters: filtersST[2]
      }

      setDataToShare(() => ({ first: data_one, second: data_two, third: data_three }))
    }
  }, [userFetched])

  const [whichWasClick, setWhichWasClick] = useState()

  return (
    <ThreeCardsLandingWrapper
      mustShowResults={mustShowResults}
      whichWasClick={whichWasClick}>
      <SpecificCard
        title="Therapeutic Services"
        icon={ORGLanding_ST}
        setMustShowResults={setMustShowResults}
        dispatch={dispatch}
        dataToDispatch={[{ data: dataToShare, reviews: reviews }]}
        mustShowResults={mustShowResults}
        numberCard={0}
        setWhichWasClick={setWhichWasClick}
      />
      <SpecificCard
        inProgress={true}
        title="Doctors"
        icon={ORGLanding_Doctors}
        setMustShowResults={setMustShowResults}
        dispatch={dispatch}
        dataToDispatch={[]}
        mustShowResults={mustShowResults}
        numberCard={1}
        setWhichWasClick={setWhichWasClick}
      />
      <SpecificCard
        inProgress={true}
        title="Community Classes"
        icon={ORGLanding_CC}
        setMustShowResults={setMustShowResults}
        dispatch={dispatch}
        dataToDispatch={[]}
        mustShowResults={mustShowResults}
        numberCard={2}
        setWhichWasClick={setWhichWasClick}
      />
    </ThreeCardsLandingWrapper>
  )
}

// export async function getServerSideProps() {
//   try {
//     const jsonData = await ORG_fetchSpeechTherapists(`https://randomuser.me/api/?results=3&nat=us&page=1`)

//     return {
//       props: { jsonData }
//     }
//   } catch (error) {
//     console.error("Some error", error)
//     return {
//       props: {
//         error: true,
//         message: error
//       }
//     }
//   }
// }
