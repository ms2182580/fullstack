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
} from "./ORG_FilterdataSelection"

export const useFetchFiltered = (url, filtersSelected = {}) => {
  // This code is for debuggin purposes. When is uncommented you have to comment the code below of them to display always the loading state

  // const data = {undefined}
  // return {data}

  const [dataF, setDataF] = useState()
  const [filtersF, setFiltersF] = useState([])
  const [filtersRecibed, setFiltersRecibed] = useState({})
  const [actualSortF, setActualSortF] = useState("Nearest")
  
  console.log('💖filtersSelected:', filtersSelected)

  console.log('ORG_Filterdata_Distance(filtersSelected.distance):', ORG_Filterdata_Distance(filtersSelected.distance))

  useEffect(() => {
    let getData = { allData: "" }

    let getFilters = { filters: [] }

    fetch(`${url}`)
      .then((x) => x.json())
      .then((x) => {
        getData.allData = x.results
        let howMuchGet = getData.allData.length
        for (let index = 0; index < howMuchGet; index++) {
          const distance = ORG_Filterdata_Distance(filtersSelected.distance)
          const rating = ORG_Filterdata_Rating(filtersSelected.rating)
          const reviews = ORG_Filterdata_Reviews()
          const diagnoses = ORG_Filterdata_Diagnoses(filtersSelected.diagnoses)
          const agesServed = ORG_Filterdata_AgesServed(filtersSelected.agesServed)
          const languages = ORG_Filterdata_Languages(filtersSelected.languages)
          const yearsOfPractice = ORG_Filterdata_YoP(filtersSelected.yearsOfPractice)
          const serviceSetting = ORG_Filterdata_ServiceSetting(filtersSelected.serviceSetting)
          const accepts = ORG_Filterdata_Accepts(filtersSelected.accepts)
          const meetingFormat = ORG_Filterdata_MeetingFormat(filtersSelected.meetingFormat)
          const sessionType = ORG_Filterdata_SessionType(filtersSelected.sessionType)
          const transportation = ORG_Filterdata_Transportation(filtersSelected.transportation)
          const providerType = ORG_Filterdata_ProviderType(filtersSelected.providerType)

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
        setDataF(getData)
        setFiltersF(getFilters.filters)
      })
  }, [url])

  return { dataF, setDataF, filtersF, setFiltersF, actualSortF, setActualSortF }
}
