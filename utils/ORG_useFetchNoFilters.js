import { useEffect, useState } from "react"
import {
  ORG_Filterdata_AgesServed,
  ORG_Filterdata_Diagnosis,
  ORG_Filterdata_Distance,
  ORG_Filterdata_Insurance,
  ORG_Filterdata_Languages,
  ORG_Filterdata_MeetingFormat,
  ORG_Filterdata_ProviderType,
  ORG_Filterdata_Rating,
  ORG_Filterdata_Reviews,
  ORG_Filterdata_ServiceSetting,
  ORG_Filterdata_SessionType,
  ORG_Filterdata_YoP
} from "./ORG_FilterdataFunctions"

export const useFetchNoFilters = (pagination = 1, howMuch = 10, whichOne, shouldFetch = true) => {
  const [data, setData] = useState()
  const [filters, setFilters] = useState([])
  const [actualSort, setActualSort] = useState("Distance")
  // const { pathname } = useRouter()
  // const isORG = ORG_isORG(pathname)


  useEffect(() => {
    if (shouldFetch) {
      let getData = { actualPage: "", allData: "" }

      let getFilters = { filters: [] }

      const fetchData = async () => {
        try {
          const theFetch = await fetch(
            `/api/randomUser?results=${howMuch}&pagination=${pagination}&whichOne=${whichOne}`
          )
          const toJson = await theFetch.json()
          getData.actualPage = toJson.info.page
          getData.allData = toJson.results
          let howMuchGet = getData.allData.length

          for (let index = 0; index < howMuchGet; index++) {
            const agesServed = ORG_Filterdata_AgesServed()
            const diagnosis = ORG_Filterdata_Diagnosis()
            const distance = ORG_Filterdata_Distance()
            const insurance = ORG_Filterdata_Insurance()
            const language = ORG_Filterdata_Languages()
            const meetingFormat = ORG_Filterdata_MeetingFormat()
            const providerType = ORG_Filterdata_ProviderType()
            const rating = ORG_Filterdata_Rating()
            const reviews = ORG_Filterdata_Reviews()
            const serviceSetting = ORG_Filterdata_ServiceSetting()
            const sessionType = ORG_Filterdata_SessionType()
            const yearsOfPractice = ORG_Filterdata_YoP()

            getFilters.filters = [
              ...getFilters.filters,
              {
                agesServed: agesServed,
                diagnosis: diagnosis,
                distance: distance,
                insurance,
                insurance,
                language: language,
                meetingFormat: meetingFormat,
                providerType: providerType,
                rating: rating,
                reviews: reviews,
                serviceSetting: serviceSetting,
                sessionType: sessionType,
                yearsOfPractice: yearsOfPractice,
                CCC_SLP:
                  "CCC-SLP Certificate of Clinical Competence in Speech Language Pathology - Nationally recognized professional from the American Speech-Language-Hearing Association (ASHA)."
              }
            ]
          }

          setData(getData)
          setFilters(getFilters.filters)
        } catch (error) {
          console.warn("error:", error, whichOne)
        } finally {
          // console.dir("Finally No Filters")
          // console.log('getData:', getData.allData)
          // console.log('getFilters:', getFilters.filters)
          /* 
          !FH
          Add a loading initia value to false, when start the fetch is set to true and finally is return to false
          With that loading should close the when it's false filters
           */
        }
      }
      fetchData()


    }
  }, [pagination, howMuch, shouldFetch])

  return { data, setData, filters, setFilters, actualSort, setActualSort }
}
