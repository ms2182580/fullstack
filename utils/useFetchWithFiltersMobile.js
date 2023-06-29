import { useEffect, useState } from "react"
import { useORG_Ctx_filtersLeftMobile } from "../context/ORG_CtxFiltersLeftMobile_Provider"
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
  ORG_Filterdata_Transportation,
  ORG_Filterdata_YoP
} from "./ORG_FilterdataFunctions_M"
import { ORG_FILTERS_KEYS_M } from "./ORG_FiltersCategories"

export const useFetchWithFiltersMobile = (pagination = 1, howMuch = 4, whichOne, shouldFetch = true) => {
  const [dataF, setDataF] = useState()
  const [filtersF, setFiltersF] = useState([])
  const [actualSortF, setActualSortF] = useState("Distance")

  const { filtersLeftContext: filtersSelected } = useORG_Ctx_filtersLeftMobile()

  useEffect(() => {
    if (shouldFetch) {
      let getData = { allData: "" }

      let getFilters = { filters: [] }

      const fetchData = async () => {
        try {
          const theFetch = await fetch(
            `/api/randomUser?results=${howMuch}&pagination=${pagination}&whichOne=${whichOne}`
          )
          const toJson = await theFetch.json()

          getData.allData = toJson.results
          let howMuchGet = getData.allData.length

          for (let index = 0; index < howMuchGet; index++) {
            const distance = ORG_Filterdata_Distance(filtersSelected.distance)
            const rating = ORG_Filterdata_Rating(filtersSelected.rating)
            const reviews = ORG_Filterdata_Reviews()
            const diagnosis = ORG_Filterdata_Diagnosis(filtersSelected[ORG_FILTERS_KEYS_M.diagnosis.updateState])
            const agesServed = ORG_Filterdata_AgesServed(filtersSelected[ORG_FILTERS_KEYS_M.agesServed.updateState])
            const language = ORG_Filterdata_Languages(filtersSelected[ORG_FILTERS_KEYS_M.language.updateState])
            const serviceSetting = ORG_Filterdata_ServiceSetting(
              filtersSelected[ORG_FILTERS_KEYS_M.serviceSetting.updateState]
            )
            const insurance = ORG_Filterdata_Insurance(filtersSelected[ORG_FILTERS_KEYS_M.insurance.updateState])
            const meetingFormat = ORG_Filterdata_MeetingFormat(
              filtersSelected[ORG_FILTERS_KEYS_M.meetingFormat.updateState]
            )
            const sessionType = ORG_Filterdata_SessionType(
              filtersSelected[[ORG_FILTERS_KEYS_M.sessionType.updateState]]
            )
            const providerType = ORG_Filterdata_ProviderType(
              filtersSelected[[ORG_FILTERS_KEYS_M.providerType.updateState]]
            )
            const transportation = ORG_Filterdata_Transportation(
              filtersSelected[[ORG_FILTERS_KEYS_M.transportation.updateState]]
            )
            const yearsOfPractice = ORG_Filterdata_YoP(
              filtersSelected[[ORG_FILTERS_KEYS_M.yearsOfPractice.updateState]]
            )

            getFilters.filters = [
              ...getFilters.filters,
              {
                [ORG_FILTERS_KEYS_M.agesServed.updateState]: agesServed,
                [ORG_FILTERS_KEYS_M.diagnosis.updateState]: diagnosis,
                [ORG_FILTERS_KEYS_M.distance.updateState]: distance,
                [ORG_FILTERS_KEYS_M.insurance.updateState]: insurance,
                [ORG_FILTERS_KEYS_M.language.updateState]: language,
                [ORG_FILTERS_KEYS_M.meetingFormat.updateState]: meetingFormat,
                [ORG_FILTERS_KEYS_M.providerType.updateState]: providerType,
                [ORG_FILTERS_KEYS_M.rating.updateState]: rating,
                [ORG_FILTERS_KEYS_M.reviews.updateState]: reviews,
                [ORG_FILTERS_KEYS_M.serviceSetting.updateState]: serviceSetting,
                [ORG_FILTERS_KEYS_M.sessionType.updateState]: sessionType,
                [ORG_FILTERS_KEYS_M.transportation.updateState]: transportation,
                [ORG_FILTERS_KEYS_M.yearsOfPractice.updateState]: yearsOfPractice,
                CCC_SLP:
                  "CCC-SLP Certificate of Clinical Competence in Speech Language Pathology - Nationally recognized professional from the American Speech-Language-Hearing Association (ASHA)."
              }
            ]
          }
          setDataF(getData)
          setFiltersF(getFilters.filters)
        } catch (error) {
          console.warn("error:", error, whichOne)
        } finally {
          // console.dir("Finally With Filters")
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
  }, [filtersSelected, pagination, shouldFetch])

  // console.log("💨dataF:", dataF)
  return { dataF, setDataF, filtersF, setFiltersF, actualSortF, setActualSortF }
}
