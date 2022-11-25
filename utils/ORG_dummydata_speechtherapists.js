import { useEffect, useState } from "react"
import {
  ORG_Filterdata_Accepts,
  ORG_Filterdata_AgesServed,
  ORG_Filterdata_Diagnoses,
  ORG_Filterdata_Distance,
  ORG_Filterdata_Languages,
  ORG_Filterdata_MeetingFormat,
  ORG_Filterdata_ProviderType,
  ORG_Filterdata_Rating,
  ORG_Filterdata_Reviews,
  ORG_Filterdata_ServiceSetting,
  ORG_Filterdata_SessionType,
  ORG_Filterdata_Transportation,
  ORG_Filterdata_YoP
} from "./ORG_Filterdata"

export const useFetch = (url, pagination) => {
  // This code is for debuggin purposes. When is uncommented you have to comment the code below of them to display always the loading state

  // const data = {undefined}
  // return {data}

  const [data, setData] = useState()
  const [filters, setFilters] = useState([])

  useEffect(() => {
    let getData = { actualPage: "", allData: "" }

    let getFilters = { filters: [] }

    fetch(`${url}${pagination}`)
      .then((x) => x.json())
      .then((x) => {
        getData.actualPage = x.info.page
        getData.allData = x.results
        let howMuchGet = getData.allData.length
        for (let index = 0; index < howMuchGet; index++) {
          const distance = ORG_Filterdata_Distance()
          const rating = ORG_Filterdata_Rating()
          const reviews = ORG_Filterdata_Reviews()
          const diagnoses = ORG_Filterdata_Diagnoses()
          const agesServed = ORG_Filterdata_AgesServed()
          const languages = ORG_Filterdata_Languages()
          const yearsOfPractice = ORG_Filterdata_YoP()
          const serviceSetting = ORG_Filterdata_ServiceSetting()
          const accepts = ORG_Filterdata_Accepts()
          const meetingFormat = ORG_Filterdata_MeetingFormat()
          const sessionType = ORG_Filterdata_SessionType()
          const transportation = ORG_Filterdata_Transportation()
          const providerType = ORG_Filterdata_ProviderType()

          getFilters.filters = [
            ...getFilters.filters,
            {
              distance: distance,
              rating: rating,
              reviews: reviews,
              diagnoses: diagnoses,
              agesServed: agesServed,
              languages: languages,
              yearsOfPractice: yearsOfPractice,
              serviceSetting: serviceSetting,
              accepts: accepts,
              meetingFormat: meetingFormat,
              sessionType: sessionType,
              transportation: transportation,
              providerType: providerType,
              CCC_SLP:
                "CCC-SLP Certificate of Clinical Competence in Speech Language Pathology - Nationally recognized professional from the American Speech-Language-Hearing Association (ASHA)."
            }
          ]
        }
        setData(getData)
        setFilters(getFilters)
      })
  }, [url, pagination])

  useEffect(() => {
    if (filters.length !== 0 && filters.filters !== undefined) {
      const actualDistanceMiles = ["0-5", "5-10", "10-20", "+20"]
      let filtersOrder = []

      for (const y of actualDistanceMiles) {
        for (const x of filters.filters) {
          if (y === x.distance) {
            filtersOrder.push(x)
          }
        }

        if (filtersOrder.length === filters.filters.length) {
          setFilters(filtersOrder)
          break
        }
      }
    }
  }, [data])

  return { data,setData,  filters, setFilters }
}
